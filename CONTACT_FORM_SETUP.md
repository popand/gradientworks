# Contact Form (Resend + Vercel)

The contact form posts to `/api/contact`, a Vercel serverless function that sends
email through Resend. The API key is server-side only and never reaches the browser.

## Remaining step: DNS

Add these records in Namecheap → Domain List → gradientworks.ca → Advanced DNS.
Namecheap appends the domain automatically, so enter the Host exactly as shown
(do NOT type the full `resend._domainkey.gradientworks.ca`).

| Type | Host                | Value                                        | Priority |
|------|---------------------|----------------------------------------------|----------|
| TXT  | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrKRRGt721Prz75fRQpJw6xvlRf53NcmHj06Y+YFfRAo/AnWcRknLqbouhRk5LTOO5v+d0qKaf+7D4uQtZwq1b2JO4Ajj9e9mCVAK4NNHpiyRWTDyu3ue7hWC8z2musy9hCFrYYcZ3ANNGowjAIUj7hUx7uHV7YAcwadgTiVeF5QIDAQAB` | — |
| MX   | `send`              | `feedback-smtp.us-east-1.amazonses.com`      | 10       |
| TXT  | `send`              | `v=spf1 include:amazonses.com ~all`          | —        |

Set TTL to Automatic. Then verify:

```bash
resend domains verify 00823e6a-141b-4cec-8c05-05d4f001f907
resend domains list
```

Propagation is usually minutes, occasionally up to an hour.

## Environment variables

Set on Vercel for Production and Development:

- `RESEND_API_KEY` — send-only key, scoped to gradientworks.ca
- `CONTACT_TO_EMAIL` — where submissions are delivered
- `CONTACT_FROM_EMAIL` — the From header

Preview environments do NOT have these set (see Known gaps).

## Local development

`.env.local` holds the same values and is gitignored. Run with:

```bash
vercel dev
```

Note: `vercel dev` pulls env from the linked Vercel project's Development
environment, not from `.env.local`.

## Behaviour

- Validates required fields, email format, and max lengths
- Honeypot `website` field silently accepts and discards bot submissions
- `Reply-To` is the submitter, so replying goes straight to them
- All user input is HTML-escaped before being embedded in the email
- Returns 400 on bad input, 405 on non-POST, 502 on Resend failure

## Known gaps

- **Preview env vars unset.** The Vercel CLI rejects Preview-scoped vars on the
  production branch. Add them in the dashboard if you want working preview deploys.
- **GitHub Pages workflow still active.** `.github/workflows/deploy.yml` still
  deploys to Pages on every push to main, where `/api/contact` does not exist and
  the form will fail. Delete the workflow or point the domain solely at Vercel.
- **No rate limiting.** Consider Vercel Firewall or a token bucket if spam appears.

---

## DNS state — complete and verified

Verified against Namecheap's authoritative nameserver (dns2.registrar-servers.com).

### Resend sending (all verified)
| Type | Host | Value |
|------|------|-------|
| TXT | `resend._domainkey` | DKIM public key |
| TXT | `send` | `v=spf1 include:amazonses.com ~all` |
| MX | `send` | `feedback-smtp.us-east-1.amazonses.com` (10) |

### Inbound mail — Namecheap Private Email (restored after Custom MX switch)
| Type | Host | Value |
|------|------|-------|
| MX | `@` | `mx1.privateemail.com` (10) |
| MX | `@` | `mx2.privateemail.com` (10) |
| CNAME | `autodiscover` | `privateemail.com` |
| CNAME | `autoconfig` | `privateemail.com` |
| CNAME | `mail` | `privateemail.com` |
| SRV | `_autodiscover._tcp` | 0 0 443 `privateemail.com` |

Mail Settings is set to **Custom MX** (was "Private Email"). The preset previously
injected the CNAME/SRV records automatically; under Custom MX they are explicit
host records, so do not delete them.

Resend domain `00823e6a-141b-4cec-8c05-05d4f001f907`: **verified**.
End-to-end send confirmed (`last_event: delivered`).

### Authentication (SPF / DKIM / DMARC)
| Type | Host | Value |
|------|------|-------|
| TXT | `@` | `v=spf1 include:spf.privateemail.com include:amazonses.com ~all` |
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:contact@gradientworks.ca` |

The root SPF authorizes BOTH senders: Private Email (your mailboxes) and Amazon SES
(which Resend sends through). Uses 5 of the 10 permitted DNS lookups.

Note `include:spf.privateemail.com` — NOT `spf.efwd.registrar-servers.com`. The latter
is for Namecheap Email Forwarding; this domain uses Private Email mailbox hosting
(mx1/mx2.privateemail.com).

DMARC is at `p=none` (monitor only) — it reports without affecting delivery. Once
aggregate reports look clean for a few weeks, consider `p=quarantine`.

## Deployment

The Vercel project is Git-connected: **pushing to main auto-deploys**. No `vercel --prod`
needed. Verified live at https://www.gradientworks.ca:
- `GET /api/contact` -> 405
- `POST` with empty body -> 400 with validation message
- Real submission -> 200, `last_event: delivered`

## Remaining work

1. **Preview env vars** are unset (the Vercel CLI rejects Preview-scoped vars on the
   production branch). Add via the dashboard for working preview deploys. Production
   and Development are set.

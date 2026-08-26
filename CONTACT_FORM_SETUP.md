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

## Session handoff — current state

### DNS in Namecheap (all saved, verified live via dig)

| Type | Host | Value | Priority | Status |
|------|------|-------|----------|--------|
| TXT  | `resend._domainkey` | `p=MIGf...QIDAQAB` (DKIM) | — | live, Resend-verified |
| TXT  | `send` | `v=spf1 include:amazonses.com ~all` | — | live |
| MX   | `send` | `feedback-smtp.us-east-1.amazonses.com` | 10 | live |
| MX   | `@` | `mx1.privateemail.com` | 10 | live (restored) |
| MX   | `@` | `mx2.privateemail.com` | 10 | live (restored) |
| CNAME| `autodiscover` | `privateemail.com` | — | live (restored) |

Mail Settings was switched from "Private Email" to **Custom MX**. Inbound mail to
contact@gradientworks.ca is UNAFFECTED — both privateemail MX records are live.

### Still to restore (removed by the Custom MX switch)

These are mail-client auto-configuration records. Mail delivery works without them;
only auto-setup of new mail clients is affected.

| Type | Host | Value |
|------|------|-------|
| CNAME | `autoconfig` | `privateemail.com` |
| CNAME | `mail` | `privateemail.com` |
| SRV | `_autodiscover._tcp` | priority 0, weight 0, port 443, target `privateemail.com` |

Original values backed up during the session; the table above IS the backup.

### Resend domain status

Domain id: `00823e6a-141b-4cec-8c05-05d4f001f907`

- DKIM: **verified**
- SPF TXT (`send`): pending
- SPF MX (`send`): pending

All three records resolve correctly in public DNS. Resend had not flipped the SPF
pair to verified as of the end of the session — re-run and give it time:

```bash
resend domains verify 00823e6a-141b-4cec-8c05-05d4f001f907
resend domains get 00823e6a-141b-4cec-8c05-05d4f001f907
```

### Once verified

```bash
vercel --prod          # deploy (code is committed on feature/resend-contact-form)
```

Then submit the live form and confirm the email arrives at contact@gradientworks.ca.

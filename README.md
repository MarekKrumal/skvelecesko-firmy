# SkvěléČesko – firemní vouchery (landing page)

Landing page pro prodej voucherů firmám (zadání Lukes, obsah z Claude artifactu).
Nasazeno přes Netlify z větve `main`, na webu vložené jako iframe na https://www.skvelecesko.cz/firmy (kód v `embed.html`).

- Samostatně otevřená stránka má vlastní menu i patičku.
- V iframe (`html.embed`) se menu a patička schovají a stránka posílá rodiči svou výšku (`postMessage` typu `sclp-height`).
- Tlačítka „Chci kalkulaci“ zatím vedou na e-mail Báry – formulář (HubSpot) je v plánu.

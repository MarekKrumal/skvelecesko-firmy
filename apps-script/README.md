# Poptávkový formulář → Google tabulka + e-mail

1. Vytvoř novou Google tabulku (např. „Firemní vouchery – poptávky“).
2. V tabulce: **Rozšíření → Apps Script**. Smaž obsah `Code.gs` a vlož obsah souboru `Code.gs` z této složky. Ulož.
3. **Nasadit → Nové nasazení** → typ **Webová aplikace**:
   - Spustit jako: **Já**
   - Kdo má přístup: **Kdokoli**
   → Nasadit → povolit oprávnění (tabulka + odesílání mailů).
4. Zkopíruj URL webové aplikace (`https://script.google.com/macros/s/…/exec`) a vlož ji do `index.html` do `var ENDPOINT = '…'`.

Při změně skriptu: Nasadit → Spravovat nasazení → upravit → Nová verze (URL zůstane stejná).

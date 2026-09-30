// Poptávky firemních voucherů → řádek v této tabulce + e-mail obchodu.
// Nasazení: viz README.md ve stejné složce.
const KOMU = 'barbora.taftova@skvelecesko.cz,lukas.krhanek@skvelecesko.cz';
const POLE = ['firma', 'jmeno', 'email', 'telefon', 'pocet', 'hodnota', 'forma', 'termin', 'poznamka',
              'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'stranka'];

function doPost(e) {
  const p = e.parameter || {};
  if (!p.firma || !p.email) return ContentService.createTextOutput('chybi udaje');

  const list = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (list.getLastRow() === 0) list.appendRow(['Přijato'].concat(POLE));
  list.appendRow([new Date()].concat(POLE.map(k => String(p[k] || '').slice(0, 2000))));

  const celkem = (Number(p.pocet) || 0) * (Number(p.hodnota) || 0);
  const radky = [
    'Firma: ' + p.firma,
    'Kontakt: ' + p.jmeno + ', ' + p.email + (p.telefon ? ', ' + p.telefon : ''),
    'Počet: ' + p.pocet + ' × ' + p.hodnota + ' Kč' + (celkem ? ' = ' + celkem.toLocaleString('cs-CZ') + ' Kč' : ''),
    'Forma: ' + (p.forma || '—'),
    'Termín: ' + (p.termin || '—'),
    'Poznámka: ' + (p.poznamka || '—'),
    '',
    'Zdroj: ' + [p.utm_source, p.utm_medium, p.utm_campaign, p.utm_content].filter(String).join(' / ') || '—',
    'Všechny poptávky: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
  ];
  MailApp.sendEmail({
    to: KOMU,
    replyTo: p.email,
    subject: 'Poptávka firemních voucherů – ' + p.firma,
    body: radky.join('\n'),
  });
  return ContentService.createTextOutput('ok');
}

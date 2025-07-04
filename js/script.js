//Mail
let invitato;
let mailInvitati = ['pippo@gmail.com', 'claudio@icloud.com', 'piero@libero.it', 'pluto@gmail.com'];
let mailOspite = prompt('Scrivi la tua mail');
for (i = 0; i < mailInvitati.length; i++) {
  if (mailInvitati[i] === mailOspite) {
    invitato = "Sei invitato";
    break;
  }
  else
    invitato = "Non sei invitato"
}
console.log(`${mailOspite}: ${invitato}`);
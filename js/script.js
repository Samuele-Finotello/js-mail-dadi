//Mail
let invitato;
//creo array con mail invitati
let mailInvitati = ['pippo@gmail.com', 'claudio@icloud.com', 'piero@libero.it', 'pluto@gmail.com'];
let mailOspite = prompt('Scrivi la tua mail');
//ciclo for per controllare ogni posizione dell'array se contiene la mail inserita
for (i = 0; i < mailInvitati.length; i++) {
  if (mailInvitati[i] === mailOspite) {
    //se c'è una corrispondenza della mail, allora esco dal ciclo con il break
    invitato = "Sei invitato";
    break;
  }
  else
    invitato = "Non sei invitato"
}
console.log(`${mailOspite}: ${invitato}`);
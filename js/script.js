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

//Dadi
const numPc = Math.floor(Math.random() * 6) + 1;
const numUser = Math.floor(Math.random() * 6) + 1;
let point;
if (numPc > numUser) {
  point = `Ha vinto il PC con il numero: ${numPc} contro il numero dello user: ${numUser}`;
}
else if (numUser > numPc) {
  point = `Ha vinto lo user con il numero: ${numUser} contro il numero del PC: ${numPc}`;
}
else
  point = `Il PC e lo user hanno pareggiato col numero: ${numPc}`;

console.log(point);
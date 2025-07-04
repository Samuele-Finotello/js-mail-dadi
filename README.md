js-mail-dadi
===
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Fate sempre il file readme.md in cui scrivere i testi dell'esercizio e scomporre il problema in sottoproblemi. 
Numero di push minimo totale: 6

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Buon lavoro e buon divertimento! 🙂


Esercizio Mail scomposizione problema (NO metodi) :
-Devo creare una lista di mail degli invitati alla festa: utilizzo un'array con all'interno le mail degli invitati
-Chiedo all'utente la sua mail: utilizzo una variabile con il prompt, fuori dal ciclo 
-Poi devo confrontare la mail con tutte le posizioni dell'array creato prima: utilizzo il ciclo for e dentro confronto ogni mail con un if con all'interno la mail dell'array in posizione i e la mail chiesta all'utente e le confronto con ===
Fine esercizio Mail

Esercizio Dadi scomposizione problema:
-Devo generare un numero casuale da 1 a 6, uno per il PC e uno per lo user: utilizzo il metodo Math.floor per avere numeri interi, Math.random per avere un numero casuale e poi lo moltiplico *6 per avere come valore massimo 6, infine aggiungo +1 per iniziare da 1 
-Poi devo confrontare i numeri usciti per capire chi ha avuto il numero maggiore: utilizzo un if per comparare il numero del PC e quello dello user, se i numeri sono uguali, si ha un pareggio
Fine esercizio Dadi
## Obiettivo
Siete un team di sviluppo e collaborate sul repository.

L’obiettivo dell’esercitazione è implementare diverse funzionalità lavorando in parallelo su **branch** differenti, utilizzando un workflow Git collaborativo simile a quello adottato nei team reali.

# Workflow richiesto

## 1. Clonare il repository sul tuo pc

```bash
git clone <URL_REPOSITORY>
```
## 2. Scegliere la funzionalità da sviluppare 

Consultare la sezione **Issues** del repository e sviluppare UNA delle funzionalità proposte.

L’assegnazione avviene in base al cognome:

- *Studenti con cognome dalla A alla M → Issue 1* 

- *Studenti con cognome dalla N alla Z → Issue 2*

---

## 3. Creare un branch personale

Lo sviluppo di una nuova funzionalità avviene su un branch di sviluppo separato.  
Il nome del branch deve avere questa sintassi:

```bash
feature1-Rossi
feature2-Bianchi
feature1-Verdi
```

---



## 4. Effettua commit sul nuovo ramo di sviluppo

## 5. Pubblicare il branch remoto
Una volta terminata la funzionalità pubblica il ramo su Github 
```bash
git push origin <nome-branch>
```

---


## 6. Aprire una Pull Request

Aprire una Pull Request verso il branch `main`.  
In questo modo il team può analizzare le tue modifiche, revisionarle e successivamente integrarle nel ramo principale



---

# Regole

* NON effettuare push direttamente su `main`
* utilizzare esclusivamente il proprio branch
* scrivere commit chiari e descrittivi
* evitare di modificare codice non necessario
* risolvere eventuali conflitti Git autonomamente

---


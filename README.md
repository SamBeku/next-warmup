# Next.js Warm-up

```
npm install
npm run dev
```

Avalehel on loendur ja nupp, mis küsib serverist sõnumi. `/about` on teine leht.
API on `/api/message`.

## Küsimused

**1. Mida Next.js annab Reactile juurde?**
Lehed tulevad kaustadest (pole vaja React Routerit) ja samasse projekti saab teha ka backendi ehk API.

**2. Miks loendur vajab `'use client'`?**
`useState` ja nupuvajutus töötavad ainult brauseris, `'use client'` ütleb, et see komponent jookseb brauseris.

**3. Kus jookseb `app/api/message/route.js`?**
Serveris, mitte brauseris.

**4. Mille poolest see sarnaneb Expressi route'iga?**
Sama mõte nagu `app.get('/api/message', ...)` – tuleb GET päring ja saadetakse JSON tagasi.

**5. Miks saladused peavad jääma serverisse?**
Kõike, mis brauserisse läheb, saab kasutaja näha. Serveris need peidus.

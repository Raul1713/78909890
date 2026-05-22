# Obedience Command — GitHub Ready PWA

A private, installable HTML/PWA app with three sections:

1. **Husband** — tasks, completion, coins, rewards, progress.
2. **Wife** — command centre, forfeits, control room/editor.
3. **Monogamy** — a standalone random card-flip game inside the same app.

## Monogamy game

The Monogamy section is now its own mini-game:

- Choose a tier using the `-` and `+` buttons.
- Tap **Flip Random Card** or tap the card itself.
- The app randomly chooses either the husband deck or the wife deck.
- If the husband card flips, the husband is in charge of that task.
- If the wife card flips, the wife is in charge of that task.
- Press **Task Done** to award the tier coin/XP bonus.
- Press **View Decks** to see all tiered cards.

## Where to edit Monogamy tasks on PC

Open `script.js` in Notepad++.

Search for:

```js
monogamy: {
```

Inside there you will see:

```js
husbandCards: [
  { title: "Husband Leads", text: "Husband chooses a light task or playful challenge for this round." }
],
wifeCards: [
  { title: "Wife Leads", text: "Wife chooses a light task or playful challenge for this round." }
]
```

Edit the `title` and `text` parts. Keep the commas, brackets, and quote marks in place.

Each tier has:

- `tier` — the tier number.
- `name` — the tier name shown in the app.
- `bonusCoins` — coins/XP awarded when the card is completed.
- `husbandCards` — cards where husband is in charge.
- `wifeCards` — cards where wife is in charge.

## Hidden editor

You can also edit inside the app:

- Tap the small diamond `◆` on the start screen 5 times, or
- Go to **Wife → Control Room**.

The editor now has a **Monogamy Cards** tab. In that tab, cards are written like this:

```text
Card Title | Card task text
```

One card per line.

## Upload to GitHub Pages

Upload all files in this folder to your GitHub repository:

- `index.html`
- `style.css`
- `script.js`
- `manifest.json`
- `service-worker.js`
- `icon-192.png`
- `icon-512.png`
- `README.md`

Then enable GitHub Pages from the repository settings.

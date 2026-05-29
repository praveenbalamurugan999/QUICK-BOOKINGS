# QUICK BOOKINGS 🎬

A modern, cinematic movie–ticket booking website built with plain **HTML, CSS & JavaScript**.

## Design
- One shared design system (`styles.css`) across every page — a cinematic neo-noir theme:
  near-black backdrop, hot red→orange gradient, gold accents, glass navigation, glow + grain depth.
- Typography: **Big Shoulders Display** (headlines) + **Manrope** (body) via Google Fonts.
- Every page is laid out to fit the screen.

## Pages
- **index.html** — Sign in / Sign up (split layout with toggle; auth saved in `localStorage`).
- **Home.html** — Cinematic hero (featured film) + "Now Showing" cards.
- **Booking.html** — Movie catalogue with synopses and prices.
- **Kaththi / Master / Mersal.html** — Interactive seat map (curved screen, date/time picker,
  live booking summary). Booked seats are disabled.
- **contact.html** — Contact card with details and a working (client-side) message form.

## Scripts
- `auth.js` — sign-in/sign-up toggle + validation.
- `main.js` — shared mobile navigation.
- `seats.js` — seat generation, booked-seat locking, live total, showtime sync, booking confirm.

## How to use
1. Open `index.html`.
2. **Sign up**, then **Sign in** with the same email + password.
3. Home → Booking → pick a film → choose available seats → **Confirm Booking**.

Prices: Kaththi ₹200 · Master ₹250 · Mersal ₹150.

> Live pages need an internet connection for the Google Fonts, poster images and the trailer video.
> Serve locally with `python -m http.server 8000` or just open `index.html`.

# Customer Editing Guide — marigold-bhavan (Priti & Aman)

This template is an elegant Indian wedding invitation featuring an interactive wax seal gate opener, real-time countdown timer, couple hero illustration, event schedule, Google Maps venue locator, background music player, and quick action bar.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### Couple names
- `couple.groom`: "Aman"
- `couple.bride`: "Priti"

### Wedding Date & Times
Edit in `wedding` block in `editable/wedding-data.js`:
- `eventTitle`: "Wedding of Aman & Priti"
- `dateLabel`: short date (`"25.11.26"`)
- `dayLine`: formatted day string (`"Wednesday, 25th November 2026"`)
- `timeLine`: formatted time string (`"8:00 PM onwards"`)
- `start` & `end`: ISO timestamp strings (`"2026-11-25T20:00:00"`, `"2026-11-25T23:59:00"`) driving both the countdown timer and Google/iCal downloads.
- `timeZoneOffset`: `"+05:30"` (IST)

### Invitation Copy & Closing
Edit `invitation.note` and `invitation.closing` in `editable/wedding-data.js`.

### Venue & Maps
Edit `venue` in `editable/wedding-data.js`:
- `venue.name`: "GRAND ORCHID WEDDING LAWN"
- `venue.address`: "Retibunder, Mumbra, Thane, Maharashtra 400605"
- `venue.city`: "Thane"
- `venue.query`: search query used for automatic Google Maps directions/links
- `venue.mapSearchUrl`: "https://maps.app.goo.gl/FpMJ57J3Gw6539fU9?g_st=ic"
- `venue.directionsUrl`: "https://maps.app.goo.gl/FpMJ57J3Gw6539fU9?g_st=ic"

### Background Music
- Background music file located at `editable/assets/kesariya.mp3` (also mirrored at `editable/assets/bgm.mp3`).
- Track: Kesariya (BGM Flute / Instrumental).
- Path configured in `editable/wedding-data.js` under `bgm.src`.
- Floating music button in the top-right corner allows guests to play or pause the audio.
- Autoplays smoothly when guests interact with the wax seal opener gate.

### Images
Replace files directly in `editable/assets/` or update paths in `images` in `editable/wedding-data.js`:
- Hero centerpiece illustration (Floral Mandap Arch & Kalash): `editable/assets/couple.png`
- Footer background: `editable/assets/footer-bg.jpg`
- Venue map graphic: `editable/assets/map.jpg`

---

## Special Sections & Features

- **Wax Seal Opener Gate**: Fullscreen intro that opens on tap or click with petal animations. Monogram badge ("AP") and city ("Thane") derive automatically from `couple` and `venue.city`.
- **Countdown**: Real-time counter derived from `wedding.start` + `wedding.timeZoneOffset`.
- **Background Music Player**: Floating audio toggle with interactive playback on gate opening.
- **Calendar & Share Action Bar**: Fixed bottom bar allows guests to save `.ics` file, open Google Calendar, view directions, or share/copy invitation link.

---

## Rules for Future Agents

1. Make edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless a customer specifically requests structural code changes.
3. Preserve existing styling, animations, and responsiveness.
4. Verify by running `node --check editable/wedding-data.js`.

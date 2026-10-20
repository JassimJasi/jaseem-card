# Botanical Wedding Invitation (Next.js)

A responsive Next.js wedding invitation inspired by the supplied reference design: warm ivory backgrounds, sage-green event band, editorial serif headings, botanical imagery, a floral hero, invitation section, Qur'anic dua, event details, story and family cards. Includes subtle entrance/hover/scroll effects and reduced-motion support.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` then `npm start`.

## Customize everything in one place

Edit `data/wedding.json` for couple names, dates, venue, family details, faith text and story. The page reads the data from that file. Replace the image URLs in `app/page.tsx` to use your own or preferred images; they are currently Unsplash-hosted botanical photos (internet connection required to load them).

## Notes

- The sample event details and family names are placeholders. Update them before sharing the invitation.
- The Arabic dua in the invitation is Qur'an 25:74. The closing Arabic supplication is a commonly used wedding blessing.
- The countdown tiles are visual sample values in this design and are not a live countdown timer yet.

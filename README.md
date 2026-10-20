# Our Wedding — Next.js invitation

A responsive wedding invitation closely styled after the supplied reference image: warm ivory paper, deep sage typography, botanical hero, arch-shaped vase photo, textured sage “Save the Date” band, and wedding-book story image. The included local image assets are cropped from the provided reference screenshot to preserve its exact visible imagery and colour tone.

## Edit details in one place

Change the names, date, venue, map link, invitation copy, Arabic duas and translations, and story text in `data/wedding.json`.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for deployment

```bash
npm run build
npm start
```

The reference-derived images are stored locally in `public/images/`. Google Fonts load when online, with serif and sans-serif fallbacks available. Includes entrance animations, button hover transitions, countdown timer, smooth navigation, and reduced-motion accessibility support.

Note: image crops match the provided screenshot, but because the screenshot is the source, the crops are not as high resolution as the original standalone photography would be.

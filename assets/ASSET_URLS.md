# Asset Paths Configuration

This project now uses local image files stored in `assets/`.

## Active Destination Assets

- Paris 1889: `/assets/Paris.png`
- Cretace: `/assets/Cretace.png`
- Florence 1504: `/assets/Florence.png`

## Preview Paths

The static preview page is in `docs/03-delivery/preview.html`, so it uses relative paths:

- Paris: `../../assets/Paris.png`
- Cretace: `../../assets/Cretace.png`
- Florence: `../../assets/Florence.png`

## React/App Paths

For app usage, keep absolute public-style paths in `src/constants/assets.js`:

- `/assets/Paris.png`
- `/assets/Cretace.png`
- `/assets/Florence.png`

## Notes

- If you rename a file in `assets/`, update both `src/constants/assets.js` and `docs/03-delivery/preview.html`.
- External URLs were removed to keep the preview stable and independent from third-party hosting.

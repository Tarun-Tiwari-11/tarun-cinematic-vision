# Custom fonts

Place your `.otf` or `.ttf` font files here.

To use them in the app:

1. **Option A – use default names**  
   Name your main display font:
   - `morphyx.otf` or `morphyx.ttf`  
   It will be used as the font family **"Morphyx"**.

2. **Option B – use your own names**  
   Put your files here with any name (e.g. `MyFont.otf`), then in `src/index.css` update the `@font-face` `src` path to match, e.g.:
   ```css
   src: url('/fonts/MyFont.otf') format('opentype');
   ```
   Use `format('opentype')` for `.otf` and `format('truetype')` for `.ttf`.

Then in any component style use: `fontFamily: 'YourFontFamily', sans-serif` (same name as in `font-family` in the `@font-face` rule).

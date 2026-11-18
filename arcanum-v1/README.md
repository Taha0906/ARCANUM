# ARCANUM v1 | آرکانوم

A Persian RTL fantasy academy built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000 . Node.js 20+ recommended. Google Fonts and the SQL.js WASM binary currently load from external CDNs, so an internet connection is required for those assets.

## Implemented in the local demo

- Responsive Persian RTL entrance with working access phrase (`نور دانش`) and skip option.
- Twelve-room academy map; three rooms are interactive and the rest clearly marked unavailable.
- Three validated puzzles, hints and explanations.
- Browser-isolated SQLite sample database with SQL editor, SELECT-only UI restriction, results table and two guided lessons.
- Three-question entertainment personality assessment and four original orders.
- XP, levels and achievements persisted locally with localStorage.
- Keyboard-accessible controls and reduced-motion support.

## Important limitations

This is a local playable MVP, **not** a production-secure learning platform. XP is stored client-side and can be modified by the user. SQL.js runs entirely in the browser with fictional data, not on a server. Its client-side SQL filter is a convenience guard, not a security boundary. Supabase authentication, server-authoritative awards, cross-device persistence, full lessons, custom wand pointer, audio assets, 3D environments and the remaining nine rooms are **not implemented**. `supabase/schema.sql` is a starting schema only, not a connected integration. The sound toggle is illustrative and does not play audio. Do not treat the current build as production-ready.

## Verify

```bash
npm run typecheck
npm run build
```

Manual checks: enter wrong/right phrase, skip intro, navigate all three available rooms, solve puzzles, run SELECT and attempt an INSERT, complete personality assessment, refresh and confirm local progress, test narrow mobile viewport and keyboard navigation.

## Publish on GitHub

Create an empty GitHub repository named `arcanum-academy` (without auto-generating a README). Then run from this project folder:

```bash
git init
git add .
git commit -m "Initial commit: ARCANUM v1"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/arcanum-academy.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. Never commit `.env` files or credentials. Uploading the ZIP directly as one file is **not** the same as uploading the repository source files; extract the ZIP first.

## نسخه مرحله‌ای آکادمی (به‌روزرسانی)
- سه تالار آغازین SQL، معماها و شخصیت در دسترس‌اند.
- نه تالار محتوایی دیگر با رسیدن به حد نصاب XP باز می‌شوند.
- هر تالار محتوایی دارای حداقل دو درس/مأموریت با سؤال، ارزیابی پاسخ، توضیح علمی و دریافت یک‌باره XP است.
- مرحله‌های سیاهچال به ترتیب باز می‌شوند و راهروی ممنوعه آزمون نهایی دارد.
- پیشرفت فعلاً در localStorage مرورگر ذخیره می‌شود. این یک سازوکار **نمایشی** است، نه سیستم ضدتقلب یا ذخیره‌سازی سروری.
- برای نسخه عمومی رقابتی، احراز هویت Supabase و تأیید XP و بازشدن قفل‌ها در سرور لازم است.
- تست `npm run build` در این محیط انجام نشد، چون وابستگی‌ها از مخزن npm قابل دریافت نبودند.

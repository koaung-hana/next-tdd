# Test Assignment Notes

I did this on a GitHub Codespace (Ubuntu 24.04). All 7 failing tests pass now.

## How to Run

```bash
npm install
npm run test              # Jest unit + snapshot tests
npm run test:screenshot   # Playwright screenshot test
```

If the Codespace was just created, install the browser first:

```bash
npx playwright install chromium
sudo npx playwright install-deps chromium
```

---

## What Was Fixed (7 tests)

| # | Test | What was wrong | What I did |
|---|------|----------------|-----------|
| 1 | `__tests__/index.test.tsx` | The regex only matches lowercase, but the page says `Next.js` | Added the `/i` flag |
| 2 | `__tests__/snapshot.tsx` | The stored snapshot is from the old login page | Checked the diff, everything in there was changed on purpose, so I refreshed it with `npm test -- -u` |
| 3 | `app/components/component.test.tsx` | Counter goes up by 1 per click, test wants +2 | Changed to `setCount(count + 2)` in `counter.tsx` |
| 4 | `app/client/page.test.tsx` | Wrong text in the heading | Changed it to `Client's Component` |
| 5 | `app/blog/[slug]/page.test.tsx` | The test goes against itself: it passes in `slug: 'Slug'` but expects `Slug: Test` | Fixed the test so it passes in `slug: 'Test'` |
| 6 | `app/rsc/page.test.tsx` | Test looks for `data-testid="heading"`, it wasn't there | Added it to the `<h1>` |
| 7 | `__tests__/playwright/screenshot.test.ts` | The saved screenshot is from the old page too | Looked at `index-diff.png`, the changed regions match what I fixed in the code, so I refreshed the baseline |

The way I decided what to fix: when the test describes the behavior it should have, I changed the app. When the test was wrong on its own terms (like #5, or the case problem in #1), I changed the test. And when the app was just updated on purpose (#2, #7), I refreshed the baseline.

---

## Environment Changes

- I upgraded `@playwright/test` from 1.40.x. Its browser build crashes on launch here, and its `install-deps` still lists package names Ubuntu 24.04 doesn't have anymore (`libasound2`, `libicu70`, and so on), so nothing got installed until I upgraded.
- Playwright stores one baseline image per OS (`index-linux.png`, `index-darwin.png`). I refreshed the Linux one in the Codespace since that's what the review will use, and committed the `index-darwin.png` my Mac generated too.

---

## Result

```
Test Suites: 6 passed, 6 total
Tests:       6 passed, 6 total
Snapshots:   1 passed, 1 total
Playwright:  1 passed
```

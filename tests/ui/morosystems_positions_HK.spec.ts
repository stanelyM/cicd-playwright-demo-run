import { test, expect } from "@playwright/test";

// Wider viewport so menu & filters are visible
test.use({ viewport: { width: 1540, height: 900 } });

test.beforeEach(async ({ page }) => {
  // Best-effort cookie blocking (should not break test if script changes)
  await page.route(/cookiescript|cookie-script|consent/i, route => route.abort());
});


// Test to find at least one job in Hradec Králové
// Google search not implemented because it is not deterministic
test("Kariéra – filter positions by city", async ({ page }) => {
  await page.goto("https://www.morosystems.cz/", {
    waitUntil: "domcontentloaded",
  });

  // Navigate to Kariéra (semantic + wait for navigation)
  const careerLink = page
    .getByRole("navigation")
    .getByRole("link", { name: /^Kariéra$/ });

  await Promise.all([
    page.waitForURL("**/kariera**"),
    careerLink.click(),
  ]);

  // Jobs section – keep ID, but assert it is really ready
  const positions = page.locator("#pozice");
  await expect(positions).toBeVisible();

  // City filter – scope to positions to avoid accidental matches
  const citySelect = positions
    .locator(".inp-custom-select")
    .first();

  // Open city dropdown
  await citySelect.locator(".inp-custom-select__select").click();

  // Select city by data + visible text (safer than class only)
  await citySelect
    .locator('[data-filter="Hradec Králové"]')
    .filter({ hasText: "Hradec Králové" })
    .click();

  // Validate results – at least one relevant job should appear
  const jobLinks = positions.getByRole("link", {
    name: /Developer|Engineer/i,
  });

  // Verify at least one job (Developer or Engineer)
  await expect(jobLinks.first()).toBeVisible();

  // Verify screenshot
  await expect(page).toHaveScreenshot();
});
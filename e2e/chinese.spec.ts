import { expect, test } from '@playwright/test';

test('Chinese is the first-visit language and search supports Chinese input', async ({ page, isMobile }) => {
  await page.addInitScript(() => {
    localStorage.setItem('ds.guide.seen.v1', 'seen');
    localStorage.setItem('ds.quiz.new.seen.v1', 'seen');
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: '牙齿解剖图谱' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh');
  const searchButton = page.locator('[data-tour="search"]:visible');
  if (isMobile) await searchButton.tap();
  else await searchButton.click();
  const input = page.getByRole('combobox', { name: '搜索解剖结构' });
  await input.fill('左下第一磨牙');
  const firstResult = page.locator('#ds-search-results').getByRole('option').first();
  await expect(firstResult).toHaveAttribute('data-tour', 'result-tooth-36');
  await expect(firstResult).toContainText('左下第一磨牙');
  await input.dispatchEvent('keydown', { key: 'Enter', isComposing: true });
  await expect(input).toBeVisible();
  if (isMobile) await firstResult.tap();
  else await input.press('Enter');
  await expect(page).toHaveURL(/\/tooth\/36\/?$/);
  await expect(page.locator('[data-tour="tooth-details"]')).toContainText('近中根和远中根');

  const switcher = page.locator('.ds-lang-select');
  if (await switcher.isVisible()) await switcher.selectOption('en');
  else await page.getByRole('radio', { name: 'English', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Dental Scope', exact: true })).toBeVisible();
  await page.goto('/?lang=zh');
  await expect(page.getByRole('heading', { name: '牙齿解剖图谱' })).toBeVisible();
});

test('the Chinese text guide and credits open through localized links', async ({ page }) => {
  await page.goto('/zh/teeth/36/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('左下第一磨牙');
  await expect(page.getByRole('link', { name: '在三维图谱中打开 →' }).first()).toHaveAttribute('href', '/tooth/36/?lang=zh');
  await page.goto('/about/zh/');
  await expect(page.getByRole('heading', { name: '牙位编号法' })).toBeVisible();
  await page.goto('/credits/zh/');
  await expect(page.getByRole('dialog', { name: '致谢' })).toBeVisible();
});

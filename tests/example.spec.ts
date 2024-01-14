import { test, expect, chromium } from '@playwright/test';

test('Poprawne zalogowanie do banku', async ({ page }) => {
  //przejście pod adress url
  await page.goto("https://demo-bank.vercel.app/");
  //oczekiwanie na pełne załadowanie strony czyli wyświetlenie elementu
  await page.waitForSelector("//input[@data-testid='login-input']");
  //wpisanie loginu
  await page.fill("//input[@data-testid='login-input']", "12345678");
  //wpisanie hasła
  await page.fill("//input[@data-testid='password-input']", "12345678");
  //Kliknięcie przycisku zaloguj
  await page.click("//button[@data-testid='login-button']");
  //oczekiwanie na pojawienie elementu
  await page.waitForSelector("//a[@data-testid='user-name']");
  //assercja sprawdzenie czy pojawił sie element który jest dostępny tylko po zalogowaniu
  expect(await page.locator("//a[@data-testid='user-name']").isVisible()).toBeTruthy();
});

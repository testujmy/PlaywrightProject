import { expect, test } from '@playwright/test';

test('Poprawne zalogowanie do banku przy uzyciu lokatorow wbudowanych', async ({ page }) => {
  //przejscie pod adress url
  await page.goto("https://demo-bank.vercel.app/");
  //wpisanie do pola identyfikator wartosci
  await page.getByTestId("login-input").fill("12345678");
  //wpisanie do pola haslo wartosci
  await page.getByTestId("password-input").fill("87654321");
  //klikniecie przycisku zaloguj sie
  await page.getByRole("button").click();
  //assercja sprawdzajaca czy przycisk wyloguj sie pojawil sie na stronie
  //funkcja isVisible() zwraca true jesli element jest widoczny lub false
  //jesli element nie jest widoczny
  expect(await page.getByTestId("logout-button").isVisible()).toBeTruthy;
});

test('Poprawne zalogowanie do banku przy uzyciu lokatorow css', async ({ page }) => {
  //przejscie pod adress url
  await page.goto("https://demo-bank.vercel.app/");
  //wpisanie do pola identyfikator wartosci
  await page.locator("#login_id").fill("12345678");
  //wpisanie do pola haslo wartosci
  await page.locator("#login_password").fill("87654321");
  //klikniecie przycisku zaloguj sie
  await page.locator("#login-btn").click();
  //assercja sprawdzajaca czy przycisk wyloguj sie pojawil sie na stronie
  //funkcja isVisible() zwraca true jesli element jest widoczny lub false
  //jesli element nie jest widoczny
  expect(await page.locator("#log_out").isVisible()).toBeTruthy;
});

test('Poprawne zalogowanie do banku przy uzyciu lokatorow xpath', async ({ page }) => {
  //przejscie pod adress url
  await page.goto("https://demo-bank.vercel.app/");
  //wpisanie do pola identyfikator wartosci
  await page.locator("//input[@id='login_id']").fill("12345678");
  //wpisanie do pola haslo wartosci
  await page.locator("#login_password").fill("87654321");
  //klikniecie przycisku zaloguj sie
  await page.locator("//button[@id='login-btn']").click();
  //assercja sprawdzajaca czy przycisk wyloguj sie pojawil sie na stronie
  //funkcja isVisible() zwraca true jesli element jest widoczny lub false
  //jesli element nie jest widoczny
  expect(await page.locator("//a[@id='log_out']").isVisible()).toBeTruthy;
});

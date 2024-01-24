import { expect, test } from '@playwright/test';

test('Poprawne zalogowanie do banku', async ({ page }) => {
  //przejscie pod adress url
  await page.goto("https://demo-bank.vercel.app/");
  //wpisanie do pola identyfikator wartosci
  await page.locator("//input[@id='login_id']").fill("12345678");
  //wpisanie do pola haslo wartosci
  await page.locator("#login_password").fill("87654321");
  //klikniecie przycisku zaloguj sie
  await page.locator("//button[@id='login-btn']").click();
  //oczekiwanie na pojawienie przycisku wyloguj sie
  await page.waitForSelector("//a[@id='log_out']");
  //metoda textContetnt() zwraca wartosc string tekstu ktory jest przypisany do stalej
  const accountNumber = await page.locator("//span[@id='account_number']").textContent();
  //wypisanie wartosci w konsoli
  console.log(accountNumber);
  //zaznaczenie checkbox na stronie
  await page.locator("//div[@id='uniform-widget_1_topup_agreement']").check();
  //odznaczenie checkbox na stronie
  await page.locator("//div[@id='uniform-widget_1_topup_agreement']").uncheck();
  //metoda getAttribute() zwraca wartosc string dlatego jest ona przypisana do stalej
  const attributValue = await page.locator("//span[@id='money_value']").getAttribute("class");
  //wypisanie wartosci w konsoli
  console.log(attributValue);
});

//ZADANIE 1
test('Przykladowy scenariusz testowy do zadania', async ({ page }) => {
  //przejscie pod adress url
  await page.goto("https://demo-bank.vercel.app/");
  //wpisanie do pola identyfikator wartosci
  await page.locator("//input[@id='login_id']").fill("12345678");
  //wpisanie do pola haslo wartosci
  await page.locator("#login_password").fill("87654321");
  //klikniecie przycisku zaloguj sie
  await page.locator("//button[@id='login-btn']").click();
  //oczekiwanie na pojawienie przycisku wyloguj sie
  await page.waitForSelector("//a[@id='log_out']");
  //klikniecie w platnosci w lewym menu
  await page.locator("//a[@href='przelew_nowy_zew.html']").click();
  //wpisanie nazwy odbiorcy
  await page.locator("//input[@data-testid='transfer_receiver']").fill("testowy");
  //wpisanie numeru rachunku 26 cyfr
  await page.locator("//input[@data-testid='form_account_to']").fill("11111111111111111111111111");
  //wpisanie kwoty
  await page.locator("//input[@data-testid='form_amount']").fill("200");
  //klikniecie przycisku wykonaj przelew
  await page.locator("//button[@id='execute_btn']").click();
  //klikniecie ok w modalu potwierdzajacym przelew
  await page.locator("//button[@data-testid='close-button']").click();
  //assercja sprawdzajaca czy przycisk wykonaj przelew jest widoczny
  await expect(page.locator("//button[@id='execute_btn']")).toBeVisible();
  //assercja sprawdzajaca czy wartosc dostepne srodki nie jest rowna wartosci sprawdzanej
  expect(await page.locator("//strong[@id='form_account_amount']").textContent()).not.toBe("0,00");
  //assercja miekka sprawdzajaca czy status po wykonaniu przelewu zawiera ciag Przelew wykonany
  expect.soft(await page.locator("//span[@data-testid='message-text']").textContent()).toContain("Przelew wykonany");
});

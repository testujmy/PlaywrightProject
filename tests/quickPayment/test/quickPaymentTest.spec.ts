import { expect, test } from '@playwright/test';
import { LoginAction } from '../../login/action/loginAction';
import { QuickPaymentAction } from '../action/quickPaymentAction';

let loginAction: LoginAction;
let quickPaymentAction: QuickPaymentAction;
 
test.beforeEach(async ({ page }) => {
  loginAction = new LoginAction(page);
  quickPaymentAction = new QuickPaymentAction(page);
}) 

//Zadanie 1
test("Wykonanie przelewu szybkiego", async ({ }) => {
  const login = "12345678k";
  const password = "87654321k";
  const url = "https://demobank.jaktestowac.pl/logowanie_etap_2.html";
  const optionSelect = "Chuck Demobankowy";
  const price = "200";
  const title = "test";


  await loginAction.loginToBank(url, login, password);
  await quickPaymentAction.goToQuickPayment();
  await quickPaymentAction.makeNewQuickPayment(optionSelect, price, title);
  const statusTransfer = await quickPaymentAction.getStatusField();
  expect(statusTransfer).toContain(price);
  expect(statusTransfer).toContain(title);
  expect(statusTransfer).toContain(optionSelect);
})
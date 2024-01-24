import { expect, test } from '@playwright/test';
import { TransferAction } from '../../transfer/action/transferAction';
import { LoginAction } from '../../login/action/loginAction';

//stworzenie zmiennych ktore przechowuja nasze obiekty
let loginAction: LoginAction;
let transferAction: TransferAction;
 
//funkcja jest wykonywana przed kazdym testem osobno
test.beforeEach(async ({ page }) => {
  //inicjalizacja i przypisanie obiektow
  loginAction = new LoginAction(page);
  transferAction = new TransferAction(page);
}) 

test("Wykonanie przelewu bankowego", async ({ }) => {
  //wszystkie dane jakie bedziemy potrzebowac w tescie
  const login = "12345678k";
  const password = "87654321k";
  const url = "https://demobank.jaktestowac.pl/logowanie_etap_2.html";
  const recipent = "test";
  const accountNumber = "11111111111111111111111111";
  const price = "200";

  //uzycie akcji ktore zostaly napisane dla stron
  await loginAction.loginToBank(url, login, password);
  await transferAction.goToTransfer();  await transferAction.makeNewTransfer(recipent, accountNumber, price);
  expect(await transferAction.getStatusTransfer()).toContain("Przelew Udany")
})

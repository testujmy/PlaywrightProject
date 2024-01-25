import { expect, test } from '@playwright/test';
import { TransferAction } from '../../transfer/action/transferAction';
import { LoginAction } from '../../login/action/loginAction';
import { faker } from '@faker-js/faker';

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
  //faker losuje 8 liter
  const login = faker.string.alpha({ length: 8 });
  const password = faker.string.alpha({ length: 8 })
  const url = "https://demobank.jaktestowac.pl/logowanie_etap_2.html";
  //faker losuje imie
  const recipent = faker.person.firstName();
  //faker losuje numer konta o 26 znakach
  const accountNumber = faker.finance.accountNumber(26);
  //faker losuje cene z przdzialu 100 - 500
  const price = faker.commerce.price({ min: 100, max: 500 });

  //uzycie akcji ktore zostaly napisane dla stron
  await loginAction.loginToBank(url, login, password);
  await transferAction.goToTransfer();  await transferAction.makeNewTransfer(recipent, accountNumber, price);
  expect(await transferAction.getStatusTransfer()).toContain("Przelew Udany")
})

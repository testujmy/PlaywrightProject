import { Page } from "@playwright/test";

export class TransferAction {
  constructor(private page: Page) {}

//lista lokatorow
  private transferMenuBtn = "//a[@href='przelew_nowy_zew.html']";
  private recipentNameInput = "//input[@id='form_receiver']";
  private toAccountNumberInput = "//input[@id='form_account_to']";
  private priceInput = "//input[@id='form_amount']";
  private sendBtn = "(//form[@id='transfer_new_out']//a)[1]";
  private statusField = "//span[@id='show_messages']";

//lista wszystkich akcji
//funkcja - przejdz do pozycji z menu platnosci
  async goToTransfer() {
    await this.page.locator(this.transferMenuBtn).click();
  }

//funkcja - wykonaj nowy przelew
  async makeNewTransfer(recipent: string, accountNumber: string, price: string) {
    await this.page.waitForSelector(this.recipentNameInput);
    await this.page.locator(this.recipentNameInput).fill(recipent);
    await this.page.locator(this.toAccountNumberInput).fill(accountNumber);
    await this.page.locator(this.priceInput).fill(price);
    await this.page.locator(this.sendBtn).click();
  }

//funkcja - pobierz status przelewu i zwroc wartosc 
  async getStatusTransfer(): Promise<string> {
    return await this.page.locator(this.statusField).textContent() as string;
  }
}

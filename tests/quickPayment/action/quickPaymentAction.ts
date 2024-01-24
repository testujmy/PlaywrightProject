import { Page } from "@playwright/test";

export class QuickPaymentAction {
  constructor(private page: Page) {}

  private quickPaymentMenuBtn = "//a[@href='quick_payment.html']";
  private toSelect = "//select[@id='widget_1_transfer_receiver']";
  private priceInput = "//input[@id='widget_1_transfer_amount']";
  private titleInput = "//input[@id='widget_1_transfer_title']";
  private executeBtn = "//button[@id='execute_btn']";
  private modalOkBtn = "//button[@data-testid='close-button']";
  private statusField = "//span[@id='show_messages']";

  async goToQuickPayment() {
    await this.page.locator(this.quickPaymentMenuBtn).click();
  }

  async makeNewQuickPayment(toOption: string, price: string, title: string) {
    await this.page.waitForSelector(this.toSelect);
    await this.page.locator(this.toSelect).selectOption({ label: toOption });
    await this.page.locator(this.priceInput).fill(price);
    await this.page.locator(this.titleInput).fill(title);
    await this.page.locator(this.executeBtn).click();
  }

  async getStatusField(): Promise<string> {
    return await this.page.locator(this.statusField).textContent() as string;
  }
}
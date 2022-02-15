//const productName = 'Кавомашина Nivona CafeRomatica NICR 790';
const productName = 'Кавомашина Nivona NICR 520';
const buyerPhone = '0981222222';
const buyerEmail = 'email@test.com';
const buyerName = 'Will';
const buyerSurname = 'Smith';

const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Searching for the product
  await page.goto('https://allo.ua/');

  await page.click('[placeholder="Пошук\\ товарів"]');
  await page.fill('[placeholder="Пошук\\ товарів"]', productName);
  
  await Promise.all([
    page.waitForNavigation(),
    page.click('text=Надіслати')
  ]);

  // Adding to cart
  page.click('text=купити');

  await Promise.all([
    page.waitForNavigation(),
    page.click('text=Оформити замовлення')
  ]);

  //Adding details of the order
  await page.click('[placeholder="Ваше\\ ім\\\'я"]');
  await page.fill('[placeholder="Ваше\\ ім\\\'я"]', buyerName);

  await page.click('[placeholder="Введіть\\ контактний\\ номер"]');
  await page.type('[placeholder="Введіть\\ контактний\\ номер"]', buyerPhone);

  await page.click('[placeholder="Введіть\\ e-mail"]');
  await page.fill('[placeholder="Введіть\\ e-mail"]', buyerEmail);

  await page.click('text=Вибрати доставку і оплату');

  await page.waitForLoadState();

  await page.click('text=Оплата при отриманні замовлення');
  await page.click('text=Оплата банківською карткою on-line');
  await page.waitForLoadState();

  await page.click('text=Виберіть склад, будь-ласка');
  await page.waitForLoadState();

  await page.click('text=просп. Степана Бандери  (кол. Московський), 23, ТЦ «Городок», 1-ий поверх, маг. Алло MAX');

  // await page.click('button:has-text("Підтвердити замовлення")');

});
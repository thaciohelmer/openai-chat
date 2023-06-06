import puppeteer from "puppeteer";

const getPageData = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.el.com.br/?page_id=6347");

  await page.pdf({
    path: "C:/Users/thacio.helmer/Documents/Estudos/chatbot-openai/api/src/pages/pagina.pdf",
    format: "A4",
  });

  await browser.close();
};

getPageData();

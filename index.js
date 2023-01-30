var XLSX = require("xlsx");
//puppeteer es un navegador headless
// const puppeteer = require("puppeteer");

async function leerExcel(ruta) {
  var workbook = XLSX.readFile(ruta);
  var workbookSheets = workbook.SheetNames;
  var sheet = workbookSheets[1];
  var dataEXCEL = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

  var cell;
  var contador = 1;
  const numeros = await dataEXCEL.map((item) => {
    if (item.Teléfonos != undefined && item.Teléfonos != "" && item) {
      cell = item.Teléfonos;
      cell = cell.toString();
      if (cell.includes("/")) {
        cell = cell.split("/")[1];
      }
      if (cell.includes("(WhatsApp)")) {
        cell = cell.split("(WhatsApp)")[0];
      }
      if (cell.includes(" ")) {
        cell = cell.replace(" ", "");
      }
      //Quitar espacios en blanco entre el string
      cell = cell.replace(/\s/g, "");
      contador++;
      return {
        id: contador,
        telefono: cell,
      };
    }
  });

  console.log(numeros);
  enviarMensaje(numeros);
}

//leerExcel("lista.xlsx");

const puppeteer = require("puppeteer");

// async function scrape(url) {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto(url);
//   await page.waitForSelector(
//     "#pane-side > div:nth-child(3) > div > div > div:nth-child(9) > div > div > div > div > div > div > span"
//   );
//   await page.click(
//     "#pane-side > div:nth-child(3) > div > div > div:nth-child(9) > div > div > div > div > div > div > span"
//   );
//   await page.waitForSelector(
//     "#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div > div > div > div > p"
//   );
//   await page.click(
//     "#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div > div > div > div > p"
//   );
//   await page.type(
//     "#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div > div > div > div > p",
//     "Hola"
//   );
// }

// scrape("https://web.whatsapp.com/");

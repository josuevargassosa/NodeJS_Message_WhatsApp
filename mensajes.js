var XLSX = require("xlsx");
const puppeteer = require("puppeteer");

async function leerExcel(ruta) {
  //   var workbook = XLSX.readFile(ruta);
  //   var workbookSheets = workbook.SheetNames;
  //   var sheet = workbookSheets[1];
  //   var dataEXCEL = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

  //   var cell;
  //   var contador = 1;
  //   const numeros = await dataEXCEL.map((item) => {
  //     if (item.Teléfonos != undefined && item.Teléfonos != "" && item) {
  //       cell = item.Teléfonos;
  //       cell = cell.toString();
  //       if (cell.includes("/")) {
  //         cell = cell.split("/")[1];
  //       }
  //       if (cell.includes("(WhatsApp)")) {
  //         cell = cell.split("(WhatsApp)")[0];
  //       }
  //       if (cell.includes(" ")) {
  //         cell = cell.replace(" ", "");
  //       }
  //       cell = cell.replace(/\s/g, "");
  //       contador++;
  //       return {
  //         id: contador,
  //         telefono: cell,
  //       };
  //     }
  //   });

  //   console.log(numeros);
  enviarMensaje();
}

leerExcel("lista.xlsx");

async function enviarMensaje() {
  //Recorrer un arreglo de numeros de telefono y enviar mensaje a cada uno de ellos con puppeteer
  const browser = await puppeteer.launch({ headless: false });
  // numeros
  const page = await browser.newPage();
  await page.goto("https://web.whatsapp.com/");
  //Tag title name contact
  await page.waitForSelector(
    "#pane-side > div:nth-child(3) > div > div > div:nth-child(9) > div > div > div > div > div > div > span"
  );

  //   await page.waitForSelector('#pane-side > div:nth-child(3) > div > div > div:nth-child(10) > div > div > div > div._8nE1Y > div.y_sn4 > div._21S-L > span');
  //   await page.click(
  //     '<span dir="auto" title="Numero Josue Trabajo" aria-label="" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr _11JPr">Numero Josue Trabajo</span>'
  //   );
  //   await page.waitForSelector(
  //     "#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div > div > div > div > p"
  //   );
  //   await page.click(
  //     "#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div > div > div > div > p"
  //   );
  //   for (let i = 0; i < numeros.length; i++) {
  //     // await page.type(
  //     //   "#main > footer > div._2lSWV._3cjY2.copyable-area > div > span:nth-child(2) > div > div > div > div > div > p",
  //     //   numeros[i].telefono
  //     // );
  //     // await page.waitForSelector("._2EXPL");
  //     // await page.click("._2EXPL");
  //     // await page.waitForSelector("._2_1wd");
  //     // await page.type("._2_1wd", "Hola, soy un bot de prueba");
  //     // await page.waitForSelector("._35EW6");
  //     // await page.click("._35EW6");
  //     // await page.waitForSelector("._2_1wd");
  //   }
  //await browser.close();
}

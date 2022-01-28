/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
//web api
//conectarnos al servidos
window
.fetch(url)
//procesar la respuesta y convertirla en JSON 
.then((respuesta) => respuesta.json())
//JSON ->Data 
.then((responseJson) => {
    const todosLosItems = [];
  responseJson.data.forEach((item) => {
      //crear imagen
      const imagen = document.createElement("img");

      //crear titulo
      const title = document.createElement("h2");
      //crear precio
      const price = document.createElement("div");

      const container = document.createElement("div");
      container.append(imagen, title, price);

      todosLosItems.push(container);
  });
  document.body.append(...todosLosItems);
});


/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
 const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

const formatPrice = (price) => {
const newPrice = new window.Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "USD",
}).format(price);

  return newPrice;
};

//web api
//conectarnos al servidos
window
.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en JSON 
.then((respuesta) => respuesta.json())
//JSON ->Data 
.then((responseJson) => {
    const todosLosItems = [];
  responseJson.data.forEach((item) => {
      //crear imagen
      const imagen = document.createElement("img");
      imagen.src = `${baseUrl}${item.image}`;

      //crear titulo
      const title = document.createElement("h2");
      title.textContent = item.name;
      //title.style = "font-size: 2rem";
      title.className = "text-5xl text-pink-600";
      //crear precio
      const price = document.createElement("div");
      price.className = "text-gray-600";
      price.textContent = formatPrice(item.price);

      const container = document.createElement("div");
      container.append(imagen, title, price);

      todosLosItems.push(container);
  });
  appNode.append(...todosLosItems);
});


/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
 const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

appNode.addEventListener("click", (event) => {
  if (event.target.nodeName == "H2"){
    window.alert("Hola");
  }
 
 });

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
      imagen.className = "h-16 w-16 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
      imagen.src = `${baseUrl}${item.image}`;
      
      //crear titulo
      const title = document.createElement("h2");
      title.textContent = item.name;
      //title.style = "font-size: 2rem";
      title.className = "text-lg text-green-600 font-style: italic text-decoration-line: underline"
      title.textContent = item.name;
     // title.addEventListener("click", () => {
      //  window.alert("Hola");
     // });


      //crear precio
      const price = document.createElement("div");
      price.className = "text-gray-600";
      price.textContent = formatPrice(item.price);
//unimos precio y titulo
const priceAndTitle = document.createElement("div");
priceAndTitle.className = "text-center md:text-left";
priceAndTitle.appendChild(title);
priceAndTitle.appendChild(price);

//unimos imagen con priceAndTitle
const card = document.createElement("div");
card.className = "md:flex bg-white rounded-lg p-6";
card.appendChild(imagen);
card.appendChild(priceAndTitle);

todosLosItems.push(card);
});
  appNode.append(...todosLosItems);


});

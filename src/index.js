/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
//web api
//conectarnos al servidos
window.fetch(url)
//procesar la respuesta y convertirla en JSON 
.then(respuesta => respuesta.json())
//JSON ->Data 
.then(data => {
   console.log(data) 
})


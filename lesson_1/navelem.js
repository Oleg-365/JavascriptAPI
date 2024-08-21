// console.log(document.documentElement); // тег <html>
// console.log(document.body); // тег <body>
// console.log(document.head); // тег <head>


// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
console.log(document.body.children);


// Сделаем в переборе колекции вывод проверка, явлеяется ли он div

// for (let val of document.body.children) {
//     console.log(val.localName === 'div' ? "Это DIV" : "Это не DIV");
// }


for (let val of document.body.childNodes) {
    console.dir(val.nodeType);
}

 // http://dom.spec.whatwg.org/#node
 
for (let val of document.body.childNodes) {
    console.dir(val.nodeValue);
}

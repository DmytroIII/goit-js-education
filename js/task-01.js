

const itemElm = document.querySelectorAll(".item");
console.dir(itemElm);
console.log(`Number of categories: ${itemElm.length}`);
itemElm.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.innerText}`);
     console.dir(`Elements: ${item.lastElementChild.children.length}`);
});

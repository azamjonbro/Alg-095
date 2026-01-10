function addToCartFunc(product) {
    let allSaved = JSON.parse(localStorage.getItem("product")) || [];

    // product indexini topamiz
    let index = allSaved.findIndex(item => item.id === product.id);

    if (index !== -1) {
        // bor bo‘lsa counter++ 
        allSaved[index].counter += 1;
    } else {
        // yo‘q bo‘lsa yangi qo‘shamiz
        allSaved.push({
            ...product,
            counter: 1
        });
    }

    localStorage.setItem("product", JSON.stringify(allSaved));
}
function calculateBasket(){
    let allProduct= JSON.parse(localStorage.getItem("product"))
    return allProduct.reduce((a,b)=>a.counter*a.price+b.counter*b.price)
}

export default { addToCartFunc,calculateBasket };

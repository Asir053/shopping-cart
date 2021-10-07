var itemslist = [
    {
        Iname: "Gadget1",
        Iprice: 500,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget2",
        Iprice: 600,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget3",
        Iprice: 700,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget4",
        Iprice: 800,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget5",
        Iprice: 500,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget6",
        Iprice: 600,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget7",
        Iprice: 700,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget8",
        Iprice: 800,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget9",
        Iprice: 500,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget10",
        Iprice: 600,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget11",
        Iprice: 700,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget12",
        Iprice: 800,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget13",
        Iprice: 500,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget14",
        Iprice: 600,
        IURL: "./images/3.jpg"
    },
    {
        Iname: "Gadget15",
        Iprice: 700,
        IURL: "./images/3.jpg"
    }
];

itemspic=document.getElementsByClassName('product');
itemsname=document.getElementsByClassName('pname');
itemsprice=document.getElementsByClassName('price');
for (let i = 0; i < itemslist.length; i++) {
    itemspic[i].insertAdjacentHTML('afterbegin', `<img class='pic' src='${itemslist[i].IURL}' alt='ok'>`);
    //itemspic[i].innerHTML = `<img class='pic' src='${itemslist[i].IURL}' alt='ok'>`;
    itemsname[i].innerHTML += itemslist[i].Iname;
    itemsprice[i].innerHTML += itemslist[i].Iprice;
}

// addToCartBtn = document.getElementsByClassName('product');
addToCartBtn = document.querySelectorAll('.pic,.pname');
cartContainer = document.getElementsByClassName('info')[0];


for (var i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', updateCartContainer)
}

function updateCartContainer(e) {
    addToCartBtn = e.target;
    productContainer = addToCartBtn.parentElement;
    productTitle = productContainer.getElementsByClassName('pname')[0].innerText;
    productPrice = productContainer.getElementsByClassName('price')[0].innerText;
    productimg = productContainer.getElementsByClassName('pic')[0].src;

    cartTitles = cartContainer.getElementsByClassName('cartTitle');
    // for (var i = 0; i < cartTitles.length; i++) {
    //     if (cartTitles[i].innerText == productTitle) {
    //         alert('Product already to cart');
    //         return;
    //     }
    // }


    AddRowInCart(productTitle, productPrice, productimg);

}


function AddRowInCart(productTitle, productPrice, productimg) {


    div = document.createElement('div');
    div.classList.add('row');
    insideDiv = `<span class="cartImage"> <img class="cartpic" src="${productimg}"></span>
<span class="cartTitle"> ${productTitle} </span>
<span class="priceholder">BDT<span class="cartPrice"> ${productPrice}</span></span>
 <i class="fas fa-trash removeButton"></i>`;
    div.innerHTML = insideDiv
    cartContainer.appendChild(div);
    totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText;
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('amount')[0].innerText = new Number(totalPrice).toLocaleString('en');
    document.getElementsByClassName('amount')[1].innerText = new Number(totalPrice).toLocaleString('en');
    document.getElementsByClassName('amount')[2].innerText = new Number(totalPrice).toLocaleString('en');


    removeButton = document.getElementsByClassName('removeButton');
    for (var i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', removeFromCart)
    }
}

function removeFromCart(e) {
    e.target.parentElement.remove();
    updatePriceAfterRemove();
}


function updatePriceAfterRemove() {
    totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText;
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('amount')[0].innerText = new Number(totalPrice).toLocaleString('en');
    document.getElementsByClassName('amount')[1].innerText = new Number(totalPrice).toLocaleString('en');
    document.getElementsByClassName('amount')[2].innerText = new Number(totalPrice).toLocaleString('en');


}

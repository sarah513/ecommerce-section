

var cart_item = document.querySelector(".cart-items");
var cart_icon = document.querySelector(".cart");

// function of cart
cart_icon.addEventListener('click', function () {
    console.log(cart_item.style.display);
    if (cart_item.style.display == "none") {
        cart_item.style.display = "block"
    }
    else {
        cart_item.style.display = "none"
    }
})


//-------------------------------------------------------------------------------------------------------------------------//


// display specific shoe
var shoeDownList = document.getElementById('shoes_pics');
var showedShoe = document.getElementById('showedShoe');
var shoeBorder = document.getElementsByClassName("thumb");


shoeDownList.addEventListener('click', function (e) {
    var border = e.target.parentNode;
    for (var i = 0; i < shoeDownList.children.length; i++) {
        shoeDownList.children[i].children[0].classList.remove('thumb');
    }

    var source = e.target.getAttribute('src');

    if (source != null) {
        showedShoe.setAttribute('src', source);

        border.classList.add('thumb');
        e.target.style.borderRadius = '0px';

    }

})


//---------------------------------------------------------------------------------------------------------------------//

// display on full screen 
// d-flex 
var pre = document.getElementById("prev");
var next = document.getElementById("next");
var full_img = document.getElementById('full_img');
var slid = document.getElementsByClassName('full')[0];
var childre = shoeDownList.children;




showedShoe.addEventListener('click', function (e) {

    full_img.children[0].setAttribute('src', e.target.getAttribute('src'));
    slid.style.display = 'flex';
})

slid.addEventListener('click', function () {

    slid.style.display = 'none';

})
//---------------------------------------------------------------------------//

//helper functions 

// function of determine index 

var index;
function knowIndex(e_target) {
    for (var i = 0; i < childre.length; i++) {

        var x = childre[i].children[0].children[0].getAttribute('src');
        if (x == e_target.getAttribute('src')) {

            index = i;
            break;
        }
    }
}

// function to increase index
function goRight() {
    var ne;
    if (index < shoeDownList.children.length - 1) {
        ne = index + 1;
    } else {
        ne = 0;
    }
    return ne;
}

//function to decrease index
function goLeft() {
    var ne;
    if (index > 0) {
        ne = index - 1;
    } else {
        ne = shoeDownList.children.length - 1;
    }
    return ne;
}

//---------------------------------------------------------------------------//

// change image omclick on photo

full_img.addEventListener('click', function (e) {
    knowIndex(e.target);
    var ne = goRight();
    full_img.children[0].setAttribute('src', childre[ne].children[0].children[0].getAttribute('src'));
    e.stopPropagation();
})

//---------------------------------------------------------------------------//

//change image on click 
next.addEventListener('click', function (e) {
    var element = e.target.parentNode.children[1].children[0];
    knowIndex(element);
    var ne = goRight();
    full_img.children[0].setAttribute('src', childre[ne].children[0].children[0].getAttribute('src'));
    e.stopPropagation();
})

pre.addEventListener('click', function (e) {
    var element = e.target.parentNode.children[1].children[0];
    knowIndex(element);
    var ne = goLeft();
    full_img.children[0].setAttribute('src', childre[ne].children[0].children[0].getAttribute('src'));
    e.stopPropagation();
})

//---------------------------------------------------------------------------//

// change img with arrow keys

document.addEventListener('keyup', function (e) {
    var element = e.target.children
    knowIndex(e.target.children[2].children[0].children[1].children[0]);
    if (e.code == 'ArrowRight') {
        var ne = goRight();
        e.target.children[2].children[0].children[1].children[0].setAttribute('src', childre[ne].children[0].children[0].getAttribute('src'))
    }
    else if (e.code == 'ArrowLeft') {
        var ne = goLeft();
        e.target.children[2].children[0].children[1].children[0].setAttribute('src', childre[ne].children[0].children[0].getAttribute('src'))

    }
    else if (e.code == 'Escape') {
        slid.style.display = 'none';
    }
})

//---------------------------------------------------------------------------//
// Add to cart part

var min = document.getElementById("min");
var plus = document.getElementById("plus");
var numOfProduct = document.getElementById('num_prod');
var numOfProductVal = Number(numOfProduct.innerHTML);
var addToCart = document.querySelector('.add-btn');
var orderNum = document.querySelector('.cart').children[0];
var orderNumVal = Number(orderNum.innerHTML);
var cart_items = document.getElementById('cart_items');

min.addEventListener('click', function () {
    if (numOfProductVal > 0) {
        numOfProductVal -= 1;
    }
    numOfProduct.innerHTML = numOfProductVal;
})

plus.addEventListener('click', function () {
    numOfProductVal += 1;
    numOfProduct.innerHTML = numOfProductVal;
})

// part of create the cart item 
var count = 0;
var obj3 = document.createElement('div');
var img3 = document.createElement('img');
img3.setAttribute('src', 'images/icon-delete.svg');
img3.setAttribute('id', 'dlt');
obj3.appendChild(img3);


//second step
var obj2 = document.createElement('div');
obj2.classList.add('d-flex', 'flex-column', 'col-10', 'px-2');

var obj21 = document.createElement('div');
var obj21p1 = document.createElement('p');
obj21p1.innerText = 'Sneaker Company';
obj21p1.classList.add('orange', 'fs-7', 'py-0', 'my-0')

var obj21p2 = document.createElement('p');
obj21p2.classList.add('fs-7', 'my-1');
obj21p2.innerText = "Fall Limited Edition Sneakers";

obj21.appendChild(obj21p1);
obj21.appendChild(obj21p2);

var obj22 = document.createElement('div');
obj22.classList.add('d-flex', 'my-0', 'align-items-center', 'text-black');

var obj22p1 = document.createElement('p');
obj22p1.innerText = '$125.00';
obj22p1.classList.add('my-0', 'fs-7', 'px-1');
var obj22p2 = document.createElement('p');
obj22p2.classList.add('my-0', 'fs-7', 'px-1');
obj22p2.setAttribute('id', 'car-item-num');
obj22p2.innerText = `x1`;
var obj22p3 = document.createElement('p');
obj22p3.classList.add('my-0', 'fw-bold', 'px-1');
obj22p3.setAttribute('id', 'total-price');
obj22p3.innerText = '$125';

obj22.appendChild(obj22p1);
obj22.appendChild(obj22p2);
obj22.appendChild(obj22p3);

obj2.append(obj21);
obj2.appendChild(obj22);


obj1 = document.createElement('div');
obj1.classList.add('col-2');

var img1 = document.createElement('img');
img1.setAttribute('src', 'images/image-product-1.jpg');
img1.classList.add('w-100', 'rounded-2');
obj1.appendChild(img1);

var parentObj = document.createElement('div');
parentObj.classList.add('d-flex', 'justify-content-start', 'mb-2', 'align-items-center');
parentObj.appendChild(obj1);
parentObj.appendChild(obj2);
parentObj.appendChild(obj3);

var testobj = document.createElement('div');
cart_items.appendChild(parentObj);
display();
// to display the cart item and save the data on refresh
function display() {
    if (localStorage.getItem('count') != null && Number(localStorage.getItem('count')) > 0) {
        document.getElementById('car-item-num').innerHTML = `x${Number(localStorage.getItem('count'))}`;
        document.getElementById('total-price').innerHTML = `$${Number(localStorage.getItem('count')) * 125}`;
        orderNum.innerHTML = Number(localStorage.getItem('count'));
        orderNumVal = Number(orderNum.innerHTML)
        cart_items.style.display = 'block';
        console.log('test1');
        document.querySelector('.cart').children[0].style.opacity = '100';
        console.log('test2');
    } else {
        cart_items.style.display = 'none';
    }

}

// to add cart item to cart
addToCart.addEventListener('click', function () {

    if (numOfProductVal > 0) {

        orderNumVal = Number(orderNum.innerHTML);
        orderNum.style.opacity = '100';
        cart_items.style.display = 'block';
    }
    count = Number(localStorage.getItem('count'));
    for (var i = 0; i < numOfProductVal; i++) {

        count++;
    }
    localStorage.setItem('count', JSON.stringify(count));
    orderNum.innerHTML = count;
    document.getElementById('car-item-num').innerHTML = `x${count}`;
    document.getElementById('total-price').innerHTML = `$${count * 125}`;
    display();

})



// to delete the cart item
cart_items.addEventListener('click', function (e) {

    if (e.target.getAttribute('id') == 'dlt') {
        console.log(cart_items.children);
        orderNum.innerHTML = cart_items.children.length - 1;
        cart_items.style.display = 'none';
        count = 0;
        localStorage.setItem('count', JSON.stringify(count));
    }
    display();
})


//------------------------------------------------------------------------------------------------------------------------//
//function fro mobile 

var next_main = document.getElementById('next-main');
var pre_main = document.getElementById('prev-main');

next_main.addEventListener('click', function (e) {

    var element = e.target.parentNode.children[1];
    knowIndex(element);
    var ne = goRight();
    showedShoe.setAttribute('src', childre[ne].children[0].children[0].getAttribute('src'));
    e.stopPropagation();
})

pre_main.addEventListener('click', function (e) {
    var element = e.target.parentNode.children[1];
    knowIndex(element);
    var ne = goLeft();
    showedShoe.setAttribute('src', childre[ne].children[0].children[0].getAttribute('src'));
    e.stopPropagation();
})

// navigation functions 

var nav = document.getElementById('nav');
var menu_btn=document.getElementById('menu-btn');
var shadow_screen = document.querySelector('.menu-full');
var show=document.getElementById('navbarSupportedContent');
menu_btn.addEventListener('click', function (e) {

    if (nav.style.backgroundColor != 'white' && shadow_screen.style.display != 'block') {
        nav.style.backgroundColor = 'white';
        shadow_screen.style.display = 'block';
        nav.style.transition='500ms';
    }
    else{
        nav.style.backgroundColor = 'transparent';
        shadow_screen.style.display = 'none';
    }
    e.stopPropagation();
})

shadow_screen.addEventListener('click',function(){

    shadow_screen.style.display='none';
    show.classList.remove('show');
    nav.style.backgroundColor = 'transparent';
    nav.style.transition='500ms';
    shadow_screen.style.transition='500ms';
})





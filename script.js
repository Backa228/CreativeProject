let items = document.querySelectorAll('.menu ul li');
console.log(items);

let item = document.querySelector(".menu ul li");
console.log(item);
let isCatalogVisible = false;
let animationInProgress = false;//Чи вже триває анімація?

// ! - НЕ
// || - AБО
// && - І

item.addEventListener('mouseover', function() {

    if (!isCatalogVisible) {// -> isCatalogVisible == false

    let catalogDiv = document.querySelector('.catalog');
    catalogDiv.style.display = 'flex';
    isCatalogVisible = true;//Чи елемент каталог видимий?
    console.log(catalogDiv);

    catalogDiv.classList.add('catalog-anim-in');
    animationInProgress = true;
    console.log(catalogDiv);

    catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
        catalogDiv.classList.remove('catalog-anim-in');
        animationInProgress = false;
        console.log(catalogDiv);

        catalogDiv.removeEventListener('animationend', doingAnimationEnd);
    });

    
    

    
}

});

//isCatalogVisible = true;

item.addEventListener('mouseout', function() {

    if(isCatalogVisible) {// -> isCatalogVisible == true

    let catalogDiv = document.querySelector('.catalog');

    catalogDiv.classList.add('catalog-anim-out');
    animationInProgress = true;
    console.log(catalogDiv);

    catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
        catalogDiv.classList.remove('catalog-anim-out');
        catalogDiv.style.display = 'none';
        isCatalogVisible = false;
        animationInProgress = false;
        console.log(catalogDiv);

        catalogDiv.removeEventListener('animationend', doingAnimationEnd);
    });
}
    
});
let items = document.querySelectorAll('.menu ul li');
console.log(items);

let item = document.querySelector(".menu ul li");
console.log(item);
let isCatalogVisible = false;//Чи каталог видимий
let animationInProgress = false;//Чи вже триває анімація?
let currentCatalogDiv = null;//буде визначати поточний каталог (той, на який курсор миші)

// ! - НЕ
// || - AБО
// && - І

items.forEach((itemList, index) => {
    console.log(itemList, index);

    let catalogDiv = document.getElementById(`catalog-${index + 1}`);

    itemList.addEventListener('mouseover', function () {

        if (!isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == false
            hideAndshowCatalog(catalogDiv);
        }
        else if (currentCatalogDiv !== catalogDiv) {
            hideCatalog(catalogDiv)
        }
    });

    itemList.addEventListener('mouseout', function () {

        if (!itemList.matches(":hover") && isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == true
            hideCatalog(currentCatalogDiv);
        }
    });
});


//isCatalogVisible = true;

function showCatalog(catalogDiv) {
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
    currentCatalogDiv = catalogDiv;
}

function hideAndshowCatalog(catalogDiv) {//catalogDiv - це параметр функції(поки щось невідоме)
//при виклику функції currentCatalogDiv - це аргумент функції(конкретне значення)
    if (currentCatalogDiv !== null) {
        hideCatalog(currentCatalogDiv);
    }
    showCatalog(catalogDiv);
}

function hideCatalog(catalogDiv) {
    catalogDiv.classList.add('catalog-anim-out');
    animationInProgress = true;
    console.log(catalogDiv);

    catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
        catalogDiv.classList.remove('catalog-anim-out');
        catalogDiv.style.display = 'none';
        isCatalogVisible = false;
        animationInProgress = true;
        console.log(catalogDiv);

        catalogDiv.removeEventListener('animationend', doingAnimationEnd);
    });
}
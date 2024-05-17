let items = document.querySelectorAll('.menu ul li');
console.log(items);

let item = document.querySelector(".menu ul li");
console.log(item);
let isCatalogVisible = false;//Чи каталог видимий
let animationInProgress = false;//Чи вже триває анімація?
let currentCatalogDiv = null;//буде визначати поточний каталог (той, на який курсор миші)
let previousCatalogDiv = null;
let hideCatalogTimer = null;//змінна для зберігання таймеру перед викликом функції hideCatalog()
// ! - НЕ
// || - AБО
// && - І

items.forEach((itemList, index) => {
    let catalogDiv = document.getElementById(`catalog-${index+1}`);
    let relatedItem = itemList.relatedTarget
    let targetItem = itemList.target;

    itemList.addEventListener('mouseenter', function () {

        clearTimeout(hideCatalogTimer);

        if (!isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == false
            hideCatalog(previousCatalogDiv);
            showCatalog(catalogDiv);
            previousCatalogDiv = catalogDiv;
        }
        else if (currentCatalogDiv !== catalogDiv) {
            //hideCatalog(catalogDiv)
        }
    });

    itemList.addEventListener('mouseleave', function () {

        
            
            hideCatalogTimer = setTimeout(() => {
                hideCatalog(currentCatalogDiv);
            }, 500);
    });
});


//isCatalogVisible = true;

function showCatalog(catalogDiv) {
    console.log("showCatalog");
     catalogDiv.style.display = 'flex';
            isCatalogVisible = true;//Чи елемент каталог видимий?
    console.log(catalogDiv);
    
    animationInProgress = false;

            /*catalogDiv.classList.add('catalog-anim-in');
            animationInProgress = true;
            console.log(catalogDiv);

            catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
                catalogDiv.classList.remove('catalog-anim-in');
                animationInProgress = false;
                console.log(catalogDiv);


                catalogDiv.removeEventListener('animationend', doingAnimationEnd);
            });*/
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

    if (isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == true

        console.log("hideCatalog");
        catalogDiv.style.display = 'none';
        isCatalogVisible = false;
        animationInProgress = false;
    }

    /*catalogDiv.classList.add('catalog-anim-out');
    animationInProgress = true;
    console.log(catalogDiv);

    catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
        catalogDiv.classList.remove('catalog-anim-out');
        catalogDiv.style.display = 'none';
        isCatalogVisible = false;
        animationInProgress = false;
        console.log(catalogDiv);

        catalogDiv.removeEventListener('animationend', doingAnimationEnd);
    });*/
}
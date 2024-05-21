let items = document.querySelectorAll('.menu ul li');

let item = document.querySelector(".menu ul li");

let isCatalogVisible = false;//Чи каталог видимий
let animationInProgress = false;//Чи вже триває анімація?
let previousCatalogDiv = null;//відповідає за зберігання попередгього каталогу(той, на який було наведено курсор миші до цього)
// ! - НЕ
// || - AБО
// && - І

items.forEach((itemList, index) => {
    let catalogDiv = document.getElementById(`catalog-${index+1}`);
    let relatedItem = itemList.relatedTarget
    let targetItem = itemList.target;

    itemList.addEventListener('mouseenter', function () {

        // clearTimeout(hideCatalogTimer);

        if (!isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == false
            showCatalog(catalogDiv, true);
        }
        else if (previousCatalogDiv !== catalogDiv) {
            hideAndshowCatalog(catalogDiv)
        }
    });

    itemList.addEventListener('mouseleave', function () {

    });
});


//isCatalogVisible = true;

function showCatalog(catalogDiv, withAnimation) {
    if (withAnimation) {
        //(withAnimation) => withAnimation == true
        //(!withAnimation) => withAnimation == false
        catalogDiv.classList.add('catalog-anim-in');
        isCatalogVisible = true;//Чи елемент каталог видимий?
        animationInProgress = true;
        catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
            catalogDiv.classList.remove('catalog-anim-in');
            animationInProgress = false;
            catalogDiv.removeEventListener('animationend', doingAnimationEnd);
        });
    } else {
       catalogDiv.style.display = 'flex';
       isCatalogVisible = true;//Чи елемент каталог видимий?
       animationInProgress = false;
    }
    previousCatalogDiv = catalogDiv;
}

function hideAndshowCatalog(catalogDiv) {//catalogDiv - це параметр функції(поки щось невідоме)
//при виклику функції currentCatalogDiv - це аргумент функції(конкретне значення)
    if (previousCatalogDiv !== null) {
        hideCatalog(previousCatalogDiv, false);
    }
    showCatalog(catalogDiv, false);
}

function hideCatalog(catalogDiv, withAnimation) {

    if (isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == true
        if (withAnimation) {
            catalogDiv.classList.add('catalog-anim-out');
            animationInProgress = true;
            
            catalogDiv.addEventListener('animationend', function doingAnimationEnd() {
                catalogDiv.classList.remove('catalog-anim-out');
                catalogDiv.style.display = 'none';
                isCatalogVisible = false;
                animationInProgress = false;

            catalogDiv.removeEventListener('animationend', doingAnimationEnd);
            });
        } else {
        catalogDiv.style.display = 'none';
        isCatalogVisible = false;
        animationInProgress = false;}
       
    }
}
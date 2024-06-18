let items = document.querySelectorAll('.menu ul li');
let menuUl = document.querySelector('.menu ul');
console.log(menuUl);
let item = document.querySelector(".menu ul li");

let isCatalogVisible = false;//Чи каталог видимий
let animationInProgress = false;//Чи вже триває анімація?
let showCatalogTimer = null;
let previousCatalogDiv = null;//відповідає за зберігання попередгього каталогу(той, на який було наведено курсор миші до цього)
// ! - НЕ
// || - AБО
// && - І

menuUl.addEventListener('mouseleave', function () {
    hideCatalog(previousCatalogDiv, true);
});

items.forEach((itemList, index) => {
    let catalogDiv = document.getElementById(`catalog-${index+1}`);
    // let relatedItem = itemList.relatedTarget
    // let targetItem = itemList.target;

    itemList.addEventListener('mouseenter', function () {

        clearTimeout(showCatalogTimer);

        if (!isCatalogVisible && !animationInProgress) {// -> isCatalogVisible == false
            showCatalogTimer = setTimeout(() => {
            showCatalog(catalogDiv, true);
            }, 200);
        }
        else if (previousCatalogDiv !== catalogDiv) {
            showCatalogTimer = setTimeout(() => {
                hideAndshowCatalog(catalogDiv)
            }, 200);
        }
    });

    itemList.addEventListener('mouseleave', function () {
         clearTimeout(showCatalogTimer);
    });
});


//isCatalogVisible = true;

function showCatalog(catalogDiv, withAnimation) {
    if (withAnimation) {
        //(withAnimation) => withAnimation == true
        //(!withAnimation) => withAnimation == false
        catalogDiv.classList.add('catalog-anim-in');
        catalogDiv.style.display = 'flex';
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

let menuIcon = document.querySelector('.menu-icon');
let sideBar = document.querySelector('.sidebar-menu');
let closeBtn = document.querySelector('.close-btn i');
let contentElements = document.querySelectorAll('.content');
let body = document.body;
menuIcon.addEventListener('click', function () {
    sideBar.classList.add('active');
    body.style.overflow = 'hidden';//зупинка прокрутки

    contentElements.forEach(content => {
        content.classList.add('blur');
    });
});

closeBtn.addEventListener('click', function () {
    sideBar.classList.remove('active');
    body.style.overflow = 'visible';//можемо прокручувати

    contentElements.forEach(content => {
        content.classList.remove('blur');
    });

});
const galleryContainer = document.querySelector('.gallery-container');
const itemsGallery = [
    { src: 'img/galleryMainPage/air-max-97-womens-.png', alt: 'air-max-97', title: 'AIR MAX' },
    { src: 'img/galleryMainPage/air-force-1-07-lv8-mens.png', alt: 'air-force-1', title: 'AIR FORCE' },
    { src: 'img/galleryMainPage/air-jordan-1-element.png', alt: 'air-jordan-1', title: 'AIR JORDAN 1' },
    { src: 'img/galleryMainPage/blazer-mid-77-womens.png', alt: 'blazer-mid-77', title: 'BLAZER' },
    { src: 'img/galleryMainPage/dunk-low-retro-mens.png', alt: 'dunk-low-retro-mens', title: 'DUNK' },
    { src: 'img/galleryMainPage/zoom-vomero-5-mens-lightgreen.png', alt: 'zoom-vomero-5', title: 'VOMERO'}
]

function createGalleryItem(item) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;

    const title = document.createElement('h3');
    title.textContent = item.title;

    galleryItem.appendChild(img);
    galleryItem.appendChild(title);
    return galleryItem;
}

function createGalleryItems() {
    const fragment = document.createDocumentFragment();
    itemsGallery.forEach(item => { 
        const galleryItem = createGalleryItem(item);
        fragment.appendChild(galleryItem);
    });
    itemsGallery.forEach(item => { 
        const galleryItem = createGalleryItem(item);
        fragment.appendChild(galleryItem);
    });

    galleryContainer.appendChild(fragment);
    console.log(galleryContainer);
}
createGalleryItems();
const galleryItems = document.querySelectorAll('.gallery-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = items.length;

function updateGallery() {
    let itemWidht = galleryItems[0].clientWidth + 30;
    const offset = -currentIndex * itemWidht;
    console.log(offset);
    galleryContainer.style.transform = `translateX(${offset}px)`;    //якщо translateX(+) - то рух =>
    //якщо translateX(-) - то рух <=
}

function showNext() {
    // console.log('hufbdvnjsckm');
    // currentIndex = currentIndex + 1;
    currentIndex++;
    console.log(currentIndex);
    updateGallery();
    galleryContainer.style.transition = "transform 0.5s ease";
    if (currentIndex === galleryItems.length - items.length) {
        // console.log(currentIndex);
        // console.log(galleryItems.legth);
        // console.log(items.legth);
        setTimeout(() => {
            galleryContainer.style.transition = "none";
            currentIndex = items.length;//6
            updateGallery();
            setTimeout(() => {
                galleryContainer.style.tranform = 'transform 0.5s ease';
            }, 0);
         }, 500);
    }
}

function showPrev() {
    // currentIndex = currentIndex - 1;
    currentIndex--;
    updateGallery();
    galleryContainer.style.transition = 'transform 0.5s ease';
    if (currentIndex === items.length - 1) {

        setTimeout(() => {
            galleryContainer.style.transition = "none";
            currentIndex = items.length * 2 - 1; 
            updateGallery();
         }, 500);
    }
}

nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);
updateGallery();

const header = document.querySelector('header');

let lastScrollTop = 0;//змінна для збереження позиції останнього скролінгу

window.addEventListener('scroll', () => {

    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
        header.classList.add('hidden');
    } else if (scrollTop < lastScrollTop) {
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;

});
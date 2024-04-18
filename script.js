let items = document.querySelectorAll('.menu ul li');

console.log(items);

let item = document.querySelector('.menu ul li'); 
console.log(item);

item.addEventListener("mouseover", function(){
    let catalogDiv = document.querySelector(".catalog");
    catalogDiv.style.display = 'flex'; 
    console.log(catalogDiv);

    catalogDiv.classList.add('catalog-anim');

    catalogDiv.addEventListener('animationend', function(){
        catalogDiv.classList.remove('catalog-anim');
        console.log(catalogDiv)
    });
});

item.addEventListener("mouseout", function(){
    let catalogDiv = document.querySelector(".catalog");
    catalogDiv.style.display = 'none'; 
    console.log(catalogDiv);
});
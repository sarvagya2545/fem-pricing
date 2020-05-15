let priceMonthly =  document.querySelectorAll('.price-card__price');
let priceAnually = document.querySelectorAll('.price-card__price--alt');
let checkBox = document.querySelector('.price-switch__toggle');

checkBox.addEventListener('click', function(){
    if (checkBox.checked === true ){
        priceMonthly.forEach(function(price){
            price.style.display = "none";
        });

        priceAnually.forEach(function(price){
            price.style.display = "block";
        });
    } else {
        priceMonthly.forEach(function(price){
            price.style.display = "block";
        });

        priceAnually.forEach(function(price){
            price.style.display = "none";
        });
    }
});
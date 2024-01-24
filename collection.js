var productContainer = document.getElementById('products')
var search = document.getElementById('search')
var productlist = document.querySelectorAll('.products-box'); // Select only elements with class 'products-box'

search.addEventListener('keyup', function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector('p').textContent
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }
})
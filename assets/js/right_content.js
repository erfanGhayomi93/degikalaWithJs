let sellerHtml = "";
let brandHTML = "";

products.brands.map((brand) => {
    // console.log(brand[0])
    brandHTML += ` <li>
                                 <input type="checkbox">
                                 <span>${brand[0]}</span>
                                 <span class="barnd-en">${brand[1]}</span>
                          </li>`;

});

let toggle = document.querySelectorAll('.brand_toggle');
toggle.forEach((item) => {
    let toggleSlide = true;
    item.addEventListener('click', (e) => {
        let hide = item.nextSibling.nextSibling;
        if (toggleSlide === true) {
            hide.style.display = 'none';
            toggleSlide = false;
        } else {
            hide.style.display = 'block';
            toggleSlide = true;
        }
    })
});

products.sellers.map((seller) => {
    sellerHtml += `
                                    <li>
                                        <input type="checkbox">
                                        <span>${seller}</span>
                                    </li>
            `
});

document.getElementById('show_brand').innerHTML = brandHTML;
document.getElementById('sellerHtml').innerHTML = sellerHtml;







var contentHtml = "";


// const distinct = (value,index,self)=>{
//     return self.indexOf(value) === index;
// };
// const distinctSeller = products.filter(distinct);
// console.log(distinctSeller);


let itemLength = products.product.length;
document.getElementById('allItem').innerHTML = itemLength;

var search = document.querySelector('#search');

search.addEventListener('keyup', handleSearch);

function handleSearch() {
    var valInput = document.querySelector('#search').value.toUpperCase();

    contentHtml = "";
    products.product
        .filter((val) => {
            if (val.model.toUpperCase().includes(valInput))
                return true;

            if (val.seller.includes(valInput))
                return true;

            return false
        })
        .map((item) => {
            var colorItem = '';
            var flag = 0;
            item.colorItem.map((color, ind) => {
                if (ind < 3) {

                    colorItem += `<li style="background-color: ${color}"></li>`;
                } else {
                    if (flag === 0) {
                        colorItem += '<span class="text-muted">+</span>';
                    }
                    flag += 1
                }

            });
            contentHtml += `
    <div class="col-3 p-0">
        <div class="card">
            <a class="pt-4 mx-auto" href="./product.html" target="_blank">
                <img src=${item.img_src} class="card-img-top" alt="">
            </a>
            
            <div class="card-body description mt-2">
                <div class="card-text">
                    <span>گوشی موبایل</span>
                    <span>${item.name}</span>
        
                    <span>مدل</span>
                    <span>${item.model}</span>
                    
                    <span>${item.sim_num}</span>
                    سیم کارت ظرفیت
                    
                    <span>${item.Capacity}</span>
                </div>
                
                <div class="card-text comparison pt-2">
                    <input type="checkbox">
                         مقایسه
            </div>
            <div class="star">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
            <div class="text-left pt-2 existSale">
                <del class="text-muted"> ${item.del ? item.del : ' '} </del>
                <span class="sale ${item.sale ? 'backgroundSale' : ''}">
                        ${item.sale ? item.sale : ' '}
                </span>
            </div>
            <div class="price">
                 <h4 class="d-inline-block font-weight-bold">
                     ${item.price}
                 </h4>
                       تومان
            </div>
            <div class="seller">
                 <img src="assets/images/store.png" alt="">
                          فروشنده :
                 <span>${item.seller}</span>
            </div>
        </div>
                    <div class="colorItem">
        
                             <ul id="colorItem">
                                   ${colorItem}
                             </ul>
                     </div>
      </div>
  </div>`;
        });

    document.getElementById('leftContent').innerHTML = contentHtml;

}

/*----handle filter */
let filter_item = document.querySelectorAll('.filter_item');
filter_item.forEach((filter) => {
    filter.addEventListener('click', () => {
        for (let child of filter.parentElement.children) {
            child.classList.remove('active_filter')
        }
        filter.classList.add('active_filter');

        console.log(filter.parentElement.children)
    })
});

handleSearch();
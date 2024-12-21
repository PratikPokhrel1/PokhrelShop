const CollectionDiv = document.querySelector('.collectionContentWrap');

    const products = [
       {
        type: 'watch',
        image: 'project1imgs/collection/greenwatch2.jpg',
        name: 'Navitimer B01 Stainless Steel <span> Mint Green Dial</span>',
        price: 'Rs. 6,16,555'

    },
        {type: 'shoes',
        image: 'project1imgs/collection/nikeShoesBlack.jpg',
        name: 'Nike Jordan Daybreak <span></span>',
        price: 'Rs. 14,530'

    },
    
        {type: 'clothes',
        image: 'project1imgs/collection/cShrit1.jpg',
        name: 'Linen Resort Shirt <span></span>',
        price: 'Rs. 2,430'

    },
    
        {type: 'clothes',
        image: 'project1imgs/collection/dJacket.jpg',
        name: 'Demine Blue Shirt <span> + White Shirt</span>',
        price: 'Rs. 1,800'

    },
        {type: 'shoes',
        image: 'project1imgs/collection/tpShoes1.jpg',
        name: 'Vansu Knu Skool Shoes <span></span>',
        price: 'Rs. 9,450'

    },
        {type: 'clothes',
        image: 'project1imgs/collection/oJacket.jpg',
        name: 'RED fleece Jacket <span>dirt proof</span>',
        price: 'Rs. 5,200'

    },
        {type: 'watch',
        image: 'project1imgs/collection/goldenwatch1.jpg',
        name: 'Manta Chronograph stainless steel <span>blue dail</span>',
        price: 'Rs. 63,000'

    },
        {type: 'clothes',
        image: 'project1imgs/collection/plackpent.jpg',
        name: 'Ezra Black Regular Pants <span></span>',
        price: 'Rs. 2,200'

    },
        {type: 'watch',
        image: 'project1imgs/collection/whitewatch1.jpg',
        name: 'Breitling Aeromarine Avenger <span>GMT Steel Watch</span>',
        price: 'Rs. 3,37,300'

    },
        {type: 'clothes',
        image: 'project1imgs/collection/Ajaket.jpg',
        name: 'double Sided Jacket <span></span>',
        price: 'Rs. 4,300'

    },
        {type: 'clothes',
        image: 'project1imgs/collection/apent.jpg',
        name: 'Elasticated relaxed Fit Pants <span></span>',
        price: 'Rs. 2,800'

    },
        {type: 'clothes',
        image: 'project1imgs/collection/whiteShirt.jpg',
        name: 'Drop Shoulder Solid Tee <span></span>',
        price: 'Rs. 1,200'

    },
        {type: 'clothes',
        image: 'project1imgs/collection/bpent.jpg',
        name: 'Relaxed Fit Cargo Pants <span></span>',
        price: 'Rs. 3,200'

    },
    
    ]
// sorting by clothes
    const sortByInput = CollectionDiv.getAttribute("content");
    const sortByInput2 = CollectionDiv.getAttribute("content2");
    const clothesProducts =[];

    
    for(let i = 0; i< products.length; i++){
         
        if(products[i].type === sortByInput || products[i].type === sortByInput2){
           
            clothesProducts.push(products[i]);
            
        } else if(sortByInput === "collection"){
            console.log(' collection found!');
            clothesProducts.push(products[i]);}
    }

    console.log(clothesProducts);
    
    


    // display collection products 
    let htmlGenerator = '';
    clothesProducts.forEach((item) => {
     htmlGenerator += ` <div class="productWrapper" style="--url: url(${item.image});">

                    <div class="productInfo">
                        <h2>${item.name}</h2>
                        <span>${item.price}</span>
                    </div>
                </div>`;

                CollectionDiv.innerHTML= htmlGenerator;

    })
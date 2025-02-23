
/* 10. Filter by Category.
Write a function that takes an array of products and returns a function that filters the array by a given product
category. The function must filter an eCommerce products array by a specific category. The closure filters
products using the filter() method. Finally, it returns a new array containing only the products with the same
category as the input. */

function productArray(products){
    return function(productCategory){
            return products.filter((p)=>{return p.category === productCategory})
    }


}

const products=[
    {name:"Shirts", category:"clothing"},
    {name:"jeans",category:"clothing"},
    {name:"samsung",category:"Mobile"}
]

const productCategory=productArray(products)
const sortByCategory=productCategory("clothing")
console.log(sortByCategory)



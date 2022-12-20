import React from 'react'
import ItemCard from './ItemCard'



const ItemsDiv = () => {
    const entity =[
        {
         id:'123',
         sale:true,
         details:'this is a test details',
         image:'source/images/shop/products/product-1.jpg',
         price:200,
         name:'Reef Boardsport'
        },
        {
            id:'1234',
            sale:true,
            details:'this is a test details',
            image:'source/images/shop/products/product-2.jpg',
            price:200,
            name:'Reef Boardsport'
           },
           {
            id:'1235',
            sale:false,
            details:'this is a test details',
            image:'source/images/shop/products/product-3.jpg',
            price:200,
            name:'Reef Boardsport'
           },
           {
            id:'1236',
            sale:false,
            details:'this is a test details',
            image:'source/images/shop/products/product-4.jpg',
            price:200,
            name:'Reef Boardsport'
           },
           {
            id:'1237',
            sale:false,
            details:'this is a test details',
            image:'source/images/shop/products/product-5.jpg',
            price:200,
            name:'Reef Boardsport'
           },
           {
            id:'1238',
            sale:false,
            details:'this is a test details',
            image:'source/images/shop/products/product-6.jpg',
            price:200,
            name:'Reef Boardsport'
           },
]
  return (
    <>
    <section class="products section bg-gray">
	<div class="container">
		<div class="row">
			<div class="title text-center">
				<h2>Trendy Products</h2>
			</div>
		</div>
    <div class="row">
        {
            entity.length && entity.map((entityItem)=>{
                return(<ItemCard entity={entityItem}/> )
            })
        }
		

		</div>
        </div>
</section>
    </>
  )
}

export default ItemsDiv
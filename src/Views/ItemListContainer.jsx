import React from 'react'
import ProductCard from '../Components/ProductCard/ProductCard'

//Import css from navBar
import '../Components/NavBar/navBar.css'

const ItemListContainer = () => {
  return (
    <>
        <div className='card__grid'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </>
  )
}

export default ItemListContainer
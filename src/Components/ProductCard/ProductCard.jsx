import React from 'react'

//Import css
import './productCard.css'

const ProductCard = () => {
  return (
    <>
        <div className='card__container'>
            <div className='product__image'>
                <img src='https://panel.drasanvi.com/img/products/032050326.png' />
            </div>
            <div className='product__name'>
                <h2>name</h2>
            </div>
            <div className='product__desc'>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Soluta obcaecati nostrum veniam et officiis!</h3>
            </div>
            <div>View Product</div>
        </div>
    </>
  )
}

export default ProductCard
import React from 'react'
import { useContext } from 'react'
import ShopItems from './ShopItems'
import { ProductContext } from '../../context/products.context'

function Shop() {

  const {products} = useContext(ProductContext)
  console.log('products :', products);

  const shopItems = products.map((item) => {
    return (
      <ShopItems key={item.id} item={item}/>
    )
  })

  return (
    <div>
      {shopItems}
    </div>
  )
}

export default Shop
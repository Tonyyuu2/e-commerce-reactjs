import React from 'react'
import ShopItems from './ShopItems'

import SHOP_DATA from '../../shop-data/shop-data.json'

function Shop() {

  const shopItems = SHOP_DATA.map((item) => {
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
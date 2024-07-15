import React from 'react'
import Support from '../Support/Support'
import Search from '../Search/Search'
import Popular from '../PopularDrinks/Popular'
import Category from '../Category/Category'
import Ingredients from '../Ingredients/Ingredients'

function Home() {
  return (
    <div>
      <Support/>
      <Search/>
      {/* <Popular/> */}
      <Category/>
      <Ingredients/>
    </div>
  )
}

export default Home

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from "../Components/Title"
import ProductItem from './ProductItem'
const LatestCollections = () => {

  const {products} = useContext(ShopContext)
  // console.log(products);

  const [latestProducts, setLatestProducts] = useState([])
  useEffect(()=>{
    setLatestProducts(products.slice(0,10))
  },[])
  
  return (
    <div className='my-10'> 
    <div className="text-center py-8 text-3xl">
      <Title text1 = "Latest" text2 = "Collections"/>
      <p className='w-3/4 m-auto text-xs md:text-base text-gray-600'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam ipsam harum sapiente nobis minima quidem rem doloribus accusamus labore possimus quisquam dolore facilis at eius.
      </p>
    </div>
      {/* --------Rendering Products------ */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProducts.map((item, index)=>(
            <ProductItem key={index} id={item._id} image = {item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollections



import { getData } from "../helper";
import Container from "./Container"

import ProductsCard from "./ProductsCard"


const ProductItem = async() => {

  const endPoint = "http://localhost:3000/api/allproducts";
  const products = await getData(endPoint)
  const product = products.allData;

  // console.log("product", product)

  const filterData = product.filter((item) => item.category === "Earphones" )

  console.log("filterdata", filterData)


   
  return (
    <Container className={"mt-4"}>
        <h1 className="text-xl font-semibold text-black">All Tranding Products</h1>
    

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
      {
            product.map((item, index) => (
                <ProductsCard key={index}  product={item}/>
            ))
        }
      </div>
    </Container>
  ) 
}

export default ProductItem
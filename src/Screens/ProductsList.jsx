import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native"
import ProductsView from "../Components/products";
import { Products } from "../Services/Products";

const ProductsList=()=>{
    const[ProductData,setProductData]=useState([])
    const [loading,setloading]=useState(false)
    useEffect(() => {
      setloading(false)
        Products.getProductsList()
        .then((products) => {
          setProductData(products.data)
        //    console.log('Products list:', products.data);
        setloading(false)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
         
        }).finally(()=>{
          setloading(false)
        })
      }, []);
    return(
      <View>
      
      <ProductsView loading={loading} data={ProductData} heading='Product Listing'/>
       
      </View>
    )
}
export default ProductsList
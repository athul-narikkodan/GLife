import { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native"
import ProductsView from "../Components/products";
import { Products } from "../Services/Products";


const Categories=()=>{
    const[CategoryData,setCategoryData]=useState([])
    useEffect(() => {
        Products.getProductsByCategory()
        .then((products) => {
            setCategoryData(products.data)
           console.log('Products list:', products.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
      }, []);
return(
  <View>
    <ProductsView data={CategoryData} heading='Category Listing'/>
  </View>
)
    }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    width: '100%',
  },
});


export default Categories
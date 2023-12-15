import { View,Text, SafeAreaView } from "react-native"
 import Header from "./Screens/Header"
import Categories from "./Screens/Categories"
import ProductsList from "./Screens/ProductsList"
// import Categories from "./Screens/Categories"
// import ProductsList from "./Screens/ProductsList"

 const HomeScreen=()=>{
   return (
    <View>
      <Header/>
      <Categories/>
      <ProductsList/>
    </View>
   )
}
export default HomeScreen
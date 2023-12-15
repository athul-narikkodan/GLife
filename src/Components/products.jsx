import { ActivityIndicator, FlatList, Image, Text, View } from "react-native"
const ProductsView=({data,heading,loading})=>{
    console.log(data,heading)
    const renderFunction = (item) => {
      console.log("item", item,heading);
    
      return (
        heading === 'Category Listing' ? (
          <View style={{ margin: 10 }}>
            <Text>{item.item}</Text>
          </View>
        ) :(
          <View style={{ margin: 10 }}>
             <Image
                source={{uri:item.item.image}}
                style={{height:140,width:100}}
            />
                <Text style={{color:'black',fontSize:16,marginTop:15}}>{item.item.category}</Text>
          </View>
        )
      );
    };
    return(
      <>
  {loading?
  <ActivityIndicator/>:<View style={{paddingTop:14,paddingRight:24,paddingLeft:20}}>
            <Text style={{fontSize:20,color:'black',}}>{heading}</Text>
            <FlatList
                data={data}
                renderItem={renderFunction}
                horizontal={true}
            />
        </View>}
      </>
      
    )
}
export default ProductsView
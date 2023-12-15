import { useState } from "react"
import { Image, Text, TextInput, View } from "react-native"

const Header=()=>{
    const [search,setSearch]=useState('')
    const handleSearchChange = (text) => {
        setSearch(text);
      };
    return(
        <View >
  <View style={{flexDirection:'row',backgroundColor:'#f2bf30',height:"auto",paddingBottom:20,alignContent:'center',justifyContent:'center',paddingTop:20}}>
            <Image
                source={require('../Assets/logo.png')}
                style={{height:30,width:25,marginTop:20}}
            />
            <View style={{marginLeft:20,width:'80%',flexDirection:'column'}}>
            <Text style={{color:'black',fontFamily:'bold'}}>Deliver to : Your Location Name</Text>
            <View style={{marginTop:13,flexDirection:'row', borderColor: 'gray',
          borderWidth: 1,
          paddingLeft: 10,alignItems:'center',borderRadius:8,backgroundColor:'white'}}>
                <Image source={require('../Assets/Searchicon.png')} style={{height:15,width:14}}/>
                <TextInput
        style={{
          height: 40,
          width:'auto'
        }}
        placeholder="Search"
        value={search}
        onChangeText={handleSearchChange}
      />
            </View>
            </View>
        </View>
        </View>
      
    )
  
}
export default Header

import React, { useEffect , useState } from 'react';

import {
    FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HookEffet =()=>{ 

    const [myuserdata , setMyUserdata] = useState();
    const [isloading , setIsLoading] = useState();

    const Getuserdata = async() =>{
          try {
          const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
          const mydata = await response.json();
          setMyUserdata(mydata);
          setIsLoading(false);
          } catch (error) {
            console.log(mydata)
          }
    }

    useEffect(()=>{

     Getuserdata();

    }, []);

  return ( 
    <View>
       <FlatList 
         data={myuserdata}
         renderItem = {({item})=>{
            return(
                <ScrollView>
                <View style = {{marginBottom : 10 , marginLeft : 130, marginTop : 45}}>
                <Text style = {{color : 'black', fontWeight : 'bold'}}>
                {item.name}
                </Text>
                <Text style = {{color : 'black', fontWeight : 'bold'}}>
                {item.email}
                </Text>
                <Text style = {{color : 'black', fontWeight : 'bold'}}>
                {item.mobile}
                </Text>
                </View>
                </ScrollView>
            );
         }}
       />
    </View>
  )
}
const styles = StyleSheet.create({
  
});

export default HookEffet;

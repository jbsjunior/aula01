import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const Pockemon = () => {
return (
  <ScrollView>
      <View>
      <Text
          style={{
          fontSize: 45,
          alignSelf: "center",
          color: "green",
          
        }}
      >
        Thor
      </Text>
    <Image 
    source={require('./assets/thor.jpg') }
    style={{ width: 200, height: 210, alignSelf: "center", backGround:"green" }}
    />
    </View>
    <TextInput
      style={{
         borderColor:'gray',
         borderWidth:1,
         backGround:"cyan",
         padding:5,
         margin:1, 
      }}

      defaultValue="Digite aquiii!"
      />
  </ScrollView>
  );
 }

 export default Pockemon;

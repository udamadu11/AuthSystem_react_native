import React from 'react';
import { View , Text , TextInput } from 'react-native';

const Input = ({label,value,onChangeText,placeholder,secureTextEntry}) => {
  const {inputStyle,labelStyle,containerStyle} = styles;
  return(
    <View style={containerStyle}>
        <Text style={labelStyle}>{label }</Text>
        <TextInput
          autoCorrect = {false}
          placeholder = {placeholder}
          style={inputStyle}
          value = {value}
          onChangeText = {onChangeText}
          secureTextEntry = {secureTextEntry}
        />
    </View>
  );
};

const styles = {
  inputStyle:{
    color:'#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    flex:1
  },
  containerStyle:{
    height: 40,
    flex:1,
    flexDirection:'row',
    align:'center'
  }

}
export { Input };

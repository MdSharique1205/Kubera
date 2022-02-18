import React from "react";
import {Text, View, StyleSheet, useState} from 'react-native';

// font-size , fontSize

// states
const red = ['one','two','three'];
const [var1,var2,var3] = red;

// 
const [colort,setColor] = useState('red');


const TempScreen = () =>{
    return (
        <View>
            <Text style = {{color: colort}}>Hello World</Text>
            <Button 
            title = 'Change color'
            onPress = {()=>{
                setColor('green')
            }}
            />
        </View>
    )
}

export default TempScreen; 
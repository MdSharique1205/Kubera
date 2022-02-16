import React from "react";
import {Text, View, Button, StyleSheet} from 'react-native';

const ColorScreeen = () =>{
    return(
        <View>
            <Button title = "Add Color"/>
            <View style ={{height: 100,width: 100, backgroundColor: RandomRgb()}}></View>
        </View>
    )
}

const RandomRgb = () => {
    const red = Math.trunc(Math.random()*256);
    const green = Math.trunc(Math.random()*256);
    const blue = Math.trunc(Math.random()*256);
    return `rgb(${red},${green}, ${blue})`
}
const style = StyleSheet.create({})

export default ColorScreeen;

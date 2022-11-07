import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

function PureButton({ title, onPress, width, bgColor, titleColor, titleStyle}) {
    return (
        <View style={{ alignItems: 'center', width: width, flex: 1 ,alignSelf:'center'}}>
          
          <TouchableOpacity style={[styles.commonStyle, { width: width, backgroundColor: bgColor }]} onPress={onPress}>
          {/* {
            icon == ' ' ?
              null
              : <View style={{alignSelf: 'center'}}>
                  <Icons.FontIcon name={icon?.iconName} size={icon?.iconSize} color={icon?.iconColor}/>
                </View>
          } */}
            <Text style={[ { color: titleColor,  padding: 15 ,fontSize:20}]}>{title}</Text>
          </TouchableOpacity>
        </View> 
      )
}

export default PureButton

const styles = StyleSheet.create({
    commonStyle: {
        borderRadius: 10,
        margin: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      }
})
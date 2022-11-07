import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
const EventListPage = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <Text>EventListPage</Text>
      <TouchableOpacity  style={styles.fabBtnStyle} onPress = {()=> navigation.navigate("NewEventScreen")} >
      <Icon  name="md-add-circle-outline" size={60}
        color="green" style={styles.fabBtnStyle}/>
        </TouchableOpacity>
    </View>
  )
}

export default EventListPage

const styles = StyleSheet.create({
  fabBtnStyle: {
 // marginBottom:20,
  // justifyContent:'flex-end',
  // marginBottom:"50%",
  // bottom:0
  position: "absolute", bottom: 10, right: 10
  },
})
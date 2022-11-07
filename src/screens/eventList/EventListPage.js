import { StyleSheet, Text, TouchableOpacity, View, AsyncStorage, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
const EventListPage = ({ navigation }) => {
  const [eventList, setEventlist] = useState([])
  const [setlist, setTodolist] = useState([
    {"daily": false, "endDate": "2022-11-24T17:41:56.830Z", "eventDescription": "33", "eventName": "33", "monthly": false, "single": false, "startDate": "2022-11-15T17:41:56.830Z", "weekly": true, "yearly": false}

  ])

  useEffect(() => {
    console.log("ghjkl")
    getdata()
    setTimeout(() => {
      console.log("eventList eventList", eventList)
    }, 1000);
  }, [])
  const getdata = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('NewEventCreate')
      console.log("objaect", jsonValue)
      setTodolist(jsonValue)
      console.log("event list--------------------,", eventList)
      const parsedata = JSON.parse(jsonValue)
      console.log("parsedata", parsedata)
      setEventlist(parsedata)
      console.log("event list--------------------,", eventList.eventName)
      return setEventlist(parsedata)

    } catch (e) {
      // read error
    }
  }
  const renderItem = ({ item, index }) => {
    console.log("item in list", index)
    return (
      <View>
        <Text>{item.eventName}</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <Text>EventListPage</Text>
      <TouchableOpacity style={styles.fabBtnStyle} onPress={() => navigation.navigate("NewEventScreen")} >
        <Icon name="md-add-circle-outline" size={60}
          color="green" style={styles.fabBtnStyle} />
      </TouchableOpacity>
      <View>
        <FlatList
          data={setlist}
          renderItem={renderItem}
        />

      </View>


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
import { StyleSheet, Text, TouchableOpacity, View, AsyncStorage, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/AntDesign'
import moment from 'moment'
import { useIsFocused } from '@react-navigation/native';
const EventListPage = ({ navigation }) => {
  const [eventList, setEventlist] = useState([])
  const focus = useIsFocused()
  useEffect(() => {
    getdata()
  }, [focus])
  const getdata = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('NewEventCreate')
      console.log("objaect", jsonValue)
      const value = JSON.parse(jsonValue)
      //value.reverse()
      console.log("qwerfwe",value)
      setEventlist(value)
    } catch (e) {
      console.log(e)
    }
  }
  const renderItem = ({ item }) => {
    console.log("item list12wqedsdf",item)
    return (
      <View style={styles.cardViewStyle}>
        <TouchableOpacity onPress={() => navigation.navigate("EventDetailsScreen", { item: item })}>
          <View style={styles.listViewStyle}>
            <Text style={styles.textStyle}>Event Name : </Text>
            <Text style={{ color: 'black' }}>{item.eventName}</Text>
          </View>
          <View style={styles.listViewStyle}>
            <Text style={styles.textStyle}>Event Start Date : </Text>
            <Text style={{ color: 'black' }}>{moment(item.startDate).format("L")}</Text>
          </View>
          <View style={styles.listViewStyle}>
            <Text style={styles.textStyle}>Event End Date : </Text>
            <Text style={{ color: 'black' }}>{moment(item.endDate).format("L")}</Text>
          </View>
          <View style={styles.listViewStyle}>
            <Text style={styles.textStyle}>Event type :</Text>
            <View>
              {item.single == true ? <Text style={[styles.eventTextStyle]}>Single</Text> : null}
              {item.daily == true ? <Text style={[styles.eventTextStyle]}>Daily</Text> : null}
              {item.monthly == true ? <Text style={[styles.eventTextStyle]}>Monthly</Text> : null}
              {item.weekly == true ? <Text style={[styles.eventTextStyle]}>Weekly </Text> : null}
              {item.yearly == true ? <Text style={[styles.eventTextStyle]}>Yearly</Text> : null}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={eventList}
        renderItem={(item)=>renderItem(item)}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate("NewEventScreen")} >
        <Icon name="md-add-circle-outline" size={60}
          color="blue" style={styles.navigationButton} />
      </TouchableOpacity>
    </View>
  )
}

export default EventListPage

const styles = StyleSheet.create({
  navigationButton: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  cardViewStyle: {
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 10,
    shadowRadius: 5.0,
    elevation: 4,
    width: '95%',
    alignSelf: "center",
    marginTop: 10
  },
  listViewStyle: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    color: 'blue',
    fontWeight: 'bold'
  },
  eventTextStyle: {
    paddingHorizontal: 10
  },
})
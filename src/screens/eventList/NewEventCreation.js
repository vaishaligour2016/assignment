import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, AsyncStorage, Alert } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons'
import PureButton from '../../components/PureButton';

const NewEventCreation = (props) => {
    const [eventName, setEventName] = useState("");
    const [eventDescription, setDescription] = useState("");
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [isEndtDatePickerVisible, setEndDatePickerVisibility] = useState(false);
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [isSingleSelected, setSingleSelected] = useState(false);
    const [isDailySelected, setDailySelected] = useState(false);
    const [isWeeklySelected, setWeeklySelected] = useState(false);
    const [isMonthlySelected, setMonthlySelected] = useState(false);
    const [isYearlySelected, setYearlySelected] = useState(false);
    const [storeData, setStoreData] = useState()
    const StartDateConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setStartDate(date)
        setStartDatePickerVisibility(false);
    };
    const EndDateConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setEndDate(date)
        setEndDatePickerVisibility(false);
    };
    const newEventCreation = async () => {
        if (!eventName) {
            Alert.alert("Alert",'Please Enter Event Name');
             return;
        }
        if (!startDate) {
            Alert.alert("Alert",'Please select start date');
            return;
        }
        if (!endDate) {
            Alert.alert("Alert",'Please select end date');
            return;
        }
        const storeLocal = {}
        storeLocal.eventName = eventName
        storeLocal.eventDescription = eventDescription
        storeLocal.startDate = startDate
        storeLocal.endDate = endDate
        storeLocal.single = isSingleSelected
        storeLocal.daily = isDailySelected
        storeLocal.weekly = isWeeklySelected
        storeLocal.monthly = isMonthlySelected
        storeLocal.yearly = isYearlySelected
        await AsyncStorage.getItem('NewEventCreate').then((itemValue) => {
            let resObject = JSON.parse(itemValue);
            let objectvalue = []
            if (resObject !== null) {
                console.log("get", resObject)
                resObject.push({ eventName: eventName, eventDescription: eventDescription, startDate: startDate, endDate: endDate, single: isSingleSelected, daily: isDailySelected, weekly: isWeeklySelected, monthly: isMonthlySelected, yearly: isYearlySelected })
                const a = AsyncStorage.setItem('NewEventCreate', JSON.stringify(resObject))
                props.navigation.navigate("DrawerNavigationRoutes")
            }
            else {
                console.log("3456789")
                AsyncStorage.setItem('NewEventCreate', JSON.stringify(storeLocal))
                props.navigation.navigate("DrawerNavigationRoutes")
            }
        })
    }
    return (
        <View>
            <ScrollView>
                <View>
                    <Text style={styles.text}>Event Name</Text>
                    <TextInput
                        placeholder='Please event name'
                        style={styles.textInput}
                        onChangeText={(Eventname) => [setEventName(Eventname)]}
                        maxLength={30} />
                </View>
                <View>
                    <Text style={styles.text}>Event Description</Text>
                    <TextInput
                        multiline={true}
                        placeholder='Please event description'
                        style={styles.textInput}
                        onChangeText={(Eventname) => [setDescription(Eventname)]} />
                </View>
                <View>
                    <Text style={styles.text}>Start Date</Text>
                    <TouchableOpacity onPress={() => setStartDatePickerVisibility(true)} style={{}}>
                        <View style={[styles.textInput]}>
                            <DateTimePickerModal
                                isVisible={isStartDatePickerVisible}
                                mode="date"
                                onConfirm={(date) => StartDateConfirm(date)}
                                onCancel={() => setStartDatePickerVisibility(false)}
                                value={startDate}
                                minimumDate={new Date()}
                            />
                            <View>
                                {startDate ?
                                    <Text style={{ fontSize: 15, padding: 14 }}>{moment(startDate).format('DD/MM/YYYY')}</Text> : <Text style={{ fontSize: 15, padding: 14 }}>dd/mm/yyyy</Text>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text}>End Date</Text>
                    <TouchableOpacity onPress={() => setEndDatePickerVisibility(true)} >
                        <View style={[styles.textInput]}>
                            <DateTimePickerModal
                                isVisible={isEndtDatePickerVisible}
                                mode="date"
                                onConfirm={(date) => EndDateConfirm(date)}
                                onCancel={() => setEndDatePickerVisibility(false)}
                                value={endDate}
                                minimumDate={new Date()}
                            />
                            <View>
                                {endDate ?
                                    <Text style={{ fontSize: 15, padding: 14 }}>{moment(endDate).format('DD/MM/YYYY')}</Text> : <Text style={{ fontSize: 15, padding: 14 }}>dd/mm/yyyy</Text>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={styles.text}>Recurrence type</Text>
                <View style={{ flexDirection: 'row', marginBottom: 5, marginTop: 20 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setSingleSelected(!isSingleSelected)
                            }}
                            style={styles.checkBox}>
                            {isSingleSelected ? (<Icon name="checkmark-sharp" size={18} style={{ width: 20, height: 20 }} />) : null}
                        </TouchableOpacity>
                        <Text>Single</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%' }}>
                        <TouchableOpacity
                            onPress={() => { setDailySelected(!isDailySelected) }}
                            style={styles.checkBox}>
                            {isDailySelected ? (<Icon name="checkmark-sharp" size={18} style={{ width: 15, height: 15 }} />) : null}
                        </TouchableOpacity>
                        <Text>Daily</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%' }}>
                        <TouchableOpacity
                            onPress={() => { setWeeklySelected(!isWeeklySelected) }}
                            style={styles.checkBox}>
                            {isWeeklySelected ? (<Icon name="checkmark-sharp" size={18} style={{ width: 15, height: 15 }} />) : null}
                        </TouchableOpacity>
                        <Text>Weekly</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%' }}>
                        <TouchableOpacity
                            onPress={() => { setMonthlySelected(!isMonthlySelected) }}
                            style={styles.checkBox}>
                            {isMonthlySelected ? (<Icon name="checkmark-sharp" size={18} style={{ width: 15, height: 15 }} />) : null}
                        </TouchableOpacity>
                        <Text>Monthly</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%' }}>
                        <TouchableOpacity
                            onPress={() => { setYearlySelected(!isYearlySelected) }}
                            style={styles.checkBox}>
                            {isYearlySelected ? (<Icon name="checkmark-sharp" size={18} style={{ width: 15, height: 15 }} />) : null}
                        </TouchableOpacity>
                        <Text>yearly</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <PureButton
                        title="Create New Event"
                        //onPress={()=>props.navigation.navigate("DrawerNavigationRoutes")}
                        onPress={() => newEventCreation()}
                        width="80%"
                        bgColor={"blue"}
                        titleColor={"white"}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default NewEventCreation

const styles = StyleSheet.create({
    textInput: {
        borderColor: "gray",
        borderRadius: 10,
        borderWidth: 1,
        width: "90%",
        alignSelf: 'center',
        marginTop: 15
    },
    text: {
        marginLeft: 20,
        marginTop: 20,
        color: "blue",
        fontWeight: "bold",
        fontSize: 17
    },
    CheckboxTouchableSelected: {
        height: ('100%'),
        width: ('100%'),
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
    },
    CheckboxTouchable: {
        height: ('100%'),
        width: ('100%'),
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
    },
    checkBox: {
        height: 20,
        width: 20,
        borderRadius: 2,
        backgroundColor: "white",
        borderWidth: 0.5,
        //borderColor: Color.orangeBackground,
        // alignItems: "center",
        // justifyContent: "center",
        //marginLeft: "10%",
    },
})
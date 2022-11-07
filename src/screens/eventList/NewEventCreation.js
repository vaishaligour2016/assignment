import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons'

const NewEventCreation = () => {
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
    const [isEndtDatePickerVisible, setEndDatePickerVisibility] = useState(false);
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [isSelected, setSelection] = useState(false);
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
    return (
        <SafeAreaView style={{  flex: 1,}}>
            <ScrollView style={{backgroundColor: 'pink',
    marginHorizontal: 20,height:'100%'}}>
            <Text style={styles.text}>Event Name</Text>
            <TextInput
                placeholder='Please event name'
                style={styles.textInput} />
            <Text style={styles.text}>Event Description</Text>
            <TextInput
                placeholder='Please event description'
                style={styles.textInput} />
            <Text style={styles.text}>Start Date</Text>
            <TouchableOpacity onPress={() => setStartDatePickerVisibility(true)} style={{ height: "15%" }}>
                <View style={[styles.textInput, { height: '65%' }]}>
                    <DateTimePickerModal
                        isVisible={isStartDatePickerVisible}
                        mode="date"
                        onConfirm={(date) => StartDateConfirm(date)}
                        onCancel={() => setStartDatePickerVisibility(false)}
                        value={startDate}
                    />
                    <View>
                        {startDate ?
                            <Text style={{ fontSize: 15, padding: 14 }}>{moment(startDate).format('DD/MM/YYYY')}</Text> : <Text style={{ fontSize: 15, padding: 14 }}>dd/mm/yyyy</Text>
                        }
                    </View>
                </View>
            </TouchableOpacity>

            <Text style={styles.text}>End Date</Text>
            <TouchableOpacity onPress={() => setEndDatePickerVisibility(true)} style={{ height: "15%" }}>
                <View style={[styles.textInput, { height: '65%' }]}>
                    <DateTimePickerModal
                        isVisible={isEndtDatePickerVisible}
                        mode="date"
                        onConfirm={(date) => EndDateConfirm(date)}
                        onCancel={() => setEndDatePickerVisibility(false)}
                        value={endDate}
                    />
                    <View>
                        {endDate ?
                            <Text style={{ fontSize: 15, padding: 14 }}>{moment(endDate).format('DD/MM/YYYY')}</Text> : <Text style={{ fontSize: 15, padding: 14 }}>dd/mm/yyyy</Text>
                        }
                    </View>
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>Recurrence type</Text>
            
            <View style={{marginLeft:20,marginTop:15,flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => setSelection(!isSelected)} style={{width:"7%" ,height:'20%'}}>
                    <View style={isSelected ? [styles.CheckboxTouchableSelected, { backgroundColor: "blue" }] : [styles.CheckboxTouchable, { backgroundColor: 'blue' }]} >
                        {
                            isSelected ? <Icon name="checkmark-sharp" size={20} color={"white"} style={{ alignItems: 'center' }} /> : null
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{}}>Single</Text>
                <TouchableOpacity onPress={() => setSelection(!isSelected)} style={{width:"7%" ,height:'20%'}}>
                    <View style={isSelected ? [styles.CheckboxTouchableSelected, { backgroundColor: "blue" }] : [styles.CheckboxTouchable, { backgroundColor: 'blue' }]} >
                        {
                            isSelected ? <Icon name="checkmark-sharp" size={20} color={"white"} style={{ alignItems: 'center' }} /> : null
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{}}>Daily</Text>
                <TouchableOpacity onPress={() => setSelection(!isSelected)} style={{width:"7%" ,height:'20%'}}>
                    <View style={isSelected ? [styles.CheckboxTouchableSelected, { backgroundColor: "blue" }] : [styles.CheckboxTouchable, { backgroundColor: 'blue' }]} >
                        {
                            isSelected ? <Icon name="checkmark-sharp" size={20} color={"white"} style={{ alignItems: 'center' }} /> : null
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{}}>Weekly</Text>
            </View>
            {/* <View style={{marginLeft:20,marginTop:45,flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => setSelection(!isSelected)} style={{width:"7%" ,height:'20%'}}>
                    <View style={isSelected ? [styles.CheckboxTouchableSelected, { backgroundColor: "blue" }] : [styles.CheckboxTouchable, { backgroundColor: 'blue' }]} >
                        {
                            isSelected ? <Icon name="checkmark-sharp" size={20} color={"white"} style={{ alignItems: 'center' }} /> : null
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{}}>Single</Text>
                <TouchableOpacity onPress={() => setSelection(!isSelected)} style={{width:"7%" ,height:'20%'}}>
                    <View style={isSelected ? [styles.CheckboxTouchableSelected, { backgroundColor: "blue" }] : [styles.CheckboxTouchable, { backgroundColor: 'blue' }]} >
                        {
                            isSelected ? <Icon name="checkmark-sharp" size={20} color={"white"} style={{ alignItems: 'center' }} /> : null
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{}}>Daily</Text>
                <TouchableOpacity onPress={() => setSelection(!isSelected)} style={{width:"7%" ,height:'20%'}}>
                    <View style={isSelected ? [styles.CheckboxTouchableSelected, { backgroundColor: "blue" }] : [styles.CheckboxTouchable, { backgroundColor: 'blue' }]} >
                        {
                            isSelected ? <Icon name="checkmark-sharp" size={20} color={"white"} style={{ alignItems: 'center' }} /> : null
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{}}>Weekly</Text>
            </View> */}
            
            </ScrollView>
        </SafeAreaView>
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
})
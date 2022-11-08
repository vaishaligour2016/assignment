import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment'
const EventDetailscreen = (props) => {
    const { item } = props.route.params
    console.log("ityrm",item)
    return (
        <View style={styles.cardViewStyle}>
            <View style={styles.eventDetailsStyle}>
                <Icon name="event-seat" size={25} color={"blue"} style={{ paddingHorizontal: 10 }} />
                <Text style={styles.namestyle}>Event Name:</Text>
                <Text style={styles.eventTextStyle}>{item.eventName}</Text>
            </View>
            <View style={styles.eventDetailsStyle}>
                <Icon name="description" size={25} color={"blue"} style={{ paddingHorizontal: 10 }} />
                <Text style={styles.namestyle}>Event Description:</Text>
                <Text style={styles.eventTextStyle}>{item.eventDescription}</Text>
            </View>
            <View style={styles.eventDetailsStyle}>
                <Icon name="calendar-today" size={25} color={"blue"} style={{ paddingHorizontal: 10 }} />
                <Text style={styles.namestyle}>Start Date:</Text>
                <Text style={styles.eventTextStyle}>{moment(item.startDtae).format("L")}</Text>
            </View>
            <View style={styles.eventDetailsStyle}>
                <Icon name="perm-contact-calendar" size={25} color={"blue"} style={{ paddingHorizontal: 10 }} />
                <Text style={styles.namestyle}>End Date:</Text>
                <Text style={styles.eventTextStyle}>{moment(item.endDate).format("l")}</Text>
            </View>
            <View style={[styles.eventDetailsStyle, { paddingBottom: 20 }]}>
                <Icon name="view-week" size={25} color={"blue"} style={{ paddingHorizontal: 10 }} />
                <Text style={styles.namestyle}>Recurrence Type:</Text>
                <View>
                {item.single == true ? <Text style={[styles.eventTextStyle]}>Single</Text> : null}
                {item.daily == true ? <Text style={[styles.eventTextStyle]}>Daily</Text> : null}
                {item.monthly == true ? <Text style={[styles.eventTextStyle]}>Monthly</Text> : null}
                {item.weekly == true ? <Text style={[styles.eventTextStyle]}>Weekly </Text> : null}
                {item.yearly == true ? <Text style={[styles.eventTextStyle]}>Yearly</Text> : null}
                </View>
            </View>
        </View>
    )
}

export default EventDetailscreen

const styles = StyleSheet.create({
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
        marginTop: 10,
    },
    eventDetailsStyle: {
        flexDirection: 'row',
        marginTop: 20
    },
    eventTextStyle: {
        fontSize: 17,
        paddingHorizontal: 10
    },
    namestyle: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 17,
        paddingHorizontal: 15
    }
})
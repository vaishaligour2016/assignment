import { StyleSheet, Text, View ,KeyboardAvoidingView,TextInput,Keyboard,TouchableOpacity, ScrollView,Alert,AsyncStorage} from 'react-native'
import React ,{useState,createRef,useEffect} from 'react'
const UserRegistrationForm = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState();
  const nameInputRef = createRef();
  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef()
  useEffect(() => {
    async function fetchData() {
      const value = await AsyncStorage.getItem("allTextValue")
   console.log("567890kjh",value)
   setIsRegistraionSuccess(value)
      // ...
    }
    fetchData();
  }, []);
  const handleSubmitButton = () => {
    console.log("ggjghjhhjhjk")
    setErrortext('');
    const strongRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^[0]?[789]\d{9}$/
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    if (!userName) {
      Alert.alert('Please fill Name');
      return;
    }
    if (strongRegex.test(userEmail)=== false) {
      if(!userEmail){
        Alert.alert("pleae thern e mail")
      }
      else{
        Alert.alert("please enter valid email")
      }
      
      return;
    } 
    if(phoneRegex.test(userNumber) === false) {
      Alert.alert("please enter valid phone number")
    }
    if (passwordRegex.test(userPassword) === false) {
      Alert.alert("please enter rhrh3rj")
    }
    const storeLocal = {}
    storeLocal.userName= userName
    storeLocal.userEmail = userEmail
    storeLocal.userNumber = userNumber
    storeLocal.userPassword = userPassword
    console.log("stedjwhdjfjfcsnckashc",storeLocal)
        const a = AsyncStorage.setItem('allTextValue', JSON.stringify(storeLocal))
        console.log("kfkkfk",a)
        props.navigation.navigate("DrawerNavigationRoutes")
  };

    return (
      <View>
      <Text style={{alignSelf:'center',fontSize:30,marginTop:"20%"}}>Registration</Text>
      <ScrollView>
      <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserName) => [setUserName(UserName)]}
                underlineColorAndroid="#f000"
                placeholder="Enter Name"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                ref={emailInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  ageInputRef.current && ageInputRef.current.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserNumber) => setUserNumber(UserNumber)}
                underlineColorAndroid="#f000"
                placeholder="Enter Phone Number"
                placeholderTextColor="#8b9cb5"
                keyboardType="numeric"
                ref={ageInputRef}
                returnKeyType="next"
                onSubmitEditing={() =>
                  addressInputRef.current && addressInputRef.current.focus()
                }
                blurOnSubmit={false}
                maxLength={10}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                underlineColorAndroid="#f000"
                placeholder="Please Enter Password"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                maxLength={16}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          </ScrollView>
          </View>
    )
  
  
}

export default UserRegistrationForm

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
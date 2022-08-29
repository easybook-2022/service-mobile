import React, { useEffect, useState } from 'react';
import { SafeAreaView, Platform, View, Text, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, StyleSheet, Keyboard, Modal } from 'react-native';
import axios from 'axios'
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { loginUser, registerUser } from '../apis/owners'
import { ownerSigninInfo, translate } from '../../assets/info'
import { displayPhonenumber } from 'geottuse-tools'

import Loadingprogress from '../widgets/loadingprogress'

const { height, width } = Dimensions.get('window')
const wsize = p => {return width * (p / 100)}
let source

export default function Auth({ navigation }) {
  const [cellnumber, setCellnumber] = useState(ownerSigninInfo.cellnumber)
  const [password, setPassword] = useState(ownerSigninInfo.password)
  const [noAccount, setNoaccount] = useState(false)
  const [verifyCode, setVerifycode] = useState('')
  const [verified, setVerified] = useState(false)

  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrormsg] = useState('')

  const login = () => {
    const data = { cellnumber, password, worker: true, cancelToken: source.token }
    
    loginUser(data)
      .then((res) => {
        if (res.status == 200) {
          return res.data
        }
      })
      .then(async(res) => {
        if (res) {
          const { ownerid, locationid, locationtype, msg } = res

          AsyncStorage.setItem("ownerid", ownerid.toString())
          AsyncStorage.setItem("locationid", locationid ? locationid.toString() : "")
          AsyncStorage.setItem("locationtype", locationtype ? locationtype : "")
          AsyncStorage.setItem("phase", msg)
          AsyncStorage.setItem("language", "")
          AsyncStorage.setItem("userType", res.userType)

          navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: "picklanguage" }]}))
        }
      })
      .catch((err) => {
        if (err.response && err.response.status == 400) {
          const { errormsg, status } = err.response.data

          setErrormsg(errormsg)
        }
      })
  }
  const back = () => {
    setVerifycode('')
    setVerified(false)
    setNoaccount(false)
    setErrormsg('')
  }

  useEffect(() => {
    source = axios.CancelToken.source();

    return () => {
      if (source) {
        source.cancel("components got unmounted");
      }
    }
  }, [])

	return (
		<SafeAreaView style={styles.auth}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  			<View style={styles.box}>
          <View style={{ alignItems: 'center' }}>
            <Image style={styles.icon} source={require("../../assets/icon.png")}/>

            <Text style={styles.boxHeader}>Welcome to EasyBook Service</Text>
          </View>

          <View style={styles.inputsBox}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputHeader}>Cell phone number:</Text>
              <TextInput style={styles.input} secureTextEntry={false} onChangeText={(num) => setCellnumber(displayPhonenumber(cellnumber, num, () => Keyboard.dismiss()))} value={cellnumber} keyboardType="numeric" autoCorrect={false}/>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputHeader}>Password:</Text>
              <TextInput style={styles.input} secureTextEntry={true} onChangeText={(password) => setPassword(password)} secureTextEntry={true} value={password} autoCorrect={false}/>
            </View>

            <Text style={styles.errorMsg}>{errorMsg}</Text>

            <TouchableOpacity style={styles.submit} onPress={() => login()}>
              <Text style={styles.submitHeader}>Sign in</Text>
            </TouchableOpacity>
          </View>

          {loading && <Modal transparent={true}><Loadingprogress/></Modal>}
        </View>
      </TouchableWithoutFeedback>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	auth: { backgroundColor: 'white', height: '100%', paddingTop: Platform.OS == "ios" ? 0 : Constants.statusBarHeight, width: '100%' },
	box: { alignItems: 'center', height: '100%', paddingHorizontal: 10, width: '100%' },
  icon: { height: wsize(30), width: wsize(30) },
	boxHeader: { fontFamily: 'Chilanka_400Regular', fontSize: wsize(5), fontWeight: 'bold', marginVertical: '10%', textAlign: 'center' },

  inputsBox: { alignItems: 'center', width: '80%' },
  inputContainer: { marginBottom: 5, width: '100%' },
  inputHeader: { fontSize: wsize(6) },
  input: { backgroundColor: 'white', borderRadius: 3, borderStyle: 'solid', borderWidth: 2, fontSize: wsize(7), padding: 5, width: '100%' },

  errorMsg: { color: 'red', fontSize: wsize(5), textAlign: 'center' },

  submit: { borderRadius: 3, borderStyle: 'solid', borderWidth: 2, fontFamily: 'Chilanka_400Regular', padding: 10, width: wsize(50) },
  submitHeader: { fontFamily: 'Chilanka_400Regular', fontSize: wsize(5), fontWeight: 'bold', textAlign: 'center' },

  column: { flexDirection: 'column', justifyContent: 'space-around' },
})

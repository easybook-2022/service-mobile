import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import { tr } from './assets/translate'
import { useFonts, Chilanka_400Regular } from '@expo-google-fonts/chilanka';

// pages
import Auth from './src/pages/auth'
import Picklanguage from './src/pages/picklanguage'
import Authoption from './src/pages/authoption'
import Walkin from './src/pages/walkin'
import Main from './src/pages/main'
import Booktime from './src/pages/booktime'

import Cartorders from './src/pages/cartorders'

import Menu from './src/pages/menu'

const { height, width } = Dimensions.get('window')
const wsize = p => {return width * (p / 100)}

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontLoaded] = useFonts({ Chilanka_400Regular });
  const [route, setRoute] = useState(null)
  
  if (fontLoaded) {
    const retrieveId = async() => {
      const ownerid = await AsyncStorage.getItem("ownerid")
      const phase = await AsyncStorage.getItem("phase")
      const language = await AsyncStorage.getItem("language")

      if (ownerid) {
        if (phase) {
          if (language) {
            setRoute(phase)
          } else {
            setRoute("picklanguage")
          }
        } else {
          setRoute("auth")
        }
      } else {
        setRoute("auth")
      }
    }

    retrieveId()
    
    if (route != null && fontLoaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={route}>
            <Stack.Screen name="auth" component={Auth} options={{ headerShown: false }}/>
            <Stack.Screen name="picklanguage" component={Picklanguage} options={({ navigation, route }) => ({
              headerTitle: () => <Text style={styles.header}>Pick a language</Text>
            })}/>
            <Stack.Screen name="authoption" component={Authoption} options={{ headerShown: false }}/>
            <Stack.Screen name="walkin" component={Walkin} options={{ headerShown: false }}/>
            <Stack.Screen name="main" component={Main} options={{ headerShown: false }}/>
            <Stack.Screen name="booktime" component={Booktime} options={({ navigation, route }) => ({
              headerTitle: () => <Text style={styles.header}>{tr.t("booktime.header")}</Text>,
              headerLeft: () => (
                Platform.OS == 'ios' && (
                  <TouchableOpacity style={styles.back} onPress={() => {
                    
                    navigation.setParams({ num: "this is a number" })
                    navigation.goBack()
                  }}>
                    <Text style={styles.backHeader}>Go Back</Text>
                  </TouchableOpacity>
                )
              )
            })}/>
            <Stack.Screen name="cartorders" component={Cartorders} options={({ navigation, route }) => ({
              headerTitle: () => <Text style={styles.header}>{tr.t("orders.header")}</Text>,
              headerLeft: () => (
                Platform.OS == 'ios' && (
                  <TouchableOpacity style={styles.back} onPress={() => navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{ name: "main", params: { cartorders: true }}]
                    })
                  )}>
                    <Text style={styles.backHeader}>Go Back</Text>
                  </TouchableOpacity>
                )
              )
            })}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
  }

  return null
}

const styles = StyleSheet.create({
  header: { fontSize: wsize(5), fontWeight: 'bold' },
  back: { alignItems: 'center', borderRadius: 3, borderStyle: 'solid', borderWidth: 1, padding: 5, width: wsize(20) },
  backHeader: { fontSize: wsize(3), fontWeight: 'bold' },
});

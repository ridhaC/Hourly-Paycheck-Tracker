import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import colorSheet from './assets/color-sheet'

let userColorSheet = colorSheet.darkTheme;

const toggleColorSheet = () => {
  userColorSheet = userColorSheet == colorSheet.darkTheme ? colorSheet.lightTheme : colorSheet.darkTheme;
}

function getTimeString(date) {
  var hour = date.getHours() % 12 == 0 ? 12 : date.getHours() % 12;
  var mins = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return hour + ":" + mins;
}

export default function App() {
  const [clockInTime, setClockInTime] = useState(getTimeString(new Date()));
  const [currentTime, setCurrentTime] = useState(getTimeString(new Date()));
  
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.trackingWrapper}>
        <Text style = {styles.trackingHeader}>Working Since</Text>
        <View style = {styles.bigTimeWrapper}>
          <Text style = {styles.bigTime}>{clockInTime}</Text>
          <Text style = {styles.bigTimeMeridiem}>pm</Text>
        </View>
        <View style = {styles.smallTimeWrapper}>
          <Text style = {styles.smallTime}>{currentTime}</Text>
          <Text style = {styles.smallTimeMeridiem}>pm</Text>
        </View>
        <View style = {styles.dollarWrapper}>
          <Text style = {styles.dollar}>$</Text>
          <Text style = {styles.payTotal}>12.50</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:userColorSheet.background 
  },
  trackingWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 290,
    backgroundColor: userColorSheet.alternativeBackground,
    borderRadius: 20
  },
  trackingHeader: {
    color: userColorSheet.text,
    fontSize: 36,
    fontFamily: 'Roboto',
    paddingVertical: 10
  },
  bigTimeWrapper: {
    flexDirection: 'row',
  },
  bigTime: {
    color: userColorSheet.text,
    fontSize: 48,
    textAlignVertical: 'bottom'
  },
  bigTimeMeridiem: {
    color: userColorSheet.text,
    fontSize: 24,
    textAlignVertical: 'bottom',
    bottom: 0
  },
  smallTimeWrapper: {
    flexDirection: 'row',
  },
  smallTime: {
    color: userColorSheet.text,
    fontSize: 24,
    textAlignVertical: 'bottom'
  },
  smallTimeMeridiem: {
    color: userColorSheet.text,
    fontSize: 10,
    textAlignVertical: 'bottom',
  },
  dollarWrapper: {
    backgroundColor: userColorSheet.foreground,
    width: 225,
    height: 60,
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  dollar: {
    fontSize: 36,
    color: userColorSheet.text,
  },
  payTotal: {
    fontSize: 36,
    color: userColorSheet.text,
    
  }
});

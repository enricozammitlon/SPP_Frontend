import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,TextInput, Button } from '../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios'


export default function ModalScreen() {
  const [text, onChangeText] = React.useState("1c6f2106b83f");
  const [response, onChangeResponse] = React.useState(false);  
  const [verified, onChangeVerified] = React.useState(false);
  const [medium, onChangeMedium] = React.useState('Email');
  const [date, onChangeDate] = React.useState('16/09/2021');

  const fetchCode  = async (code : String) => {
    await axios.get('http://3.67.44.239/', {
      params: {
        spp_code: code,
        email : 'enrico.zammitl@gmail.com'
      }
    })
    .then(function (response) {
      const {date,verified,mode} = response.data
      onChangeResponse(true)
      onChangeVerified(verified)
      if(verified){
        onChangeDate(date)
        onChangeMedium(mode)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Use this page to confirm the code you received in your email, SMS or phonecall.</Text>
      <View>
        <TextInput style={styles.codeInput} placeholder='Enter code here' onChangeText={onChangeText}
          value={text}/>
        <Button 
        title = "Check Code"
        onPress = {() => fetchCode(text)}
        />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    {
      response 
      ? <View style={styles.container}>
        <Text style={styles.title}>What we know about this code</Text>
        <View style={styles.whatWeKnow}>
          <FontAwesome
              name='check'
              size={20}
              color={verified ? 'green' : 'red'}
            />
          <Text style={styles.title2}>It is {verified ? '' : 'not'} associated with your account</Text>
        </View>
        { verified ? [
          <View style={styles.whatWeKnow}>
            <FontAwesome
                name='question'
                size={20}
                color={'orange'}
              />
            <Text style={styles.title2}>It is associated with a/an {medium}</Text>
          </View>,
          <View style={styles.whatWeKnow}>
            <FontAwesome
                name='question'
                size={20}
                color={'orange'}
              />
            <Text style={styles.title2}>It was generated on {date}</Text>
          </View>] : <></>}
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={styles.subtitle}>If you believe you received this code and it was an attempt at phishing, please report it here below.</Text>
          <Button 
          title = "Report A Phishing Incident"
          onPress = {()=>{console.log(text)}}
          />
        </View>
      : <></>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:'100%'
  },
  whatWeKnow: {
    paddingHorizontal:10,
    flexDirection:'row',
    width:'100%',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  title: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: 'bold',
  },
  title2: {
    marginLeft:10,
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'normal',
  },
  subtitle: {
    marginBottom: 5,
    color: '#6D6D6D',
    fontSize: 15,
    padding:15
  },
  codeInput: {
    borderWidth:1,
    padding:10,
    margin:10,
    fontSize:20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

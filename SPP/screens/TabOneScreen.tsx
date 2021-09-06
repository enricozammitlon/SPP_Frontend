import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import QuickAccessComponent from '../components/QuickAccessComponent';

import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={styles.accountSummary}>
        <Text style={styles.title}>£21,000.00</Text>
        <Text style={styles.subtitle}>Current Account</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.accountSubSummary}>
          <View style={styles.textWithTitle}>
              <Text style={styles.subtitle}>Available</Text>
              <Text>£20,987.34</Text>
            </View>
            <View style={styles.textWithTitle}>
              <Text style={styles.subtitle}>Overdraft</Text>
              <Text>£2,500</Text>
            </View>
        </View>
      </View>
      <View style={styles.quickAccess}>
      <Text style={styles.title2}>Quick access</Text>
      </View>
      <View style={styles.quickAccess}>
        <QuickAccessComponent
          onPress={buttonClickedHandler}
          icon_name="list-ul"
          text="View Transactions"
          />
        <QuickAccessComponent
          onPress={buttonClickedHandler}
          icon_name="send"
          text="Make a Payment"
          />
      </View>
      <View style={styles.quickAccess}>
        <QuickAccessComponent
        onPress={buttonClickedHandler}
        icon_name="credit-card"
        text="Lost Card?"
        />
        <QuickAccessComponent
        onPress={() => navigation.replace('PhishingProtection')}
        icon_name="shield"
        text="Check Phishing"
        />      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  accountSummary: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    paddingVertical:10,
  },
  accountSubSummary: {
    paddingHorizontal:10,
    flexDirection:'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  payment: {
    width:'100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 900,
  },
  textWithTitle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  quickAccess: {
    padding:10,
    width:'100%',
    flexDirection:'row',
    backgroundColor:"#F6F6F6",
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  title2: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 5,
    color: '#6D6D6D',
    fontSize: 15,
  },
  separator: {
    margin:10,
    height: 1,
    width: '30%',
  }
});

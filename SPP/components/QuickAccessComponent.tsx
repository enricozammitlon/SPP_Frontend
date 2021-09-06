import * as React from 'react';
import { TouchableOpacity, TouchableOpacityProps,Text, View } from './Themed';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { StyleSheet } from 'react-native';

export default function QuickAccessComponent(props : TouchableOpacityProps & {'text':String ,'icon_name':String} ){
    const colorScheme = useColorScheme();
return(
    <View style={styles.container}>
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.roundButton}>
        <FontAwesome
              name={props.icon_name}
              size={30}
              color={Colors[colorScheme].tabIconSelected}
            />
      </TouchableOpacity>
      <Text>{props.text}</Text>
    </View>

)
}

const styles = StyleSheet.create({
    container : {
        margin:20,
        backgroundColor:'#F6F6F6',
        alignItems:'center',
        justifyContent:'center'
    },
    roundButton: {
      marginBottom:5,
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: '#fff',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    },
  });
  
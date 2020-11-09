import React from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper/src'
import { Text } from '@ui-kitten/components';

export default function ADSwiper(props) {
    return (
        <Swiper style={styles.wrapper} showsButtons={true} height={props.height} width='100%'>
            <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
            </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        height: '100%',
        width: '100%',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        height: '100%',
        width: '100%',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        height: '100%',
        width: '100%',
        backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  });
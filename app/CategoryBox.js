import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Avatar, Layout } from '@ui-kitten/components';

function ColLayout (props) {
    const ColList = Array.from(Array(props.col).keys()).map((col, index) => 
        <Layout style={styles.layout} level='4' key={'CLayout'+index}>
            <View style={styles.logo_view}>
                <Avatar source={require('../assets/icon.png')}/>
            </View>   
        </Layout>
    )
    return (
        <Layout style={styles.container}>
            {ColList}
        </Layout>
    )
};

export default function CategoryBox(props) {
    const row = 2;
    const col = 4;
    const RowLayout = Array.from(Array(row).keys()).map((row, index) => 
        <ColLayout col={col} key={'RLayout'+index}></ColLayout>
    )
    console.log(RowLayout)
    return (
        <View>{RowLayout}</View>
    );
}

const styles = StyleSheet.create({
    logo_view: {
        height: '80px',
        backgroundColor: '#9DD6EB',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    },
    item_logo: {
        height: '100%',
        width: '100%',
        backgroundColor: '#9DD6EB'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
      },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
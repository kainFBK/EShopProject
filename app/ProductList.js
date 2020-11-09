import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, ImageBackground } from 'react-native';
import { Text, Tab, TabBar, List, Card, Button, Icon} from '@ui-kitten/components';

export default function ProductList(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const displayProducts = [
        {
            title: 'Pink Chair',
            category: 'Furniture',
            image: require('../assets/image-product-1.png'),
            price: 130,
            amount: 1
        },
        {
            title: 'Pink Chair2',
            category: 'Furniture',
            image: require('../assets/image-product-1.png'),
            price: 130,
            amount: 1
        },
    ]

    const onItemPress = (index) => {
        navigation && navigation.navigate('ProductDetails3');
    };

    const onItemCartPress = (index) => {
        navigation && navigation.navigate('ShoppingCart');
    };
    
    const CartIcon = () => {
        <Icon {...style} name='shopping-cart'/>
    }

    const renderItemFooter = (info) => (
        <View style={styles.itemFooter}>
        <Text category='s1'>
            {info.item.price}
        </Text>
        <Button
            style={styles.iconButton}
            size='small'
            icon={CartIcon}
            onPress={() => onItemCartPress(info.index)}
        />
        </View>
    );

    const renderItemHeader = (info) => (
        <ImageBackground
        style={styles.itemHeader}
        source={info.item.image}
        />
    );

    const renderProductItem = (info) => (
        <Card
        style={styles.productItem}
        header={() => renderItemHeader(info)}
        footer={() => renderItemFooter(info)}
        onPress={() => onItemPress(info.index)}>
        <Text category='s1'>
            {info.item.title}
        </Text>
        <Text
            appearance='hint'
            category='c1'>
            {info.item.category}
        </Text>
        </Card>
    );
    
    return (
        <View>
            <TabBar
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                <Tab title='USERS'/>
                <Tab title='ORDERS'/>
                <Tab title='TRANSACTIONS'/>
            </TabBar>
            <List
                contentContainerStyle={styles.productList}
                data={displayProducts.length && displayProducts || products}
                numColumns={2}
                renderItem={renderProductItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'background-basic-color-2',
    },
    productList: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    productItem: {
        flex: 1,
        margin: 8,
        maxWidth: Dimensions.get('window').width / 2 - 24,
        backgroundColor: 'background-basic-color-1',
    },
    itemHeader: {
        height: 140,
    },
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconButton: {
        paddingHorizontal: 0,
    },
});
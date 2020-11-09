import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import ADSwiper from './app/ADSwiper'
import CategoryBox from './app/CategoryBox'
import ProjectList from './app/ProductList'

// import Swiper from 'react-native-swiper/src'

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

// const SwiperComponent = () => (
//   <Swiper style={styles.wrapper} showsButtons={true}>
//     <View style={styles.slide1}>
//       <Text style={styles.text}>Hello Swiper</Text>
//     </View>
//     <View style={styles.slide2}>
//       <Text style={styles.text}>Beautiful</Text>
//     </View>
//     <View style={styles.slide3}>
//       <Text style={styles.text}>And simple</Text>
//     </View>
//   </Swiper>
// );

export default function App() {
  return (
    // <View style={styles.container}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={{height: '200px'}}>
          <ADSwiper height='250px'/>
        </View>
        <View style={{height: '200px'}}>
          <CategoryBox />
        </View>
        <ProjectList></ProjectList>
        {/* <HomeScreen /> */}
      </ApplicationProvider>
      /* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

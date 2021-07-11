// import React, { useRef, useState } from 'react'
// import {
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   TextInput,
//   FlatList,
//   ScrollView,
//   CheckBox,
//   Image,
//   TouchableOpacity,
// } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import Unorderedlist from 'react-native-unordered-list'
// import Animated from 'react-native-reanimated'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// function Screens() {
//   return <View></View>
// }

// export default Screens

;<View>
  <ScrollView>
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Button title='Pick an image from camera roll' onPress={pickImage} /> */}
        <View style={styles.container}>
          <Ionicons
            name='md-camera'
            size={32}
            color='green'
            onPress={pickImage}
            style={{ marginTop: 100 }}
          />
        </View>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        )}
        <Text>Jaideep Singh Mann</Text>
        <Text>WorldRef Technologies</Text>
        <Button title='Supply Associates' />
      </View>
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <Text>Info Field</Text>
        <TextInput
          title='Name'
          placeholder='Enter Your Name'
          style={{
            borderWidth: 2,
            marginTop: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            // height: '20%',
            marginLeft: 10,
            marginRight: 10,
          }}
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <Text>Date Field</Text>
        <Text style={{ marginTop: 5 }}>{currDate}</Text>
      </View>
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <Text>Info Field</Text>
        <TextInput
          title='Name'
          placeholder='Enter Your Name'
          style={{
            borderWidth: 2,
            marginTop: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            // height: '20%',
            marginLeft: 10,
            marginRight: 10,
          }}
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <Text>Info Field</Text>
        <TextInput
          title='Name'
          placeholder='Enter Your Name'
          style={{
            borderWidth: 2,
            marginTop: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            // height: '20%',
            marginLeft: 10,
            marginRight: 10,
          }}
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <Text>Info Field</Text>
        <TextInput
          title='Name'
          placeholder='Enter Your Name'
          style={{
            borderWidth: 2,
            marginTop: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            // height: '20%',
            marginLeft: 10,
            marginRight: 10,
          }}
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <Text>Info Field</Text>
        <TextInput
          title='Name'
          placeholder='Enter Your Name'
          style={{
            borderWidth: 2,
            marginTop: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            // height: '20%',
            marginLeft: 10,
            marginRight: 10,
          }}
          secureTextEntry={true}
          autoCorrect={false}
        />
      </View>
    </View>
  </ScrollView>
  <View>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={SplashScreen} />
      <Tab.Screen name='Settings' component={ProductSelectionScreen} />
    </Tab.Navigator>
  </View>
</View>

import React, { useRef, useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  CheckBox,
  Image,
  TouchableOpacity,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Unorderedlist from 'react-native-unordered-list'
import Animated from 'react-native-reanimated'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
function AnotherScreen() {
  return (
    <View>
      <Text>Another Screen</Text>
    </View>
  )
}

const HomeStack = createStackNavigator()

function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Settings' component={SettingsScreen} />
      <HomeStack.Screen name='AnotherScreen' component={AnotherScreen} />
    </HomeStack.Navigator>
  )
}

function SettingsScreen({ navigation }) {
  return (
    <View>
      <Text>Screen</Text>
      <Button
        title='Click'
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => {
          navigation.navigate('AnotherScreen')
        }}
      />
    </View>
  )
}

export function Dropdown({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Settings' component={HomeStackScreen} />
    </Tab.Navigator>
  )
}

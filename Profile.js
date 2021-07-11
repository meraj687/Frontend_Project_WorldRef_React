import React from 'react'
import { useState } from 'react'
import { View, StyleSheet } from 'react-native'

export function Profile() {
  const [selectedValue, setSelectedValue] = useState('java')
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Avatar.Image
                source={{
                  uri: 'https://i.pinimg.com/474x/91/27/a5/9127a595d3a3421d984edc45230f6d9a.jpg',
                }}
                size={80}
              />
              {/* <View style={{ marginLeft: 20 }}>
            <Title style={styles.title}>Jaideep Mann</Title>
            <Caption style={styles.caption}>jaideep@worldref.com</Caption>
          </View> */}
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <Text>Your Name</Text>
            <TextInput title='Name' placeholder='Enter Your Name' />
            <Text>Company Name</Text>
            <TextInput title='Name' placeholder='Enter Your Company Name' />
            <Text>Role</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={styles.button}>
                <Button title='Supply Associates' />
              </View>
              <View style={styles.button}>
                <Button title='Market Associates' />
              </View>
            </View>
          </View>
          <View style={{ marginLeft: '10%', marginRight: '10%' }}>
            <Text>Info Field</Text>
            <TextInput title='Name' placeholder='Field Info' />
            <Text>Info Field</Text>

            <TextInput title='Name' placeholder='Field Info' />
            <View>
              <Picker></Picker>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  button: {
    backgroundColor: 'orange',
    width: '48%',
    height: 38,
  },
})

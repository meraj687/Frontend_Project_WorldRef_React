import React from 'react'
import { Switch, View } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'
import RegisteredAnotherStep from './RegisteredAnotherStep'

function Pages() {
  return (
    <View>
      <NativeRouter>
        <Switch>
          <Route
            to='/RegisteredAnotherStep'
            exact
            component={RegisteredAnotherStep}
          />
        </Switch>
      </NativeRouter>
    </View>
  )
}

export default Pages

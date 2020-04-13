import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import AppNavigator from './navigators/AppNavigator';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  function loadApp() {
    return Font.loadAsync({
      'OpenSansLight': require('./assets/fonts/OpenSans-Light.ttf'),
      'OpenSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
  }

  if (!loaded) {
    return (
      <AppLoading startAsync={loadApp} onFinish={() => setLoaded(true)} autoHideSplash={true} />
    );
  }

  return (
    <AppNavigator />
  );
}

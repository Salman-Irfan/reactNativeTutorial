import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './src/styles/screens/HomeScreen';
import SettingsScreen from './src/styles/screens/SettingsScreen';
import FlatlistTutorial from './src/styles/screens/FlatlistTutorial';
import TouchableHighlightTutorial from './src/styles/screens/TouchableHighlightTutorial';

const App = (): React.JSX.Element => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          {/* flatList */}
          <Tab.Screen name="FlatlistTutorial" component={FlatlistTutorial} />
          {/* touch able highlight */}
          <Tab.Screen name="Touch Able Highlight" component={TouchableHighlightTutorial} />

          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
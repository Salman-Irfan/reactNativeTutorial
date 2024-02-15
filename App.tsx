import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import FlatlistTutorial from './src/screens/FlatlistTutorial';
import TouchableHighlightTutorial from './src/screens/TouchableHighlightTutorial';
import RadioButtons from './src/screens/RadioButtons';
import ResponsiveLayout from './src/screens/ResponsiveLayout';

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
          {/* radio button */}
          <Tab.Screen name="Radio Button" component={RadioButtons} />
          {/* responsive layout */}
          <Tab.Screen name="Responsive Layout" component={ResponsiveLayout} />

          {/* settings */}
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
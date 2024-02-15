import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import FlatlistTutorial from './src/screens/FlatlistTutorial';
import TouchableHighlightTutorial from './src/screens/TouchableHighlightTutorial';
import RadioButtons from './src/screens/RadioButtons';
import ResponsiveLayout from './src/screens/ResponsiveLayout';
import ActivityIndicatorCustom from './src/screens/ActivityIndicatorCustom';
import ModalCustom from './src/screens/ModalCustom';
import PressableCustom from './src/screens/PressableCustom';
import StatusBarCustom from './src/screens/StatusBarCustom';


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
          {/* responsive layout */}
          <Tab.Screen name="Activity Indicator" component={ActivityIndicatorCustom} />
          {/* modal */}
          <Tab.Screen name="Modal" component={ModalCustom} />
          {/* pressable */}
          <Tab.Screen name="Pressable" component={PressableCustom} />
          {/* status bar */}
          <Tab.Screen name="Status Bar" component={StatusBarCustom} />

          {/* settings */}
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
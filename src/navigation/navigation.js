import React, {createRef, useContext, useEffect, useState, useRef} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StatusBar,
  Dimensions,
  Pressable,
  AppState,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TextInput as TextInputRN, BackHandler} from 'react-native';
import {TextInput, Provider} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Portal, PortalProvider, PortalHost} from '@gorhom/portal';
import analytics from '@react-native-firebase/analytics';

// import {AppContext} from '../style/indexTheme';

import TaskScreen from '../pages/TaskHome';

const Stack = createStackNavigator();

const ModalAnimate = {...TransitionPresets.ModalSlideFromBottomIOS};

//====================================================HomeRemedial

//====================================================Route
const navigationRef = createRef();
const routeNameRef = createRef();

const Navigation = ({navigation}) => {
  return (
    <PortalProvider>
      <Provider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() =>
            (routeNameRef.current =
              navigationRef.current.getCurrentRoute().name)
          }
          onStateChange={() => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName =
              navigationRef.current.getCurrentRoute().name;

            routeNameRef.current = currentRouteName;
          }}>
          {/* {isLoader()} */}

          <Stack.Navigator
            initialRouteName="TaskScreen"
            headerMode="none"
            mode="modal">
            <Stack.Screen
              options={ModalAnimate}
              name="TaskScreen"
              component={TaskScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PortalProvider>
  );
};

export default Navigation;

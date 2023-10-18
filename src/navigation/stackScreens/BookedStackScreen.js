import React from "react";
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { THEME } from "../theme";
import { AppHeaderIcon } from '../components/AppHeaderIcon'

const Stack = createNativeStackNavigator();

export const BookedStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
      }}
    >
      <Stack.Screen
        name="Booked"
        component={BookedScreen}
        options={{
          title: 'Мой блог'
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={({ route }) => ({
          title: `Пост от ${new Date(route.params.date).toLocaleDateString()}`,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
              <Item
                title='Take Photo'
                iconName={route.params.booked ? 'ios-star' : 'ios-star-outline'}
                onPress={() => console.log('Press photo')}
              />
            </HeaderButtons>
          )
        })}
      />
    </Stack.Navigator>
  )
}
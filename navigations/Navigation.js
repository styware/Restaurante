import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Restaurants from '../screens/Restaurants'
import Favorites from '../screens/Favorites'
import AccountStack from '../navigations/AccountStack'
import SearchStack from '../navigations/SearchStack'
import TopRestaurantsStack from '../navigations/TopRestaurantsStack'
import RestaurantsStack from './RestaurantsStack'
import FavoriteStack from './FavoriteStack'
import { Icon } from 'react-native-elements/dist/icons/Icon'

const Tab = createBottomTabNavigator()

export default function navigation() {

    const screenOptions = (route, color) => {
        let iconName

        switch (route.name) {
            case "restaurant":
                iconName = "compass-outline"
                break;
            case "favorites":
                iconName = "heart-outline"
                break;
            case "top-restaurants":
                iconName = "star-outline"
                break;
            case "search":
                iconName = "magnify"
                break;
            case "account":
                iconName = "home-outline"
                break;

        }
        return (
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}
            />
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="restaurant"
                tabBarOptions={{
                    inactiveTintColor: '#bcbcbc',
                    activeTintColor: '#a27652'
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >

                <Tab.Screen name="restaurant"
                    component={RestaurantsStack}
                    options={{ title: 'Restaurantes' }}>

                </Tab.Screen>

                <Tab.Screen name="favorites"
                    component={FavoriteStack}
                    options={{ title: 'Favoritos' }}>

                </Tab.Screen>

                <Tab.Screen name="top-restaurants"
                    component={TopRestaurantsStack}
                    options={{ title: 'Top-5' }}>

                </Tab.Screen>

                <Tab.Screen name="search"
                    component={SearchStack}
                    options={{ title: 'Buscar' }}>

                </Tab.Screen>

                <Tab.Screen name="account"
                    component={AccountStack}
                    options={{ title: 'Cuenta' }}>

                </Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

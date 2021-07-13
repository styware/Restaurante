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

const Tab = createBottomTabNavigator()

export default function navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>

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

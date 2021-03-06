import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Explore from '../screen/explore/Explore'
import Wishlist from '../screen/wishlist/WishList'
import Chat from '../screen/chat/Chat'
import Profile from '../screen/auth/Profile'
import Booking from '../screen/account/booking/BookingPage'

import { btnColor } from '../styles/styles'

const PrivateNav = createBottomTabNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Explore',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="search" color={tintColor} size={25} />
            )
        }
    },
    Wishlist: {
        screen: Wishlist,
        navigationOptions: {
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="favorite-border" color={tintColor} size={25} />
            )
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="chat-bubble-outline" color={tintColor} size={25} />
            )
        }
    }, Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="person" color={tintColor} size={25} />
            )
        }
    }
}, {
        tabBarOptions: {
            activeTintColor: btnColor,
            inactiveTintColor: 'silver',
            style: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                shadowOffset: { width: 6, height: 6 },
                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 6,
                paddingTop: 10
            }
        }
    })

export default createAppContainer(PrivateNav)
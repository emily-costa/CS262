import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

/* The different screens we can add and pop from the stack (Home, and ReviewDetails)*/
const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    },
}

const Stack = createStackNavigator();

/* function to create screen stack */
export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#ddd'}}}>
                                        
            <Stack.Screen 
                /* go to Home screen */
                name="Home"
                component={Home}
                /* title for the Home screen */
                options={{title: 'Game Zone', headerTitleStyle: {fontFamily:'nunito-bold'}}}
            />
            <Stack.Screen 
                /* go to ReviewDetials screen */
                name="ReviewDetails"
                component={ReviewDetails}
                /* title for the ReviewDetails screen */
                options={{title: 'Review Details', headerTitleStyle: {fontFamily:'nunito-bold'}}}
            />
        </Stack.Navigator>
    );
}; 


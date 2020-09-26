import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
    
    /* When pressed go back to Home screen, pops ReviewDetails off stack*/
    const pressHandler = () => {
        navigation.goBack();
    } 

    /* display the title, body and rating on each screen*/
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.reviewText}>{ route.params.title}</Text>
            <Text style={globalStyles.reviewText}>{ route.params.body }</Text>
            <Text style={globalStyles.reviewText}>{ route.params.rating }</Text>
        </View>
    );
}

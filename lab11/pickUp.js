/*
 * Mercury Project
 * Pick Up File
 * Displays Package info for those ready to be picked up
 *
 * After using the ESLint extension to change the formatting
 */

import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { globalStyles } from '../styles/global';

export default function PickUp() {
  const [query, setQuery] = useState('');

  // ** fill this function definition later **
  const queryFunction = (text) => {
    setQuery(text);
  };

  return (
    // Create Deskie and Student buttons
    <SafeAreaView>
      <ScrollView>
        <View>
          <SearchBar
            round
            placeholder='Search...'
            searchIcon={{ size: 25 }}
            inputStyle={{ color: 'white' }}
            containerStyle={{
              borderWidth: 1,
              borderRadius: 20,
              margin: 10,
            }}
            placeholderTextColor={'white'}
            onChangeText={(text) => queryFunction(text)}
            onClear={(text) => queryFunction('')}
            value={query}
          />
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
          <Text style={globalStyles.sampleDataContainer}>Package data...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
);
}

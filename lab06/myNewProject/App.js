import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// https://www.googleapis.com/auth/books

export default App => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699')
      .then((response) => response.json())
      .then((json) => setData(json.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.volumeInfo.title}, {item.volumeInfo.publisher}, {item.volumeInfo.publishedDate}: {"\n\n"}
              {item.volumeInfo.description} {"\n\n\n"}
            </Text>

          )}
        />
      )}
    </View>
  );
};

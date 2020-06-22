import React, { useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

import { useTest } from './Test';

const Home = () => {
    const { arrTest, addArrTest, clearArrTest, onTimmer, offTimmer } = useTest();

    return (
        <View style={{ flex: 1 }}> 
            <Text>Home Page</Text>
            <Button title="ADD Timer" color="#007700" onPress={onTimmer} />
            <Button title="REMOVE Timer" color="#000077" style={{ marginTop: 5 }} onPress={offTimmer} />
            <Button title="Clear" color="#770000" style={{ marginTop: 5 }} onPress={clearArrTest} />
            <FlatList
                data={arrTest}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Text>{item.value}</Text>}
            />
            <Button title="Add" color="#777700" onPress={() => {addArrTest({ id: (arrTest.length + 1), value: "Pelo Button" })}} />
        </View>
    )
}

export default Home;
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text style={styles.titleText}>ISS TRACKER</Text>

            </View>
        )
    }
}

const styles= StyleSheet.create(){
    titleText:{
        allignItem:center
    }
}
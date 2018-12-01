import React, { Component } from "react";
import { View, TextInput } from "react-native";
export default class SearchBar extends Component {
    render() {
        return (<View style={{ flex: 0.15, backgroundColor: "green" }}>
            <TextInput />
        </View>
        );
    }
}
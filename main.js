import React, { Component } from "react"
import { View } from "react-native"
import { Constants } from "expo"
import Header from "../component/header"
import SearchBar from "../component/searchbar"
import NewsList from "../component/newslist"

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: constants.statusBarHeight }} >
            <Haeder />
            <SearchBar />
            <NewsList />
        </View >
        )
    }
}
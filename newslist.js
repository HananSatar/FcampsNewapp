import React, { Component } from "react";
import { View, TextInput } from "react-native";
import NewItem from "./newitem";
export default class NewsList extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         news: props.news
    //     };
    // }
    render() {
        const { news } = this.props;
        const NewsList = news.map((newsitemData, i) =>
         (<NewItem key={i} item={newsitemData} />));


        return (<View style={{ flex: 1, backgroundColor: "yellow" }} >{newsList}</View>
        );

    }
}
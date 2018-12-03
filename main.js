import React, { Component } from "react"
import { View } from "react-native"
import { Constants } from "expo"
import Header from "../component/header"
import SearchBar from "../component/searchbar"
import NewsList from "../component/newslist"
//import { timingSafeEqual } from "crypto";
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new: []
        };
    }
    componentDidMount() {
        this.search("iraq")
    }
    search(q) {
        fetch(
            `https://newsapi.org/v2/everything?q=${q}bitcoin&apiKey=978d6c3818ff431b8c210ae86550fb1f`
        )
            .then(res => res.json())
                .then(news => {
                    this.setstate({ news: news.areticles});

                }).catch((err) => {
                    console.log(err)
                });
    }

    updateParent(data) {
        this.search(data)
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: Constants.statusBarHeight }} >
                <Header />
                <SearchBar searchFun={this.search.bind(this)} />
                <NewsList news={this.state.news} />
            </View >
        );
    }
}
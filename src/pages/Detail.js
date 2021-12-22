import DetailList from '../components/DetailList/DetailList'
import { Link } from "react-router-dom";
import Api from "../api_key/RapidApiKey"
import React, { Component } from "react";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            gameData: [],
            systemReq: [],
            screenshots1: [],
            screenshots2: [],
            screenshots3: [],
        }
    }

    componentDidMount() {
        // this.setState({ isLoading: true });
        let detailId = window.location.pathname.split('/')[2];
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${detailId}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": Api,
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ gameData: data, isLoading: false }, () => {

                });
                this.setState({ systemReq: data.minimum_system_requirements }, () => {
                });
                this.setState({ screenshots1: data.screenshots[0].image }, () => {
                    console.log(this.state.screenshots1)
                });
                this.setState({ screenshots2: data.screenshots[1].image }, () => {
                    console.log(this.state.screenshots2)
                });
                this.setState({ screenshots3: data.screenshots[2].image }, () => {
                    console.log(this.state.screenshots3)
                });
            })
            .catch((err) => console.log(err));
    }
    render() {


        // if (this.state.isLoading == true) {
        //     return <p>Loading...</p>
        // }
        return (
            <React.Fragment>
                <DetailList
                    title={this.state.gameData.title}
                    game_url={this.state.gameData.game_url}
                    thumbnail={this.state.gameData.thumbnail}
                    platform={this.state.gameData.platform}
                    genre={this.state.gameData.genre}
                    description={this.state.gameData.description}
                    game_url={this.state.gameData.game_url}
                    image1={this.state.screenshots1}
                    image2={this.state.screenshots2}
                    image3={this.state.screenshots3}
                    developer={this.state.gameData.developer}
                    publisher={this.state.gameData.publisher}
                    release_date={this.state.gameData.release_date}
                    os={this.state.systemReq.os}
                    processor={this.state.systemReq.processor}
                    memory={this.state.systemReq.memory}
                    graphics={this.state.systemReq.graphics}
                    storage={this.state.systemReq.storage}
                />
            </React.Fragment>
        );
    }

};

export default Detail;
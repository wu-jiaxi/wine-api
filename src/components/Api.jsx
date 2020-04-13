import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Api extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: [],
            id: '',
            picture: '',
            picture1: '',
        }
    }

    componentDidMount() {
        axios.get("http://myapi-profstream.herokuapp.com/api/51b102/wines")
            .then(res => {
                const wineAPI = res.data;

                this.setState({
                    data: wineAPI,
                    picture: wineAPI[0].picture,
                    picture1: wineAPI[1].picture,
                })
            })

            .catch(error => {
                console.log('there is an error', error)
            })
    }




    render() {
        return (
            <div>
                {/* {<h1 className="wine-list" onClick={this.showWineData}>{this.state.data.map((wineAPI, id) => <li key={id} id={id} className="wines-list"> <img src={wineAPI.picture} alt="wine"></img></li>)}</h1>} */}
                <Link to="/4622">
                    <img src={this.state.picture} alt="CHATEAU DE SAINT COSME"></img>
                </Link>
                <Link to="/4623">
                    <img src={this.state.picture1} alt="LAN RIOJA CRIANZA"></img>
                </Link>
            </div>
        )
    }
}
export default Api;
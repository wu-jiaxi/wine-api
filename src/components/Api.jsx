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
                    picture2: wineAPI[2].picture,
                    picture3: wineAPI[3].picture,
                    picture4: wineAPI[4].picture,
                    picture5: wineAPI[5].picture,
                    picture6: wineAPI[6].picture,
                    picture7: wineAPI[7].picture,
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
                <Link to="/4624">
                    <img src={this.state.picture2} alt="MARGERUM SYBARITE"></img>
                </Link>
                <Link to="/4625">
                    <img src={this.state.picture3} alt="OWEN ROE"></img>
                </Link>
                <Link to="/4626">
                    <img src={this.state.picture4} alt="REX HILL"></img>
                </Link>
                <Link to="/4627">
                    <img src={this.state.picture5} alt="VITICCIO CLASSICO RISERVA"></img>
                </Link>
                <Link to="/4628">
                    <img src={this.state.picture6} alt="CHATEAU LE DOYENNE"></img>
                </Link>
                <Link to="/4629">
                    <img src={this.state.picture7} alt="DOMAINE DU BOUSCAT"></img>
                </Link>
            </div>
        )
    }
}
export default Api;
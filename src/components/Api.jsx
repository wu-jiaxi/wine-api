import React, { Component } from 'react';
import axios from 'axios'

class Api extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: [],
            name: '',
            year: '',
            grapes: '',
            country: '',
            region: '',
            description: '',
            price: '',

        }
    }

    componentDidMount() {
        axios.get("http://myapi-profstream.herokuapp.com/api/51b102/wines")
            .then(res => {
                const wineAPI = res.data;
                console.log('wine list --->', wineAPI)

                this.setState({ data: wineAPI })
            })

            .catch(error => {
                console.log('there is an error', error)
            })
    }

    showWineData = () => {
        axios.get("http://myapi-profstream.herokuapp.com/api/51b102/wines")
            .then(res => {
                const wineAPIData = res.data;
                console.log('wine list --->', wineAPIData)

                this.setState({ data: wineAPIData, name: wineAPIData.name })
            })

            .catch(error => {
                console.log('there is an error', error)
            })

    }
    render() {
        return (
            <div>
                <h1 className="wine-list" onClick={this.showWineData}>{this.state.data.map((wineAPI, id) => <li key={id} className="wines-list"> <img src={wineAPI.picture} alt="wine"></img></li>)}</h1>
            </div>
        )
    }
}

export default Api;
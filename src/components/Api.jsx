import React, { Component } from 'react';
import axios from 'axios'

class Api extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: [],
            id: '',
            name: '',
            year: '',
            grapes: '',
            country: '',
            region: '',
            description: '',
            price: ''

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
        // want this function to setState and return elements using this.state
        axios.get("http://myapi-profstream.herokuapp.com/api/51b102/wines")
            .then(res => {
                const wineAPI = res.data;
                console.log('wine list --->', wineAPI)

                this.state.name = wineAPI[0].name
                console.log(this.state.name)
            })

            .catch(error => {
                console.log('there is an error', error)
            })
    }

    render() {
        return (
            <div>
                {<h1 className="wine-list" onClick={this.showWineData}>{this.state.data.map((wineAPI, id) => <li key={id} id={id} className="wines-list"> <img src={wineAPI.picture} alt="wine"></img></li>)}</h1>}
            </div>
        )
    }
}

export default Api;
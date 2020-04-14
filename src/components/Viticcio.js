import React, { Component } from 'react';
import axios from 'axios'

class Viticcio extends Component {
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
            picture: '',
            price: ''
        }
    }

    componentDidMount() {
        axios.get("http://myapi-profstream.herokuapp.com/api/51b102/wines")
            .then(res => {
                const wineAPI = res.data

                this.setState({
                    data: wineAPI,
                    id: wineAPI[5].id,
                    picture: wineAPI[5].picture,
                    name: wineAPI[5].name,
                    year: wineAPI[5].year,
                    grapes: wineAPI[5].grapes,
                    country: wineAPI[5].country,
                    region: wineAPI[5].region,
                    description: wineAPI[5].description,
                    price: wineAPI[5].price
                })
            })

            .catch(error => {
                console.log('there is an error', error)
            })
    }


    render() {
        return (<div>
            <img src={this.state.picture} alt=""></img>
            <h3>{this.state.id}</h3>
            <h3>{this.state.name}</h3>
            <h3>{this.state.year}</h3>
            <h3>{this.state.grapes}</h3>
            <h3>{this.state.country}</h3>
            <h3>{this.state.region}</h3>
            <h3>{this.state.description}</h3>
            <h3>{this.state.price}</h3>
        </div>);
    }
}

export default Viticcio;
import React, { Component } from 'react';
import axios from 'axios'

class Domaine extends Component {
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
                    id: wineAPI[7].id,
                    picture: wineAPI[7].picture,
                    name: wineAPI[7].name,
                    year: wineAPI[7].year,
                    grapes: wineAPI[7].grapes,
                    country: wineAPI[7].country,
                    region: wineAPI[7].region,
                    description: wineAPI[7].description,
                    price: wineAPI[7].price
                })
            })

            .catch(error => {
                console.log('there is an error', error)
            })
    }


    render() {
        return (<div>
            <img src={this.state.picture} alt=""></img>
            <h3>ID: {this.state.id}</h3>
            <h3>Name: {this.state.name}</h3>
            <h3>Year: {this.state.year}</h3>
            <h3>Grapes: {this.state.grapes}</h3>
            <h3>Country: {this.state.country}</h3>
            <h3>Region: {this.state.region}</h3>
            <h3>Description: {this.state.description}</h3>
            <h3>Price: {this.state.price}</h3>
        </div>);
    }
}

export default Domaine;
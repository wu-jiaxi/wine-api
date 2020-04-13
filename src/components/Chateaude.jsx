import React, { Component } from 'react';
import axios from 'axios'

class Chateaude extends Component {
    state = {}

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


    render() {
        return (<div>

        </div>);
    }
}

export default Chateaude;
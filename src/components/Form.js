// Create form for wine details and have it post things into the wine api

import React, { Component } from 'react';
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        }
    }

    postWineData() {
        axios.post("http://myapi-profstream.herokuapp.com/api/51b102/wines", {
            name: {}
        })
            
            .then(res => {
                
            })

            .catch(error => {
                console.log('there is an error', error)
            })
    }
    render() {
        return (<div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                    Year:
                    <input type="text" year="year" />
                    Grapes:
                    <input type="text" grapes="grapes" />
                    Country:
                    <input type="text" country="country" />
                    Region:
                    <input type="text" region="region" />
                    Description:
                    <input type="text" description="description" />
                    Price:
                    <input type="text" price="price" />
                </label>
                <input type="submit" value="Submit" onClick={this.postWineData} />
            </form>
        </div>);
    }
}

export default Form;
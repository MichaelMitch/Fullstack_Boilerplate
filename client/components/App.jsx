import React from 'react'
import {getHats} from '../apiClient'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            hats: ['cap', 'cap', 'beanie']
        }
    }
    render(){
        return(
            <div className ="app">
            <h1>Hello</h1>
            </div>

        )
    }
}
export default App
import React from 'react'
import {getHats} from '../apiClient'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            hats: ['cap', 'cap', 'beanie']
        }
    }

    // componentDidMount () {
    //     getHats()
    // }
}
export default App
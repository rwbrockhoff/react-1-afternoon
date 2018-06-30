import React, {Component} from 'react'

export default class FilterString extends Component {
    constructor(){
        super()

        this.state={
            unFilteredArray: ['John', 'Red', 'Tall', 'Reading', 'Sand', 'Mountains'],
            userInput: '',
            filteredArray: []
        }

    }

    updateInfo(val){
        this.setState({
            userInput: val
        })
    }

    buttonClick(){
        let map = this.state.unFilteredArray.slice().filter((e) => {
            return e.startsWith(this.state.userInput)
            
        })
        this.setState({
            filteredArray: map
        })
        
    }
    
    render(){
        return (
            <div className='puzzleBox filterStringPB'>
            <h4> Filter String </h4>
            <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
            <input className='inputLine' type='text' onChange={(e) => this.updateInfo(e.target.value) }/>
            <button className='confirmationButton' onClick={() => this.buttonClick()}>Click</button>
            <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
        </div>
        )
    }
}


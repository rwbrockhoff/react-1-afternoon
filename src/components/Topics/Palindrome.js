import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor(){
        super()

        this.state={
            userInput: '',
            palindrome: ''
        }
    }

    userInput(val){
        this.setState({
            userInput: val
        })
    }
    buttonClick(){
        let tempStr = this.state.userInput
        let newStr = tempStr.split('').reverse().join('')
        tempStr === newStr ? this.setState({palindrome: 'True'}) : this.setState({palindrome: 'False'})
    }
    
    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4> Palindrome</h4>
                <input className='inputLine' type='text' onChange={(e) => this.userInput(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.buttonClick()}>Click</button>
                <span className='resultsBox filterStringRB'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

// Create an onChange prop for the input element that updates the value of userInput on state.
// Create an onClick prop for the button element that calls a method on the class:
// This method should solve the toy problem.
// This method should update the value of palindrome.
// Assign the span element the value of palindrome.
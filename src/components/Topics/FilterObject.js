import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super()

        this.state={
            unFilteredArray: [
                {
                    name: 'Joe',
                    from: 'Texas',
                    hobby: 'Running'
                }, 
                {
                    name: 'Walter',
                    hobby: 'Kayak Making'
                },
                {
                    from: 'New Hampshire',
                    hobby: 'Laughing'
                },
                {
                    name: 'Allison',
                    from: 'Maine'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    updateValue(val){
        this.setState({
            userInput: val
        })
    }

    buttonClick(){
       
       let mapping = this.state.unFilteredArray.slice().filter((e) => {
            return e[this.state.userInput] !== undefined;
       })
        console.log(mapping);
        this.setState({filteredArray: mapping})
    
      
    }

    render(){
        
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' type='text' onChange={(e) => this.updateValue(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.buttonClick()}>Click</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

// Create an onChange prop for the input element that updates the value of userInput on state.
// Create an onClick prop for the button element that calls a method on the class:
// This method should solve the toy problem.
// This method should update the value of filteredArray.
// Assign the first span element the value of unFilteredArray.
// Assign the last span element the value of filteredArray.
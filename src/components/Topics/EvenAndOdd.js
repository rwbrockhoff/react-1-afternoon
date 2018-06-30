import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super()

        this.state={
            evenArray: [],
            oddArray: [],
            userInput: "",
        }       
    }
    updateInput(val) {
        this.setState({
            userInput: val
            
        })    
   }
   buttonEnter(){
    let userStuff = this.state.userInput.slice().split(',');
    let newArr = userStuff.map((e) => {
       if (e%2===0){
           let tempArr =[];
           tempArr = this.state.evenArray;
           tempArr.push(e);
           return this.setState({evenArray: tempArr})
       }
       else if (e%2!==0){
           let tempArr = [];
           tempArr = this.state.oddArray;
           tempArr.push(e);
           return this.setState({oddArray: tempArr})
       }
        })

        
        console.log(this.state.evenArray);
      return newArr;  
   }

    
    
    render(){
        console.log(this.state.evenArray)
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens and Odds</h4>
                <input className='inputLine' type='text' onChange={(e) => this.updateInput(e.target.value) } value={this.state.userInput} />
                <button className='confirmationButton' onClick={() => this.buttonEnter()}>Click</button>
                <span className='resultsBox'>Even: {this.state.evenArray} </span>
                <span className='resultsBox'>Odd: {this.state.oddArray} </span>
            </div>
        )
    }
}

export default EvenAndOdd;

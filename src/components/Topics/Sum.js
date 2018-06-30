import React, {Component} from 'react';

class Sum extends Component {
   constructor(){
       super()

       this.state={
           num1: 0,
           num2: 0,
           sum: null
       }
   }

   inputStuff1(val){
    this.setState({
        num1: val
    })
   }

   inputStuff2(val){
    this.setState({
        num2: val
    })
   }

   buttonClick(){
    let val1 = parseInt(this.state.num1, 10)
    let val2 = parseInt(this.state.num2, 10)
    let tempSum = val1 + val2;
    this.setState({
        sum: tempSum
    })
    
   }

    render(){
        return (
            <div className='puzzleBox sumPB'>
                <h4> Sum</h4>
                <input className='inputLine' type='text' onChange={(e) => this.inputStuff1(e.target.value)}/>
                <input className='inputLine' type='text' onChange={(e) => this.inputStuff2(e.target.value)}/>
                <button className='confirmationButton' onClick={() => this.buttonClick()}>Click</button>
                <span className='resultsBox sumRB'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;
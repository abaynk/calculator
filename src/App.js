/* eslint-disable no-eval */
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      valueUpper:'',
      valueLower:''
    }
    this.handleNumber = this.handleNumber.bind(this);
  }
  
  handleNumber = (val) => {
    val.preventDefault();
    const value = val.target.value;
    if(this.state.valueLower.length < 1){
      this.setState({
        valueUpper: value,
        valueLower: value
      });
    } else if (this.state.valueLower === '+'||this.state.valueLower === '*'||this.state.valueLower === '/'||this.state.valueLower === '-'){
      this.setState({
        valueUpper: this.state.valueUpper + value,
        valueLower: value
      });
    } else if (this.state.valueLower !== '0'){
      this.setState({
        valueUpper: this.state.valueUpper + value,
        valueLower: this.state.valueLower + value
      });
    }
  };
  handleAC = () => {
    this.setState({
      valueUpper: '',
      valueLower: ''
    });
  };
  handleMinus = () => {
    if (this.state.valueUpper.indexOf('=')>0){
      this.setState({
        valueUpper: `${this.state.valueLower}-`,
        valueLower: '-'
      });
    } else if (this.state.valueLower !== '-'){
      this.setState({
        valueUpper: `${this.state.valueUpper}-`,
        valueLower: '-'
      });
    }
  };
  handlePlus = () => {
    if (this.state.valueUpper.indexOf('=')>0){
      this.setState({
        valueUpper: `${this.state.valueLower}+`,
        valueLower: '+'
      });
    } else if (this.state.valueLower !== '+' && this.state.valueLower !== '-'  && this.state.valueLower !== '*' && this.state.valueLower !== '/'){
      this.setState({
        valueUpper: `${this.state.valueUpper}+`,
        valueLower: '+'
      });
    }
  };
  handleMult = () => {
    if (this.state.valueUpper.indexOf('=')>0){
      this.setState({
        valueUpper: `${this.state.valueLower}*`,
        valueLower: '*'
      });
    } else if (this.state.valueLower !== '*' && this.state.valueLower !== '-' && this.state.valueLower !== '+' && this.state.valueLower !== '/'){
      this.setState({
        valueUpper: `${this.state.valueUpper}*`,
        valueLower: '*'
      });
    }
  };
  handleDiv = () => {
    if (this.state.valueUpper.indexOf('=')>0){
      this.setState({
        valueUpper: `${this.state.valueLower}/`,
        valueLower: '/'
      });
    } else if (this.state.valueLower !== '/' && this.state.valueLower !== '-' && this.state.valueLower !== '+' && this.state.valueLower !== '*'){
      this.setState({
        valueUpper: `${this.state.valueUpper}/`,
        valueLower: '/'
      });
    }
  };
  handleDecimal = () => {
    if (this.state.valueLower !== '/' && this.state.valueLower !== '-' && this.state.valueLower !== '+' && this.state.valueLower !== '*' && this.state.valueLower.indexOf('.') < 0){
      this.setState({
        valueUpper: `${this.state.valueUpper}.`,
        valueLower: `${this.state.valueLower}.`
      });
    }
  };
  handleEquals = () => { 
    if (this.state.valueUpper.indexOf('=')<0){
      this.setState({
        valueUpper:`${this.state.valueUpper}=${eval(this.state.valueUpper)}`,
        valueLower: eval(this.state.valueUpper)
      });
    } else {
      console.log('result is already displayed');
    }
  };

  render () {
    document.body.style.backgroundColor = '#E6E8E6';
    return (
      <div>
        <div className='App'>
          <input className='text' id='inputUpper' type='text' placeholder='Make calculation:' defaultValue={this.state.valueUpper}></input>
          <input className='text' id='inputLower' type='text' placeholder='0' defaultValue={this.state.valueLower}></input>
          <div className='calculator-btns'>
            <button type='button' className='clear' value='clear-all' onClick={this.handleAC}>AC</button>
            <button type='button' className='operator' value='/' onClick={this.handleDiv}>/</button>
            <button type='button' className='operator' value='*' onClick={this.handleMult}>x</button>

            <button type='button' className='number' value='7' onClick={this.handleNumber}>7</button>
            <button type='button' className='number' value='8' onClick={this.handleNumber}>8</button>
            <button type='button' className='number' value='9' onClick={this.handleNumber}>9</button>
            <button type='button' className='operator' value='-' onClick={this.handleMinus}>-</button>

            <button type='button' className='number' value='4' onClick={this.handleNumber}>4</button>
            <button type='button' className='number' value='5' onClick={this.handleNumber}>5</button>
            <button type='button' className='number' value='6' onClick={this.handleNumber}>6</button>
            <button type='button' className='operator' value='+' onClick={this.handlePlus}>+</button>
            
            <button type='button' className='number' value='1' onClick={this.handleNumber}>1</button>
            <button type='button' className='number' value='2' onClick={this.handleNumber}>2</button>
            <button type='button' className='number' value='3' onClick={this.handleNumber}>3</button>

            <button type='button' className='zero' value='0' onClick={this.handleNumber}>0</button>
            <button type='button' className='decimal' value='.' onClick={this.handleDecimal}>.</button>
            <button type='button' className='equals' value='=' onClick={this.handleEquals}>=</button>

          </div>
        </div>
        <div className='credits'>
          <p>Designed and Coded by AbayNurpeissov</p>
        </div>
      </div>
    )
  }
}

export default App;

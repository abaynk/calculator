import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {

    }
  }
  render () {
    return (
      <div className='App'>
        <input className='input' type='text'></input>
        <div className='calculator-btns'>
          <button type='button' className='clear' value='clear-all'>AC</button>
          <button type='button' className='operator' value='/'>/</button>
          <button type='button' className='operator' value='x'>x</button>

          <button type='button' className='number' value='7'>7</button>
          <button type='button' className='number' value='8'>8</button>
          <button type='button' className='number' value='9'>9</button>
          <button type='button' className='operator' value='-'>-</button>

          <button type='button' className='number' value='4'>4</button>
          <button type='button' className='number' value='5'>5</button>
          <button type='button' className='number' value='6'>6</button>
          <button type='button' className='operator' value='+'>+</button>
          
          <button type='button' className='number' value='1'>1</button>
          <button type='button' className='number' value='2'>2</button>
          <button type='button' className='number' value='3'>3</button>

          <button type='button' className='zero' value='0'>0</button>
          <button type='button' className='decimal' value='.'>.</button>
          <button type='button' className='equals' value='='>=</button>

        </div>
      </div>
    )
  }
}

export default App;

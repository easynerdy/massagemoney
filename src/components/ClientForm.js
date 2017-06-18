import React from 'react';
import PeopleContainer from './PeopleContainer';

export default class ClientForm extends React.Component {

  handleSubmit() {
    console.log("Hello Handle Submit");
  }

  render() {
    return <div>
      <span>New Client Form</span>
      <form>
        <label>Name</label>
        <input/>
        <button onClick={this.handleSubmit}>Submit</button>
        
      </form>
 
    </div>
  }
};
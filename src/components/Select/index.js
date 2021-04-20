import React from 'react';

class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'cinza'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('O tema foi trocado para: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="cinza">Cinza</option>
              <option value="limao">Preto</option>
              <option value="coco">Azul</option>
              <option value="manga">Verde</option>
            </select>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
  };
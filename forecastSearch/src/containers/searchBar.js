import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    // Prevent submitting the form
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
          <input 
            placeholder="Get a five-day forecast in yoru favorite cities"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange.bind(this)}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
// Insert null if state doesn't matter
export default connect(null, mapDispatchToProps)(SearchBar);
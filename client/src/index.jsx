import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import SearchBar from 'material-ui-search-bar'
// import AutoComplete from 'material-ui/AutoComplete';
import Autosuggest from 'react-autosuggest';
// import $ from 'jquery';
import css from '../dist/style.css';

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  // const escapedValue = escapeRegexCharacters(value.trim());
  // const regex = new RegExp('^' + escapedValue, 'i');

  // return languages.filter(language => regex.test(language.name));

  return
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function shouldRenderSuggestions() {
  return true;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}




// Keep this
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      toggleSearch: false
    };
  }

  componentDidMount() {

  }

  // Keep this
  toggleSearch = () => {
    let {toggleSearch} = this.state;
    this.setState({
      toggleSearch: !toggleSearch
    })
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const data = {input: value}
    fetch('/search', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ suggestions: data }))
      .then(response => console.log('success:', JSON.stringify(response)))
      .catch(err => console.error('error:', err));

    // this.setState({
    //   suggestions: getSuggestions(value)
    // });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };




  render() {

    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search...",
      value,
      onChange: this.onChange
    };



    return (
      <div>
      <IconButton onClick={() => this.toggleSearch()}>
        <SearchIcon />
      </IconButton>


      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        shouldRenderSuggestions={shouldRenderSuggestions}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />





      {/* {this.state.toggleSearch &&
      <Autosuggest
        id={id}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      } */}



      </div>
    );
  }


}








export default App;

ReactDOM.render(<App />, document.getElementById("app"));
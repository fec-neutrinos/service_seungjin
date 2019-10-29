import React from 'react';
import ReactDOM from 'react-dom';
// import { makeStyles } from '@material-ui/core/styles';
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

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      toggleSearch: false
    };
  }

  // onChange = (_, { newValue }) => {
  //   const { id, onChange } = this.props;

  //   this.setState({
  //     value: newValue
  //   });

  //   onChange(id, newValue);
  // };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  toggleSearch = () => {
    let {toggleSearch} = this.state;
    this.setState({
      toggleSearch: !toggleSearch
    })
  }


  render() {

    const { id, placeholder } = this.props;
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search...',
      value,
      onChange: this.onChange
    };

    return (
      <div>

      <IconButton onClick={() => this.toggleSearch()}>
        <SearchIcon />
      </IconButton>

      {this.state.toggleSearch &&
      <Autosuggest
        id={id}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      }



      </div>
    );
  }


}








export default App;

ReactDOM.render(<App />, document.getElementById("app"));
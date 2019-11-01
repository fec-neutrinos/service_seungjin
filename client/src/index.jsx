import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import SearchBar from 'material-ui-search-bar'
// import AutoComplete from 'material-ui/AutoComplete';
import Autosuggest from 'react-autosuggest';
// import $ from 'jquery';
import css from '../dist/style.css';
import Grid from '@material-ui/core/Grid';



function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  // const escapedValue = escapeRegexCharacters(value.trim());
  // const regex = new RegExp('^' + escapedValue, 'i');

  // return languages.filter(language => regex.test(language.name));

  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  if (inputLength === 0) {
    return [];
  }

  return temp.filter(student => {
    return temp.name.split(' ').some(term => {
      return term.toLowerCase().slice(0, inputLength) === inputValue;
    })
  });


  // let temp = []

  // const data = { input: value }
  // fetch('/search', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  // .then(res => res.json())
  // .then( (data) => {
  //   return data.filter(product => {
  //     return product.name.split(' ').some(term => {
  //       return term.toLowerCase().slice(0, inputLength) === inputValue;
  //     })
  //   });
  // })
  // .then(response => console.log('success:', JSON.stringify(response)))
  // .catch(err => console.error('error:', err));


  // console.log("temp variable", temp);

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
  constructor() {
    super();
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
    let { toggleSearch } = this.state;
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
    const data = { input: value }
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
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
          <IconButton
            edge="end"
            disableRipple
            color="inherit"
            onClick={() => this.toggleSearch()}>
            <SearchIcon />
          </IconButton>

        </Grid>

        {this.state.toggleSearch &&
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          shouldRenderSuggestions={shouldRenderSuggestions}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
        }







      </div>
    );
  }


}








export default App;

ReactDOM.render(<App />, document.getElementById("app"));
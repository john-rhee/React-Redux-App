import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Display from './components/Display';
import { downloadApi } from './actions/action';

function App(props) {
  console.log(props)
  // const [state, setState] = useState('');

  // useEffect(() => {
  //   axios
  //     .get(`https://rickandmortyapi.com/api/character`)
  //     .then(response => {
  //       console.log(response.data.results);
  //       setState(response.data.results);
  //     })
  //     .catch(error => {
  //       console.log("the data was not return", error);
  //     });
  // }, []);
  useEffect(() => {
    props.downloadApi();
  }, []);

  
  return (
    <div>
      <Display/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name,
    gender: state.gender,
    species: state.species,
    id: state.id
  };
};

export default connect(
  mapStateToProps,
  { downloadApi }
)(App);

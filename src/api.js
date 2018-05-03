import {getSearchSuccess, getSearchFailure} from 'actions/search';
import store from './store';

export const search = query =>
  fetch (`http://api.tvmaze.com/search/shows?q=${query}`, {
    method: 'GET',
    mode: 'cors',
  }).then (response => {
    response.json ();
  });


export const show = showId =>
  fetch (`http://api.tvmaze.com/shows/${showId}?embed=cast`, {
    method: 'GET',
    mode: 'cors',
  }).then (response => response.json ());

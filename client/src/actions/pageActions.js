import axios from 'axios';

export const page1Request = (dispatch) => {
  return dispatch => {
    return axios.get('/api/page1');
  }
}

export const page2Request = (dispatch) => {
  return dispatch => {
    return axios.get('/api/page2');
  }
}

export const page3Request = (dispatch) => {
  return dispatch => {
    return axios.get('/api/page3');
  }
}

export const page4Request = (dispatch) => {
  return dispatch => {
    return axios.get('/api/page4');
  }
}

export const page5Request = (dispatch) => {
  return dispatch => {
    return axios.get('/api/page5');
  }
}

export const page6Request = (dispatch) => {
  return dispatch => {
    return axios.get('/api/page6');
  }
}

export const page7Request = (dispatch) => {
  return dispatch => {
    return axios.get('/api/page7');
  }
}

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import API from '../API';
import { phones } from '../mocks/phonesMock';

const initialState = {
  phones,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getPhones() {
    const apiPhones = await API.getAll();
    dispatch({
      type: 'GET_PHONES',
      payload: apiPhones,
    });
  }

  async function removePhone(id) {
    await API.delete(id);
    dispatch({
      type: 'REMOVE_PHONE',
      payload: id,
    });
  }

  async function addPhone(phone) {
    await API.create(phone);
    dispatch({
      type: 'ADD_PHONE',
      payload: phone,
    });
  }

  async function editPhone(phones) {
    dispatch({
      type: 'EDIT_PHONE',
      payload: phones,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        phones: state.phones,
        getPhones,
        removePhone,
        addPhone,
        editPhone,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

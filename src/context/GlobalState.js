import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { phones } from '../mocks/phonesMock';

const initialState = {
  phones,
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removePhone(id) {
    dispatch({
      type: 'REMOVE_PHONE',
      payload: id,
    });
  }

  function addPhone(phones) {
    dispatch({
      type: 'ADD_PHONES',
      payload: phones,
    });
  }

  function editPhone(phones) {
    dispatch({
      type: 'EDIT_PHONE',
      payload: phones,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        phones: state.phones,
        removePhone,
        addPhone,
        editPhone,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

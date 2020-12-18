import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  phones: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setPhones(phones) {
    dispatch({
      type: 'SET_PHONES',
      payload: phones,
    });
  }

  function removePhone(id) {
    dispatch({
      type: 'REMOVE_PHONE',
      payload: id,
    });
  }

  function addPhone(phone) {
    dispatch({
      type: 'ADD_PHONE',
      payload: phone,
    });
  }

  function editPhone(phone) {
    dispatch({
      type: 'EDIT_PHONE',
      payload: phone,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        phones: state.phones,
        setPhones,
        removePhone,
        addPhone,
        editPhone,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

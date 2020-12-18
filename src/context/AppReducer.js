const AppReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_PHONE':
      return {
        ...state,
        phones: state.phones.filter(phone => phone.id !== action.payload),
      };
    case 'ADD_PHONES':
      return {
        ...state,
        phones: [...state.phones, action.payload],
      };
    case 'SET_PHONES':
      if (!state.phones.length)
        return {
          ...state,
          phones: [...action.payload],
        };
      return state;
    case 'EDIT_PHONE':
      const updatedPhone = action.payload;
      const updatedPhones = state.phones.map(phone => {
        if (phone.id === updatedPhone.id) {
          return updatedPhone;
        }
        return phone;
      });
      return {
        ...state,
        phones: updatedPhones,
      };
    default:
      return state;
  }
};

export default AppReducer;

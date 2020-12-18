import React, { useState, useContext, useEffect } from 'react';
import API from '../../API';
import { GlobalContext } from '../../context/GlobalState';
import { useHistory, Link } from 'react-router-dom';

const EditPhone = route => {
  let history = useHistory();
  const { phones, editPhone } = useContext(GlobalContext);
  const [selectedPhone, setSeletedPhone] = useState({
    id: null,
    name: '',
    manufacturer: '',
    ram: '',
    price: '',
  });
  const currentPhoneId = route.match.params.id;

  useEffect(() => {
    const phoneId = currentPhoneId;
    const selectedPhone = phones.find(phone => phone.id === parseInt(phoneId));
    setSeletedPhone(selectedPhone);
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await API.update(selectedPhone);
    editPhone(selectedPhone);
    history.push('/');
  };

  const handleOnChange = (phoneKey, value) =>
    setSeletedPhone({ ...selectedPhone, [phoneKey]: value });

  return (
    <>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedPhone.name}
              onChange={e => handleOnChange('name', e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="manufacturer"
            >
              Manufacturer
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedPhone.manufacturer}
              onChange={e => handleOnChange('manufacturer', e.target.value)}
              type="text"
              placeholder="Enter manufacturer"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="ram"
            >
              Ram
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedPhone.ram}
              onChange={e => handleOnChange('ram', e.target.value)}
              type="text"
              placeholder="Enter ram"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedPhone.price}
              onChange={e => handleOnChange('price', e.target.value)}
              type="text"
              placeholder="Enter price"
              aria-label="price"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline"
              aria-label="edit-button"
            >
              Edit Phone
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPhone;

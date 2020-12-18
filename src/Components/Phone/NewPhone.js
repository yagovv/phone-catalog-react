import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddPhone = () => {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [ram, setRam] = useState('');
  const [price, setPrice] = useState('');
  const { addPhone, phones } = useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    const newPhone = {
      id: phones.length + 1,
      name,
      manufacturer,
      ram,
      price,
    };
    addPhone(newPhone);
    history.push('/');
  };

  return (
    <Fragment>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={e => setName(e.target.value)}
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
              value={manufacturer}
              onChange={e => setManufacturer(e.target.value)}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={ram}
              onChange={e => setRam(e.target.value)}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={price}
              onChange={e => setPrice(e.target.value)}
              type="text"
              placeholder="Enter price"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Phone
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddPhone;

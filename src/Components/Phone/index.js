import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Phone({
  id,
  img,
  manufacturer,
  name,
  ram,
  price,
  description,
  screen,
  editPhone,
  removePhone,
}) {
  return (
    <div
      className="inline-flex items-center bg-gray-100 mb-5 shadow justify-between"
      key={id}
    >
      <Link to={`/phone/${id}`} className="flex items-center">
        <img alt="phone" src={img} className="w-52 rounded" />
        <div className="flex-auto text-left px-4 py-2 m-1">
          <p className="text-gray-900 leading-none">{name}</p>
          <p className="text-gray-600">{manufacturer}</p>
          <p className="text-gray-400">{ram}</p>
          <span className="inline-block text-sm font-semibold mt-1">
            {price}
          </span>
        </div>
      </Link>
      {editPhone && removePhone ? (
        <div className="items-right px-4 py-1 m-1">
          <Link to={`/edit/${id}`}>
            <button
              onClick={() => editPhone(id)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-2 py-2 px-4 rounded-full mb-1 inline-flex items-center"
              aria-label="edit-phone"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-edit"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
          </Link>
          <button
            onClick={() => removePhone(id)}
            className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      ) : (
        <div className="items-right px-4 py-1 m-1">
          <p className="text-gray-600">{description}</p>
          <p className="text-gray-400">{screen}</p>
        </div>
      )}
    </div>
  );
}

Phone.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  manufacturer: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  screen: PropTypes.string,
  description: PropTypes.string,
  editPhone: PropTypes.func,
  removePhone: PropTypes.func,
};

export default Phone;

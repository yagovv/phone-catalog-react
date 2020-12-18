import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Phone from '../Phone';
import { Link } from 'react-router-dom';

const PhoneDetail = route => {
  const { phones } = useContext(GlobalContext);
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

  const {
    id,
    name,
    ram,
    price,
    img,
    manufacturer,
    description,
    screen,
  } = selectedPhone;

  return (
    <>
      <div className="w-full max-w-xl container mt-20 mx-auto">
        <Phone
          id={id}
          name={name}
          ram={ram}
          price={price}
          img={img}
          manufacturer={manufacturer}
          description={description}
          screen={screen}
        />
        <div className="text-center mt-4 text-gray-500">
          <Link to="/">Back</Link>
        </div>
      </div>
    </>
  );
};

export default PhoneDetail;

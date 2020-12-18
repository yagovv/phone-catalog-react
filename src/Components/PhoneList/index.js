import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Phone from '../Phone';

const Phonelist = () => {
  const { phones, removePhone, editPhone, getPhones } = useContext(
    GlobalContext
  );

  useEffect(() => {
    getPhones();
  }, []);

  return (
    <>
      <p className="text-gray-900 leading-none text-center font-semibold mt-10 text-4xl mb-5">
        Phone Catalog
      </p>
      {phones.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2 grid-cols-1 md:mx-52 md:my-12">
          {phones.map(phone => {
            const { name, ram, price, manufacturer, img, id } = phone;
            return (
              <Phone
                id={id}
                removePhone={removePhone}
                editPhone={editPhone}
                name={name}
                ram={ram}
                price={price}
                img={img}
                manufacturer={manufacturer}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">
          Loading... please wait
        </p>
      )}
    </>
  );
};

export default Phonelist;

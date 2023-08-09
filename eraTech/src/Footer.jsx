import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerNavs = [
    {
      name: 'الصفحة الرئيسية',
      path: "/"
    },
    {
      name: 'من نحن',
      path: '/about'
    },
    {

      name: 'للتواصل',
      path: '/contact'
    },
    // {
    //   name: 'وظائف'
    // },
    // {
    //   name: 'الدعم'
    // }
  ];

  return (
    <footer className="text-gray-500 bg-gray-100 w-full px-4 py-1 max-w-screen-xxl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">

      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-x-reverse sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className="hover:text-gray-800" key={idx}>
            <Link to={`${item.path}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-center sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; جميع الحقوق محفوظة لدى EraTech 2023
        </div>
      </div>
    </footer>
  );
}

export default Footer;
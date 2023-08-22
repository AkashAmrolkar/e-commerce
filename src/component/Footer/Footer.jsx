import React from 'react';
import logo from '../../assets/image001.gif'

const Footer = () => {
  return (
<footer className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
  <div className="container p-6 mx-auto">
    <div className="grid md:grid-cols-3 lg:grid-cols-3">
      <div className="mb-6 flex justify-center">
        <img src={logo} alt='logo' />
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-2'>
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
            Links
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                >Link 1</a
              >
            </li>
            <li>
              <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                >Link 2</a
              >
            </li>
            <li>
              <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                >Link 3</a
              >
            </li>
            <li>
              <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                >Link 4</a
              >
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h5
            className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
            Links
          </h5>

          <ul className="mb-0 list-none">
            <li>
              <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                >Link 1</a
              >
            </li>
            <li>
              <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                >Link 2</a
              >
            </li>
            <li>
              <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                >Link 3</a
              >
            </li>
            <li>
              <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                >Link 4</a
              >
            </li>
          </ul>
        </div>

      </div>

      
    </div>
  </div>
  <div
    className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
  </div>
</footer>
  )
}

export default Footer
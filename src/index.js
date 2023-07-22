import React from 'react';
import ReactDOM from 'react-dom/client';
import Abcd, { Myabout } from './Myhome';
import Contact from './Mycontact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Myhome/> */}
    <Abcd></Abcd>
    <Myabout/>
    <Contact/>
  </React.StrictMode>
);


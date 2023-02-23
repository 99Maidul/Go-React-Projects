import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from './HelloWorld';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <AppClass msg="React States!" />
        </div>
      </div>
    </div>
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <App msg="Hello again!" />
        </div>
      </div>
    </div>
  </React.StrictMode>
);



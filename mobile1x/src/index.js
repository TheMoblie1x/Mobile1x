import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Components from './Components';
import Controls from './Controls';
import Canvas from './Canvas';
import reportWebVitals from './reportWebVitals';
import Properties from './Properties';

const root = ReactDOM.createRoot(document.getElementById('root'));
const containerStyle = {
  display: 'flex',         // Use flexbox
  flexDirection: 'row',    // Arrange items horizontally
  justifyContent: 'center', // Center items along the main axis (horizontally)
  alignItems: 'center',     // Center items along the cross axis (vertically)
  backgroundColor: '#3498db', // optional: add margin between components
  color: '#fff',   
};


const controlsStyle = {
  flex: '0 0 50px', // flex-grow: 0, flex-shrink: 0, flex-basis: 100px
  margin: '5px',     // optional: add margin between components
  
};

const appStyle = {
  flex: '10 0 400px', // flex-grow: 0, flex-shrink: 0, flex-basis: 100px
  margin: '5px',
  
};


root.render(
  <React.StrictMode>
    <div style={containerStyle}>
    <Controls style={controlsStyle}></Controls>
    <App style={appStyle}/>
    <Components style={controlsStyle}/>
    <Canvas style={appStyle}/>
    <Properties style={controlsStyle}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

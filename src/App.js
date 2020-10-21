import React from 'react';
import { ServiceList } from './components/serviceList';
import { ServiceAdd } from './components/serviceAdd';
import './App.css';

function App() {
  return (
      <>
       <ServiceAdd />
       <ServiceList />
      </>
  );
}

export default App;

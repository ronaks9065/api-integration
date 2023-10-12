import React from 'react';
import ApiUser from './ApiUser';
import ApiAxios from './ApiUserAxios';
import './App.css';

export default function App() {
  return (
    <>
      <ApiUser />
      <ApiAxios />
    </>
  );
}
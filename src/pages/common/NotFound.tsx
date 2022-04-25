import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  console.log('NotFound render...');
  const nav = useNavigate();
  useEffect(() => {
    nav('/');
  }, []);
  return <div className="font-bold flex justify-center h-40 text-center">Not Found</div>;
};

export default NotFound;

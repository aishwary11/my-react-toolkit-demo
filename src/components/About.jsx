import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const userSelect = useSelector(state => state.user);
  return (
    <div>{JSON.stringify(userSelect)}</div>
  );
};

export const Abouts = React.memo(About);
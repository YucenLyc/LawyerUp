import React from 'react';

import { Route } from "react-router-dom";

export default function Approute(props) {

  const { Component, ...rest } = props;

  return (
    <Route
    {...rest}
    render={(routeProps) => (
      
        <Component {...routeProps} />
      
    )}
  />
  )
}
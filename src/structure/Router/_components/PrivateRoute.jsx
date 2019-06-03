import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';


const PrivateRoute = ({fakeData, component: Component, redirect, availableFor, ...rest }) => {
  
  const [redirectTo, setRedirectTo] = useState(redirect);
  const cookies = new Cookies();

  const hasAccess = () => {
    if (!cookies.get('jwttoken')) {
      setRedirectTo('/login');
      return false;
    }
    setRedirectTo('/dashboard');
    return availableFor.includes(cookies.get('role'));
  };

  return(
   
    <Route
        {...rest}
        render={
          props => hasAccess() ?
              <Component {...props} fakeData={fakeData} />
              :
              <Redirect
                  to={{
                    pathname: redirectTo,
                    state: {from: props.location}
                  }}
              />
        }
    />
  )
};

PrivateRoute.defaultProps = {
  redirect: '/login',
};

PrivateRoute.propTypes = {
  redirect: PropTypes.string,
  component: PropTypes.func.isRequired,
  availableFor: PropTypes.arrayOf(
      PropTypes.oneOf(['admin'])
  ).isRequired,
};

export default PrivateRoute;
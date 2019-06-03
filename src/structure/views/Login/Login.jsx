import React from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import LoginForm from './../../../components/LoginForm';
import LayoutCenter from '../../../containers/LayoutCenter';

const cookies = new Cookies();
const isLogged = () => cookies.get('jwttoken') && cookies.get('role');

const Login = () => (
  isLogged() ? <Redirect to='/'/>
    :
    <LayoutCenter>
      <LoginForm/>
    </LayoutCenter>
);

export default Login;
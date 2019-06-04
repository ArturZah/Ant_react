import React from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import LoginForm from './../../../components/LoginForm';
import styled from 'styled-components';

const cookies = new Cookies();
const isLogged = () => cookies.get('jwttoken') && cookies.get('role');

const StyledCnt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;


const Login = () => (
  isLogged() ? <Redirect to='/'/>
    :
    <StyledCnt>
      <LoginForm/>
    </StyledCnt>
);

export default Login;
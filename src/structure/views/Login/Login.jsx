import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import LoginForm from './../../../components/LoginForm';
import styled from 'styled-components';
import { Button, notification } from 'antd';

const cookies = new Cookies();
const isLogged = () => cookies.get('jwttoken') && cookies.get('role');

const StyledCnt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Login = () => {

  const [initialized, setInitialized] = useState(false);

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Info about app',
      description:
        'This is a sample React app with use of Ant Design. All initial data was taken from JSONPlaceholder. All data created by user are kept in local state. You can sign in to app using random login and password.',
      btn,
      key,
    });
  };

  if (!initialized) {
    openNotification();
    setInitialized(true);
  }
  
return (
  isLogged() ? <Redirect to='/'/>
    :
    <StyledCnt>
      <LoginForm/>
    </StyledCnt>
)};

export default Login;
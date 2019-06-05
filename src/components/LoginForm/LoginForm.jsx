import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import styled from 'styled-components';
import { Form, Input, Button, Icon, message } from 'antd';
import Logo from './../Logo';
import ResetPassModal from './../ResetPassModal';

const cookies = new Cookies();

const StyledForm = styled(Form)`
  max-width: 350px;
  padding: 25px !important;
  background-color: rgba(200, 200, 250, .3);
  border-bottom: 3px solid #888; 
  border-radius: 5px;
  box-shadow: 0px 0px 11px -12px rgba(0,0,0,0.75);
 
    img {
      margin-bottom: 25px;
    }
`;

const Errors = styled.div`
  color: #ff0000;
  height: 18px;
  width: 100%;
  text-align: center;
  transition: all .3s ease-in-out;
`; 

const LoginForm = ({form}) => {

  const { getFieldDecorator } = form;

  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [visible, setVisible] = useState(false)
    
  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, {user, password}) => {
      if (!err) {
        cookies.set("user", user);
        setLoading(true);
        cookies.set("jwttoken", "true"); 
        cookies.set("role", "admin"); 
        setLoading(false);
        setRedirect(true);
      } else {
        setError("Please, enter valid credentials");
        setLoading(false);
      }
    });
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleConfirm = () => {
    setVisible(false);
    form.resetFields();
    message.info("New password was send to your email!");
  };

  const clearError = () => setError('');

  return(
    <>
      <ResetPassModal visible={visible} handleCancel={handleCancel} handleConfirm={handleConfirm}/>
      { redirect && <Redirect to='/' /> }
      <StyledForm onSubmit={handleSubmit} className="login-form">
      <Logo />
      <Form.Item>
        {getFieldDecorator('user', {
          rules: [{ required: true, message: 'Please input your user name!' }],
        })(
          <Input 
            prefix={<Icon type="user" />}
            placeholder="User"
            onChange={clearError}
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input 
            prefix={<Icon type="lock" />}
            type="password"
            placeholder="Password"
            onChange={clearError}
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading} style={{width: '100%'}}>
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
        <Link onClick={() => showModal()} className="login-form-forgot" style={{float: 'right'}} to="/Login">
          Forgot password
        </Link>
      </Form.Item>
      <Errors className="login-error">{error}</Errors>
    </StyledForm>
  </>
  );
};

LoginForm.propTypes = {
  form: PropTypes.shape({}).isRequired,
  client: PropTypes.shape({}).isRequired,
};

const CreateLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default CreateLoginForm;
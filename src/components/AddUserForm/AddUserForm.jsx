import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import LayoutCenter from './../../containers/LayoutCenter';
import { Form, Icon, Input, Button, Upload, message } from 'antd';

const StyledCnt = styled.div`
 margin: 1% !important; 
 width: 440px;

 .avatarCnt {
   display: flex;
   justify-content: space-between;
   align-items: center;

   span {
     padding: 0 10px;
   }

   .avatar-uploader {
     padding: 0 20px 0 0;
   }
 }

 .login-form-button {
  margin-top: 20px;
 }
 `;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class AddUserFrom extends React.Component {

  state = {
    redirect: false,
    loading: false,
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/user_list' />
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addUser(values.name, values.suite, values.email, values.website);
        this.setRedirect();
      }
    });
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const uploadButton = (
      <div style={{margin: 'auto'}}>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Avatar</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;

    return <StyledCnt>
      {this.renderRedirect()}
      <LayoutCenter >
        <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '100%', padding: '20px', backgroundColor: '#eee', borderRadius: '5px'}}>
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your item name!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="User name"
              />,
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('suite', {
              rules: [{ required: true, message: 'Please input user nickname!' }],
            })(
              <Input
                prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="User nickname"
              />,
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input an email!' }],
            })(
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
                type="email"
              />,
            )}
          </Form.Item>
          
          <Form.Item>
            {getFieldDecorator('website', {
              rules: [{ required: true, message: 'Please input user website!' }],
            })(
              <Input
                prefix={<Icon type="credit-card" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="http://website.com"
                type="url"
              />,
            )}
          </Form.Item>
          <div className='avatarCnt'>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={this.handleChange}
            >
              {imageUrl ? <img style={{maxWidth: '150px'}} src={imageUrl} alt="avatar" /> : uploadButton}
            </Upload> 
            <span>
              <p>If you want to upload your avatar you need to pick a file from your computer.</p>
              <p>Max weight of file is 2MB and is need to be in JPG format.</p>
            </span>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Add user
            </Button>
          </Form.Item>

        </Form>
      </LayoutCenter>
    </StyledCnt>
  }
}

AddUserFrom.propTypes = {
  form: PropTypes.shape({}).isRequired,
  client: PropTypes.shape({}).isRequired,
};

const CreateAddUserFrom = Form.create({ name: 'add_item_login' })(AddUserFrom);

export default CreateAddUserFrom;
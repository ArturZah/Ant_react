import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import LayoutCenter from './../../containers/LayoutCenter';
import { Form, Icon, Input, Button } from 'antd';

const { TextArea } = Input

const StyledCnt = styled.div`
 margin: 1% !important; 
 width: 440px;
 `;

class AddItemForm extends React.Component {

  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/item_list' />
    }
  }

  handleSubmit = e => {
    console.log(this.props)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.addItem(values.name, values.code);
        this.setRedirect();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return <StyledCnt>
      {this.renderRedirect()}
      <LayoutCenter >
        <div  style={{ background: '#012b54', borderRadius: '5px', padding: '20px 20px 50px 20px', width: '100%'}}>
        <Form onSubmit={this.handleSubmit} className="login-form" style={{borderRadius: '5px', width: '100%', padding: '20px', backgroundColor: '#f0f2f5'}}>
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your item name!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Item name"
              />,
            )}
          </Form.Item>
          
          <Form.Item>
            {getFieldDecorator('code', {
              rules: [{ required: true, message: 'Please input item code!' }],
            })(
              <Input
                prefix={<Icon type="barcode" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Item code"
              />,
            )}
          </Form.Item>

          <Form.Item>
              <TextArea
                prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />}
                rows={4}
                style={{resize: 'none'}}
                placeholder="Description"
              />,
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Add item
            </Button>
          </Form.Item> 
          </Form>
        </div>
      </LayoutCenter>
    </StyledCnt>
  }
}

AddItemForm.propTypes = {
  form: PropTypes.shape({}).isRequired,
  client: PropTypes.shape({}).isRequired,
};

const CreateAddItemForm = Form.create({ name: 'add_item_login' })(AddItemForm);

export default CreateAddItemForm;
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import LayoutCenter from './../../containers/LayoutCenter';
import { Form, Icon, Input, Button } from 'antd';

const { TextArea } = Input

const StyledCnt = styled.div`
 margin: 1% !important; 
 width: 440px;
 `;

class AddItemForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return <StyledCnt>
      <LayoutCenter >
        <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '100%', padding: '20px', backgroundColor: '#eee'}}>
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
            {getFieldDecorator('description', {
              rules: [{ required: true, message: 'Please input description!' }],
            })(
              <TextArea
                prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />}
                rows={4}
                style={{resize: 'none'}}
                placeholder="Description"
              />,
            )}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Add item
            </Button>
          </Form.Item>

        </Form>
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
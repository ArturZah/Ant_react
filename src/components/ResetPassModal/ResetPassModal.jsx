import React from 'react';
import { Input, Form, Icon, Modal, message} from 'antd';

const ResetPassModal = ({visible, handleConfirm, handleCancel}) => {
 
  const validateEmail = () => {
      var re = /\S+@\S+\.\S+/;
      return re.test(document.getElementById('resetPassInput').value);
  }

  const clickConfirm = () => {
    if(document.getElementById('resetPassInput').value !== '' && validateEmail() === true) {
      console.log(document.getElementById('resetPassInput').value);
      handleConfirm()
    } else {
      message.error("Please, type correct email adress!")
    }  
  }
  return (
  
    <Modal
      visible={visible}
      title="Reset password"
      okText="Confirm"
      onCancel={handleCancel}
      onOk={clickConfirm}
    >
      <Form layout="vertical">
        <p>Please, type your email address and confirm to receive new password...</p>
        <Input allowClear={true} id="resetPassInput" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="youremail@email.com" />
      </Form>
    </Modal>
  ); 
}

ResetPassModal.defaultProps = {};
ResetPassModal.propTypes = {};

const ResetPassModalForm = Form.create({ name: 'reset_modal' })(ResetPassModal);

export default ResetPassModalForm;
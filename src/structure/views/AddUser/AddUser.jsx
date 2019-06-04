import React from 'react';
import Layout from "../../Layout";
import styled from 'styled-components';
import AddUserForm from './../../../components/AddUserForm'
import LayoutCenter from './../../../containers/LayoutCenter';

const StyledCnt = styled.div`
   margin: 12px 0 0 0 !important; 
 `;

class AddUser extends React.Component {

  render() {

    return <Layout>
    <StyledCnt>
      <h2  style={{margin: '0 0 25px 25px'}}>Add User</h2>
      <LayoutCenter >
        <AddUserForm addUser={this.props.addUser}/>
      </LayoutCenter>
    </StyledCnt>
  </Layout>
  }
}

AddUser.defaultProps = {};
AddUser.propTypes = {};

export default AddUser;
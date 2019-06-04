import React from 'react';
import Layout from "../../Layout";
import styled from 'styled-components';
import AddItemForm from './../../../components/AddItemForm'
import LayoutCenter from './../../../containers/LayoutCenter';

const StyledCnt = styled.div`
   margin: 12px 0 0 0!important; 
 `;

class AddItem extends React.Component {

  render() {

    return <Layout>
    <StyledCnt>
      <h2  style={{margin: '0 0 25px 25px'}}>Add an item</h2>
      <LayoutCenter>
        <AddItemForm addItem={this.props.addItem}/>
      </LayoutCenter>
    </StyledCnt>
  </Layout>
  }
}

AddItem.defaultProps = {};
AddItem.propTypes = {};

export default AddItem;
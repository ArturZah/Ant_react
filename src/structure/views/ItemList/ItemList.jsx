import React from 'react';
import Layout from "../../Layout";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LayoutCenter from './../../../containers/LayoutCenter';
import { List, Avatar } from 'antd';

const StyledCnt = styled.div`
 margin: 1% !important; 
 `;

const ItemList = ({fakeData}) => (

  <Layout>
    <StyledCnt>
      <h2 style={{marginBottom: '25px'}}>Items</h2>
      <LayoutCenter>
        <List
        style={{width: '100%', padding: '0 20px'}}
        itemLayout="horizontal"
        dataSource={fakeData}
        renderItem={item => (
          <List.Item actions={[<span>edit</span>, <span>delete</span>]}>
            <List.Item.Meta
              avatar={<Avatar src="https://cdn3.iconfinder.com/data/icons/ringtone-music-instruments/512/blue-round-recycle-item-garbage-eco-512.png" />}
              title={<Link to="#">{item.name}</Link>}
              description={item.company.catchPhrase}
            />
            </List.Item>
          )}
        />
      </LayoutCenter>
    </StyledCnt>
  </Layout>
);

ItemList.defaultProps = {};
ItemList.propTypes = {};

export default ItemList;
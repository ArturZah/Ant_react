import React from 'react';
import Layout from "../../Layout";
import styled from 'styled-components';
import { Table, Avatar, Divider, Button, Popconfirm } from 'antd';

const StyledCnt = styled.div`
  .tableCnt {
    background-color: #ffff;
  }

  .ant-table-pagination.ant-pagination {
      float: right;
      margin: 10px 30px;
  }
 `;

const UserList = ({fakeData, delItem}) => {

  const columns = [
    {
      title: 'Order',
      key: 'number',
      dataIndex: 'id',
      width: '50px',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Avatar',
      key: 'avatar',
      render: () => (
        <span>
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png" />
        </span>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Website',
      key: 'website',
      dataIndex: 'website',
    },
    {
      title: '',
      key: 'action',
      render: (e) => (
        <span style={{display: 'flex', justifyContent: 'flex-end', marginRight: '16px',}}>
           <Button type="primary">Edit</Button>
            <Divider type="vertical" />
            <Popconfirm title="Sure to delete?" onConfirm={() => delItem(e.id)}>
              <Button type="danger">Delete</Button>
            </Popconfirm>
        </span>
      ),
    },
  ];  

  return (<Layout>
      <StyledCnt>
        <h2 style={{margin: '0 0 36px 25px'}}>Users</h2>
        <div className='tableCnt'>
          <Table style={{width: '100%', minHeight: '78vh'}} pagination={{ pageSize: 10 }} columns={columns} dataSource={fakeData} />
        </div>    
      </StyledCnt>
    </Layout>
  ); 
}

UserList.defaultProps = {};
UserList.propTypes = {};

export default UserList;
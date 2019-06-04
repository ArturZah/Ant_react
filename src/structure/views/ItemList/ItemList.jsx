import React from 'react';
import Layout from "../../Layout";
import styled from 'styled-components';
import { Table, Divider, Button, Popconfirm } from 'antd';

const StyledCnt = styled.div`

  .tableCnt {
    background-color: #ffff;
  }

  .ant-table-pagination.ant-pagination {
      float: right;
      margin: 10px 30px;
  }
 `;

const ItemList = ({fakeData, delItem}) => {

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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Code',
      key: 'code',
      dataIndex: 'address.zipcode',
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

  return (
    <Layout>
      <StyledCnt>
        <h2 style={{margin: '0 0 36px 25px'}}>Items</h2>
        <div className='tableCnt'>
          <Table style={{width: '100%', minHeight: '78vh'}} pagination={{ pageSize: 10 }} columns={columns} dataSource={fakeData} />
        </div>    
      </StyledCnt>
    </Layout>
  );
}

ItemList.defaultProps = {};
ItemList.propTypes = {};

export default ItemList;
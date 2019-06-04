import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {  Card, Avatar } from 'antd';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;

  div:nth-child(1), div:nth-child(2) {
    margin-bottom: 5%;
  }
`;

const StyledP = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  text-align: center;

  div {
  display: flex;
  justify-content: center;
  height: 40px;
  align-items: center;
  text-align: center;
  }
`;

function DashboardCnt({fakeData}) {
    const dataCheck = fakeData === undefined || fakeData.length !== 0;

    return <StyledDiv>
    <div style={{ background: '#012b54', borderRadius: '5px', padding: '15px 15px 40px 15px', width: '45%' }}>
    <Card title="Leatest Users" bordered={false}>
      {
       fakeData.slice(-5).map(data =>
        <StyledP key={data.id}>
          <div>
            <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png" />
          </div>
          <div>
            { dataCheck ? data.name : "None"}
            <Link style={{marginLeft: '15px'}} to={ dataCheck ? data.website : "None" }>Profil</Link> 
          </div>
        </StyledP>
        
        )
      }
    </Card>
    </div>

    <div style={{ background: '#012b54', borderRadius: '5px', padding: '15px 15px 40px 15px', width: '45%' }}>
    <Card title="Letest Items" bordered={false}>
      {
       fakeData.slice(-5).map(data =>
        <StyledP key={data.id}>
          <span>
            Nr: { dataCheck ? data.address.zipcode : "None"}
          </span>
          { dataCheck ? data.address.suite : "None"}
        </StyledP>
        )
      }
    </Card>
    </div>
  </StyledDiv>
}

DashboardCnt.defaultProps = {};

DashboardCnt.propTypes = {};

export default DashboardCnt;
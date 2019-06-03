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

    return <StyledDiv>
    <div style={{ background: '#ECECEC', padding: '30px', width: '45%' }}>
    <Card title="Leatest Users" bordered={false}>
      <StyledP>
        <div>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          ID: {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-1)[0].id : "None"}
        </div>
        <div>
          {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-1)[0].name : "None"}
          <Link style={{marginLeft: '15px'}} to={fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-1)[0].website : "None" }>Profil</Link> 
        </div>
      </StyledP>

      <StyledP>
        <div>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />  
          ID: {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-2)[0].id : "None"}
        </div>
 
        <div>
          {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-2)[0].name : "None"}
          <Link style={{marginLeft: '15px'}} to={fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-2)[0].website : "None" }>Profil</Link> 
        </div>
      </StyledP>

      <StyledP>
        <div>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> 
          ID: {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-3)[0].id : "None"}
        </div>  
        <div>
          {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-3)[0].name : "None"}
          <Link style={{marginLeft: '15px'}} to={fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-3)[0].website : "None" }>Profil</Link> 
        </div>
      </StyledP>
    </Card>
    </div>

    <div style={{ background: '#ECECEC', padding: '30px', width: '45%'}}>
    <Card title="Letest Items" bordered={false}>
      <StyledP>
        <span>
          Nr: {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-1)[0].address.zipcode : "None"}
        </span>
        {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-1)[0].address.suite : "None"}
      </StyledP>

      <StyledP>
        <span>
          Nr: {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-2)[0].address.zipcode : "None"}
        </span>
        {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-2)[0].address.suite : "None"}
      </StyledP>
      <StyledP>
        <span>
          Nr: {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-3)[0].address.zipcode : "None"}
        </span>
        {fakeData === undefined || fakeData.length !== 0 ? fakeData.slice(-3)[0].address.suite : "None"}
      </StyledP>
    </Card>
    </div>
    </StyledDiv>
}

DashboardCnt.defaultProps = {};

DashboardCnt.propTypes = {};

export default DashboardCnt;
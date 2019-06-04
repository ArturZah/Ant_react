import React from 'react';
import Layout from "../../Layout";
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import LayoutCenter from './../../../containers/LayoutCenter';
import DashboardCnt from '../../../components/DashboardCnt/DashboardCnt';

const cookies = new Cookies();

const StyledCnt = styled.div`
 margin: 12px 0 0 0 !important; 
 `;

class Dashboard extends React.Component {
  state = {
    user: cookies.get("user"),
  }

  render() {

    return <Layout>
    <StyledCnt>
      <h2  style={{margin: '0 0 25px 25px'}}><span style={{textTransform: 'capitalize'}}> { this.state.user }</span> Dashboard</h2>
      <LayoutCenter >
        <DashboardCnt fakeData={this.props.fakeData} />
      </LayoutCenter>
    </StyledCnt>
  </Layout>
  }
}

Dashboard.defaultProps = {};

Dashboard.propTypes = {};

export default Dashboard;
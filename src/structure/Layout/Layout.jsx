import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import { Layout } from 'antd';

const { Sider, Content } = Layout;

const StyledMain = styled.main`
  flex-grow: 1;
  padding: 2rem;
  height: auto;
  min-height: calc(100vh - 50px);
  margin: 0 auto;
  width: 100%;

  .ant-upload.ant-upload-select-picture-card, .ant-upload-list-picture-card .ant-upload-list-item {
    height: 150px;
    width: 150px;
  }
`;

const MainLayout = ({children}) => (
  <>
    <Layout>
      <Sider>
        <Navigation/>
      </Sider>
      <Content>
        <StyledMain>
          {children}
        </StyledMain>
        <Footer />
      </Content>
    </Layout>
    
  </>
);

Layout.defaultProps = {};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
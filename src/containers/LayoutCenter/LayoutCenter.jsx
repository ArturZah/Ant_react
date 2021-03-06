import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  min-height: 78vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #012b54;
`;

const LayoutCenter = ({children}) => (
    <Container>
        {children}
    </Container>
);

LayoutCenter.propTypes={
    children: PropTypes.node.isRequired,
};

export default LayoutCenter;
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  text-align: center;
`;

export class Footer extends Component {

  render() {

    return (
      <StyledFooter>
        <p>Footer text © 2019</p>
      </StyledFooter>
    );
  }
}


Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
import React, {useState} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

const StyledCnt = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    margin-left: 10%;
  }

  div {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 8em;
      margin: 0;
      width: 350px;
    }

    p {
      width: 350px;
      font-size: .9em;
      margin: 0 !important;
    }

    div {
      width: 350px;
      display: flex;
      align-items: baseline;

      button {
      float: left;
      background-color: #00aced;
      border: none;
      cursor: pointer;
      width: 100px;
      height: 30px;
      margin-top: 30px;
      color: #fff;
      border-radius: 5px;

      &:focus {
        outline: none;
      }
    }
    }
  }
 `;

function Error() {
  const [redirect, setRedirect] = useState(false)

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to='/' />
    }
  }

  return <StyledCnt>
<<<<<<< HEAD
      {renderRedirect()}
      <img src="https://i.ibb.co/m9WpPT4/403.png" alt="Error 403"></img>
=======
    {renderRedirect()}
    <img src="https://i.ibb.co/m9WpPT4/403.png" alt="Error 403"></img>
    <div>
      <h1>403</h1>
      <p>This page is forbiden. Please back to main page</p>
>>>>>>> 207d5de9407c8c8504d9108620875162872dec11
      <div>
        <button onClick={() => setRedirect(true)}>Click</button>
      </div>
<<<<<<< HEAD
    </StyledCnt>
=======
    </div>
  </StyledCnt>
  
>>>>>>> 207d5de9407c8c8504d9108620875162872dec11
}

Error.defaultProps = {};

Error.propTypes = {};

export default Error;
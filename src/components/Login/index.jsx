import React from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants';

const StyledLogin = styled.main`
  height: calc(100vh - ${HEADER_HEIGHT}px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;

  input {
    display: block;
  }

  .title {
    font-size: 20px;
  }
  .input-id,
  .input-password {
    width: 383px;
    height: 49px;
    margin: 27px;
  }

  .join {
    width: 233px;
    height: 49px;
    left: 588px;
    top: 615px;

    background: #c4c4c4;
    border-radius: 24.5px;
    line-height: 49px;
    cursor: pointer;
    font-size: 20px;
    margin-top: 66px;
  }

  .find-wrap {
    align-self: flex-end;
  }
`;

const Login = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <StyledLogin>
        <span className="title">LOGIN</span>
        <div>
          <input type="text" className="input-id" />
          <input type="text" className="input-password" />
        </div>
        <div className="find-wrap">
          <span style={{ cursor: 'pointer' }}>아이디 찾기</span>
          <span> / </span>
          <span style={{ cursor: 'pointer' }}>비밀번호 찾기</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'flex-end' }}>
          <input type="checkbox" name="" id="" />
          <span>아이디 저장</span>
        </div>
        <div className="join">회원가입</div>
      </StyledLogin>
    </div>
  );
};

export default Login;

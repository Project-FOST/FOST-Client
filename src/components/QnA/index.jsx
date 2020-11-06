import React, { useState } from 'react';
import styled from 'styled-components';

const noticeDummies = [
  { title: '<필독> 공지사항', date: '2020-09-12' },
  { title: '<필독> 공지사항', date: '2020-09-12' },
  { title: '<필독> 공지사항', date: '2020-09-12' },
];

const qnaDummies = [
  { id: 1, title: '글제목', user: '진도코기', date: '2020-09-12' },
  { id: 1, title: '글제목', user: '진도코기', date: '2020-09-12' },
  { id: 1, title: '글제목', user: '진도코기', date: '2020-09-12' },
  { id: 1, title: '글제목', user: '진도코기', date: '2020-09-12' },
  { id: 1, title: '글제목', user: '진도코기', date: '2020-09-12' },
  { id: 1, title: '글제목', user: '진도코기', date: '2020-09-12' },
  { id: 1, title: '글제목', user: '진도코기', date: '2020-09-12' },
  { id: 1, title: '글제목', user: '진도코기', date: '2020-09-12' },
];

const StyledQnA = styled.main`
  box-sizing: border-box;
  padding: 60px;
  width: 100%;
  min-height: 100vh;
  .write-notice-btn {
    display: block;
    width: 40px;
    margin-left: auto;
    margin-bottom: 34px;
    height: 40px;
  }

  hr {
    margin: 20px 0 30px 0;
  }

  .notice-row,
  .qna-row {
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    font-size: 20px;
    justify-content: space-between;
    margin-bottom: 3px;
    text-align: left;
    & > span:nth-child(1) {
      width: 110px;
    }
    & > span:nth-child(2) {
      flex-grow: 1;
      cursor: pointer;
    }
  }
  .qna-row {
    padding: 0 26px;
    padding-right: 0;
    font-size: 25px;

    margin-bottom: 38px;
    & > span:last-child {
      margin-left: 22px;
    }
  }

  button {
    all: unset;
    cursor: pointer;
    width: 217px;
    height: 78px;
    background: #111021;
    border-radius: 17px;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    & > img {
      margin-right: 10px;
    }
  }
`;

const QnA = ({ history }) => {
  const [notices] = useState(noticeDummies);
  const [qnas] = useState(qnaDummies);

  return (
    <StyledQnA>
      <img className="write-notice-btn" src="/qna/plus-btn.svg" alt="" srcset="" />
      {notices.map((notice) => (
        <div className="notice-row">
          <span>공지</span>
          <span>{notice.title}</span>
          <span>{notice.date}</span>
        </div>
      ))}
      <hr />
      {qnas.map((qna) => (
        <div className="qna-row">
          <span>{qna.id}</span>
          <span>{qna.title}</span>
          <span>{qna.user}</span>
          <span>{qna.date}</span>
        </div>
      ))}
      <button onClick={() => history.push('/qna/write')}>
        <img src="/qna/write-icon.svg" alt="write" />
        글쓰기
      </button>
    </StyledQnA>
  );
};

export default QnA;

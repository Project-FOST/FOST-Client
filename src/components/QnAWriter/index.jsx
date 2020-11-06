import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const StyledQnAWriter = styled.main`
  height: 800px;
`;

const WiziwigWrap = styled.div`
  height: 700px;
`;

const StyledReactQuill = styled(ReactQuill)`
  height: calc(700px - 42px);
`;

const ButtonWrap = styled.div`
  height: 100px;
  display: flex;
  padding: 0 100px;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  all: unset;
  background-color: #b6b6b6;
  height: 45px;
  padding: 0 30px;
  font-size: 18px;
  margin-top: 16px;
  cursor: pointer;
`;

const QnAWriter = () => {
  const [text, setText] = useState('');
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <StyledQnAWriter>
      <WiziwigWrap>
        <StyledReactQuill
          className="wiziwig"
          value={text}
          onChange={setText}
          modules={modules}
          formats={formats}
        />
      </WiziwigWrap>
      <ButtonWrap>
        <Button>글 목록</Button>
        <Button>등록</Button>
      </ButtonWrap>
    </StyledQnAWriter>
  );
};

export default QnAWriter;

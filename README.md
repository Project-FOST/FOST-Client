## `prerequisite`

0. git clone
1. npm i

### `디렉토리 구조`

```
├── public
└── src
    ├── components
    │   ├── App.css
    │   ├── App.jsx
    │   ├── Footer // FOST FOOTER
    │   │   ├── index.jsx
    │   │   └── index.style.js
    │   ├── Header //FOST HEADER 로고, 네비게이션 바
    │   │   ├── index.jsx
    │   │   └── index.style.js
    │   ├── ItemList // 상품목록
    │   │   ├── index.jsx
    │   │   └── index.style.js
    │   ├── LikeItemList // 좋아요 누른 상품목록
    │   │   └── index.jsx
    │   ├── LikeStoreList // 좋아요 누른 상점목록
    │   │   └── index.jsx
    │   ├── Login // 로그인 페이지
    │   │   └── index.jsx
    │   ├── MainPage // 메인 홈페이지 캐러셀 "react-slick": "^0.27.12",
    "slick-carousel": "^1.8.1",
    │   │   ├── index.jsx
    │   │   └── index.style.js
    │   ├── ProductDetail //상품 상세페이지
    │   │   └── index.jsx
    │   ├── QnA // qna 게시판
    │   │   └── index.jsx
    │   └── QnAWriter // qna 글쓰기, wiziwig에디터 "react-quill": "^1.3.5"
    │       └── index.jsx
    ├── constants //상수 모음
    │   └── index.js
    ├── index.css
    ├── index.jsx
    └── logo.svg
```

### `추가 전달 사항`

1. css 스타일링: `styled-component`
2. linter: `eslint` - airbnb스타일
3. formatter: `prettier` - airbnb스타일 준수

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

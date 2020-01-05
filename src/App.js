// default import. 오직 한개만 가능
import React, { Component } from 'react';
// import { Component } from 'react' 
//위와 다르게 이것은 member import(named import) 라고 부름
// member import는 export 될 때, export 를 사용하고, 여러개의 member export가 가능하다.
import logo from './logo.svg';
import './App.css';

/* React 에서 컴포넌트를 정의 할 때는 보통 EcmaScipt 6 에 도입된 class 문법을 사용
*/
class App extends Component{
  render() {
    return (
      <div className="gray-background"> 
      <img src={logo} lat="logo" />
      <h2> Let's develop management System!</h2>
    </div>
    );
  }
}

/*컴포넌트가 라이프사이클 API 도 사용하지 않고, 
  state 도 사용하지 않고, 그냥 props 만 전달해주면 뷰를 렌더링만 해주는 역할이라면
  함수형 컴포넌트 형식으로 컴포넌트를 정의 할 수 있음
*/
/*
function App() { // 함수형 컴포넌트 
  return (
    // 클래스 명시 
    <div className="gray-background"> 
      <img src={logo} lat="logo" />
      <h2> Let's develop management System!</h2>
    </div>
  );
}
*/
export default App;

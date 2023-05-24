import React, { Component, useState } from 'react'

/* rcc : class component 생성하는 단축키
        React Hook 이라는 기능들이 생겨나게 되면서
        Function 컴포넌트에서 실행되지 않았던
        리액트의 중요 요소들을 Function 컴포넌트에서 사용할 수 있게 됨
        ex) LifeCylcle 같은 중요한 개념을  Function Component에서 사용할 수 없었음
            React Hook 이 생겨나게 되면서 이제는 Function Componenet 에서도 
            LifeCycle 을 사용할 수있게 됨
            React Hook : use ~ 시작하는( useState, useRef, useContext...)
*/
export default class Ex01 extends Component {
    componentDidMount(){
        //compionentDidMount : 화면이 마운트 됨 (끝)
        //=> API call(ajax, fetch,axios 등등)
        //=> 프론트/벡엔드 주고받는정보
        console.log('3. componentDidMount -랜더링완료 ');
    }
    componentDidUpdate(){
        /* 값이 변경되어 갱신이 일어난 직후에 호출 */
        console.log('**값이 변경되었습니다');
    }
    // constructor :  생성자
    //state , 함수, 변수 등등의 값들을 초기화 할 때 사용
    //=>  화면이 렌더링 되기 이전 , 가장 최초의 단계
    constructor(){
        console.log('1. constructor -최초생성');
        //
        super();
        this.state={
            num : 0
        }

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleIncrement2 = this.handleIncrement2.bind(this);
    }

    handleIncrement(){
        console.log('handle Increment Function');
        this.setState({
            num : this.state.num+=1
        });
    }
    handleIncrement2(){
        console.log('handle Increment Function');
    

        this.setState({
            num : this.state.num-=1
          });
       
   
    
    }

  render() {
    //render : 화면을 렌더링 할때
    //=> 화면을 구성하는 요소를 작성
    console.log('2. render -화면이 렌더링 되는 중 ');
    return (
      <div>
        <h1> Class Component : {this.state.num}</h1>
        <button onClick={this.handleIncrement}> +1</button>
        <button onClick={this.handleIncrement2}> -1</button>
      </div>
    )
  }
}

import React from 'react';
import ReactDOM from 'react-dom';

// JSX.Element组件
// const ele = (
//     <div >hello world!</div>
// );

// 手动创建组件
// const divEle = React.createElement('div', null, "hello",
//     React.createElement('h1', null, 'react'));
// console.log(divEle);

// 函数组件
// function Home() {
//     return (
//         <div >hello world!</div>
//     )
// }

// class组件
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    render() {
        return (
            <>
                <div >hello world!{this.state.count}</div>
                <button onClick={() => {
                    const { count } = this.state;
                    const res = count + 1;
                    this.setState({ count: res });
                }}>count</button>
            </>
        )
    }
}

const t = ReactDOM.render(
    <App />,
    document.getElementById('root'));

console.log('t', t)
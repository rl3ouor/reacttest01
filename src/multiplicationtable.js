import React from 'react';
import ReactDOM from 'react-dom';//react 코드를 웹에다가 붙여주는 코드
import './index.css';

//숙제 16 정답! 뜨도록 하기
class GuGuDan extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first : Math.ceil(Math.random() * 9),
            second : Math.ceil(Math.random() * 9),
            value:'',
            resultval : '',
            result: ''

        }
    }
    //메소드를 만들어 준다.
    onSubmit = (e) => {
        e.preventDefault();
        var resultevale = this.state.value;
        if(parseInt(this.state.value) === this.state.first * this.state.second){
            this.setState({
                first : Math.ceil(Math.random() * 9),
                second : Math.ceil(Math.random() * 9),
                resultval : resultevale,
                value:'',
                result: '정답'
            })
        }
        else {
            this.setState({
                value:'',
                result: '땡'
            })
        }
    };
    onChange = (e) => this.setState({value: e.target.value});

    render() {
        return (
            <div>
                <div>{this.state.first}곱하기{this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input type="number" value={this.state.value} onChange={this.onChange}/>
                    {/*input.onchage = function(e){console.log(e.target.value)}*/}
                    <button>입력!</button>
                </form>
                <div>
                    {this.state.resultval} {this.state.result}
                </div>
            </div>
        )
    }

}
ReactDOM.render(<GuGuDan />,document.querySelector('#root'));
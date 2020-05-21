import React, { Component } from 'react';
import Head from './component/head';


class App extends Component {
constructor(props)
{
    super(props);
    this.state={trangthai:"Khởi tạo"}
}
// Begin - Hai hàm của Mouting trong ReactJs
componentWillMount() {
    console.log('componentWillMount đang chạy');
}
componentDidMount() {
    console.log('componentDidlMount đang chạy');
}
// End - Hai hàm của Mouting trong ReactJs

// Begin - Hàm của Updating trong ReactJs
shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate đang chạy');
    return true;
}
componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate đang chạy');
}

componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate đang chạy');
}

capnhatStates=()=>{
    this.setState({trangthai: "Da update"});
}

// End - Hàm của Updating trong ReactJs

    render() {
        console.log('Render đang chạy')
        return (
            <div>
            {/*<button className="btn btn-danger" onClick={this.capnhatStates} >Update</button>*/}
            <Head/>
            </div>
        );
    }
}

export default App;
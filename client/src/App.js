import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Customer from "./components/Customer";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

// const styles = theme => ({
//     root: {
//         width: '100%',
//         marginTop: theme.spacing.unit * 3,
//         overflowX: "auto"
//     },
//     table: {
//         minWidth: 1080
//     }
// });

class App extends Component {

    state = {
        customers: ""
    }

    componentDidMount() {
        this.callApi()
            // body값을 res에 넣고, 그걸
            // 다시 customers라는 변수에 넣는다
            .then(res => this.setState({customers: res}))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        // api/customers 경로에 목록을 json형태로 body한테 준다
        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
    }

    render(){
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.customers ? this.state.customers.map(c => {
                            return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job}/>);
                        }) : ""}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default App;

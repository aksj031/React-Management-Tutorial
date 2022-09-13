import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import React, { Component } from 'react';
import { Paper } from '@mui/material';
import { Table } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import { withStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: useTheme().spacing(3),
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '이이름',
  'birthday': '999999',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이이이름',
  'birthday': '888888',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이름이',
  'birthday': '777777',
  'gender': '남자',
  'job': '디자이너'
}]

class App extends Component{
  render(){
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
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
            {customers.map(c => {
              return (<Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

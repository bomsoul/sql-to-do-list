import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

const Todo = props =>(
    <TableRow>
    <TableCell>
    <Fab component={ Link } to={"/show/"+props.todo.id} color="primary" aria-label="edit">
        <EditIcon />
    </Fab>&nbsp;
      <Fab color="secondary" aria-label="delete">
        <DeleteIcon />
      </Fab>
    </TableCell>
    <TableCell>{props.todo.title}</TableCell>
    <TableCell>{props.todo.description}</TableCell>
    <TableCell align="right"><FormControlLabel
        control={
          <Checkbox
            checked={props.todo.status}
            value="checkedB"
            color="secondary"
          />
        }
        label="DONE"
      /></TableCell>
  </TableRow>
)
class Home extends Component{
    constructor(props){
        super(props)
        this.state= {
            todos: []
        }
    }

    componentDidMount(){
      axios.get('http://localhost:4000/')
      .then(response =>{
        this.setState({todos: response.data})
      })
      .catch(function(error){
        console.log(error);
      })
    }

    componentDidUpdate(){
      axios.get('http://localhost:4000/')
      .then(response =>{
        this.setState({todos: response.data})
      })
      .catch(function(error){
        console.log(error);
      })
    }

    todoList() {
      return this.state.todos.map(function(currentTodo, i){
          return <Todo todo={currentTodo} key={i} />;
      })
    }
    render() {
        return (
            <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {this.todoList()}
        </TableBody>
      </Table>
        )
    }
}
export default Home;
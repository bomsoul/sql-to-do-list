import React ,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: 200,
    },
  }));

class Create extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "",
            description: "",
            status: false
        }
    }

    onTitleChange = (e) =>{
        this.setState({
            title : e.target.value
        })
    }

    onDescriptionChange = (e) =>{
        this.setState({
            description: e.target.value
        })
    }

    onStatusChange = () =>{
        this.setState({
            status : !this.state.status
        })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/create',this.state)
        .then(res =>console.log(res.data));

        this.setState({
            title: "",
            description: "",
            status: false,
        })
        alert("Add Todo success!!");
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onHandleSubmit}>
                <br></br>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value = {this.state.title}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        labelWidth={60}
                        onChange={this.onTitleChange}
                    />
                </FormControl>
                <br></br>
                <br></br>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value = {this.state.description}
                        startAdornment={<InputAdornment position="start"></InputAdornment>}
                        labelWidth={60}
                        onChange={this.onDescriptionChange}
                    />
                </FormControl>
                <label>Status : </label>
                <FormControlLabel
                    control={<Checkbox
                    checked={this.state.status}
                    onChange={this.onStatusChange} />}
                    label="Done"
                />
                <br></br>
                <Button type ="submit" variant="outlined" color="primary">Submit</Button>
                </form>
            </div>
        )
    }
}
export default Create;
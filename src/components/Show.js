import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

class Show extends Component{
    constructor(props){
      super(props);
      this.state={
        title: "",
        description: "",
        status: false
      }
    }

    componentDidMount(){
      axios.get('http://localhost:4000/show/'+this.props.match.params.id)
      .then(response =>{
        console.log(response.data[0])
        this.setState({
          title : response.data[0].title,
          description: response.data[0].description,
          status: response.data[0].status
        })
      })
    }
    
    render() {
        return (
            <div >
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div >
            <Typography>ID : </Typography>
          </div>
          &nbsp;
          <div>
            <Typography>{this.props.match.params.id}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div />
          <div>
            <Chip label="Status" onDelete={() => {}} />
          </div>
          <div >
            <Typography variant="caption">
              {this.state.title}
              <br />
              <p href="#secondary-heading-and-columns">
                {this.state.description}
              </p>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" component={ Link } to="/">Cancel</Button>
          <Button component={ Link } to={"/edit/"+this.props.match.params.id} size="small" color="primary">
            Edit
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
        )
    }
}
export default Show;
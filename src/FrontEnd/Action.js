import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react';
import Topnav  from './Topnav';
import './ShowTables.css';
import axios from 'axios';
import {  Header, Icon,Button, Modal } from 'semantic-ui-react'
import swal from 'sweetalert';
import image from './image.jpg';


class Action extends Component {
    constructor(props){
        super(props);
        this.state = {
            greeting: "to JeepMe",
            values: [],
            location: "",
            destination: "",
            show:false,
            modalOpen: false,
            countryOptions: [
                { key: 'af', value: 'af', text: 'Apas' },
                { key: 'ax', value: 'ax', text: 'Bacayan' },
                { key: 'al', value: 'al', text: 'Banilad' },
                { key: 'dz', value: 'dz', text: 'Basak Pardo' },
                { key: 'as', value: 'as', text: 'Basak San Nicolas' },
                { key: 'ad', value: 'ad', text: 'Bonbon' },
                { key: 'ao', value: 'ao', text: 'Buhisan' },
                { key: 'ai', value: 'ai', text: 'Bulacao' },
                { key: 'ag', value: 'ag', text: 'Busay' },
                { key: 'ar', value: 'ar', text: 'Calamba' },
                { key: 'am', value: 'am', text: 'Capitol Site' },
                { key: 'aw', value: 'aw', text: 'Carreta' },
                { key: 'au', value: 'au', text: 'Cogon Ramos' },
                { key: 'at', value: 'at', text: 'Cogon Pardo' },
                { key: 'az', value: 'az', text: 'Day‑as' },
                { key: 'bs', value: 'bs', text: 'Duljo Fatima' },
                { key: 'bh', value: 'bh', text: 'Ermita' },
                { key: 'bd', value: 'bd', text: 'Guadalupe' },
                { key: 'bb', value: 'bb', text: 'Labangon' },
                { key: 'by', value: 'by', text: 'Lahug' },
                { key: 'be', value: 'be', text: 'Pit-os' },
                { key: 'bz', value: 'bz', text: 'Talamban' },
                { key: 'bj', value: 'bj', text: 'Tisa' },
            ]

        }
    }
    exposedCampaignOnChange = (e, { value }) => {
        e.persist = () => {};
        this.setState({ location: e.target.textContent })
    }

    DropdownExampleClearableMultiple = () => (
        <Dropdown
            search
            clearable
            selection
            options={this.state.countryOptions}
            placeholder='Location'
            onChange={this.exposedCampaignOnChange}
        />
    )

    valueChosen = (e, { value }) => {
        e.persist = () => {};
        this.setState({ destination: e.target.textContent })
    }

    DestinationChoose = () => (
        <Dropdown
            search
            clearable
            selection
            options={this.state.countryOptions}
            placeholder='Destination'
            onChange={this.valueChosen}
    />
    )

    onclickHandler(e){
        e.preventDefault();
        axios.post('http://localhost:3001/api/greeting', {
            located: this.state.location,
            destined: this.state.destination
          })
          .then((response) => {
              this.setState({greeting: response.data})
          })
          .catch((error) => {
            console.log(error);
          });
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })


    conditionHandler(e){
        e.preventDefault();
        if(this.state.location === "" || this.state.destination === ""){
            this.setState({modalOpen: false});
            swal("cannot search!", "required input", "error");
        }else{
            this.setState({modalOpen: true});
        }
    }
    render(){
        return(
            <center>
            <div >
                <div class="navigation">
                    <Topnav/>
                </div>
                {/* ...... */}
                <center>
                    <div class="card1">
                        <div class="card1-body">
                        <div class="container1">
                        <center>
                        <div id="display">
                        <h1 class= "greeting1">WELCOME to JeepMe!</h1>
                        <img class="image" size="large" src={image} alt="" ></img>
                        <h1 class= "username">{this.props.username}</h1>
                        </div>
                        </center>
                        </div>
                        </div>
                    </div>
                </center>
                <div id="chose" class="chose">
                <div class="card">
                <div class="card-body">
                </div>                   
                    <div>
                    <div id="editor" class="editor">{this.DropdownExampleClearableMultiple()}</div><br></br>
                    <div id="editor" class="editor">{this.DestinationChoose()}<br></br></div><br/>
                    {/* <div class="links">
                        <a target="_blank" href="https://opensource.appbase.io/reactive-manual/"></a>
                    </div> */}

                    <div class="search" >
                        {/* <div>
                        <Modal
                            trigger={<Button onClick= {(e) => this.conditionHandler(e)} color="blue">SEARCH</Button>}
                            header='Read the instruction below:'
                            content='You can ride the following jeepney .'
                            actions={[{ key: 'done', content: 'Done', positive: true }]}
                            centered
                            aria-labelledby="contained-modal-title-vcenter"
                            size="sm"
                        />
                        </div> */}
                    <Modal
                        trigger={<Button color="blue" onClick={(e) => this.conditionHandler(e)}>SEARCH</Button>}
                        open={this.state.modalOpen}
                        onClose={this.handleClose}
                        basic
                        size='small'
                        centered
                    >
                        <Header icon='browser' content='Result:' />
                        <Modal.Content>
                        <h3>Here is the list on what you are to ride </h3>
                        </Modal.Content>
                        <Modal.Actions>
                        <Button color='green' onClick={this.handleClose} inverted>
                            <Icon name='checkmark' /> Got it
                        </Button>
                        <Button color="red" inverted>Not here</Button>
                        </Modal.Actions>
                    </Modal>
                    </div>
                    </div>
                </div>
                </div>

                <div class="footer1">
                    <center><p>THANK YOU FOR USING OUR APP</p></center>
                </div>
            </div>
            </center>
        )
    }
}


export default Action;
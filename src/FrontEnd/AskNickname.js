import React, {Component} from 'react';
import swal from 'sweetalert';
import jeepMe from './jeepMe.png';
import Action from './Action';
import './ShowTables.css';

class AskNickname extends Component{
    constructor(props){
        super(props);
        this.state = {
            nickname: "",
            state: false
        }
    }

    nickname(e){
        this.setState({nickname: e.target.value})
    }

    situationHandler(e){
        if(this.state.nickname === ""){
            this.setState({state: false})
            swal("Awww Snap!", "Nickname is required!", "error");
        }else{
            this.setState({state: true})
        }
    }

    render(){

        if(this.state.state === false){
            return(
                <div>
                <center id="nickname" class="nickname">
                    <br/><br/><br/>
                    <div class="card">
                    <div class="container">
                        <img src={jeepMe} alt="Guide To The Better Trip!"></img>
                        <h2>Hello Mate!, May I ask your Nickname?</h2>
                        <input placeholder="input your nickname . . ." onChange={(e) => this.nickname(e)}></input>
                        <br></br>
                        <button onClick={(e) => this.situationHandler(e)}>Next</button>
                        <div class="footer">

                        </div>
                    </div>
                    </div>
                </center>
                </div>
            )
        }else{
            return(
                <Action username = {this.state.nickname} />
            )
        }

    }
}
export default AskNickname;
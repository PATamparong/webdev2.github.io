import React, {Component} from 'react';
import './ShowTables.css';
import AskNickname from "./AskNickname";
export default class Topnav extends Component {
    render(){
        return(
            <div>
                <div>
                <nav class="navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="active" href={<AskNickname/>}>Home</a>
                    </li>
                </ul>
                </nav>
                </div>
            </div>
        );
    }
}

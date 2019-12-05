import React,{Component} from 'react';
import swal from 'sweetalert';
import { Button,Modal } from 'semantic-ui-react'
export default class Change extends Component{
    constructor(props){
        super(props);
        this.setState = { 
            state:false
        }
    }

    // conditionHandler(e){
    //     e.preventDefault();
    //     if(this.props.location === " " || this.props.destination === " "){
    //         this.setState({state: false});
    //         swal("cannot search!", "required input", "error");
    //     }else{
    //         this.setState({state: true});
    //         return <Modal/>
    //     }
    // }
    render(){
        return(
            <div>
                <Modal
                        trigger={<Button/>}
                        header='Read the instruction below:'
                        content='You can ride the following jeepney .'
                        actions={[ { key: 'done', content: 'Done', positive: true }]}
                    />
            </div>
        );
    }
}
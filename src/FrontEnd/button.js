import React,{Component} from 'react';
import swal from 'sweetalert';
import { Modal } from 'semantic-ui-react'
export default class Button extends Component{
    constructor(props){
        super(props);
        this.setState = { 
            state:false
        }
    }

    conditionHandler(e){
        e.preventDefault();
        if(this.props.location === " " || this.props.destination === " "){
            this.setState({state: false});
            swal("cannot search!", "required input", "error");
        }else{
            this.setState({state: true});
            return <Modal/>
        }
    }
    render(){
        return(
            <div>
                <div class="search" >
                    <Button onClick= {(e) => this.conditionHandler(e)} color="blue">SEARCH</Button>
                </div>
                <Modal
                        trigger={<Button/>}
                        header='Read the instruction below:'
                        content='You can ride the following jeepney .'
                        actions={['Not here', { key: 'done', content: 'Done', positive: true }]}
                    />
            </div>
        );
    }
}
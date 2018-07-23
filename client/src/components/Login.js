import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {ADD_PERSON} from '../actions/types';
const FormData = require('form-data');

class Login extends React.Component{

    state ={
        message: '',
        tempItem: {name: '', city: '', email: ''}
    };

    componentDidMount() {
        axios.get('/api/login').then((response) => {
            this.setState({
                message: response.data.message,
            })
        })
    };

        handleInput = (value, type) => {
            this.setState({tempItem: {...this.state.tempItem, [type]: value}})
        };

        clearInput = () => {
            this.setState({tempItem: {name: '', city: '', email: ''}})
        };

        addInfo = (values) => {
            console.log(values.name, values.city, values.email)
// sukuriam objekta ir jam priskiriame formos savybes
//             const formData = new FormData()
//             formData.append("name", values.name);
//             formData.append('city', values.city);
//             formData.append('email', values.email);
//             console.log(formData)

            axios({
                method: 'post',
                url: '/api/addinfo',
                data:{name:'muu'}}).then((res) => {

                this.setState({message: res.data.message});
                console.log(res.data)
// issitraukaim data is response ir siunciame i reduceri gauta response
//                 const {name, city, email, _id} = res.data;
//                 this.props.addPerson({name, city, email, _id});
            })
        };

    render(){

        const users = this.props.users.map ((item, i )=>{
            return <div key={i}>{item.name}    {item.city}     {item.email}</div>
        });

        return(
            <div className="login">
                <h1>{this.state.message}</h1>
                <h6>Please register for our newsletter</h6>
                <div>
                        <input
                            onChange={(e)=>this.handleInput(e.target.value, 'name')}
                            value={this.state.tempItem.name}
                            placeholder="name"
                            type="text"
                            name="name"
                        />
                        <input
                            onChange={(e)=>this.handleInput(e.target.value, 'city')}
                            value={this.state.tempItem.city}
                            placeholder="city"
                            type="text"
                            name="city"/>
                        <input
                            onChange={(e)=>this.handleInput(e.target.value, 'email')}
                            value={this.state.tempItem.email}
                            placeholder="El paštas"
                            type="text"
                            name="email"/>
                        <button type="submit" onClick={()=>{this.props.addPerson(this.state.tempItem);this.clearInput();this.addInfo(this.state.tempItem)}}>Add</button>

                </div>
                <div className="login-fetch">
                    {users}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state)=>{
    return {
        users: state.users
    }
};

const mapDispatchToProps= (dispatch)=>{
    return{

        addPerson (e){
            dispatch({type: ADD_PERSON, payload: e})
        },
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Login);
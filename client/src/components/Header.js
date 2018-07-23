import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


class Header extends React.Component{
    render(){
        return(
            <header>
                <NavLink exact activeClassName='active' to="/">Home</NavLink>
                <NavLink exact activeClassName='active' to="/Quiz"><p style={{color: this.props.active}}>Quiz</p></NavLink>
                <NavLink exact activeClassName='active' to="/Login">Log-in</NavLink>
                <NavLink exact activeClassName='active' to="/Statistics">Statistics</NavLink>
            </header>
        )
    }
};

const mapStateToProps = (state)=>{
    return {
        active: state.active
    }
}

export default connect (mapStateToProps)(Header);
import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

class Quiz extends React.Component{

    render(){

        const spalvos = this.props.colors.map ((color, i)=>{
            return <Link key={i} exact activeClassName='active' to={`test/${color.value}`}>
                <div
                style = {{background:color.color} }
                className = "colorQuiz"
                onClick={() => this.props.changeActive(color.color)}
            />
            </Link>
        });
        return(
            <div className="home">
                <h1 className="h1">Qu<em style={{color: this.props.active}}>i</em>z</h1>
                {spalvos}
                <h1 style={{color: this.props.active}}>Choose Your Color To Start Eye Test</h1>
            </div>
        )
    }
};

const mapStateToProps = (state)=>{
    return {
        colors: state.colors,
        active: state.active
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        changeActive(color){
            dispatch ({type: 'CHANGE_ACTIVE', payload:color})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
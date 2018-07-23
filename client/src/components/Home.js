import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component{

    render(){

        const spalvos = this.props.colors.map ((color, i)=>{
            return <div
                key={i}
                style = {{background:color.color} }
                className = {this.props.active==color.color ? "color-text-show" : "color"}
                onClick={() => this.props.changeActive(color.color)}
            >{this.props.active==color.color ? <p>{color.meaning}</p> : null}{this.props.active==color.color ? <p className="colorOn" style={{color:color.color}}>{color.value}</p> : null}</div>
        });

        return(
            <div className="home">
                {spalvos}
                <h1>P <em style={{color: this.props.active}}>I </em>C <em style={{color: this.props.active}}>K </em> E <em style={{color: this.props.active}}>R </em></h1>
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
          dispatch ({type: 'CHANGE_ACTIVE', payload: color})
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
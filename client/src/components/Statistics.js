import React from 'react';
import {connect} from 'react-redux';

class Statistics extends React.Component{

    render(){
        // {console.log(this.props.stats)}
       const statistics = this.props.stats.map((item, i )=>{
           if(item.maxLevel === 0){
               return null
           }else {
               return <div className="stat" key={i} style={{
                   backgroundColor: item.color,
                   height: 35 * item.maxLevel + 'px'
               }}>Level: {item.maxLevel}</div>
           }
        });

        return(
            <div className="statistics">
                {this.props.stats.length > 0 ? <h1><em style={{color: this.props.active}}>Color Quiz</em> passed levels</h1>:<h1>Currently no passed levels of <em style={{color: this.props.active}}>Color Quiz</em></h1>}
                {statistics}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        stats: state.stats,
        active: state.active
    }
};

export default connect (mapStateToProps)(Statistics);
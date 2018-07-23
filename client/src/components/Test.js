import React from 'react';
import {connect} from 'react-redux';
import {ADD_STATS_DATA} from "../actions/types";

class Test extends React.Component {
    state={
        squares: [],
        clicks: [],
        level: 1,
        badCount: 0,
        goodCount: 0
    };


    componentDidMount(){
        this.renderDivs()
    };

    renderDivs=()=>{
        var nn=[];
        for (var i = 0; i < 55; i++) {
            nn.push(this.props.active);
        }
        let temp = this.props.active[0];
        let sliced = temp.slice(0,temp.length-1);
        let splited = sliced.split("rgb(");
        let slicedAgain = splited.slice(1);

        for (var y = 0; y < 5; y++) {
            nn.push([`rgba( ${slicedAgain}, 0.${this.state.level})`]);
            this.state.clicks.push(false)
        };

        let show = [];

        let allLength = nn.length;
        for (var x = 0; x < allLength; x++) {
            var s = Math.floor(Math.random() * nn.length);
            show.push(nn[s]);
            nn.splice(s, 1);
            this.state.clicks.push(false)
        };

        this.setState({squares: show});
    };

    clicks = (i)=>{

    let newClicks = [...this.state.clicks];
        newClicks[i] = !newClicks[i];
        this.setState({clicks: newClicks});

      if (this.state.squares[i] === this.props.active && this.state.clicks[i]!== true){
          this.setState(prevState => {
              return {badCount: prevState.badCount + 1,
              }
          })
      }else  if (this.state.squares[i] === this.props.active && this.state.clicks[i]=== true){ this.setState(prevState => {
          return {badCount: prevState.badCount - 1}
      })};

        if (this.state.squares[i] !== this.props.active && this.state.clicks[i]!== true){
            this.setState(prevState => {
                return {goodCount: prevState.goodCount + 1,
                }
            })
        }else if (this.state.squares[i] !== this.props.active && this.state.clicks[i]=== true){ this.setState(prevState => {
            return {goodCount: prevState.goodCount - 1}
        })};

    };


    componentDidUpdate(){

        if (this.state.goodCount === 5) {
            this.renderDivs();
            this.setState(prevState => {
                return {
                    goodCount: 0,
                    badCount: 0,
                    clicks: [],
                    level: prevState.level + 1
                }
            });
        }

        if (this.state.badCount === 5) {
            this.renderDivs();
            this.setState({
                goodCount: 0,
                badCount: 0,
                clicks: []
            })
        }
        if (this.state.level === 11) {
            this.renderDivs();
            this.setState({
                goodCount: 0,
                badCount: 0,
                level: 1

            })
        }
    };

    componentWillUnmount(){
        this.props.addStats({level:this.state.level, color: this.props.active})
    }

    render() {
        // console.log(this.props.active)
        // console.log('bad '+this.state.badCount)
        // console.log('good '+this.state.goodCount)


          const show = this.state.squares.map ((square,i)=>{
             return <button key={i}
                      style={{ background: square }}
                      className={this.state.clicks[i] ? "clicked" : "div"}
                      onClick={()=>this.clicks(i)}
             />
        });

        return (
            <div>
                {this.state.level === 10 ? null :
                    <div>
                        <h1 className="h1" style={{color: this.props.active}}><strong>Quiz</strong></h1>
                        <h1>Level<strong style={{color: this.props.active}}> {this.state.level}</strong></h1>
                    </div>
                }
                {this.state.level === 10 ? null :
                    <div className="test">
                        {show}
                    </div>
                }
                <div className="winner">
                    {this.state.level === 10 ? <h1 style={{color: this.props.active}}>Winner !</h1> : null}
                    {this.state.level === 10 ? <h6 style={{color: this.props.active}}>Click Quiz ...</h6> : null}
                </div>
            </div>

        )
    }
};

const mapStateToProps = (state) => {
    return {
        active: state.active
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        addStats(value){
            dispatch ({type: ADD_STATS_DATA, payload: value})
        }
    }
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
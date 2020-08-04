import React, {Component} from 'react';
import Title from "../components/Title.js";
import ChartList from "../components/ChartList.js";

class ChartContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs:[],
      title: ""
    }
  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(res => res.json())
    .then(data => this.setState({songs: data.feed.entry, title: data.feed.title.label}))
    .catch(err => console.error)
  }

  render(){
    return(
      <div className="chart-container">
      <Title text={this.state.title} />
      <ChartList songs={this.state.songs}/>
      </div>
    )
  }
}

export default ChartContainer;

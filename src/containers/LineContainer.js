import React, { Component } from 'react'
import Line from '../components/Line'

export default class LineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: {
        lineSize: 0,
        lastUpdate: 0
      }
    }
  }

  render() {
    const { line } = this.state;
    return (
      <div>
        <Line {...line} handleLineUpdate={this.handleLineUpdate} />
      </div>
    );
  }

  handleLineUpdate = (e) => {
    this.setState({
      line: {
        lineSize: e.target.value
      }
    })
  }

}

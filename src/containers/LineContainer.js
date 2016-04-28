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
    const { line } = this.state
    const { time } = this.props
    return (
      <div>
        <Line {...line} handleLineUpdate={this.handleLineUpdate} time={time} />
      </div>
    );
  }

  handleLineUpdate = (e, value) => {
    this.setState({
      line: {
        lineSize: value,
        lastUpdate: Date.now()
      }
    })
  }

}

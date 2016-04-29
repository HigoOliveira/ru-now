import React, { Component } from 'react'
import StarVoteList from '../components/StarVoteList'

export default class StarVoteListContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
      userVotes: [
        {
          name: 'bla bla',
          stars: '5',
          time: '123154345',
          avatar: 'https://unsplash.it/80/80/?random'
        },
        {
          name: 'bla bla',
          stars: '5',
          time: '123154345',
          avatar: 'https://unsplash.it/80/80/?random'
        },{
          name: 'bla bla',
          stars: '5',
          time: '123154345',
          avatar: 'https://unsplash.it/80/80/?random'
        },{
          name: 'bla bla',
          stars: '5',
          time: '123154345',
          avatar: 'https://unsplash.it/80/80/?random'
        }
      ]
		}
	}

	render() {
		return	(
      <div>
		    <StarVoteList userVotes={this.state.userVotes} />
      </div>
		)
	}
}

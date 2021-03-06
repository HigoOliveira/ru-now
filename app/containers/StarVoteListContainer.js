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
          avatar: 'https://unsplash.it/80/80/?image=45'
        },
        {
          name: 'bla bla',
          stars: '5',
          time: '123154345',
          avatar: 'https://unsplash.it/80/80/?image=130'
        },{
          name: 'bla bla',
          stars: '5',
          time: '123154345',
          avatar: 'https://unsplash.it/80/80/?image=23'
        },{
          name: 'bla bla',
          stars: '5',
          time: '123154345',
          avatar: 'https://unsplash.it/80/80/?image=17'
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

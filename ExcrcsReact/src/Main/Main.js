import React from 'react'
import ourPostsData from './Post'

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

        setTimeout(() => {
            this.setState({
                posts: ourPostsData
            })
        }, 3000)
    }

    render() {
        return (
            <main className='main'>
                {this.state.posts.map(e => <div>{e.id}{e.title}{e.body}</div>)}
            </main>
        )
    }
}

export default Main;
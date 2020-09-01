import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Saad from '../Saadeddine Louati.png'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <Link to={'/' + post.id}>

            <div className="post card" key={post.id}>
              <img src={Saad} alt="Saadeddine Louati" />
              <div className="card-content">
                <span className="card-title red-text" style={{
                  marginLeft: `calc(100% - ${300}px)`
                }}>{post.title}</span>
                <p>{post.body}</p>
              </div>
            </div>
          </Link>
        )
      })
    ) : (
        <div className="center">No posts to show</div>
      );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)
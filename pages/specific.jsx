import React, { Component } from 'react'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/character'

import Layout from './_InitialRequests'
import Back from '../components/back'

class Specific extends Component {

  static async getInitialProps ({ query }) {
    const characterId = query.id
    const characterName = query.name.replace('_', ' ')

    return { characterId, characterName }    
  }

  render() {
    const { specific } = this.props

    return (
      <Layout>
        <div className="background-one"></div>
        <div className="background-two"></div>
        <div className="lower-polygon"></div>
        <div className="left-polygon"></div>
        <div className="background-image-right"></div>
        <header>
          <Back />
          <h1>Profile</h1>
        </header>
        <section className="character-profile">
          <div className="profile-margin"></div>
          <figure className="profile-image">
            <img src={specific.image} alt={specific.name}/>
          </figure>
          <article className="profile-data">
            <h4>{specific.name}</h4>
            <div className="profile-description">
              <div className="profile-type">
                <p>Status:</p>
                <p>Species:</p>
                <p>Type:</p>
                <p>Gender:</p>
                <p>Origin:</p>
                <p>Location:</p>
              </div>
              <div className="profile-value">
                <p>{specific.status}</p>
                <p>{specific.species}</p>
                <p>{specific.type ? specific.type : 'Unknown'}</p>
                <p>{specific.gender}</p>
                <p>{specific.origin}</p>
                <p>{specific.location}</p>
              </div>
            </div>
          </article>
        </section>
        <section className="character-gallery">
          <figure>
            <img src={specific.image} alt={specific.name}/>
          </figure>
          <figure>
            <img src={specific.image} alt={specific.name}/>
          </figure>
          <figure>
            <img src={specific.image} alt={specific.name}/>
          </figure>
        </section>
        <style jsx>{`

        .background-one {
          position: absolute;
          background: #edf0f6;
          height: 100%;
          width: 30%;
          left: 0;
          top: 0;
          z-index: -1;
        }

        .background-two {
          position: absolute;
          background: #0d76e6;
          height: 100%;
          width: 70%;
          right: 0;
          top: 0;
          z-index: -1;
          opacity: 0.9;
        }

        .left-polygon {
          width: 100%;
          height: 100%;
          background: #0d76e6;
          position: absolute;
          top: 0;
          left: 0;
          clip-path: polygon(30% 25%, 30% 75%, 0 100%, 0 0);
          z-index: -1;
          opacity: 0.2;
        }

        .lower-polygon {
          background: #056cc6;
          height: 30%;
          width: 70%;
          position: absolute;
          top: 62%;
          left: 30%;
          z-index: -1;
          opacity: 0.7;
        }

        .background-image-right {
          height: 100%;
          width: 100%;
          background: url(https://vignette.wikia.nocookie.net/rickandmorty/images/3/3e/Rick-and-morty-wallpaper.jpg/revision/latest/scale-to-width-down/1280?cb=20171014062009);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -3;
        }

        header {
          display: grid;
          grid-template-columns: 200px 1fr;
          justify-items: center;
          align-items: center;
          margin-bottom: 30px;
        }

        .character-profile {
          display: grid;
          grid-template-columns: 20% 250px 1fr;
          gap: 10px;
          margin-bottom: 70px;
        }

        .profile-image {
          margin: 0;
        }

        .profile-image img {
          width: 100%;
          box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.41);
        }

        .profile-data h4 {
          font-size: 55px;
          margin: 0;
          font-weight: 300;
        }

        .profile-description {
          display: grid;
          grid-template-columns: 30% 1fr;
          gap: 20px;
        }

        .character-gallery {
          display: grid;
          justify-content: end;
          grid-template-columns: repeat(3, 175px);
          gap: 20px;
          margin-right: 10%;
        }

        .character-gallery figure {
          margin: 0;
          width: 100%
        }

        .character-gallery img {
          width: 100%
        }

        `}</style>
      </Layout>
    )
  }

  componentDidMount() {
    const { characterId } = this.props
    this.props.actions.character(characterId)
  }
}

const mapStateToProps = state => {
  return {
    specific: state.get('character').get('specific')
  }
}

const mapDispachToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Specific)
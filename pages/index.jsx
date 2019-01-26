import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/character'

// NextJS
import Link from 'next/link'
import Layout from './_InitialRequests'

class Home extends Component {
  render () {
    const { character } = this.props
    return (
      <Layout title="Home">
        <section className="container-character">
          {
            character.get('general').get('results').map(item => {
              return (
                <article className="character-card">
                  <figure className="card-image">
                    <img src={item.get('image')} alt={item.get('name')}/>
                  </figure>
                  <div className="card-description">
                    <h4>{item.get('name')}</h4>
                  </div>
                </article>
            )})
          }
        </section>
        <style jsx>{`
        .container-character {
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(5, 19.5%);
        }

        .character-card {
          color: #f4f9fd;
          background: #0d80e5;
          box-shadow: 0px 0px 12px -5px rgba(0,0,0,0.41);
          margin: 5px;
        }

        .card-image {
          margin: 0;
        }

        .card-image img {
          width: 100%;
        }

        .card-description {
          display: grid;
          justify-content: center;
        }

        `}</style>
      </Layout>
    )
  }

  componentDidMount() {
    this.props.actions.character()
  }
}

const mapStateToProps = state => {
  return {
    character: state.get('character')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
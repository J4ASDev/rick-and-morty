import React, { Component } from 'react'

import { connect } from 'react-redux'

// NextJS
import Link from 'next/link'
import Layout from './_InitialRequests'

class Home extends Component {
  render () {
    return (
      <Layout title="Home">
        Hola
      </Layout>
    )
  }
}

export default connect()(Home)
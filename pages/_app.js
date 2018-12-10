import React from 'react'
import App, { Container } from 'next/app'

// Redux
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { initializeStore } from '../initializeStore'

// Immutable.js
import { fromJS } from 'immutable'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initializeStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state)
})(MyApp)

import React, { Component, Fragment } from 'react'

//NextJS
import Head from 'next/head'

class _InitialRequests extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <meta charSet='utf-8' />
          <link href="URL" rel="canonical"></link>
          <link rel="shortcut icon" type="image/x-icon" href="../static/favicon.ico"/>
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
        </Head>
        <div>
          {this.props.children}
        </div>
        <style jsx>{`
          :global(body, button, input, textarea, select) {
            margin: 0;
            font-family: 'Raleway', sans-serif;
            color: #323a4f;
          }

          :global(a) {
            text-decoration: none;
            color: #3f68fc;
          }
          
          :global(ul, li) {
            list-style: none;
            padding: 0;
            margin: 0;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default _InitialRequests
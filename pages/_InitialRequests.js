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
          <link href="URL" rel="canonical" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
        </Head>
        <div>
          {this.props.children}
          <footer>
            <span className="creator-from">From </span>
            <img className="creator-flag" width="25" src="https://image.flaticon.com/icons/svg/197/197580.svg" alt="Venezuela's flag"/>
            <span className="creator-by">by Jonathan Araujo</span>
          </footer>
        </div>
        <style jsx>{`
          :global(body, button, input, textarea, select) {
            margin: 0;
            font-family: 'Raleway', sans-serif;
            color: black;
          }

          :global(a) {
            text-decoration: none;
            color: black;
          }
          
          :global(ul, li) {
            list-style: none;
            padding: 0;
            margin: 0;
          }
        
          footer {
            color: #f4f9fd;
            display: grid;
            justify-content: center;
            justify-items: center;
            align-items: center;
            grid-template-columns: 40px 30px 150px;
            margin-top: 10px;
            padding: 10px 0;
            background: #0d80e5;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default _InitialRequests
import React, { Fragment } from 'react'

import Link from 'next/link'

const Back = () => {
  return (
    <Fragment>
      <Link href="/">
        <a>
          <div>
            <i className="fas fa-caret-left"></i>
          </div>
        </a>
      </Link>
      <style jsx>{`
        div {
          background: #0d76e6;
          height: 50px;
          width: 50px;
          border-radius: 50px;
          display: grid;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.41);
        }

        i {
          font-size: 25px;
        }

      `}</style>
    </Fragment>
  )
}

export default Back
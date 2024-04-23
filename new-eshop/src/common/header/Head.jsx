import React from 'react'
import { BG, EU, US } from 'country-flag-icons/react/3x2'

export const Head = () => {
  return (
    <>
        <section className="head">
          <div className="container d_flex">
            <div className="left row">
              <i className="fa fa-phone"></i>
              <label>+88012 3457 7894</label>
              <i className="fa fa-envelope"></i>
              <label>example@gmail.com</label>
            </div>
            <div className="right row RText">
              <label>Theme FAQ's</label>
              <label>Need Helps</label>
              <span><BG title="Bulgaria" className="flag" /></span>
              <label htmlFor="">Bulgaria</label>
              <span><EU title="European Union" className="flag" /></span>
              <label htmlFor="">EU</label>
              <span><US title="United States" className="flag" /></span>
              <label htmlFor="">US</label>
            </div>
          </div>
        </section>
    </>
  )
}

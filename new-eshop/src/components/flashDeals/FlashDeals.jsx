import React from "react"
import { FlashCard } from "./FlashCard"

export const FlashDeals = () => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>FlashDeals</h1>
          </div>
          <FlashCard />
        </div>
      </section>
    </>
  )
}

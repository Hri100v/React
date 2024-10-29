import React from "react";
import { Card } from "./Card";
// import "./style.css";

import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";

// import JqxBarGauge, {
//   IBarGaugeProps,
// } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge";

import JqxTree from "jqwidgets-scripts/jqwidgets-react-tsx/jqxtree";

const sourceData = {
  // label: "Mail",
  // expanded: true,
  // icon: "./../images/mailIcon.png",
  items: [
    {
      // icon: "./../images/calendarIcon.png",
      label: "Calendar",
    },
    {
      // icon: "./../images/contactsIcon.png",
      label: "Contacts",
      selected: true,
    },
  ],

  // source: [
  //   {
  // expanded: true,
  // // icon: "./../images/mailIcon.png",
  // items: [
  //   {
  //     // icon: "./../images/calendarIcon.png",
  //     label: "Calendar",
  //   },
  //   {
  //     // icon: "./../images/contactsIcon.png",
  //     label: "Contacts",
  //     selected: true,
  //   },
  // ],
  //   label: "Mail",
  // },
  // {
  //   expanded: true,
  //   icon: "./../images/folder.png",
  //   items: [
  //     { icon: "./../images/folder.png", label: "Admin" },
  //     { icon: "./../images/folder.png", label: "Corporate" },
  //     { icon: "./../images/folder.png", label: "Finance" },
  //     { icon: "./../images/folder.png", label: "Other" },
  //   ],
  //   label: "Inbox",
  // },
  // { icon: "./../images/recycle.png", label: "Deleted Items" },
  // { icon: "./../images/notesIcon.png", label: "Notes" },
  // { iconsize: 14, icon: "./../images/settings.png", label: "Settings" },
  // { icon: "./../images/favorites.png", label: "Favorites" },
  // ],
};

const sourceData2 = [
  {
    label: "Mail",
    icon: "https://img.icons8.com/glyph-neue/64/26e07f/new.png",
    expanded: true,
    items: [
      { label: "In-Mail" }
    ]
  },
  {
    label: "Inbox",
    selected: true
  },
];

export const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img
                src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
                alt="New Arrivals"
              />
              <h2>New Arrivals</h2>
            </div>
            <div className="heading-right row">
              <span>View all</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <Card />

          {/* <div>
            <JqxBarGauge
              width={600}
              height={600}
              max={60}
              colorScheme={"scheme02"}
              values={[10, 20, 30, 40, 50]}
            />
          </div> */}

          <div>
            <JqxTree
              // ref={this.myTree}
              style={{ marginLeft: "60px", float: "left" }}
              // onSelect={this.myTreeOnSelect}
              // onExpand={this.myTreeOnExpand}
              // onCollapse={this.myTreeOnCollapse}
              width={600}
              height={600}
              source={sourceData2}
            >
              {/* <ul>
                <li id="Mail" item-expanded="true">
                  <img src="./../images/mailIcon.png" />
                  <span item-title="true">Mail</span>
                  <ul>
                    <li id="Calendar" item-expanded="true">
                      <img src="./../images/calendarIcon.png" />
                      <span item-title="true">Calendar</span>
                    </li>
                    <li id="Contacts">
                      <img src="./../images/contactsIcon.png" />
                      <span item-title="true">Contacts</span>
                    </li>
                    <li id="Inbox">
                      <img src="./../images/folder.png" />
                      <span item-title="true">
                        <span>Inbox</span>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul> */}
            </JqxTree>
          </div>
        </div>
      </section>
    </>
  );
};

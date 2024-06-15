import React from "react";
import Ddata from "./Ddata";

export const Dcard = () => {
  return (
    <>
        {Ddata.map((value, index) => {
            return (
                <div className="box product" key={index}>
                    <div className="img">
                        <img src={value.cover} alt={value.name} />
                    </div>
                    <h4>{value.name}</h4>
                    <span>{value.price}</span>
                </div>
            )
        })}
    </>
  );
};

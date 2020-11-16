import React from "react";

function Card({ title, icon, children }) {
  return (
    <div className="card">
      <h5 className="card-header">{icon} {title}</h5>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;

import React from "react";

export function ListItem({ children }) {
  return (
    <li>
      {children}
    </li>
  );
}

export function List({ children }) {
  return (
    <ul>
      {children}
    </ul>
  );
}

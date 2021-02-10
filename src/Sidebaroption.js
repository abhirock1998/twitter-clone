import React from "react";
import "./sidebaroption.css";
function Sidebaroption({ Icon, title,onClick,active}) {
  return (
    <div data-testid='sidebarOption' onClick={onClick} className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />
      <h2  >{title}</h2>
    </div>
  );
}

export default Sidebaroption;

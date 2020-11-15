
import React, { useState } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const LeftConfig = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div
      className="border rounded px-2 py-2"
      style={{
        backgroundColor: "#F2F2F2",
        height: "100%",
      }}
    >
      <Dropdown 
        isOpen={dropdownOpen} 
        toggle={() => setDropdownOpen(!dropdownOpen)}>
        <DropdownToggle caret>
          Optimizer  
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Stochastic Gradient Descent</DropdownItem>
          <DropdownItem>Adam</DropdownItem>
          <DropdownItem>RMSProp</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default LeftConfig;

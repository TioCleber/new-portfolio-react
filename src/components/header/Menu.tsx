import { useState } from "react";
import Header from "./Header";
import "../../styles/components/menu-header.css";

const MenuHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`container-menu-header ${open && "active"}`}>
      <div className="menu-header-content">
        {open && <Header />}

        <button className="button-menu-header" onClick={() => setOpen(!open)}>
          {open ? "x" : "menu"}
        </button>
      </div>
    </div>
  );
};

export default MenuHeader;

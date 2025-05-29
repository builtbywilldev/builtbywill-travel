// @ts-nocheck

import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import React from "react";
import { Link } from "react-router";
import NavItems from "./NavItems";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;

  const toggleSidebar = () => {
    sidebar.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img src="/icons/logo.svg" alt="" className="size-[30px]" />
          <h1>Haven Travel</h1>
        </Link>

        <button onClick={toggleSidebar}>
          <img src="/icons/menu.svg" alt="" className="size-7" />
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={(Sidebar) => sidebar = Sidebar}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems handleClick={toggleSidebar}/>
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;

import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";


import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideNavigation.scss";

const SideNavigation = () => {

  const [collapsed, setCollapsed] = useState(true);
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar collapsed={collapsed}>
      <div onClick={onClickMenuIcon}>
        <HiMenuAlt2 className="logo-burger" />
      </div>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem className="logo-sidebar">Dashboard</MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default SideNavigation;
import { useState } from "react";
import { SidebarContainer } from "./styles";
import "@/assets/css/fonts.css";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(open === false ? true : false);
  };
  return (
    <>
      <SidebarContainer>
        <nav className={open === true ? "sidebarOpen" : "sidebar"}>
          <div className="sidebar-inner">
            <header className="sidebar-header">
              <button
                type="button"
                className="sidebar-burger"
                onClick={toggleSidebar}
              >
                <i className="bx bx-menu"></i>
              </button>
              <img
                src="./src/assets/img/logo.png"
                alt=""
                className={open === true ? "sidebar-logo-open" : "sidebar-logo"}
              ></img>
            </header>
             <nav className="sidebar-menu"> 
            <div
              className={open === true ? "sidebar-menu-open" : "sidebar-menu"}
            >
                <button type="button">
                  <i className="bx bx-home"></i>
                  <span>Home</span>
                </button>
                <button type="button">
                  <i className="bx bx-user"></i>
                  <span>Accounts</span>
                </button>
                <button type="button" className="has-border">
                  <i className="bx bx-cog"></i>
                  <span>Settings</span>
                </button>
                <button type="button">
                  <i className="bx bx-shape-circle"></i>
                  <span>Blockchain</span>
                </button>
                <button type="button">
                  <i className="bx bx-data"></i>
                  <span>Databases</span>
                </button>
                <button type="button">
                  <i className="bx bx-speaker"></i>
                  <span>AudioVibe</span>
                </button>
                <button type="button" className="has-border">
                  <i className="bx bx-music"></i>
                  <span>Soundblast</span>
                </button>
                <button type="button">
                  <i className="bx bx-folder"></i>
                  <span>Folders</span>
                </button>
                <button type="button">
                  <i className="bx bx-layer"></i>
                  <span>Levels</span>
                </button>
                <button type="button">
                  <i className="bx bx-lock"></i>
                  <span>Security</span>
                </button>
              </div> 
              </nav>
           
          </div>
        </nav>
      </SidebarContainer>
    </>
  );
};

import { SidebarContainer } from "./styles";

/* const toggleSidebar =  document.querySelector("open")
element.classList.toggle('show') */

function Sidebar() {
  return (
    <>
      <SidebarContainer>
        <div className="sidebar-inner">
          <header className="sidebar-header">
            <button
              type="button"
              className="sidebar-burger"
            //  onClick="toggleSidebar"
            >
              <i className="bx bx-menu"></i>
            </button>
            <img src="./src/assets/img/logo.png" alt="" className="sidebar-logo"></img>
          </header>
          <nav className="sidebar-menu">
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
          </nav>
        </div>
      </SidebarContainer>
    </>
  );
}
export default Sidebar;

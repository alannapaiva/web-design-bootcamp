import { Container } from "./styles";

export const InstaSidebar = () => {
  return (
    <Container>
      <aside className="sidebar">
        <header className="sidebar-header">
          <img src="src\assets\img\logo.svg" className="logo-img" />
          <i className="logo-icon bx bxl-instagram"></i>
        </header>

        <nav>
          <button>
            <span>
              <i className="bx bx-home"></i>
              <span>Home</span>
            </span>
          </button>

          <button>
            <span>
              <i className="bx bx-search"></i>
              <span>Search</span>
            </span>
          </button>

          <button>
            <span>
              <i className="bx bx-compass"></i>
              <span>Explore</span>
            </span>
          </button>

          <button>
            <span>
              <i className="bx bxl-telegram">
                <span>13</span>
              </i>
              <span>Messages</span>
            </span>
          </button>

          <button>
            <span>
              <i className="bx bx-heart">
                <em></em>
              </i>
              <span>Notifications</span>
            </span>
          </button>

          <button>
            <span>
              <i className="bx bx-plus-circle"></i>
              <span>Create</span>
            </span>
          </button>

          <button>
            <span className="profile">
              <img src="src\assets\img\profile.png" alt="profile image" />
              <span>Profile</span>
            </span>
          </button>
        </nav>
      </aside>
    </Container>
  );
};

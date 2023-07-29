import { Container } from "./styles";
import "@/assets/css/fonts.css";

export const Widget = () => {
  return (
    <Container>
      <div className="widget">
        <div className="tabs">
          <input type="radio" name="group" id="tab-1" checked />
          <input type="radio" name="group" id="tab-2" />
          <input type="radio" name="group" id="tab-3" />
          <div className="buttons">
            <label htmlFor="tab-1" className="material-symbols-outlined">
              home
            </label>
            <label htmlFor="tab-2" className="material-symbols-outlined">
              lock
            </label>
            <label htmlFor="tab-3" className="material-symbols-outlined">
              settings
            </label>
            <div className="underline"></div>
          </div>
          <div className="content">
            <div className="content-inner">
              <div>
                <h2>Home</h2>
                <p>Tab Widget Home Contents!</p>
              </div>
              <div>
                <h2>Accounts</h2>
                <p>Tab Widget Accounts Contents!</p>
              </div>
              <div>
                <h2>Setting</h2>
                <p>Tab Widget Setting Contents!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

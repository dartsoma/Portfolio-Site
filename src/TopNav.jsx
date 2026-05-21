import "./assets/TopNav.css";
import bracket from "./assets/bracket.png";
import placeholder from "./assets/placeholdericon.png";
import model_icon from "./assets/model_icon.png";
import faq_icon from "./assets/faq_icon.png";
import contact_icon from "./assets/contact_icon.png";
import project_icon from "./assets/project_icon.png";
import home_icon from "./assets/home_icon.png";

function TopNav({ globalTab, setTabState, setPageState }) {
  const toggleTab = (index) => {
    setTabState(index);
  };

  const home = 0;
  const models = 1;
  const projects = 2;
  const faq = 3;
  const contact = 4;

  return (
    <>
      <div className="top-nav">
        <div className="nav-button-container">
          <img
            className="invisible-button"
            onClick={() => {
              toggleTab(faq);
              setPageState(0);
            }}
            src={placeholder}
          />
          <img
            className={globalTab === faq ? "nav-button-active" : "nav-button"}
            src={faq_icon}
          />
          <img
            className={
              globalTab === faq ? "nav-underline-active" : "nav-underline"
            }
            src={bracket}
          />
          <h1
            className={globalTab === faq ? "nav-text-active" : "nav-text"}
            id="faq"
          >
            F.A.Q
          </h1>
        </div>
        <div className="nav-button-container">
          <img
            className="invisible-button"
            onClick={() => {
              toggleTab(models);
              setPageState(0);
            }}
            src={placeholder}
          />
          <img
            className={
              globalTab === models ? "nav-button-active" : "nav-button"
            }
            src={model_icon}
          />
          <img
            className={
              globalTab === models ? "nav-underline-active" : "nav-underline"
            }
            src={bracket}
          />
          <h1
            className={globalTab === models ? "nav-text-active" : "nav-text"}
            id="models"
          >
            MODELS
          </h1>
        </div>
        <div className="nav-button-container">
          <img
            className="invisible-button"
            onClick={() => {
              toggleTab(home);
              setPageState(0);
            }}
            src={placeholder}
          />
          <img
            className={globalTab === home ? "nav-button-active" : "nav-button"}
            src={home_icon}
          />
          <img
            className={
              globalTab === home ? "nav-underline-active" : "nav-underline"
            }
            src={bracket}
          />
          <h1
            className={globalTab === home ? "nav-text-active" : "nav-text"}
            id="home"
          >
            HOME
          </h1>
        </div>
        <div className="nav-button-container">
          <img
            className="invisible-button"
            onClick={() => {
              toggleTab(projects);
              setPageState(0);
            }}
            src={placeholder}
          />
          <img
            className={
              globalTab === projects ? "nav-button-active" : "nav-button"
            }
            src={project_icon}
          />
          <img
            className={
              globalTab === projects ? "nav-underline-active" : "nav-underline"
            }
            src={bracket}
          />
          <h1
            className={globalTab === projects ? "nav-text-active" : "nav-text"}
            id="projects"
          >
            PROJECTS
          </h1>
        </div>

        <div className="nav-button-container">
          <img
            className="invisible-button"
            onClick={() => {
              toggleTab(contact);
              setPageState(0);
            }}
            src={placeholder}
          />
          <img
            className={
              globalTab === contact ? "nav-button-active" : "nav-button"
            }
            src={contact_icon}
          />
          <img
            className={
              globalTab === contact ? "nav-underline-active" : "nav-underline"
            }
            src={bracket}
          />
          <h1
            className={globalTab === contact ? "nav-text-active" : "nav-text"}
            id="contact"
          >
            CONTACT
          </h1>
        </div>
      </div>
    </>
  );
}

export default TopNav;

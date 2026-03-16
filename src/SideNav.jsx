import "./assets/SideNav.css";
import placeholder from "./assets/placeholdericon.png";

function SideNav({ globalPage, setPageState, pageCount }) {
  return (
    <>
      <div className="side-nav">
        {Array.from({ length: pageCount }).map((_, i) => (
          <div className="nav-button-container">
            <img
              className="invisible-button"
              onClick={() => setPageState(i)}
              src={placeholder}
            />
            <img
              className={globalPage === i ? "nav-button-active" : "nav-button"}
              src={placeholder}
            />
            <h1 className={globalPage === i ? "nav-text-active" : "nav-text"}>
              {i + 1}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default SideNav;

import "./assets/Tab.css";
import { useRef, useEffect } from "react";

function Tab({ globalTab, globalPage }) {
  // The pages of each array will be

  const home = [
    <>
      <h1> Content 1</h1>
    </>,
    <>
      <h1> Content 2</h1>
    </>,
    <>
      <h1> Content 3</h1>
    </>,
  ];

  const models = [
    <>
      <h1> Content 1</h1>
    </>,
    <>
      <h1> Content 2</h1>
    </>,
  ];

  const projects = [
    <>
      <h1> Content 1</h1>
    </>,
    <>
      <h1> Content 2</h1>
    </>,
  ];

  const contact = [
    <>
      <h1> Content 1</h1>
    </>,
  ];

  const faq = [
    <>
      <h1> Content 1</h1>
    </>,
  ];

  const pageRefs = useRef([]);

  useEffect(() => {
    pageRefs.current[globalPage]?.scrollIntoView({
      behavior: "smooth",
    });
  }, [globalPage]);

  return (
    <>
      <div className="tabs">
        {globalTab === 0 && (
          <div className="home">
            {home.map((content, i) => (
              <div
                key={i}
                ref={(el) => (pageRefs.current[i] = el)}
                className="page"
              >
                {content}
              </div>
            ))}
          </div>
        )}
        {globalTab === 1 && (
          <div className="models">
            {models.map((content, i) => (
              <div
                key={i}
                ref={(el) => (pageRefs.current[i] = el)}
                className="page"
              >
                {content}
              </div>
            ))}
          </div>
        )}
        {globalTab === 2 && (
          <div className="projects">
            {projects.map((content, i) => (
              <div
                key={i}
                ref={(el) => (pageRefs.current[i] = el)}
                className="page"
              >
                {content}
              </div>
            ))}
          </div>
        )}
        {globalTab === 4 && (
          <div className="contact">
            {contact.map((content, i) => (
              <div
                key={i}
                ref={(el) => (pageRefs.current[i] = el)}
                className="page"
              >
                {content}
              </div>
            ))}
          </div>
        )}
        {globalTab === 3 && (
          <div className="faq">
            {faq.map((content, i) => (
              <div
                key={i}
                ref={(el) => (pageRefs.current[i] = el)}
                className="page"
              >
                {content}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Tab;

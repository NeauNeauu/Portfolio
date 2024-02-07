import "./App.css";
import HeaderComp from "./components/HeaderComp.jsx";

function App() {
  return <>
  <div className="main">
    <HeaderComp />
    <div className="body-container">
      <div className="left">
        <section className="about-me">
          <article>
            <h2>About Me</h2>
            <p>Hi, I'm Noah Ney, a first year Epitech student.
              I am passionate about computer science and I am always looking for new challenges.
              I am currently learning C, HTML, CSS, Javascript and more precisely React.</p>
          </article>
        </section>
        <section className="skills">
        </section>
      </div>
    </div>
  </div>
  </>;
}

export default App;

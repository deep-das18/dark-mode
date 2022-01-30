import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getUserPreference = (query) => {
  if (query === "mode") {
    let theme = localStorage.getItem("theme");
    if (theme) {
      return theme;
    } else {
      return "light-theme";
    }
  } else if (query === "buttonName") {
    let name = localStorage.getItem("buttonName");
    if (name) {
      return name;
    } else {
      return "Dark Mode";
    }
  }
};

function App() {
  const [buttonName, setButtonName] = useState(getUserPreference("buttonName"));
  const [theme, setTheme] = useState(getUserPreference("mode"));
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    localStorage.setItem("buttonName", buttonName);
  }, [theme]);
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setButtonName("Light Mode");
    } else {
      setTheme("light-theme");
      setButtonName("Dark Mode");
    }
  };
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            {buttonName}
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;

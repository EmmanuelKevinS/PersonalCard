import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF"
  },

  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB"
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="images/emman.jpg" alt="Jonas Schmedtmann" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Emmanuel Kevin</h1>
      <p>
        Aspiring Front-end and React Developer. Computer Science Student. Likes
        Football and playing computer games
      </p>
    </div>
  );
}

function SkillList() {
  const skill1 = skills;
  return (
    <div className="skill-list">
      {skill1.map((skills) => (
        <Skill skillObj={skills} key={skills.name} />
      ))}
      {/* <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" /> */}
    </div>
  );
}

function Skill({ skillObj }) {
  const difficulty =
    skillObj.level === "advanced"
      ? "💪"
      : skillObj.level === "intermediate"
      ? "👍"
      : skillObj.level === "beginner"
      ? "👶"
      : "";
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{difficulty}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

"use client";
import { useState } from "react";

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-grey");
  const setTabAlignment = (tab) =>
    tab === "soft" ? "text-left" : "text-right";

  const tabs = (
    <div className="flex">
      {["soft", "hard"].map((item) => (
        <button
          key={item}
          type="button"
          className={`btn ${setBg(item)} ${setTabAlignment(item)}`}
          onClick={() => setActiveTab(item)}
        >
          {item} Skills
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-3 ${
        activeTab === "soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map(({ icon, text }) => (
        <li key={text} className="skill">
          <span> {icon}</span> {text}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default Skills;

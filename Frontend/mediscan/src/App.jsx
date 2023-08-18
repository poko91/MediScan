import { useState } from "react";
import Content from "./Components/Content";
import SideBar from "./Components/Sidebar";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("urology");

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="font-montserrat text-black m-4 flex">
      <SideBar handleTopicSelect={handleTopicSelect} selectedTopic={selectedTopic} />
      <Content selectedTopic={selectedTopic} />
    </div>
  );
}

export default App;

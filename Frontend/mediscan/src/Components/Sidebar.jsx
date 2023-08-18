import Topic from "./Topic";
import { useState } from "react";

const SideBar = ({ handleTopicSelect, selectedTopic }) => {
  return (
    <div className="bg-sidebar_bg hidden md:block md:basis-[25%] rounded-2xl uppercase">
      <div className="mt-28">
        <p className="text-accent text-md uppercase text-center pb-4">Topic Listing</p>
        <Topic name="urology" onSelect={handleTopicSelect} isActive={selectedTopic === "urology"} />
        <Topic name="pulmonary disease" onSelect={handleTopicSelect} isActive={selectedTopic === "pulmonary disease"} />
        <Topic name="Endocrinology (Non-diabetes)" onSelect={handleTopicSelect} isActive={selectedTopic === "Endocrinology (Non-diabetes)"} />
        <Topic name="Dermatology and Skin Disease" onSelect={handleTopicSelect} isActive={selectedTopic === "Dermatology and Skin Disease"} />
        <Topic name="Gastrointestinal disease" onSelect={handleTopicSelect} isActive={selectedTopic === "Gastrointestinal disease"} />
        <Topic name="Hematologic cancer" onSelect={handleTopicSelect} isActive={selectedTopic === "Hematologic cancer"} />
        <Topic name="Lung cancer" onSelect={handleTopicSelect} isActive={selectedTopic === "Lung cancer"} />
        <Topic name="Pediatrics" onSelect={handleTopicSelect} isActive={selectedTopic === "Pediatrics"} />
      </div>
    </div>
  );
};

export default SideBar;

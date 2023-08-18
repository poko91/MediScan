import SearchBar from "./SearchBar";
import Articles from "./Articles";

const Content = ({ selectedTopic }) => {
  return (
    <div className="md:ml-12 md:mr-6 basis-[100%] md:basis-[75%]">
      <h1 className="px-4 text-accent text-4xl sm:text-5xl md:text-7xl tracking-widest bg-heading_bg rounded-lg md:bg-white">
        MEDI<span className="font-semibold grid-flow-row ">SCAN</span>
      </h1>
      <SearchBar day={1} />
      <hr className="my-3 h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50" />
      <Articles selectedTopic={selectedTopic} />
    </div>
  );
};

export default Content;

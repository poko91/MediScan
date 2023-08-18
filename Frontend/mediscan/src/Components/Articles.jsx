const Articles = ({ selectedTopic }) => {
  console.log("Selected topic in Articles:", selectedTopic);
  return (
    //   heading
    <div className="flex justify-between place-items-center">
      <h2 className="text-3xl text-accent">
        PubMed <span className="text-black">Articles</span>
      </h2>

      <p className="text-md text-accent font-light uppercase">{selectedTopic}</p>
    </div>
  );
};

export default Articles;

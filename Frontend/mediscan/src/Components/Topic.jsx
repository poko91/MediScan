const Topic = ({ name, onSelect, isActive }) => {
  const handleClick = () => {
    onSelect(name);
  };

  return (
    <div className={`h-20 border-t-2 border-gray-200 flex items-center justify-center cursor-pointer hover:bg-sidebar_select ${isActive ? "bg-sidebar_select text-accent" : ""}`} onClick={handleClick}>
      <p className="text-xs uppercase">{name}</p>
    </div>
  );
};

export default Topic;

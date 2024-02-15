import { useState } from "react";

const NestedList = ({ data }) => {
  const [id, setId] = useState("");
  const handleItemClick = (e, itemId) => {
    e.stopPropagation();
    if (id === itemId) {
      setId("");
    } else {
      setId(itemId);
    }
  };
  return (
    <>
      <ul className="list-container">
        {data.map((item) => {
          let children = null,
            labelClass = null;
          if (Array.isArray(item?.children)) {
            children = <NestedList data={item?.children} />;
            labelClass = "arrowStyle";
          }
          return (
            <li
              className={labelClass}
              key={`key-${item?.id}`}
              onClick={(e) => handleItemClick(e, item.id)}
            >
              <span>{item.label}</span>
              {id === item.id && children}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default NestedList;

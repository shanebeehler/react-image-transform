import React from 'react';

const ListItem = ({ title, transformations, item, onClick }) => {

  const toggleListItemVisibility = (title, transformations, item) => {
    if (title === "Available Actions") {
      return transformations[item] ? { visibility: "hidden" } : { visibility: "visible" };
    }
    else {
      return transformations[item] ? { visibility: "visible" } : { visibility: "hidden" };
    }
  }

  return (
    <li onClick={ () => onClick(item) }
        style={ toggleListItemVisibility(title, transformations, item) }>
        { item.slice(0, item.indexOf("(")) }
        <i>{ transformations[item] ? "-" : "+" }</i>
    </li>
  );
}

export default ListItem;

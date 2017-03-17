import React from 'react';

const ListItem = (props) => {

  const toggleListVisibility = (title, state, item) => {
    if (title === "Available Actions") {
      return state[item] ? { visibility: "hidden" } : { visibility: "visible" };
    }
    else {
      return state[item] ? { visibility: "visible" } : { visibility: "hidden" };
    }
  }

  return (
    <li onClick={ () => props.onClick(props.item) }
        style={ toggleListVisibility(props.title, props.state, props.item) }>
        {props.item.slice(0, props.item.indexOf("("))}
        <i>{ props.state[props.item] ? "-" : "+" }</i>
    </li>
  );
}

export default ListItem;

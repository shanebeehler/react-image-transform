import React    from 'react';
import ListItem from './list_item';
import               '../styles/list.css';

const List = (props) => {

  const renderList = props.items.map((item) =>
    <ListItem key={item}
              item={item}
              onClick={ () => props.onClick(item) }
              title={ props.title }
              state={ props.state }/>
  );

  return (
    <div className="action-list" >
      <p>{props.title}</p>
      <ul>
        {renderList}
      </ul>
      { props.title === "Applied Actions" ?
        <button onClick={ () => props.reset() }>Reset</button> :
        null
      }
    </div>
  );
}

export default List;

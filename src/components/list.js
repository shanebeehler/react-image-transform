import React    from 'react';
import ListItem from './list_item';
import               '../styles/list.css';

const List = ({ title, onClick, transformations, reset }) => {

  var items = [];
  // generate array of transformations
  for (var key in transformations) { items.push(key) }

  const renderList = items.map((item) =>
    <ListItem key={item}
              item={item}
              onClick={ () => onClick(item) }
              title={ title }
              transformations={ transformations }/>
  );

  return (
    <div className="action-list" >
      <p>{ title }</p>
      <ul>
        { renderList }
      </ul>
      { title === "Applied Actions" ?
        <button onClick={ () => reset() }>Reset</button> :
        null
      }
    </div>
  );
}

export default List;

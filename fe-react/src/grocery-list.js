import React from 'react';

export default function GroceryList(props) {
  const { listData } = props;
  const noDataMessage = 'nothing on list yet...';
  const noData = listData.length === 0;

  return (
    <ol id="grocery-list">
      {noData
        ? noDataMessage
        : listData.map((ele, idx) => <li key={idx}>{ele}</li>)}
    </ol>
  );
}

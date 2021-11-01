import React from 'react';

function TopicTable(props) {
  if (props.data) {
    var tableContent = props.data.map(function (data) {
      return (
        <tr class="hmm">
          <th scope="row">{data.title}</th>
          <td>{data.description}</td>
          <td>{data.date}</td>
          <td>
            <button class="btn btn-outline-secondary">claim</button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div class="topics-table-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Last</th>
            <th scope="col">Claim</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    </div>
  );
}

export default TopicTable;

import React from 'react';

function TopicTable() {
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
        <tbody>
          <tr>
            <th scope="row">Hacking 101</th>
            <td>A brief guide to hacking and how it works...</td>
            <td>28/9/21</td>
            <td>
              <button class="btn btn-outline-secondary">claim</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button class="btn btn-outline-secondary">claim</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>
              <button class="btn btn-outline-secondary">claim</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TopicTable;

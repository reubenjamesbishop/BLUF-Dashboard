import React from 'react';

import TopicTable from '../topicTable';

import './Topics.css';

function Topics() {
  const data = [
    {
      title: 'Hacking 101',
      description: 'A guide to hacking...',
      date: '28/9/21',
    },
    {
      title: 'Hacking 101',
      description: 'A guide to hacking...',
      date: '2/10/21',
    },
    {
      title: 'Hacking 101',
      description: 'A guide to hacking...',
      date: '12/10/21',
    },
  ];

  return (
    <>
      <div class="container">
        <div class="row r">
          <div class="col-8 current-topics">
            <div>
              <h1 class="column-title">Current Topics</h1>
            </div>
            Stuff
            <TopicTable />
          </div>
          <div class="col-4 submit-topic">
            <div>
              <h1 class="column-title">Submit New Topic</h1>
            </div>
            <div class="form-container">
              <form>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Topic Title</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Topic Description
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="A brief summary of your proposed topic..."
                  ></textarea>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlInput1">
                    Contact Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@lmco.com"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Topic Genre</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Science and Technology</option>
                    <option>Arts and Culture</option>
                    <option>Food and Wine</option>
                    <option>Sports and Recreation</option>
                    <option>Other</option>
                  </select>
                </div>
              </form>
              <div class="submit-wrapper">
                <button class="btn btn-success submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topics;

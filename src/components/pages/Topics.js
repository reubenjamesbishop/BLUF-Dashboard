import React from 'react';
import React, { useEffect, useState } from 'react';

import TopicTable from '../topicTable';

import './Topics.css';

//GET EVERYTHING IN UNCLAIMED
// https://api.airtable.com/v0/appiGaFB2vj2iQTUP/Unclaimed?api_key=keyJJ4GrecqGEJfTq

function Topics() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Title: ', e.target.topicTitle.value);
    console.log('Description: ', e.target.topicDescription.value);
    console.log('/////////////////////////////////////////////////////');

    /////////////////////////////////////////
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: 'keyJJ4GrecqGEJfTq' }).base(
      'appiGaFB2vj2iQTUP'
    );

    var title = e.target.topicTitle.value;
    var description = e.target.topicDescription.value;
    var contactEmail = e.target.contactEmail.value;
    var genre = e.target.genre.value;

    base('Unclaimed').create(
      [
        {
          fields: {
            Title: title,
            Description: description,
            Genre: genre,
            Contact: contactEmail,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
    /////////////////////////////////////////
    window.location.reload();
  };

  const [table_data, set_table_data] = useState('');
  const [data_collected, set_data_collected] = useState(false);

  useEffect(() => {
    console.log('Component mounted');
    fetch(
      'https://api.airtable.com/v0/appiGaFB2vj2iQTUP/Unclaimed?api_key=keyJJ4GrecqGEJfTq'
    )
      .then((response) => response.json())
      .then((data) => {
        if (data_collected == false) {
          //Display raw response
          console.log('Data ->', data);

          // Parse response and map to table_data
          var formatted_data = data.records.map(function (input) {
            var table_data = {
              title: input.fields['Title'],
              description: input.fields['Description'],
              genre: input.fields['Genre'],
            };
            return table_data;
          });

          //Log formatted data for setting
          console.log('Formatted ->', formatted_data);
          // Set component state
          set_table_data(formatted_data);
          set_data_collected(true);
        }
      });
  });

  return (
    <>
      <div class="container">
        <div class="row r">
          <div class="col-8 current-topics">
            <div>
              <h1 class="column-title">Current Topics</h1>
            </div>
            <div class="topic-content">
              <TopicTable data={table_data} />
            </div>
          </div>
          <div class="col-4 submit-topic">
            <div>
              <h1 class="column-title">Submit New Topic</h1>
            </div>
            <div class="form-container">
              <form
                class="form"
                id="submit-new-topic-form"
                onSubmit={handleSubmit}
              >
                <div class="form-group">
                  <label for="exampleFormControlInput1">Topic Title</label>
                  <input
                    class="form-control"
                    id="topicTitle"
                    name="topicTitle"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Topic Description
                  </label>
                  <textarea
                    class="form-control"
                    id="topicSummary"
                    rows="5"
                    placeholder="A brief summary of your proposed topic..."
                    name="topicDescription"
                  ></textarea>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlInput2">
                    Contact Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="topicEmail"
                    placeholder="name@lmco.com"
                    name="contactEmail"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Topic Genre</label>
                  <select class="form-control" id="topicGenre" name="genre">
                    <option>Science and Technology</option>
                    <option>Arts and Culture</option>
                    <option>Food and Wine</option>
                    <option>Sports and Recreation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="submit-wrapper">
                  <button class="btn btn-success submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topics;

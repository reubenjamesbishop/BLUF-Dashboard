import React from 'react';

import TopicTable from '../topicTable';

import './Topics.css';

//GET EVERYTHING IN UNCLAIMED
// https://api.airtable.com/v0/appiGaFB2vj2iQTUP/Unclaimed?api_key=keyJJ4GrecqGEJfTq

var data_response = {
  records: [
    {
      id: 'rec3VpGE5CDfgyWZO',
      fields: {
        Title: 'Lemons',
        Description:
          'This is an entire presentation on Lemons. What are lemons? Nobody knows, but this presentation attempts to establish the philosophical basis for the argument that lemons are actually the source of the universe.\n',
      },
      createdTime: '2021-11-02T04:03:53.000Z',
    },
    {
      id: 'rec9DMViZXtL9ZeJh',
      fields: {
        Date: '1/2/3',
        Title: 'Speaker Design',
        Description:
          'Another cool description... but also this ones even longer but its fine because it scales vertically!!',
      },
      createdTime: '2021-11-01T23:59:49.000Z',
    },
    {
      id: 'recOi3Tgrse5Vxxyt',
      fields: {
        Date: '1/2/3',
        Title: 'What is EW?',
        Description:
          "'What if we had like a reall really really really really really long description that yo thought might mess up the formatting but it turns out your website is actually really responsive and it handles it all dynamically on the fly in the way that you would expect wouldnt that be cool!",
      },
      createdTime: '2021-11-02T00:02:10.000Z',
    },
    {
      id: 'recWuFmMmxckCqcIv',
      fields: {
        Date: '1/2/3',
        Title: 'Radars go brrrr',
        Description: 'Another cool description...',
      },
      createdTime: '2021-11-02T00:02:20.000Z',
    },
    {
      id: 'recYdl8nF6cnoNr4z',
      fields: {
        Date: '1/2/3',
        Title: 'Hacking 101',
        Description: 'A guide to hacking... FROM THE DATABASE!!',
      },
      createdTime: '2021-11-01T23:59:49.000Z',
    },
    {
      id: 'reca9YeFy6vWzGNW1',
      fields: {
        Date: '1/2/3',
        Title: 'How to brew a beer',
        Description:
          'What if we had like a reall really really really really really long description that yo thought might mess up the formatting but it turns out your website is actually really responsive and it handles it all dynamically on the fly in the way that you would expect wouldnt that be cool!',
      },
      createdTime: '2021-11-02T00:02:31.000Z',
    },
    {
      id: 'receHXEPQBWFPnJKU',
      fields: {
        Title: 'Who won world war 1.5',
        Description: 'It was the Emus.',
      },
      createdTime: '2021-11-02T04:04:49.000Z',
    },
    {
      id: 'recoxMMW2FKiAiSx7',
      fields: {
        Date: '1/2/3',
        Title: 'Native Australian Birds',
        Description:
          'Birds! Birds! Birds! Everything you have EVER wanted or could ever possibly want to know about our winged friends. Strap in and buckle up for this exciting rundown of our feathered brethren.',
      },
      createdTime: '2021-11-01T23:59:49.000Z',
    },
  ],
};

function Topics() {
  const parseData = (data_response) => {
    // Function to take in Airtable response and return formatted object to pass to <TopicTable />
    console.log('parsing data');
    console.log(data_response);

    var formatted_data = data_response.records.map(function (input) {
      var table_data = {
        title: input.fields['Title'],
        description: input.fields['Description'],
        date: input.fields['Date'],
      };
      return table_data;
    });

    return formatted_data;
  };

  const hitDB = () => {
    // Function to hit airable and receive API response
    fetch(
      'https://api.airtable.com/v0/appiGaFB2vj2iQTUP/Unclaimed?api_key=keyJJ4GrecqGEJfTq'
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Response caught from DB...', data);
        console.log('Parsed version ->', parseData(data));
        console.log('Returning parsed version now');
        return parseData(data);
      })
      .catch((err) => {
        alert('API call to Airtable died...');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Handling submit!');

    console.log('Hitting db...');

    // ERROR! proceeding on from here without waiting for hitDB to return the parsed data...
    var res = hitDB();

    return res;
  };

  // var table_data = parseData(data_response);
  var table_data = [];

  return (
    <>
      <div class="container">
        <div class="row r">
          <div class="col-8 current-topics">
            <div>
              <h1 class="column-title">Current Topics</h1>
            </div>
            <div class="topic-content">
              <TopicTable data={parseData(data_response)} />
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
                  <input class="form-control" id="topicTitle" />
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
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Topic Genre</label>
                  <select class="form-control" id="topicGenre">
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

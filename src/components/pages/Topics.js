import React from 'react';

import TopicTable from '../topicTable';

import './Topics.css';

function Topics() {
  var data = [
    {
      title: 'Hacking 101',
      description: 'A guide to hacking...',
      date: '28/9/21',
    },
    {
      title: 'Native Australian Birds',
      description:
        'Birds! Birds! Birds! Everything you have EVER wanted or could ever possibly want to know about our winged friends. Strap in and buckle up for this exciting rundown of our feathered brethren. ',
      date: '2/10/21',
    },
    {
      title: 'Speaker Design',
      description:
        'Another cool description... but also this ones even longer but its fine because it scales vertically!!',
      date: '12/10/21',
    },
    {
      title: 'What is EW?',
      description:
        'What if we had like a reall really really really really really long description that yo thought might mess up the formatting but it turns out your website is actually really responsive and it handles it all dynamically on the fly in the way that you would expect wouldnt that be cool!',
      date: '12/10/21',
    },
    {
      title: 'Radars go brrrr',
      description: 'Another cool description...',
      date: '12/10/21',
    },
    {
      title: 'How to brew a beer',
      description:
        'What if we had like a reall really really really really really long description that yo thought might mess up the formatting but it turns out your website is actually really responsive and it handles it all dynamically on the fly in the way that you would expect wouldnt that be cool!',
      date: '12/10/21',
    },
    {
      title: 'Native Australian Birds',
      description:
        'Birds! Birds! Birds! Everything you have EVER wanted or could ever possibly want to know about our winged friends. Strap in and buckle up for this exciting rundown of our feathered brethren. ',
      date: '2/10/21',
    },
    {
      title: 'Speaker Design',
      description:
        'Another cool description... but also this ones even longer but its fine because it scales vertically!!',
      date: '12/10/21',
    },
    {
      title: 'What is EW?',
      description:
        'What if we had like a reall really really really really really long description that yo thought might mess up the formatting but it turns out your website is actually really responsive and it handles it all dynamically on the fly in the way that you would expect wouldnt that be cool!',
      date: '12/10/21',
    },
    {
      title: 'Radars go brrrr',
      description: 'Another cool description...',
      date: '12/10/21',
    },
    {
      title: 'How to brew a beer',
      description:
        'What if we had like a reall really really really really really long description that yo thought might mess up the formatting but it turns out your website is actually really responsive and it handles it all dynamically on the fly in the way that you would expect wouldnt that be cool!',
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
            <div class="topic-content">
              <TopicTable data={data} />
            </div>
          </div>
          <div class="col-4 submit-topic">
            <div>
              <h1 class="column-title">Submit New Topic</h1>
            </div>
            <div class="form-container">
              <form class="form">
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

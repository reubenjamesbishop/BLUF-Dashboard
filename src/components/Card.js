import React, { useState, useEffect } from 'react';

import './Card.css';

function Card(props) {
  return (
    <>
      <div class="card">
        <img src={props.image_source} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Cool topic</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;

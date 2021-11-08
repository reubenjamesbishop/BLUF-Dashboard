import React from 'react';
import './TopicGenerator.css';

import Card from '../Card';

function TopicGenerator() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-2 left">
            <button
              class="btn btn-success reload-button"
              onClick={() => {
                window.location.reload();
              }}
            >
              Generate Topics
            </button>
          </div>
          <div class="col-10">
            <div class="card-box">
              <div class="row">
                <Card image_source="https://picsum.photos/500/300?random=1" />
                <Card image_source="https://picsum.photos/500/300?random=2" />
              </div>
              <div class="row">
                <Card image_source="https://picsum.photos/500/300?random=3" />
                <Card image_source="https://picsum.photos/500/300?random=4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopicGenerator;

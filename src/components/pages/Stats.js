import React from 'react';

import VerticalBar from '../graphs/VerticalBar';
import Doughnut from '../graphs/Doughnut';
import HorizontalBar from '../graphs/HorizontalBar';
import Radar from '../graphs/Radar';
import './Stats.css';

function Stats() {
  return (
    <>
      <div class="analytics-container">
        <h1 class="analytics-title">Statistics &amp; Analytics</h1>
        <div class="analytics-wrapper">
          <div class="row">
            <div class="col-6 left">
              <div class="graph-wrapper-large">
                <Doughnut />
              </div>
            </div>
            <div class="col-6 right">
              <div class="graph-wrapper">
                <HorizontalBar />
              </div>
              <div class="graph-wrapper">
                <VerticalBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;

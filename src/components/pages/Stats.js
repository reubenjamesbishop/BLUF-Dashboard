import React from 'react';
// import { Bar } from 'react-chartjs-2';
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
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div class="graph-wrapper">
                <VerticalBar />
              </div>
              <div class="graph-wrapper">
                <Doughnut />
              </div>
              <div class="graph-wrapper">
                <HorizontalBar />
              </div>
            </div>
            <div class="col-6">
              <div class="graph-wrapper">
                <HorizontalBar />
              </div>
              <div class="graph-wrapper">
                <Radar />
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

import React from 'react';
// import { Bar } from 'react-chartjs-2';
import VerticalBar from '../graphs/VerticalBar';
import Doughnut from '../graphs/Doughnut';
import HorizontalBar from '../graphs/HorizontalBar';
import Radar from '../graphs/Radar';
import './Home.css';

function Home() {
  return (
    <>
      <div class="analytics-container">
        <h1 class="analytics-title">Bottom Line Up Front</h1>
        <h1 class="analytics-title-secondary">Analytics</h1>
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

export default Home;

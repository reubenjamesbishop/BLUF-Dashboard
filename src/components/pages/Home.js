import React from 'react';
// import { Bar } from 'react-chartjs-2';
import VerticalBar from '../graphs/VerticalBar';
import Doughnut from '../graphs/Doughnut';
import HorizontalBar from '../graphs/HorizontalBar';
import Radar from '../graphs/Radar';

function Home() {
  return (
    <>
      <h1>home</h1>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <VerticalBar />
            <Doughnut />
          </div>
          <div class="col-6">
            <HorizontalBar />
            <Radar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

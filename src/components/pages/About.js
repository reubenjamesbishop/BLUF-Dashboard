import React from 'react';
import './About.css';

import 'bootstrap/dist/css/bootstrap.css';

function About() {
  return (
    <div class="about-container">
      <h1 class="about-header">About BLUF</h1>
      <h4>The Bottom Line Up Front</h4>
      <blockquote class="blockquote text-center description-wrapper">
        <text>
          <p class="mb-0">
            BLUF presentations take the Bottom Line Up Front approach, where the
            presenter uses a simple structure to concisely present a topic. This
            presenter has little time to research and prepare and can only use a
            whiteboard marker to assist.
          </p>{' '}
          BLUF presentations have a significantly larger emphasis on the
          professional development of the presenter than the technical
          information presented. This focuses on polishing valuable skills for
          future professional presentations and creates a more casual atmosphere
          to encourages audience interaction. actually sorry maybe this is
          better
          <p class="mb-0">
            BLUF presentations can be used to test your presentation skills by
            presenting on a topic in which you have little prior knowledge and
            limited time to prepare. 
          </p>
          Presenting in such situations can be daunting but can quickly develop
          your research, preparation and presentation skills. The aim is for
          each session to be run only as fun learning exercises, with topics
          coming from anything members are interested in.
          <p class="mb-0">
            Simplicity in presentation is also key and to minimise preparation
            time, each presentation is restricted to a whiteboard and marker. 
            The BLUF group aims to foster an encouraging environment where it is
            ok to be out of your comfort zone and we all help each other
            improve.
          </p>
          <footer class="blockquote-footer">
            Jason Anglberger, <i>2019</i>
          </footer>
        </text>
      </blockquote>
      <h1>FAQ</h1>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// BLUF presentations take the Bottom Line Up Front approach, where the
// presenter uses a simple structure to concisely present a topic. This
// presenter has little time to research and prepare and can only use a
// whiteboard marker to assist. BLUF presentations have a significantly
// larger emphasis on the professional development of the presenter than the
// technical information presented. This focuses on polishing valuable skills
// for future professional presentations and creates a more casual atmosphere
// to encourages audience interaction. actually sorry maybe this is better
// BLUF presentations can be used to test your presentation skills by
// presenting on a topic in which you have little prior knowledge and limited
// time to prepare.  Presenting in such situations can be daunting but can
// quickly develop your research, preparation and presentation skills. The
// aim is for each session to be run only as fun learning exercises, with
// topics coming from anything members are interested in. Simplicity in
// presentation is also key and to minimise preparation time, each
// presentation is restricted to a whiteboard and marker.  The BLUF group
// aims to foster an encouraging environment where it is ok to be out of your
// comfort zone and we all help each other improve.

import React, { useState, useEffect } from 'react';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img
            src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-white-512.png"
            width="30"
            height="30"
            class="d-inline-block align-top navbar-logo"
            alt=""
          />
          BLUF Dashboard
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Topics">
                Topics
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="About">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="SignUp">
                Sign Up
              </a>
            </li>
          </ul>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React, { Component } from "react";
import Container from "./../components/Container";
import Row from "./../components/Row";
import Col from "./../components/Col";
import Card from "./../components/Card";
import Checks from "./../components/Checks";
import SearchForm from "./../components/SearchForm";
import MovieDetails from "./../components/MovieDetails";
import Modal from "../components/Modal";
import SignIn from "./SignIn";
import Profile from "./Profile";
import Register from "./Register";
import API from "./../utils/API";

import { returnObject } from "./../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: "",
    userServices: [],
    register: false,
  };

  movieSearch = (query, services) => {
    API.utellySearch(query, services)
      .then(res => {
        console.log(res);
        API.omdbSearch(res.title).then(movie => {
          console.log(movie);
          if (movie.data.Title === "Undefined") {
            alert(
              "Movie is either not found, or not available on your services"
            );
          } else {
            this.setState({ result: movie.data });
          }
        });
      })

      .catch(err => console.log(err));
  };
  // handle input for the ui
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleChecksInput = event => {
    const value = event.target.checked;
    const name = event.target.name;
    console.log(name, value);
    this.setState({
      userServices: value
        ? this.state.userServices.concat(name)
        : this.state.userServices.filter(e => e !== name)
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`

  handleFormSubmit = event => {
    event.preventDefault();
    this.movieSearch(this.state.search, this.state.userServices);
  };

  renderSignReg = () => {
    this.setState({
      register: !this.state.register
    });
  };

  modalClose = () => {
    this.setState({
      register: false
    });
  };

  renderBtn = () => {
    if (this.props.user) {
      return (
        <Profile
          handleChecksInput={this.handleChecksInput}
          userServices={this.state.userServices}
        />
      );
    }
    return this.state.register ? (
      <Register renderSignReg={this.renderSignReg} />
    ) : (
      <SignIn renderSignReg={this.renderSignReg} />
    );
  };
  // setting up omdb container with all the components made card, col, row, etc
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card heading="Search">
              <Checks
                handleChecksInput={this.handleChecksInput}
                userServices={this.state.userServices}
              />
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
          <Col size="md-12">
            <Card heading={this.state.result.Title || "Search for a Movie"}>
              {this.state.result.Title ? (
                <MovieDetails
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                  urlArray={returnObject.urlArray}
                  sourceName={returnObject.sourceName}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
              <Modal
                modalClose={this.modalClose}
                btnName={this.props.user ? "Profile" : "Sign In"}
              >
                {this.renderBtn()}
              </Modal>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
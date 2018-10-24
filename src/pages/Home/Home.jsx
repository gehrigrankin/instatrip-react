import React, { Component } from "react";

class Home extends Component {
    state = {
      articles: [],
      q: "",
      start_year: "",
      end_year: "",
      message: "Search For Articles To Begin!"
    }
}

export default Home;
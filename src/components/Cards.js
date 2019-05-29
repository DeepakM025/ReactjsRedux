import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagename: "Tech Crunch"
    };
  }

  componentDidMount() {
    var self = this;
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2a0e5a91464a4664814c9d7f610456b1"
      )
      .then(response => {
        this.articles = response.data.articles;
        // console.log(this.articles)
        self.setState({
          data: response.data.articles
        });
      });
  }
  render() {
    return (
      <div className="row m-0">
        <Sidebar />
        <div className="main__content row m-0">
          <Header page={this.state.pagename} />
          <div className="row pl-5 pr-5">
            {this.state.data.map(function(article, i) {
              return (
                <div className="col-lg-4" key={i}>
                  <div className="news_wrap">
                    <a href={article.url} target="_blank">
                      <div className="news_wrap__img">
                        <img src={article.urlToImage} alt="img" />
                      </div>
                      <div className="news__desc">
                        <h4>{article.title}</h4>
                        <p>{article.description}</p>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

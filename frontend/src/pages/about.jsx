import React from "react";
import Layout from "../components/Layout";

class TentangSaya extends React.Component {
  render() {
    return (
      <Layout>
        <div className="jumbotron">
          <h1 className="display-4">About Me: John Cena</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt semper magna, a dapibus est consectetur quis.
          </p>
        </div>
      </Layout>
    );
  }
}

export default TentangSaya;

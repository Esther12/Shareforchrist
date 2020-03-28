import React, { Component } from "react";
import "./subpage.css";
import Data from "../data/data.json";
import Row from "../components/row";
import { Table, Container } from "react-bootstrap";
import Title from "../components/title";
import Footer from "../components/footer";

class Youqinglianjie extends Component {
  state = {
    alldata: Data,
    data: []
  };
  componentDidMount() {
    this.sortData();
  }
  sortData = () => {
    let newData = [];
    // eslint-disable-next-line
    this.state.alldata.map(a => {
      if (a.type === "youqinglianjie-faith") {
        return newData.push(a);
      }
    });
    //newData.sort((a, b) => (a.date > b.date ? -1 : 1));
    this.setState({ data: newData });
  };
  displayRows = () => {
    return this.state.data.map(d => (
      <Row title={d.title} link={d.link}></Row>
    ));
  };
  render() {
    return (
      <div>
        <Container>
          <Title>友情链接</Title>
          <Table hover>
            <tbody>{this.displayRows()}</tbody>
          </Table>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Youqinglianjie;

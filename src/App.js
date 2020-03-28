import React from "react";
import "./App.css";
import Navbar from "./components/nav/nav";
import Jiatingyuer from "./subpages/jiatingyuer";
import Xianshangjuhui from "./subpages/xianshangjuhui";
import Fangyishouce from "./subpages/fangyishouce";
import Gerenlingxiu from "./subpages/gerenlingxiu";
import Jiaohuimuyang from "./subpages/jiaohuimuyang";
import Kepuwenzhang from "./subpages/kepuwenzhang";
import Shujuchaxun from "./subpages/shujuchaxun";
import Wenzhenpingtai from "./subpages/wenzhenpingtai";
import Home from "./subpages/home";
import Youqinglianjie from "./subpages/youqinglianjie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/jiatingyuer" component={Jiatingyuer} />
          <Route path="/xianshangjuhui" component={Xianshangjuhui} />
          <Route path="/fangyishouce" component={Fangyishouce} />
          <Route path="/gerenlingxiu" component={Gerenlingxiu} />
          <Route path="/jiaohuimuyang" component={Jiaohuimuyang} />
          <Route path="/Kepuwenzhang" component={Kepuwenzhang} />
          <Route path="/wenzhenpingtai" component={Wenzhenpingtai} />
          <Route path="/shujuchaxun" component={Shujuchaxun} />
          <Route path="/youqinglianjie" component={Youqinglianjie} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;

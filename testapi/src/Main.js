import React from "react";
import info from "./data.js";
import Answer from "./Answer.js";
import "./Main.css";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      college: "",
      cgpa: "",
      dept: "",
      html: false,
      css: false,
      javascript: false,
      php: false,
      company: [],
      hasAnswer: false
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCollegeName = this.handleChangeCollegeName.bind(this);
    this.handleChangeCGPA = this.handleChangeCGPA.bind(this);
    this.handleChangeDept = this.handleChangeDept.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
    this.handleChangeHTML = this.handleChangeHTML.bind(this);
    this.handleChangeJS = this.handleChangeJS.bind(this);
    this.handleChangeCSS = this.handleChangeCSS.bind(this);
    this.handleChangePHP = this.handleChangePHP.bind(this);
  }
  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleChangeCollegeName(event) {
    this.setState({
      college: event.target.value
    });
  }
  handleChangeCGPA(event) {
    this.setState({
      cgpa: event.target.value
    });
  }
  handleChangeDept(event) {
    this.setState({
      dept: event.target.value
    });
  }
  handleClickSubmit(event) {
    let match = 0;
    let studcount = 0;
    let compcount = 0;
    let compdetails = [];
    let tempi = -1;
    if (this.state.html === true) studcount++;
    if (this.state.css === true) studcount++;
    if (this.state.javascript === true) studcount++;
    if (this.state.php === true) studcount++;
    if (studcount > 0) {
      info.map(i => {
        if (i.cgpa_cutoff <= this.state.cgpa) {
          if (i.html === true) compcount++;
          if (i.css === true) compcount++;
          if (i.javascript === true) compcount++;
          if (i.php === true) compcount++;

          if (compcount <= studcount) {
            if (this.state.html === true && i.html === true) match++;
            if (this.state.css === true && i.css === true) match++;
            if (this.state.javascript === true && i.javascript === true)
              match++;
            if (this.state.php === true && i.php === true) match++;
            if (match === compcount) {
              let element = {
                id: tempi + 1,
                company_name: i.company_name
              };
              compdetails = [...compdetails, element];
              tempi += 1;
            }
          }
        }
        match = 0;
        compcount = 0;
      });
    }
    this.setState({
      hasAnswer: true,
      company: [...compdetails]
    });
  }
  handleClickReset(event) {
    this.setState({
      name: "",
      college: "",
      cgpa: "",
      dept: "",
      html: false,
      css: false,
      javascript: false,
      php: false,
      hasAnswer: false
    });
  }
  handleChangeHTML(event) {
    this.setState({
      html: !this.state.html
    });
  }
  handleChangeCSS(event) {
    this.setState({
      css: !this.state.css
    });
  }
  handleChangeJS(event) {
    this.setState({
      javascript: !this.state.javascript
    });
  }
  handleChangePHP(event) {
    this.setState({
      php: !this.state.php
    });
  }
  render() {
    return (
      <div className="main">
        <div className="name">
          <label>Name:</label>
          <div>
            <input
              className="namebox box"
              type="text"
              placeholder="Enter your fullname here"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </div>
        </div>
        <div className="univname">
          <label>University Name:</label>
          <div>
            <input
              className="collegebox box"
              type="text"
              placeholder="Enter name of your college/university here"
              value={this.state.college}
              onChange={this.handleChangeCollegeName}
            />
          </div>
        </div>
        <div className="dname">
          <label>Department:</label>
          <div>
            <input
              className="deptbox box"
              type="text"
              placeholder="Enter the name of your department here"
              value={this.state.dept}
              onChange={this.handleChangeDept}
            />
          </div>
        </div>
        <div className="cgpa">
          <label>CGPA:</label>
          <div>
            <input
              className="cgpabox box"
              type="text"
              placeholder="Enter your cgpa here"
              value={this.state.cgpa}
              onChange={this.handleChangeCGPA}
            />
          </div>
        </div>
        <div className="skillheading">
          <p className="skills">Skillsets:</p>
        </div>
        <div className="skilllist">
          <p className="check">
            <input
              type="checkbox"
              className="checks"
              id="html"
              checked={this.state.html}
              onChange={this.handleChangeHTML}
            />
            <label htmlFor="html">HTML</label>
          </p>
          <p className="check">
            <input
              type="checkbox"
              className="checks"
              id="css"
              checked={this.state.css}
              onChange={this.handleChangeCSS}
            />
            <label htmlFor="css">CSS</label>
          </p>
          <p className="check">
            <input
              type="checkbox"
              className="checks"
              id="javascript"
              checked={this.state.javascript}
              onChange={this.handleChangeJS}
            />
            <label htmlFor="javascript">JAVASCRIPT</label>
          </p>
          <p className="check">
            <input
              type="checkbox"
              className="checks"
              id="php"
              checked={this.state.php}
              onChange={this.handleChangePHP}
            />
            <label htmlFor="php">PHP</label>
          </p>
        </div>
        <div className="parent">
          <div className="child1">
            <input
              className="button1"
              type="button"
              value="Submit"
              onClick={this.handleClickSubmit}
            />
          </div>
          <div className="child2">
            <input
              className="button2"
              type="button"
              value="Reset"
              onClick={this.handleClickReset}
            />
          </div>
        </div>
        <div className="output">
          <Answer
            nam={this.state.name}
            col={this.state.college}
            dep={this.state.dept}
            cgp={this.state.cgpa}
            cdetails={this.state.company}
            flag={this.state.hasAnswer}
          />
        </div>
      </div>
    );
  }
}
export default Main;

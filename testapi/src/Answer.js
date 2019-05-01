import React from "react";
import "./Answer.css";
class Answer extends React.Component {
  render() {
    if (this.props.flag) {
      return (
        <div className="ans">
          <p className="details">
            Name:<span className="detail">{this.props.nam}</span> College:
            <span className="detail">{this.props.col}</span>
            Department:
            <span className="detail">{this.props.dep}</span> CGPA:
            <span className="detail">{this.props.cgp}</span>
          </p>
          <p className="details">
            Welcome to our website,{" "}
            <span className="detail">{this.props.nam}</span>. Based on your
            skillsets, we have prepared a list of companies for you. A total of {" "}
            <span className="detail">{this.props.cdetails.length}</span>{" "}
            companies match your skillsets.
          </p>
          <div className="companylist">
            {this.props.cdetails.map(c => (
              <p className="cname" key={c.id}>
                {c.company_name}
              </p>
            ))}
          </div>
        </div>
      );
    } else {
      return <div className="alternate">Output will be displayed here</div>;
    }
  }
}
export default Answer;

import React, { Component } from "react";
import "./Newsitem.css";

export default class Newsitems extends Component {
  render() {
    let { imageUrl, description, url, time } = this.props;
    return (
      <div className="my-3">
        <div className="custom_name card">
          <img
            src={
              !imageUrl
                ? "https://th.bing.com/th/id/OIP.F3wqo0o5ghRkoI8Qjld9PwHaDt?w=306&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="Not Found"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <h6>
              <span className="badge bg-secondary">
                {this.props.source.name}
              </span>
            </h6>
            <p className="card-text">{description}...</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Go somewhere
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {this.props.author} on {new Date(time).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";

const NewsItem = (props) =>{
    return (
      <>
      <div className="container my-4">
        <div className="card" style={{backgroundColor : "#42414d",color: "white",borderRadius: "12px"}}>
          <img src={props.imageUrl} className="card-img-top" alt="..." style={{borderRadius: "12px 12px 0px 0px"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.title} <span className="badge bg-secondary">New</span></h5>
            <p className="card-text">
              {props.description}...
            </p>
            <a rel = "noreferrer"href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
      </>
    );
}
export default NewsItem;

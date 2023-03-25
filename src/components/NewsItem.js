import React from "react";

const  Newsitem =(props)=> {
    
  
    let {title,description,imageurl,newsurl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageurl?imageurl:'https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg'} className="card-img-top" alt="..." />
          <div className="card-body">
          <span className="badge text-bg-danger mb-1">{source}</span>
            <br/>

            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            
            <p className="card-text"><small className="text-danger">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;

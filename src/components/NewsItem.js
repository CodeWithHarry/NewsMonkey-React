import React from 'react'
import noImage from './no-image.png'

const NewsItem = (props)=> {
        let { title, description, urlToImage, url, author, publishedAt, source } = props.article;
        return (
            <div className="my-3">
                <div className="card">
                    <div className="d-flex justify-content-end position-absolute end-0"> 
                        <span className="badge rounded-pill bg-danger">{source.name}</span>
                    </div>
                    <img src={urlToImage ? urlToImage : noImage} className="card-img-top" alt={source.name} />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title : "" }</h5>
                        <p className="card-text">{description ? description : ""}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Anonymous"} on  {new Date(publishedAt).toGMTString()}</small></p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )     
}

export default NewsItem

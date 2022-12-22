import React from 'react'

const NewsItem =(props)=> {
  
    let { title, description ,imageurl,newurl,author,date} = props;
    return (
      <div>
        <div className="card m-2 my-3" style={ {width: "18rem"}}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
            <p className="card-text"><small className="text-muted">Published by {!author?"Unknown" :author} on {new Date(date).toGMTString()}</small></p>
            <a  rel="noreferrer"  href={newurl} target="_blank" className="btn btn-dark   btn-sm">Read More</a>
          
          </div>
        </div>
      </div>
    )
}

export default NewsItem

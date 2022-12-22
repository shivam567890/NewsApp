import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropTypes from 'prop-types'


const News =(props)=> {
 const  [articles, setarticles] = useState([])
const  [loading, setloading] = useState(true)
const [page, setpage] = useState(1)
const [totalResults, setTotalResults] = useState(null)
// document.title = `${props.category.toUpperCase()} - NEWS `;
 
  const UpdateNews=async()=> {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=777fab8b175e40f39350bbecdabc6747&pageSize=24`;
    props.setProgress(15);
    setloading(true);
    let data = await fetch(url);
    
    props.setProgress(50);
    let parsedData = await data.json();
    console.log(parsedData)
    props.setProgress(80);
    setarticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
  }

  useEffect(() => {
   UpdateNews();
  }, [])
  
 const handleNextClick = async () => {
     setpage(page+1);
    UpdateNews();
  }

const  handlePrevClick = async () => {
  setpage(page-1);
    UpdateNews();
  }

    return (
      <div className="d-flex flex-column my-3 mx-5 align-items-center" >

        <h1 className="text-center ">
          TOP {props.category.toUpperCase()} HEADLINES

        </h1>
        {loading &&
          <div className="" style={{ height: '550px', position: 'relative', top: '300px' }}>
            <Loader />
          </div>
        }
        <div className="row  justify-content-center">
          {!loading && articles.map((element) => {

            return <div className="col-md-3" style={{display:"contents"}} key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage ? element.urlToImage : "https://i.ytimg.com/vi/kIYBaFVADQk/maxresdefault.jpg"} newurl={element.url} author={element.author} date={element.publishedAt} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / 24)} type="button" className="btn btn-dark" onClick={handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    )
}

News.defaultProps = {
  country: "in",
  category: "science"

}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
}

export default News

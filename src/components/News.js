import React, {useEffect, useState, useContext} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import CountryContext from "../context/country/CountryContext"

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const context = useContext(CountryContext);
    const { country } = context;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`; 
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = apiUrl + `&page=${page}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey - ${country.toUpperCase()}`;
        updateNews(); 
        // eslint-disable-next-line
    }, [country])


    const fetchMoreData = async () => {   
        const url = apiUrl + `&page=${page+1}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '90px 0px 35px' }}>{process.env.REACT_APP_NAME} - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">                         
                        <div className="row">                        
                            {articles.map((article) => {
                                return <div className="col-md-4" key={article.url}>
                                    <NewsItem article={article} />
                                </div>
                            })}
                        </div>
                    </div> 
                </InfiniteScroll>
            </>
        )    
}


News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News

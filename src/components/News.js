import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import CountryContext from "../context/country/CountryContext"

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [totalResults, setTotalResults] = useState(0)
    const context = useContext(CountryContext);
    const { country } = context;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchMoreData = async () => {        
        props.setProgress(10);
        setError('')
        await axios.get(apiUrl + `&page=${page + 1}`)
            .then(response => {
                setPage(page + 1)
                props.setProgress(30);                
                setArticles(articles.concat(response.data.articles))
                setTotalResults(response.data.totalResults)
                props.setProgress(70);
            })
            .catch(errorResponse => {
                props.setProgress(70);
                setTotalResults(0)
                setError(errorResponse.message)
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            })
        props.setProgress(100);
    }

    const fetchData = async () => { 
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        props.setProgress(10);
        setError('')
        await axios.get(apiUrl + `&page=1`)
            .then(response => {
                setPage(1)
                props.setProgress(30);    
                setArticles(response.data.articles)
                setTotalResults(response.data.totalResults)
                props.setProgress(70);
            })
            .catch(errorResponse => {
                props.setProgress(70);
                setTotalResults(0)
                setError(errorResponse.message)                
            })
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {       
        fetchData();
        // eslint-disable-next-line
    }, [country])

    return (
        <>
            <h1 className="text-center" style={{ margin: '90px 0px 35px' }}>{process.env.REACT_APP_NAME} - Top {capitalizeFirstLetter(props.category)} Headlines ({country.toUpperCase()})</h1>
            {loading && <Spinner />}
            {error.length !== 0 && <div className="alert alert-danger" role="alert">
                {error}
            </div>}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
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
    pageSize: 6,
    category: 'general',
}

News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News

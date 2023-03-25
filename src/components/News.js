// rce
import React,{useEffect,useState} from 'react'

import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Navbar from './Navbar';
import InfiniteScroll from "react-infinite-scroll-component";

// import {Link} from 'react-router-dom';

const News =(props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [search, setSearch] = useState(false)
    const [inputvalue, setinputvalue] = useState('')


    
    const capitalfirstletter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1)
    }

    
   const UpdateNews=async()=>{
        
        if (search) {
             console.log('page length'+page)

            console.log("count")
            let url=`https://newsapi.org/v2/everything?q=${inputvalue}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
            // setState({loading:true})
            setLoading(true)

            let data= await fetch(url)
            let parsedData=await data.json()
            // console.log(parsedData);
            setArticles(parsedData.articles)
            setLoading(false)
        
            

        }
        else{
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        
        // setState({loading:true})
        setLoading(true)
        let data= await fetch(url)
        props.setprogress(60);

        let parsedData=await data.json()
        // console.log(parsedData);
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        props.setprogress(100);


        }


    }
    useEffect(() => {
        document.title=`${capitalfirstletter(props.category)} - NewsMonkey`;

        props.setprogress(10);
        UpdateNews();
        // eslint-disable-next-line
    },[])
    
   

    // const handlePrevClick= async()=>{
    //     console.log("previous")
        
    //     setPage(page-1)
    //     UpdateNews()

    // }
    // const handleNextClick= async()=>{

    //     console.log("next")

    //     // console.log(parsedData);
        
    //     setPage(page+1)
    //     UpdateNews();
    //     }
    
     
     const getInputValue=async()=>{
        
        
         let inputVal = document.getElementById("inputId").value;
         console.log(inputVal)
         document.getElementById("heading").innerHTML='NewsMonkey-Top Headlines Related to '+capitalfirstletter(inputVal)
        
        setSearch(true)
        setinputvalue(inputVal)
        // setState({search:true})
        console.log(props.pageSize)
        console.log('page length'+page)
        props.setprogress(10);
        
        let url=`https://newsapi.org/v2/everything?q=${inputVal}&apiKey=${props.apiKey}&page=1&pagesize=${props.pageSize}`;
        // setState({loading:true})
        setLoading(true)

        

        let data= await fetch(url)
        props.setprogress(60);

        let parsedData=await data.json()
        console.log(parsedData);
        
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        setPage(1)
        // setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false,page:1})
        props.setprogress(100);


        

    }
    const fetchMoreData = async() => {
        if (search) {
            // await setState({
            //     page:state.page+1
            // })
            console.log(page)
            setPage(page+1)
            const url=`https://newsapi.org/v2/everything?q=${inputvalue}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
           setLoading(true)
            // setState({loading:true})
            let data= await fetch(url)
            let parsedData=await data.json()
            // console.log(parsedData);
            
        console.log(parsedData);
        console.log(articles.length)
        console.log(totalResults)
        
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setTotalResults(parsedData.totalResults)
            // setState({
            //     articles:state.articles.concat(parsedData.articles),
            //     loading:false,
            //     totalResults:parsedData.totalResults
            // })

        }
        else{    
        
        // await setState({
        //     page:state.page+1
        // })
        console.log('i am in else')
        setPage(page+1)
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        
        // setState({loading:true})
        setLoading(true)
        console.log("value of search",search)
        let data= await fetch(url)
        let parsedData=await data.json()
        console.log(parsedData);
        console.log(articles.length)
        console.log(totalResults)

        
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        // setState({
        //     articles:state.articles.concat(parsedData.articles),
        //     loading:false,
        //     totalResults:parsedData.totalResults
        // })
    }
      };
    

    
  
    return (
        <>
        <Navbar searchengine={<form className="d-flex" role="search">

<input className="form-control me-2" type="search" id='inputId' placeholder="Search"  aria-label="Search" autoComplete="off"/>
<button className="btn btn-outline-light"  type="button" onClick={getInputValue}>Search</button>
</form>
}/>
      
      
        <h1 className='text-center' style={{margin:'30px',marginTop:'90px'}} id='heading'>NewsMonkey-Top {capitalfirstletter(props.category)} Headlines</h1>
        {loading &&<Spinner/>}
       

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        
        <div className="container my-1">
        
        <div className="row">
        {articles.map((element,index)=>{
            return <div className="col-md-4" key={index}>
            <Newsitem  title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage}
            newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        

        })}
        {!loading&&totalResults<=0 && <h1 className='text-center'>NO RESULT</h1>}
        </div>
         </div>

        </InfiniteScroll>

        {/* {!state.loading&&state.totalResults>0 && <div className="container d-flex justify-content-between">
        <button disabled={state.page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>  &larr;	Previous</button>
        <button disabled={state.page+1>Math.ceil(state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;	</button>

            
        </div>} */}
        
      </>
    )
  
}
News.defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
    
}
News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
}

export default News
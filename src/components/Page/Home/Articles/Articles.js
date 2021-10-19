import React, { useEffect } from 'react';
import { useState } from 'react';
import Article from './Article/Article';
import './Articles.css'

const Articles = () => {
    const[articles,setArticles]=useState([])
    useEffect(()=>{
        fetch('./articles.json')
        .then(res => res.json())
        .then(data => setArticles(data))
    },[])
    return (
        <div className="articles-sec">
         <div className="container">
            <h6>Read Professional Articles</h6>
            <h1>Latest <span className="custom-color">Articles</span></h1>
            <div className="articles">
                {
                  articles.slice(0,3).map(article=><Article
                  
                    article={article}
                    key={article.id}
                  ></Article>)  
                }
            </div>
            </div>
           
        </div>
    );
};

export default Articles;
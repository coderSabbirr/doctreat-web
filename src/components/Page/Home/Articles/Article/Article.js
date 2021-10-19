import React from 'react';
import './article.css'

const Article = (props) => {
    const{tag,title,img}=props.article;
    return (
        <div className="mt-4 ">
           <div className="card article-card">
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
      <h6>{tag}</h6>
    <h3>{title}</h3>
    <p>September 13, 2021</p>
    </div>
  </div>
</div> 
    );
};

export default Article;
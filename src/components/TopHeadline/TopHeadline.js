import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [article,setArtical] = useState([])
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=9c2881bffe7c4478a7e100a8ce5ec734")
        .then(res => res.json())
        .then (data => setArtical(data.articles))
    },[])

    console.log(article);

    return (
        <div className="container">
            <h1>Total Articles: {article.length}</h1>
            {
                article.map(article => <News article={article}></News>)
            } 
        </div>
    );
};

export default TopHeadline;
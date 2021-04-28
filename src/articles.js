import './App.css';
function Article(props) {
    return(
        props.article.map(el=>
            
            <div className="">
                <img className="article-img mb-3" src={el.src}></img>
                <p className="article-name">{el.articleName}</p>  
                <p>{el.articleDescription}</p>
            </div>
            
            )
    )
}

export default Article;
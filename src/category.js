import './App.css';
function Category(props) {
    return(
        props.categ.map(el=>
            
            <div className="">
                <img className="category-img" src={el.src}></img>
                <p className="category-name">{el.categoryName}</p>  
            </div>
            
            )
    )
}

export default Category;
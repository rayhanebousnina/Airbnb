import {Container, Row, Col} from 'react-bootstrap'
import './App.css';
function Country(props) {
    return(
        props.pays.map(el=>
            
            <div className="d-flex mx-5 pb-5">
                <img className="country-img mr-3" src={el.src}></img>
                <p className="country-name d-flex align-self-center">{el.countryName}</p>  
            </div>
            
            )
    )
}

export default Country;
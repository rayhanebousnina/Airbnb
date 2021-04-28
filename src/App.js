import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Button, Card} from 'react-bootstrap'
import Country from './country.js'
import Category from './category.js'
import Article from './articles.js'
import './App.css';

const countries = [
  {countryName: 'Tunis' , src: 'images/countries/1.jpg'},
  {countryName: 'Marsa' , src: 'images/countries/2.jpg'},
  {countryName: 'Kelibia' , src: 'images/countries/3.jpg'},
  {countryName: 'Yasmine Hammamet' , src: 'images/countries/4.jpg'},
  {countryName: 'Hammamet Sud' , src: 'images/countries/5.jpg'},
  {countryName: 'Hergla' , src: 'images/countries/6.jpg'},
  {countryName: 'Korba' , src: 'images/countries/6.jpg'},
  {countryName: 'Aghir' , src: 'images/countries/7.jpg'}
]

const categories = [
  {categoryName: 'Escapades en pleine nature' , src: 'images/categories/1.jpg'},
  {categoryName: 'Des logements uniques' , src: 'images/categories/3.jpg'},
  {categoryName: 'Logements entiers' , src: 'images/categories/4.jpg'},
  {categoryName: 'Animaux de compagnie acceptés' , src: 'images/categories/5.jpg'}
]

const articles = [
  {articleName:"Collection à la une : Envies d'évasion", src:'images/articles/1.jpg', articleDescription:'Voyagez depuis chez vous grâce aux expériences en ligne.'},
  {articleName:"Expériences en ligne", src:'images/articles/2.jpg', articleDescription:'Activités interactives en direct, animées par des hôtes.'},
  {articleName:"Expériences", src:'images/articles/3.jpg', articleDescription:'Prenez part à des activités locales, où que vous soyez.'},
]

function App() {
  return (
    <div>
      <div className="container-fluid">
        <Card className="bg-dark text-white">
          <Card.Img src="images/background.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <Container  className="my-5">
        <Row><h2 className="titre">Explorez les environs</h2></Row>
      </Container>
      <Container>
        <Row>
          <div className="d-flex flex-wrap">
            <Country pays = {countries}/>
          </div>
        </Row>   
      </Container>
      <Container  className="my-5">
        <Row><h2 className="titre">Chez vous, partout</h2></Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-center">
          <div className="d-flex">
            <Category categ = {categories}/>
          </div>
        </Row>   
      </Container>
      <Container className="d-flex justify-content-center my-5">

      <Card className="bg-dark text-white">
        <Card.Img className="prop-img" src="images/proprietaire.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text className="mt-5 ml-5">
            <h1 className="titre">Devenez hôte</h1>
            <p>Gagnez un revenu complémentaire et <br/> saisissez de nouvelles opportunités en louant <br/> votre logement.</p>
            <Button variant="light">En savoir plus</Button>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      </Container>
      <Container  className="my-5">
        <Row><h2 className="titre">Découvrez les expériences</h2></Row>
        <Row><h4>Des activités uniques avec des experts locaux, en personne ou en ligne.</h4></Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-center">
          <div className="d-flex">
            <Article article = {articles}/>
          </div>
        </Row>  
      </Container>
    </div>
  );
}

export default App;

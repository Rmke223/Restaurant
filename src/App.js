import React, { Component } from 'react'
import Header from './img/gb.jpg'
import axios from 'axios'
import Apps from "./img/apps.png"
import Lunchie from "./img/lunch.png"
import Dinnies from "./img/dinner.png"
import Desserties from "./img/dessert.png"
import Specialz from "./img/special.png"
import Keenan from './img/keenan.webp'
import Kel from './img/kel.jpg'
import Me from './img/me.png'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Food: [],
      Lunch: [],
      Entree: [],
      Dessert: [],
      Special: []
    }
  }
  componentDidUpdate() {
    localStorage.setItem('Food', JSON.stringify(this.state.Food))
    localStorage.setItem('Lunch', JSON.stringify(this.state.Lunch))
    localStorage.setItem('Entree', JSON.stringify(this.state.Entree))
    localStorage.setItem('Dessert', JSON.stringify(this.state.Dessert))
    localStorage.setItem('Special', JSON.stringify(this.state.Special))
  }

  componentDidMount() {
    if (!localStorage.getItem('Food')) {
      axios.get('https://entree-f18.herokuapp.com/v1/menu/8')
        .then(res => {
          this.setState({ Food: res.data.menu_items });
        })
    }
    else if (localStorage.getItem('Food')) {
      var storedFood = JSON.parse(localStorage.getItem('Food'))
      this.setState({
        Food: storedFood,
      })
    }
    if (!localStorage.getItem('Lunch')) {
      axios.get('https://entree-f18.herokuapp.com/v1/menu/9')
        .then(res => {
          this.setState({ Lunch: res.data.menu_items });
        })
    }
    else if (localStorage.getItem('Lunch')) {
      var storedLunch = JSON.parse(localStorage.getItem('Lunch'))
      this.setState({
        Lunch: storedLunch,
      })
    }
    if (!localStorage.getItem('Entree')) {
      axios.get('https://entree-f18.herokuapp.com/v1/menu/15')
        .then(res => {
          this.setState({ Entree: res.data.menu_items });
        })
    }
    else if (localStorage.getItem('Entree')) {
      var storedEntree = JSON.parse(localStorage.getItem('Entree'))
      this.setState({
        Entree: storedEntree,
      })
    }
    if (!localStorage.getItem('Dessert')) {
      axios.get('https://entree-f18.herokuapp.com/v1/menu/15')
        .then(res => {
          this.setState({ Dessert: res.data.menu_items });
        })
    }
    else if (localStorage.getItem('Dessert')) {
      var storedDessert = JSON.parse(localStorage.getItem('Dessert'))
      this.setState({
        Dessert: storedDessert,
      })
    }
    if (!localStorage.getItem('Special')) {
      axios.get('https://entree-f18.herokuapp.com/v1/menu/15')
        .then(res => {
          this.setState({ Special: res.data.menu_items });
        })
    }
    else if (localStorage.getItem('Special')) {
      var storedSpecial = JSON.parse(localStorage.getItem('Special'))
      this.setState({
        Special: storedSpecial,
      })
    }
  }



  render() {
    return (
      <div className="container-fluid mx-auto text-center bg-success">
        <div className="row">
          <div className="col-12 mx-auto">
            <img className="img-fluid" src={Header} />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <div class="card">
                <img className="card-img-top" src={Keenan} />
                <div className="card-body">
                  <h5 className="card-title">Kenan Thompson</h5>
                  <p className="card-text">Head Chef</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <img className="card-img-top" src={Kel} />
                <div className="card-body">
                  <h5 className="card-title">Kel Mitchell</h5>
                  <p className="card-text">Senior Sommelier</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card">
                <img className="card-img-top" src={Me} />
                <div className="card-body">
                  <h5 className="card-title">Ryan Kelly</h5>
                  <p className="card-text">Chef in Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div id="accordion">
          <div className="card text-primary">
            <div className="card-header bg-primary" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link text-white bg-success" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Appeteasers
                </button>
              </h5>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled">
                  <img src={Apps} />
                  {this.state.Food.map(Food =>
                    <div>
                      <h1>{Food.description.split(" with ")[0]}</h1>
                      <li>{Food.description}</li>
                      <p>{Food.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="accordion">
          <div className="card">
            <div className="card-header bg-primary" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link bg-success text-white" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Lunch
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled">
                  <img src={Lunchie} />
                  {this.state.Lunch.map(Lunch =>
                    <div>
                      <h1>{Lunch.description.split(" with ")[0]}</h1>
                      <li>{Lunch.description}</li>
                      <p>{Lunch.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="accordion">
          <div className="card">
            <div className="card-header bg-primary" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link bg-success text-white" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Entree's
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled">
                  <img src={Dinnies} />
                  {this.state.Entree.map(Entree =>
                    <div>
                      <h1>{Entree.description.split(" with ")[0]}</h1>
                      <li>{Entree.description}</li>
                      <p>{Entree.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="accordion">
          <div className="card">
            <div className="card-header bg-primary" id="headingFour">
              <h5 className="mb-0">
                <button className="btn btn-link bg-success text-white" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Dessert
                </button>
              </h5>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled">
                  <img src={Desserties} />
                  {this.state.Dessert.map(Dessert =>
                    <div>
                      <h1>{Dessert.description.split(" with ")[0]}</h1>
                      <li>{Dessert.description}</li>
                      <p>{Dessert.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="accordion">
          <div className="card">
            <div className="card-header bg-primary" id="headingFive">
              <h5 className="mb-0">
                <button className="btn btn-link bg-success text-white" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Special
                </button>
              </h5>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
              <div className="card-body">
                <ul className="list-unstyled">
                  <img src={Specialz} />
                  {this.state.Special.map(Special =>
                    <div>
                      <h1>{Special.description.split(" with ")[0]}</h1>
                      <li>{Special.description}</li>
                      <p>{Special.description.length}$</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white">
          <h1>Hours of Operation</h1>
          <p>All Day Errrrrr Day</p>
          <h1>Location</h1>
          <p>1601 Pennsylvania Avenue</p>
          <p>Washington DC, Merica</p>
        </div>
      </div>
    )
  }
}




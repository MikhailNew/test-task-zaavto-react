import React, { Component } from 'react';
import './App.css';
import Loader from './Loader/Loader'
import FilmsList from './FilmsList/FilmsList'

class App extends Component {

  state = {
    isLoading: true,
    data: []
  }

  renderData () {
    return this.state.data.map((film, index) => {
      return (
        <FilmsList key={index} id={index+1} film={film} />
      )
    })
  }

  async componentDidMount () {
    try {
      const response = await fetch(`https://swapi.dev/api/films/`)
      const data = await response.json()

      this.setState({
        data: data.results,
        isLoading: false
      })
    } catch (e) {
        console.log(e)
    }
  }

  render () {
    return (
      <div className="films">
        <div className="films__wrapper">
          {
            this.state.isLoading
            ? <div className="loader">
                <Loader />
              </div>
            : <> 
                <h2 className="films__title">Star Wars</h2>
                <ul className="films__list">
                  {this.renderData()}
                </ul>         
              </>
          }
        </div>
      </div>
    )
  }
}

export default App;

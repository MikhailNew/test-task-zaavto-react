import React, { Component } from 'react'
import FilmAnimation from '../FilmAnimation/FilmAnimation'
import Loader from '../Loader/Loader'
import './FilmItem.css'
import { NavLink } from 'react-router-dom';


class FilmItem extends Component {
    state = {
        result: {},
        loading: true,
        description: []
    }

    async componentDidMount () {
        try {
            const response = await fetch(`https://swapi.dev/api/films/${this.props.match.params.id}`)
            const description = await response.json()

            this.setState({
                description,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }
    }

    renderDescription () {
        return (
            <div className="film">
                <div className="film__wrapper">
                <FilmAnimation />
                <div className="film__description">
                    <h3 className="film__subtitle">{this.state.description.title}</h3>
                    <div className="film__director">Director: <strong>{this.state.description.director}</strong></div>
                    <div className="film__producers">Producers: <strong>{this.state.description.producer}</strong></div>
                    <div className="film__date">Date of release: <strong>{this.state.description.release_date}</strong></div>
                    <div className="film__plot">{this.state.description.opening_crawl}</div>
                    <div className="film__btn">
                        <NavLink to={{pathname: "/feedback", episode_id: this.state.description.episode_id, filmTitle: this.state.description.title}}>
                            feedback
                        </NavLink> 
                    </div>
                    <div className="film__btn">
                        <NavLink to={"/"}>
                            Back
                        </NavLink> 
                    </div>
                </div>
            </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.loading
                    ? <div className="loader">
                        <Loader />
                      </div>
                    : <>{this.renderDescription()}</>
                }
            </div>
        )
    }
}

export default FilmItem
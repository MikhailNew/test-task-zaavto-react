import React, { Component } from 'react'
import './FeedBack.css'
import Dialog from '@material-ui/core/Dialog';
import { BottomNavigation } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

class FeedBack extends Component {

    state = {
        episode_id: null,
        filmTitle: '',
        username: '',
        email: '',
        textarea: '',
        isModalOpen: false
    }

    componentDidMount () {
        if (localStorage.getItem('episode_id') !== null) {
            const episode_id = localStorage.getItem('episode_id')
            const filmTitle = localStorage.getItem('film_title')
            this.setState({
                episode_id: +episode_id,
                filmTitle
            })
        } else {
            const episode_id = this.props.location.episode_id
            const filmTitle = this.props.location.filmTitle
            localStorage.setItem('episode_id', episode_id);
            localStorage.setItem('film_title', filmTitle);
            this.setState({
                episode_id: +episode_id,
                filmTitle
            })
        }
    }

    componentWillUnmount() {
        localStorage.removeItem('episode_id');
        localStorage.removeItem('film_title');
    }

    handleInputChange (event) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
        console.log(this.state.textarea)
    }

    openModal () {
        this.setState({
            isModalOpen: true
        })
    }

    handleSubmit (event) {
        event.preventDefault()
        
        let promise = new Promise(resolve => {
            setTimeout(() => resolve('success'), 1000);
        })
        promise.finally(this.openModal.bind(this));
    }

    render () {
        return (
            <div className="feedback">
                <div className="feedback__wrapper">
                    <h2 className="feedback__subtitle">The reviews {this.state.filmTitle}</h2>
                    <form className="feedback__form" onSubmit={this.handleSubmit.bind(this)}>
                        <label className="form__label">
                            <input className="form__input" onChange={this.handleInputChange.bind(this)} type="text" name="username" required pattern="^[\sA-Za-zА-Яа-яЁё]*$" minLength="2" placeholder="Username" />
                        </label>
                        <label className="form__label">
                            <input className="form__input" onChange={this.handleInputChange.bind(this)} type="text" inputMode="email" name="email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Zа-яА-ЯёЁ0-9.-]+\.[a-zA-Zа-яА-ЯёЁ]{2,}$" placeholder="E-mail" />
                        </label>
                        <label className="form__label">
                            <textarea className="form__input textarea" type="text" name="textarea" onChange={this.handleInputChange.bind(this)} minLength="5" required />
                        </label>
                        <input className="form__sbmt" type="submit" value="Submit" />
                    </form>
                </div>
                <Dialog
                    open={this.state.isModalOpen}
                >
                    <div className="modal">
                        <h3 className="modal__title">Thank you, <strong>{this.state.username}</strong>!</h3>
                        <div className="modal__email">Your E-mail: <strong>{this.state.email}</strong></div>
                        <div className="modal__review">Your review:<br /><strong>{this.state.textarea}</strong></div>
                        <div className="modal__btn">
                            <NavLink to={"/"} >
                                OK 
                            </NavLink>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default FeedBack
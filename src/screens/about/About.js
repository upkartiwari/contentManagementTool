import React from 'react'
import { useNavigate } from "react-router-dom";
import Home from '../homepage/Home'
import Footer from '../../components/Footer/Footer'
import './About.css'

function About() {
    const navigate = useNavigate();

    const clickingPage = () => {
        navigate('/home')
    }

    return (
        <div>
            <header>
                <h1>Content Management Tool</h1>
            </header>
            <section className='content'>
                <form id="blogForm" encType="multipart/form-data">

                    <div className='form' id="name">
                        <label htmlFor="Name">Name:</label>
                        <input type="text" name="Name"></input>
                    </div>

                    <div className='form' id="email">
                        <label htmlFor='email'>Email:    </label>
                        <input type="email" ></input>
                    </div>

                    <div className="form">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" required="" />
                    </div>

                    <div className="form">
                        <label htmlFor="image">Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            required=""
                        />
                    </div>
                    <div className="form">
                        <label htmlFor="video">Video:</label>
                        <input
                            type="file"
                            id="video"
                            name="video"
                            accept="video/*"
                            required=""
                        />
                    </div>

                    <div className="form">
                        <label htmlFor="content">Content:</label>
                        <textarea id="content" name="content" required="" defaultValue={""} />
                    </div>

                    <div onClick={clickingPage} className="submit-button">
                        <div>
                            <button type="submit" style={{height: '50px', width: '200px', borderRadius: '20px'}} >Submit</button>
                        </div>

                    </div>
                </form>

            </section>
          
        </div>

    )
}


export default About
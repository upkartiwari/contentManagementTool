import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './Home.css'


function Home() {

    const navigate = useNavigate();

    const backCllaer = () => {
        navigate('/')
    }

    return (

        <div>
            <div id="submitted-content">
                <h2>My Blog</h2>
                <p>
                    <strong>Title:</strong> <span id="title-display"></span>
                </p>
                <p>
                    <strong>Content:</strong> <span id="content-display"></span>
                </p>
                <p>
                    <strong>Image:</strong>
                </p>
                <img id="image-display" src="" alt="Submitted Image" />
                <p>
                    <strong>Video:</strong>
                </p>
                <video id="video-display" src="" controls=""></video>
            </div>
            <div>
                <div onClick={backCllaer}>Home</div>
                <Footer />
            </div>
        </div>

    )
}

export default Home
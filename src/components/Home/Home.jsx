import React from "react";
import './Home.css';

function Home() {
    return (
        <section className="home-container" id="home">
            <div className="home-content">
                <h3>杨广宇</h3>
                <p>软件工程师 | 网页开发者 | 游戏开发者</p>
                <div className="info-icons">
                    <a
                        href="https://github.com/Kurumiku0712"
                        className="info-item"
                        target="_blank" rel="noreferrer">
                        <img src="./assets/images/github-icon.png" alt="GitHub" />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/guangyu-yang-809978303/" className="info-item"
                        target="_blank" rel="noreferrer">
                        <img src="./assets/images/linkedin-icon.png" alt="LinkedIn" />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="./assets/files/Resume.pdf"
                        className="info-item"
                        download="简历_杨广宇.pdf">
                        <img src="./assets/images/download-icon.png" alt="CV" />
                        <span>简历</span>
                    </a>
                </div>
            </div>

            <div className="home-img">
                <div>
                    <img className="home-photo" src="./assets/images/photo.png" alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/react-icon.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/django-icon.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/java-icon.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/csharp-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Home;

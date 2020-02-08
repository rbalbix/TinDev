import React from 'react';

import './Main.css';
import logo from '../assets/logotipo.svg';
import dislike from '../assets/dislike.svg'
import like from '../assets/like.svg'

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="tindev" />
            <ul>
                <li>
                    <img src="https://abrilexame.files.wordpress.com/2019/11/eletrobras.jpg?quality=70&strip=info&resize=680,453" alt="" />
                    <footer>
                        <strong>Docarri</strong>
                        <p>Studying Techs</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://abrilexame.files.wordpress.com/2019/11/eletrobras.jpg?quality=70&strip=info&resize=680,453" alt="" />
                    <footer>
                        <strong>Docarri</strong>
                        <p>Studying Techs epwfwep pocewofkwefpo wpveoekwvpokv</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://abrilexame.files.wordpress.com/2019/11/eletrobras.jpg?quality=70&strip=info&resize=680,453" alt="" />
                    <footer>
                        <strong>Docarri</strong>
                        <p>Studying Techs</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://abrilexame.files.wordpress.com/2019/11/eletrobras.jpg?quality=70&strip=info&resize=680,453" alt="" />
                    <footer>
                        <strong>Docarri</strong>
                        <p>Studying Techs</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}
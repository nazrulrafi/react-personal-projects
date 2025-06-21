import React, {useContext, useEffect} from 'react';
import {assets} from "../../assets/assets.js";
import './Main.css';
import {Context} from "../../context/Context.jsx";


function Main(props) {
    const {prevPrompt,
        setPrevPrompt,
        onSent,
        recentPrompt,
        setRecentPrompt,
        input,
        setInput,
        resultData,
        showResults,
        loading} = useContext(Context)
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=""/>
            </div>
            <div className="main-container">
                {!showResults
                    ? <>
                        <div className="greet">
                            <p><span>Hello,dev</span></p>
                            <p><span>How can i help you today?</span></p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcomming road trip</p>
                                <img src={assets.compass_icon} alt=""/>
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt=""/>
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activitiers for out work retreat</p>
                                <img src={assets.message_icon} alt=""/>
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt=""/>
                            </div>
                        </div>
                    </> :<div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt=""/>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt=""/>
                            {loading
                                ? <div className="loader">
                                    <hr/>
                                    <hr/>
                                    <hr/>
                                </div>
                                : <p dangerouslySetInnerHTML={{__html: resultData}}/>}
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text"
                               placeholder="Enter a prompt here"/>
                        <div>
                            <img src={assets.gallery_icon} alt=""/>
                            <img src={assets.mic_icon} alt=""/>
                            <img onClick={() => onSent()} src={assets.send_icon} alt=""/>
                        </div>
                    </div>
                    <p className="bottom-info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, voluptas.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
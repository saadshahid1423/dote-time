import React from 'react';
import '../../App.css';
import Fade from 'react-reveal-animation/Fade';
import Zoom from 'react-reveal-animation/Zoom';

class Second extends React.Component {
    get_started = () => {
        this.props.history.push("/home")
    }
    render() {
        return (
            <div className="divback">
                <div className="divhover">
                    <Fade top cascade>
                        <div className="firstDiv">
                            <h1 style={{ marginTop: "5%" }}>Hi there ! </h1>
                            <p>In what scenario would <br /> Use Transnote? Trasno is well Suited <br /> to solving the following problems</p>
                        </div>
                    </Fade>
                    <br /><br /> <br />
                    <div onClick={() => this.get_started()} className='todoDiv'>
                        <Zoom>
                            <div className='todo_list'>
                                <h2 className='newNote'>Make A New Note</h2>
                                <ul>
                                    <li className="list">To-do list</li>
                                    <li className="list">Schedule</li>
                                    <li className="list">Brainstorming</li>
                                    <li className="list">Meeting Note</li>
                                    <li className="list">Reading Note</li>
                                    <li className="list">5R Note Talking</li>
                                </ul>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        );
    };
};

export default Second;

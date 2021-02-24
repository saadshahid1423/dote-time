import React from 'react';
// import img1 from "../../images/img1"
import '../../App.css'
// import Second from '../second/second';
import Fade from 'react-reveal-animation/Fade';
import Zoom from 'react-reveal-animation/Zoom';


class First extends React.Component {

    get_started = () => {
        this.props.history.push("/makenote")
    }


    render() {
        return (
            <div  className="divback1">
                <div className="div1">
                <Fade top cascade>
                    <h1 style={{marginTop:"5%"}}>Access notes anytime, anywhere</h1>
                    </Fade>
                    <br />  <br />  <br />  <br />  <br />
                    <Zoom>
                    <img className="image1" src="https://i.pinimg.com/originals/52/8e/29/528e2946f76a74030660b231c7ff1dc1.png" />
                    </Zoom>
                </div>
                <br />
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                <Fade bottom cascade>
                    <center>
                        <button className="butt" onClick={() => this.get_started()}>Get Started</button>
                    </center>
                        </Fade>
                </div>
            </div>
        );
    };
};

export default First;

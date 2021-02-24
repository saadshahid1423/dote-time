import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal-animation/Fade';

class Home extends React.Component {
    get_started=()=>{
        this.props.history.push("/note")
    }
    render() {
        return (
            <div style={{backgroundColor:"rgb(47, 41, 41)", height:"100vh"}}>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <h3 className="hed">Home</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            </ul>
                            <form className="d-flex">
                                <button onClick={() => this.get_started()} className="btn btn2 " type="submit">+ New</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <br /><br /> <br />
                <Fade right cascade>
                <div className="displayflex" style={{ display: "flex", justifyContent: "center" }}>
                    <div className="Responsive ">
                        <div className='icondiv'>
                            <div className='icondiv2'>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <FontAwesomeIcon icon={faClipboard} color="white" size="3x" style={{ marginTop: "20px" }} />
                                </div>
                                <h5 className="hed2">My First Transnote</h5>
                                <p className="para1">Feb 24, 2021 7 : 25</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>



        )
    }
}

export default Home;
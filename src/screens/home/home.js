import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal-animation/Fade';
import firebase from '../../config/firebase'


class Home extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
            completeDetail: [
            ]
        };
    }

    componentDidMount() {
        var arr = []
        firebase.database().ref('/').child("Detail").on("child_added", (data) => {
            arr.push(data.val())
            this.setState({
                completeDetail: arr
            })
        })
    }
    send_details = (i) => {
        this.props.history.push("/editnote", { detail: i })
    }
    get_started = () => {
        this.props.history.push("/note")
    }
    render() {
        // console.log("data===>", this.state.completeDetail)
        return (
            <div style={{ backgroundColor: "rgb(47, 41, 41)", height: "100vh" }}>
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
                <div className="displayflex container row">
                    {this.state.completeDetail.map((i) => {
                        return (
                            <Fade right cascade>
                                <div onClick={() => this.send_details(i)} style={{ cursor: "pointer" }} className="Responsive ">
                                    <div className='icondiv'>
                                        <div className='icondiv2'>
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <FontAwesomeIcon icon={faClipboard} color="white" size="3x" style={{ marginTop: "20px" }} />
                                            </div>
                                            <h5 style={{ color: "white" }} className="hed2">{i.inputHead}</h5>
                                            <p className="para1">{i.timeDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                        )
                    })}
                </div>
            </div>



        )
    }
}

export default Home;
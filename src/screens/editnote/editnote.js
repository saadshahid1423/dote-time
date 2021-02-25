import React from 'react';
import firebase from '../../config/firebase'
import '../../App.css';

class Editnote extends React.Component{
   constructor(props){
       super(props)
       this.state={
    inputhead:"",input1:'',input2:'',input3:'',   input4:'',input5:'',input6:'',input7:'',input8:'',input9:'',input10:'',
    input11:'',input12:'',input13:'',input14:'',input15:'',input16:'',input17:'',input18:'',input19:'',input20:'',
    input21:'',input22:'',input23:'',input24:'',input25:'',input26:'',input27:'',input28:'',input29:'',input30:'',
    input31:'',input32:'',input33:'',input34:'',input35:'',input36:'',input37:'',input38:'',input39:'',input40:'',          
    input41:'',input42:'',input43:'',input44:'',input45:'',input46:'',input47:'',details: [this.props.location.state.detail]
}
}



Save= ()=>{
    var today = new Date()
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+' '+time;  

    var obj={
        timeDate:dateTime,
        inputHead:this.state.inputhead,
        input1:this.state.input1,
        input2:this.state.input2,
        input3:this.state.input3,
        input4:this.state.input4,
        input5:this.state.input5,
        input6:this.state.input6,
        input7:this.state.input7,
        input8:this.state.input8,
        input9:this.state.input9,
        input10:this.state.input10,
        input11:this.state.input11,
        input12:this.state.input12,
        input13:this.state.input13,
        input14:this.state.input14,
        input15:this.state.input15,
        input16:this.state.input16,
        input17:this.state.input17,
        input18:this.state.input18,
        input19:this.state.input19,
        input20:this.state.input20,
        input21:this.state.input21,
        input22:this.state.input22,
        input23:this.state.input23,
        input24:this.state.input24,
        input25:this.state.input25,
        input26:this.state.input26,
        input27:this.state.input27,
        input28:this.state.input28,
        input29:this.state.input29,
        input30:this.state.input30,
        input31:this.state.input31,
        input32:this.state.input32,
        input33:this.state.input33,
        input34:this.state.input44,
        input35:this.state.input35,
        input36:this.state.input36,
        input37:this.state.input37,
        input38:this.state.input38,
        input39:this.state.input39,
        input40:this.state.input40,
        input41:this.state.input41,
        input42:this.state.input42,
        input43:this.state.input43,
        input44:this.state.input44,
        input45:this.state.input45,
        input46:this.state.input46,
        input47:this.state.input47,
            } 
    firebase.database().ref('/').child("editDetail").push(obj)
    this.props.history.push('/home')

};



render(){
   console.log(this.state.details)
    return(
            <div className="firstpage">
                  {this.state.details.map((i)=>{
                return(
                <div className="textinputdiv">
                <textarea onChange={(e)=>this.setState({inputhead:e.target.value})} defaultValue={i.inputHead} className="headdraft" type="text" required/>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea  onChange={(e)=>this.setState({input1:e.target.value})} className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input2:e.target.value})} defaultValue="This document is created based on your intrests. Don't miss trying the following features, and feel free to make an edits." className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input3:e.target.value})} defaultValue="Try them now!" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input3:e.target.value})} defaultValue="Tab text to edit the note" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input4:e.target.value})} defaultValue="Drag node to adjust level" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input5:e.target.value})} defaultValue="It's time to know that you can do with Transo" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input6:e.target.value})} defaultValue="5R Note Taking" className="headdraft2" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input7:e.target.value})} defaultValue="Note record" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input7:e.target.value})} defaultValue="Colors: Inspire creativity and improve accuracy" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input8:e.target.value})} defaultValue="Comprehension: Be able to clearly distinguish between what you understand and what you don't understant" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input9:e.target.value})} defaultValue="Sort out clues" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input10:e.target.value})} defaultValue="Timed review" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input11:e.target.value})} defaultValue="..." className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input12:e.target.value})} defaultValue="Meeting Note" className="headdraft2" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input13:e.target.value})} defaultValue="Meeting overview" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input14:e.target.value})} defaultValue="Meeting times: 3pm, November 1,2019" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input15:e.target.value})} defaultValue="Meeting place: Meeting room 11" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input16:e.target.value})} defaultValue="Theme: Sales progress" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input17:e.target.value})} defaultValue="Meeting agenda" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input18:e.target.value})} defaultValue="Update and announce last week's sales data" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input19:e.target.value})} defaultValue="..." className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input20:e.target.value})} defaultValue="To-do List" className="headdraft2" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input21:e.target.value})} defaultValue="October 20, 2019" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input22:e.target.value})} defaultValue="To do" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input23:e.target.value})} defaultValue="Book an airline ticket" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input24:e.target.value})} defaultValue="Doing" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input25:e.target.value})} defaultValue="..." className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input26:e.target.value})} defaultValue="Brainstorming" className="headdraft2" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input27:e.target.value})} defaultValue="Idea record" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input28:e.target.value})} defaultValue="@Anne" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input29:e.target.value})} defaultValue="Increase the dimensions of data collection" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input30:e.target.value})} defaultValue="Follow-up to do" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input31:e.target.value})} defaultValue="Organize all the brainstorming ideas of the participants @Justin" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input32:e.target.value})} defaultValue="Assess the possibilities of all ideas @James" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input33:e.target.value})} defaultValue="..." className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input34:e.target.value})} defaultValue="Schedule" className="headdraft2" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input35:e.target.value})} defaultValue="5:00-12:00" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input36:e.target.value})} defaultValue="6:30-6:40 Get up" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input37:e.target.value})} defaultValue="7:00-7:20 Breakfast" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input38:e.target.value})} defaultValue="7:30-8:00 REcite fench words" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input39:e.target.value})} defaultValue="12:00-14:00" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input40:e.target.value})} defaultValue="..." className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input41:e.target.value})} defaultValue="Reading Notes" className="headdraft2" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input42:e.target.value})} defaultValue="'The Minto Pyramid Principle' Barbara Minto" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input43:e.target.value})} defaultValue="Part 1: Writing logic" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input44:e.target.value})} defaultValue="Why should we use the Pyramid principle" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input45:e.target.value})} defaultValue="What is the pyramid structure" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input46:e.target.value})} defaultValue="Thinking logic" className="headdraft1" type="text" required/>
                </div>
                <div className="inputbullet">
                <li style={{color:"white"}}></li><textarea onChange={(e)=>this.setState({input47:e.target.value})} defaultValue="..." className="headdraft1" type="text" required/>
                </div>
                </div>
                   )
                })} 
                <div>
                    <center>
                <button onClick={this.Save} className="buttsave">Save</button>
                </center>
                </div>
            </div>
        );
    };
};

export default Editnote;
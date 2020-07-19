import React, { Component } from 'react'
import axios from 'axios';
import List from "./../list/list";
export class Display extends Component {
    state ={
        video :[],
    };
    handleSubmit(e){
        e.preventDefault(); 
        axios.post('http://localhost:5000/display').then((res)=>{
            /////Data >>array of object////
            const data = res.data;
            console.log(data)
            this.setState({video:req.data})
        }).catch((err)=>{
            console.log("Error",err);
        })
    }
    handleSubmitDelete(e){
        e.preventDefault(); 

        axios.delete('/removeOne',function(req,res){
            const number = req.params.number;
            videoModel.find({})
            .deleteOne({}).then((result)=>{
            res.send("DeleteOne");
            })
            .catch((err)=>{
            res.send(err)
            })
        });
    
    }

    handleSubmitEdit(e){
        e.preventDefault(); 

        axios.put('/update/:linkVideo',(req,res) => {
            videoModel.findOneAndUpdate({linkVideo:req.params.linkVideo},req.body)
           .then(() => {
             res.send('Update it');
           })
           .catch((err) => {
             res.send(err);
             console.log("Cont Get this sarch")
           })
         });
    
    
    }

    render() {
        return (
            <div>
                 <br>
               </br>
               <button onClick = {this.handleSubmit.bind(this)}>Display All</button>
               <br>
               </br>

             <ul>
                 {this.state.video.map((element,index)=>(
                   <div key="index">
                       <div>{element.linkVideo}</div>
                       <div>{element.titleVedio}</div>
                       <div>{element.descriptionVideo}</div>
                       <div>{element.photoUrl}</div>
                       <div>{element.date}</div>
                       <div><button onClick={this.handleSubmitDelete}>Delete</button></div>
                       <div><button onClick={this.handleSubmitEdit}>Edit</button>Edit</div>
                   </div>
                 ))}
              
             </ul>
            </div>
        )
    }
}

export default Display

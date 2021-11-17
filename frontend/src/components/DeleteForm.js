import React from 'react';
import '../App.css';

class DeleteForm extends React.Component {
    

    
    
handleSubmit(e){

  }
   
    render(){
        
        return(
        <div className="deleteFormWrapper">
            <div className="deleteForm">
                   
                    <h1 className="deleteHeader">Are you sure you want to delete <span className="deletetitle"> {this.props.contentt.con.title} </span>?</h1><br />
                    
            <button className="yesdeletebtn" onClick={()=>this.props.deleteitem()}>Yes</button><button onClick={()=>this.props.cancledeleteitem()} className="nodeletebtn">No</button>
                    
                </div>
            </div>
             
            
      
        
        )
    }
}
export default DeleteForm;
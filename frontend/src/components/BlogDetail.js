import React from 'react';
import '../App.css';

class BlogDetail extends React.Component {
    constructor(props){
        super(props);
            this.state={
                Content:this.props.cont,
            }
    }
    
   
 
    render(){
        return(
            <>
        <div className="blogDetailWrapper">
            <div className="blogDetail">
            <div className="blogDetailUnder">
            {this.state.Content.con.image ?
                    (<img src={this.state.Content.con.image} alt="not found"/>):
                    (<img src='assets/images/defaultblog.png' alt="not found" />)}
                    
                   <h1>{this.state.Content.con.title} </h1>
                    
                    <p>{this.state.Content.con.content}</p>
                    <p className="specss">by-<strong>{this.state.Content.con.author}</strong> | {this.state.Content.con.date.substring(0, 10).split("-").reverse().join("-")}</p>
                  </div>
                </div>
            </div>
             </>
            
      
        
        )
    }
}
export default BlogDetail;
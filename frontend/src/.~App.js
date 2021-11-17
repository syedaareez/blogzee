import React from 'react';
import './App.css';
import CreateForm from "./components/CreateForm" 
import DeleteForm from "./components/DeleteForm" 
import BlogDetail  from "./components/BlogDetail"


class App extends React.Component {
    
    constructor(props){
    super(props);
      this.state = {
        contentList:[],
        formShow:false,
        deleteFormShow:false,
        deleteContent:'',
        updateContent:'',
        showDetail:false,
          showDetailContent:'',
        }
        this.fetchTasks = this.fetchTasks.bind(this)
      }
    
    
    componentDidMount(){
    this.fetchTasks()
    }

    fetchTasks(){
        console.log('Fetching...')

        fetch('http://127.0.0.1:8000/app/blog-content')
        .then(response => response.json())
        .then(data => 
          this.setState({
            contentList:data
          })
      )
      }
    
    viewContent(con){
        var t=!con.show
        this.setState({showDetail:{t},})
        this.setState({showDetailContent:{con},})
        
        var url=`http://127.0.0.1:8000/app/content-update/${con.id}`
        fetch(url, {
        method:'POST',
        headers:{
          'Content-type':'application/json',
        },
        body:JSON.stringify({'show': t , 'title':con.title, 'content':con.content})
      }).then(() => {
        this.fetchTasks()
      })
      }
    viewCreateForm(){
        this.setState({formShow:true})
    }
    hideCreateForm(){
        this.setState({formShow:false})
        this.setState({updateContent:''})
        
    }
    
    deleteItem(con){
        var url = `http://127.0.0.1:8000/app/content-delete/${this.state.deleteContent.con.id}`
        this.hideDeleteForm();
        
        fetch(url,{method:'DELETE',headers:{'content-type':'application/json'}}).then((response)=>{ this.fetchTasks()})
    }
    viewDeleteForm(con){
        this.setState({deleteFormShow:true,deleteContent:con})
        
    }
   hideDeleteForm(){
        this.setState({deleteFormShow:false})
        
    }
    viewUpdateForm(con){
        this.setState({updateContent:con})
        this.setState({formShow:true})
    }
    hideDetail(){
        this.setState({showDetail:false,})
    }
    
    
    render(){
            

      var contents=this.state.contentList;
      var createForm=this.state.formShow;
        var deleteForm=this.state.deleteFormShow;
        var conTent=this.state.deleteContent;
      var self = this
      return (
            <div>
                 <div className="Logo"><span className="Nav">BLOG</span><span className="logoo">ZEE</span><button className="newBlogButton" onClick={()=> self.viewCreateForm()}>Create</button></div>
                 <div className="intro">
                     <div className="introWrapper"> <img className="introimg" src='media/uploaded/PicsArt_03-11-11.02.40' alt='Not Found' /> <span className="introData"><h2>BLOGZEE APP</h2><h3>Write Your Own Blog</h3><p>This is a place where you can write your own blog, You can read other blogs, You can delete other blogs or you can update other blogs .This is basically a beginner blog app based on CRUD. Feel free to use it for your own.</p><br /><p>by-<strong>Syed Aareez </strong>|<span>19 July 2021</span></p></span></div>
                  </div>
              <div className="content">
                  
                  {contents.map(function(con,index){
                      return(
                          <div key={con.id} className="contentBox" >
                          
                    {con.image ?
                    (<div className="contentImageWrapper" ><img className="contentImage" src={con.image} alt="not found 2" /></div>):
                    (<div className="contentImageWrapper" ><img className="contentImage" src='assets/images/defaultblog.png' alt="not found" /></div>)}
    
                                    <div className="contentDetailWrapper">

                                    <h1>{con.title}</h1>
                                    <p>by-<strong>{con.author}</strong></p> 
                                    <p>| {con.date.substring(0, 10).split("-").reverse().join("-")}</p>
                                    </div>
                                  <div className="btnswrapper">
                                  <button className="readbtn" onClick={()=> self.viewContent(con)}>Read</button>
                                    <button className="updatebtn" onClick={()=> self.viewUpdateForm({con})}>Update</button>
                                  <button className="deletebtn" onClick={()=> self.viewDeleteForm({con})}>Delete</button>
                                  </div>

                          </div>
                      ) 
                      })
                      
                    }
                  
              </div>
            <div className="quotes">
                <div className="outro"><img className="outroImg" src="assets/images/einstein.jpg" alt="Img not found"/><span className="outroData">"Any fool can know. The point is to understand." <p>by-<strong>Albert Einstein</strong></p></span>
                </div>
            </div>
            
             {this.state.showDetail === false ? (
                                    <></>

                                  ) : (

                                    <><BlogDetail cont={this.state.showDetailContent}/><button className="createFormbtn" onClick={()=>self.hideDetail()}>X</button></>
                                  )}       
                
            {createForm===true?(<div><CreateForm showthis={()=>self.hideCreateForm()} fetchProcess={()=>self.fetchTasks()} updateContents={this.state.updateContent} /><button className="createFormbtn" onClick={()=> self.hideCreateForm()}>X</button></div>):(<div></div>)}
            
            {deleteForm===true?(<div><DeleteForm contentt={conTent} deleteitem={()=>{this.deleteItem({conTent})}} cancledeleteitem={()=>{self.hideDeleteForm()}} /> 
                                <button className="createFormbtn" onClick={()=> self.hideDeleteForm()}>X</button></div>):(<div></div>)}
            
            

            <div className="Footer">
                <p>Made with ♥ by <strong>Syed Aareez</strong></p>
            </div>
            

            </div>
      );
    }
}
export default App;

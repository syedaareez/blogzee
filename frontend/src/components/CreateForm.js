import React from 'react';
import '../App.css';

class CreateForm extends React.Component {
    constructor(props){
    super(props);
      this.state = {
        activeItem:{
          title:'',
          content:'',
          author:'',
          image:null,
        },
      Update:this.props.updateContents,
        updateRan:false,
          updateId:'',
          Notice:false,
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      
    }
    
handleChange(e){
    var name = e.target.name
    
   
    if(name==='title'){
        var value1 = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        title:value1,
      }
    })
    }if(name==='content'){
        var value2 = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        content:value2,
      }
    })
    }if(name==='author'){
        var value3 = e.target.value
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        author:value3,
      }
    })
    }
    if(name==='image'){
        
        console.log(e.target.files[0],e.target.files[0].name)
        
    this.setState({
      activeItem:{
        ...this.state.activeItem,
        image:e.target.files[0],
      }
    })
    }
  }
    
    
    
handleSubmit(e){
    var formTitle = document.querySelector(".form-title");
    var formContent = document.querySelector(".form-content");
    var formAuthor = document.querySelector(".form-author");
    var formImage = document.querySelector(".form-image");
    
    var noticeGive = document.querySelector(".noticeGiver");
    var noticeGive2 = document.querySelector(".noticeGiver2");
    var formbtn = document.querySelector(".form-submit-btn");
    var okaybtn = document.querySelector(".okay-btn");
    
    formTitle.style.display = 'none';
    if(noticeGive){
    noticeGive.style.display = 'none';}else{
        noticeGive2.style.display = 'none';
    }
    formImage.style.display = 'none';
    formContent.style.display = 'none';
    formbtn.style.display = 'none';
    formAuthor.style.display = 'none';
    okaybtn.style.display = 'inline';
    
    var title = this.state.activeItem.title;
    var content = this.state.activeItem.content;
    var author = this.state.activeItem.author;
    
    e.preventDefault()

    console.log('ITEM:',this.state.activeItem)
    if(title && content && author){
        
        var formSuccessful = document.querySelector(".afterSubmit");
        formSuccessful.style.display = 'inline';
        
        var url = 'http://127.0.0.1:8000/app/blog-create'

        
        const uploadData = new FormData();
        uploadData.append('title', this.state.activeItem.title);
        if(this.state.activeItem.image){
        uploadData.append('image', this.state.activeItem.image, this.state.activeItem.image.name);}
        uploadData.append('content', this.state.activeItem.content);
        uploadData.append('author', this.state.activeItem.author);
        
        
        fetch(url, {
          method: 'POST',
          body: uploadData
        }).then((response)  => {
            this.setState({
               activeItem:{
               title:'',
               content:'',
               author:'',
               image:null,
            }
            });
            this.props.fetchProcess();

        }).catch(function(error){
          console.log('ERROR:', error)
        })
        
    }else{
        var formReject = document.querySelector(".afterSubmitnull");
        formReject.style.display = 'inline';
    }

  }
    
updateFunc(){
    if(this.state.Update.con.image){
        this.setState({Notice:true})
    }
    this.setState({activeItem:{title:this.state.Update.con.title,content:this.state.Update.con.content,author:this.state.Update.con.author},Update:null,updateRan:true,updateId:this.state.Update.con.id})
    
}

updateSubmit(){
         var formTitle = document.querySelector(".form-title");
        var formAuthor = document.querySelector(".form-author");
    var formContent = document.querySelector(".form-content");
        var formImage = document.querySelector(".form-image");
    
    var noticeGive = document.querySelector(".noticeGiver");
    var noticeGive2 = document.querySelector(".noticeGiver2");
    var formbtn = document.querySelector(".form-submit-btn2");
    var okaybtn = document.querySelector(".okay-btn");
    
    formTitle.style.display = 'none';
    formAuthor.style.display = 'none';
    if(noticeGive){
    noticeGive.style.display = 'none';}else{
        noticeGive2.style.display = 'none';
    }
    formImage.style.display = 'none';
    formContent.style.display = 'none';
    formbtn.style.display = 'none';
    
    okaybtn.style.display = 'inline';
    
    var title = this.state.activeItem.title;
    var content = this.state.activeItem.content;
    var author = this.state.activeItem.author;
    

    console.log('ITEM:',this.state.activeItem)
    if(title && content && author){
        
        var formSuccessful = document.querySelector(".afterSubmit");
        formSuccessful.style.display = 'inline';
        
        var idup=this.state.updateId
        var url=`http://127.0.0.1:8000/app/content-update/${idup}`
        
        const uploadData2 = new FormData();
        uploadData2.append('title', this.state.activeItem.title);
        if(this.state.activeItem.image){
        uploadData2.append('image', this.state.activeItem.image,this.state.activeItem.image.name );}
        uploadData2.append('content', this.state.activeItem.content);
        uploadData2.append('author', this.state.activeItem.author);
        
        fetch(url, {
          method: 'POST',
          body: uploadData2
        }).then(() => {
        this.setState({activItem:{title:'',content:'',author:'',image:null},updateId:'',updateRan:false})
        var formbtn = document.querySelector(".form-submit-btn");
        formbtn.style.display = 'none';
        this.props.fetchProcess()
      }).catch(function(error){
          console.log('ERROR:', error)
        })
        
    }else{
        var formReject = document.querySelector(".afterSubmitnull");
        formReject.style.display = 'inline';
    }
        
       
    }
    
   
    
    render(){
        if(this.state.Update){
            this.updateFunc() 
        }
        var Noticee=this.state.Notice
        var UpdateRan=this.state.updateRan
        return(
        <div className="createFormWrapper">
            <div className="createForm">
                <div className="Form">
                    <form onSubmit={this.handleSubmit}  id="form">
                        <input onChange={this.handleChange} className="form-title" value={this.state.activeItem.title} type="text" name="title" placeholder="Add Title" />
                        <input onChange={this.handleChange} className="form-author" value={this.state.activeItem.author} type="text" name="author" placeholder="Add Your Name" />
                        <textarea onChange={this.handleChange} className="form-content" value={this.state.activeItem.content} rows="4"  name="content" placeholder="Add Content" />
                            {Noticee? (<p className="noticeGiver2">------Change image for your blog-----</p>):
                             (<p className="noticeGiver">------Upload image for your blog-----</p>)}
                        <input accept="image/png, image/jpeg" onChange={this.handleChange} className="form-image" type="file" name="image" />
                            {UpdateRan===false? (<input className="form-submit-btn" type="submit" name="Add" />) :
                            (<div></div>)}
                    </form>
                             
                               {UpdateRan===true? (<div className="form-submit-btn2-wrapper"><button className="form-submit-btn2" onClick={()=>this.updateSubmit()}>SUBMIT</button></div>) :
                            (<div></div>)}                                                                                                 
                    
                    <div className="afterSubmit">
                            <strong>BLOG ADDED SUCCESFULLY</strong>
                            <div className="form-submit-btn2-wrapper"><button className="okay-btn" type="submit" name="Add" onClick={this.props.showthis}>Okay!</button></div>
                    </div>
                    <div className="afterSubmitnull">
                            <strong>INVALID BLOG</strong>
                            <div className="form-submit-btn2-wrapper"><button className="okay-btn" type="submit" name="Add" onClick={this.props.showthis}>Okay!</button></div>
                    </div>

                </div>
            </div>
             
            
        </div>
        
        )
    }
}
export default CreateForm;
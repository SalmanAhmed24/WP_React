import React,{ Component } from 'react';
import './singlepost.scss';
import renderHTML from 'react-render-html';
import { Link } from "@reach/router";
class SinglePost extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        console.log(this.props.id);
        fetch(`https://ikclinics.com/wp-json/wp/v2/posts/${this.props.id}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({data:data,isLoaded:true})
        })
        .catch(err=>console.log(err))
    }
    render(){
        console.log(this.state.data);
        const {data} = this.state;
        return(
            <div className="container mt-5">
                {   this.state.isLoaded &&
                <div> 
                <h1 className="display-4 mb-3">{data.title.rendered}</h1>
                <div>{renderHTML(data.content.rendered)}</div>
                </div>
                }
                {!this.state.isLoaded && <p>Loading....</p>}
            </div>
        );
    }
}
export default SinglePost;
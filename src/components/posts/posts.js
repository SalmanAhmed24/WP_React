import React,{ Component } from 'react';
import './posts.scss';
import renderHTML from 'react-render-html';
import { Link } from "@reach/router";
class Posts extends Component{
    constructor(){
        super();
        this.state = {
            posts:[],
            isLoaded:false,
        }
    }
    componentDidMount(){
        fetch("https://ikclinics.com/wp-json/wp/v2/posts")
        .then(res=>res.json())
        .then(data=>{
            this.setState({posts:data,isLoaded:true})
        })
        .catch(err=>console.log(err))
    }
    render(){
        
        const allPosts = this.state.posts.map(items=>{
            return(
                <div key={items.id}>
                    <div className="card cus-card">
                        <div className="card-header">
                            <Link to={`/${items.id}`}>
                                <h3>{items.title.rendered}</h3>
                            </Link>
                        </div>
                        <div className="card-body">
                            {renderHTML(items.excerpt.rendered)}
                        </div>
                    </div>
                </div>
            );
        })
        const {isLoaded} = this.state;
        return(
            <div className="container mt-5">
                {   isLoaded && 
                    <div>
                        {allPosts}
                    </div>
                }                
                {   !isLoaded &&
                    <p>
                        Loading...
                    </p>
                }
            </div>
        );
    }
}
export default Posts;
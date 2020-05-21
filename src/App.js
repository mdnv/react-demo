import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, useParams} from "react-router-dom";
import dl from './data-exam.json';//Load file Json
import Category from './Category.js'
import Single_post from './Single_post.js';
export default function App() {
//console.log(dl);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/tin-tuc">Tin tức</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
        <Switch>          
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/tin-tuc">
            <Category/>
          </Route>
          <Route path="/home">
            {dl.map((value,key)=>{
              return(
              <Home key={key} tieude={value.tieude} hinhanh={value.img_thum} trichdan={value.trichdan} noidung={value.noidung} />
              );
            })} 
          </Route>
          
          <Route path="/chi-tiet/:id">
            <Single_post/>
          </Route>
                   
          
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home(props) {
      return (
      <div>Home 
        <img src={props.hinhanh} alt=""/><br/>
        <b>{props.tieude}</b> 
        <p>{props.noidung}</p> 
        <p>{props.category}</p>      
      </div>
   
  ); 

}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
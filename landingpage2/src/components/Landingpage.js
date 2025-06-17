import React, { useEffect, useState } from "react";
import { list } from "../api";
import './landing.css'
import { Todolist } from "./TodoList.js";

function Landingpage(){
    const [data,setData] = useState(null);

    useEffect(()=>{
        list().then((todos)=>{console.log(todos);
            setData(todos)}
            
            );
    },[]);
    return(
        <div className="landing-container">
            <nav>
                <div className="logo"> Page</div>
                <ul className="nav-links">
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#feature">feature</a></li>
                    <li><a href="#data">data</a></li>
                </ul>
            </nav>


            <header className="header">
                <h1>Welcome to my this page</h1>
                <p>i show u my page  belo click and start</p>
                <a href="#btn" className="btn-nav"> Get Start</a>
            </header>
            <section  id="features" className="features-section">
                <h2>Features</h2>
               
        <div className="features">

          <div className="feature-card">🚀 Fast</div>
          <div className="feature-card">📱 Responsive</div>
          <div className="feature-card">🔒 Secure</div>
        </div>
               
            </section>
            
            <section  id="about" className="about-section"></section>
             <h1>About</h1>
       <p>this is about section of this page </p>

            <section  id="contact" className="btn-section">
                <h1>Ready to Start ?</h1>
                <button className="btn-nav">Contact Us</button>
            </section>

            <section  id="api" className="api-section">
                <h1>Todo list</h1>
                <table className="todo-list">

                    <thead>
                        <tr>
                            <th>Sr.</th>
                            <th>title</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(data) && data.length>0 ?data.map((e)=><Todolist key={e.id} title={e.title} sn={e.id}/>):(<tr>
                <td colSpan="2">No data found</td>
              </tr>)}
                        {/* {Array.isArray(data) && data.length > 0 ? (
              data.map((e, i) => <Todolist key={i} todo={e.title} index={i} />)
            ) : (
              <tr>
                <td colSpan="2">No data found</td>
              </tr>
            )} */}

                    </tbody>
                </table>
            </section>
            
            <footer className="footer">       <p>© 2025 MyBrand. All rights reserved.</p>
            </footer>
             </div>

    );
}

export default Landingpage;
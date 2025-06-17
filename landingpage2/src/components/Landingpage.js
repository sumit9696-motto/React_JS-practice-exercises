import React, { useEffect, useState } from "react";
import { list } from "../api";
import './landing.css'
import { Todolist } from "./TodoList.js";
// import { Contact } from "./Contact.js";
import { Nav } from "./Nav.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

function Landingpage(){
    const [data,setData] = useState(null);

    useEffect(()=>{
        list().then((todos)=>{console.log(todos);
            setData(todos)}
            
            );
    },[]);
    return(
        <div className="landing-container">
           <Nav />
           <Header />
            <section  id="features" className="features-section">
                <h2>Features</h2>
               
        <div className="features">

          <div className="feature-card">🚀 Fast</div>
          <div className="feature-card">📱 Responsive</div>
          <div className="feature-card">🔒 Secure</div>
        </div>
               
            </section>
            
     
            {/* <Contact /> */}
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
            
           <Footer />
             </div>

    );
}

export default Landingpage;
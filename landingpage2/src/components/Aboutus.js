import React from "react";
import './landing.css'
import { Nav } from "./Nav";
import { Footer } from "./Footer";
export const  About=()=>{
   return  (
    <>
        <Nav />
           <section  id="about" className="about-section"> 

 <div
      style={{
        fontFamily: "Sans-serif",
        backgroundColor: "rgb(248,249,250)",
        padding: "18px",
        color: "black",
      }}
    >
      <br />
      <h2 style={{ fontFamily: "Sans-serif", color: "black" }}>About Us !</h2>

      <h2 style={{ fontFamily: "Sans-serif", textAlign: "center" }}>
        Welcome To <span id="W_Name1">Landing Pgae</span>
      </h2>

      <p>
        <span id="W_Name2">Landing Pgae</span> is a Professional{" "}
        <span id="W_Type1">Demo</span> Platform. Here we will only provide you with
        interesting content that you will enjoy very much. We are committed to providing
        you the best of <span id="W_Type2">Demo</span>, with a focus on reliability and{" "}
        <span id="W_Spec">Tech</span>. we strive to turn our passion for{" "}
        <span id="W_Type3">Demo</span> into a thriving website. We hope you enjoy our{" "}
        <span id="W_Type4">Demo</span> as much as we enjoy giving them to you.
      </p>

      <p>
        I will keep on posting such valuable and knowledgeable information on my Website
        for all of you. Your love and support matters a lot.
      </p>

      <p style={{ fontWeight: "bold", textAlign: "center" }}>
        Thank you For Visiting Our Site
        <br />
        <br />
        <span
          style={{
            color: "blue",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Have a great day !
        </span>
      </p>
    </div>
</section>
       <Footer />
       </>
   )
}
import React, {  useState } from'react';
// import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../api/pokemon';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const Pokemonn=()=>{

    const [number,setNumber]= useState("");
    const [piku,setPiku]= useState(null);
    // const navigate= useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault(); 
    if (number){
        Pokemon(number)
        .then(data => {
        //   console.log("Fetched Pokémon data:", data.sprites.front_default);
          setPiku({
            name: data.name,
            image: data.sprites.front_default,
          });
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setPiku(null);
        });
    }}
        

 
    return (
        <>
 <Nav />
        <div>
            <h2>Enter Number 1 to 1025</h2>
            <form onSubmit={handleSubmit}>
                <input
                value={number}
                type="number"
                onChange={(e)=>setNumber(e.target.value)}
                

                />
                <button className='btn-nav'>Find Pokemon</button>

                 {/* <img src={piku.image} alt={piku.name} /> */}
                   {piku && (
        <div style={{ marginTop: "20px" ,margin:"100px"}}>
          <h3>{piku.name.toUpperCase()}</h3>
          <img src={piku.image} alt={piku.name} style={{height:"200px",widows:"400px"}}/>
        </div>
      )}

            </form>
        </div>
        
        <Footer />
        </>
    )
}
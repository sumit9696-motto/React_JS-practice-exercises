//  function getpokimon(){
//                 const id=document.getElementById('inputfild').value;
//                 const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
//                 fetch(url).then(res=>{
//                     if(!res)throw new Error("not found");
//                     return res.json();
//                 })
//                 .then(result=>{
//                     const imgUrl = result.sprites.front_default;
//                     const name = result.name;
//  document.getElementById("pokemonimg").innerHTML = `
//             <h2>#${id} - ${name.charAt(0).toUpperCase() + name.slice(1)}</h2>
//             <img src="${imgUrl}" alt="${name}" />
//           `;

//                 })
//                 .catch(err=>{
                    
//           document.getElementById("pokemonimg").innerHTML = `<p style="color:red;">${error.message}</p>`;
        
//                 });

//             }


export const Pokemon =async (number)=>{
    const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`,{
        method:'GET',
    });
    return response.json();
}

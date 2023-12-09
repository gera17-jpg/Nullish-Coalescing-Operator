/*let firstname;
let lastname;   
let nickname;

prompt(`Who's the author? ${firstname ?? lastname ?? nickname ?? 'Anonympus'}.`);*/

function author(name=String){
    let name = prompt("Who's the author?");
    alert(`The author is ${name ?? 'Anonymous'} `)
    
}
author();
function load(){
    render();
}

//show modal

   let movies=document.getElementById('movies')
   let openRating=document.getElementById('openRating');
    openRating.addEventListener('click', show);
    
    function show(){
        movies.classList.add('show');
    }

   
//star function

let star=document.querySelectorAll('.star');
function rated(){
    return Array.from(star).filter(j=>j.classList.contains('select')).length;
}

let stars= Array.from(star);
stars.forEach((i, n)=>{
    i.addEventListener('click', ()=>{
        stars.forEach((i, m)=>{
            if(n>=m){
            i.classList.add('select')
        }else{
            i.classList.remove('select')
        }
        })
        
    });

});
const movieList= JSON.parse(localStorage.getItem('movieCatalog'))|| [];
let submit=document.getElementById('submit');

submit.addEventListener('click',save)
function save(){
let t=document.getElementById("title").value;
let y=document.getElementById('year').value;
let g=document.getElementById('genre').value;
movieList.push(
    {
        title: t,
        year: y,
        genre:g,
        rating: rated()

    }
)
localStorage.setItem('movieCatalog', JSON.stringify(movieList));
render();
}

function render(){

    let starText="★"
document.getElementById('movieList').innerHTML=movieList.map(i=>
    
    `
    <li>${i.title} (${i.year}) - ${i.genre}, Rating: ${starText.repeat(i.rating)} </li>
    `
).join('');
}

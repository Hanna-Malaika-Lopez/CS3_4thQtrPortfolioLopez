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
let uniqueTitle=JSON.parse(localStorage.getItem('unique')) || [];

submit.addEventListener('click',save);

function save(){
let t=document.getElementById("title").value;
let y=document.getElementById('year').value;
let g=document.getElementById('genre').value;
if(t=='' || y=='' || g==''){
    alert('Please fill all fields');
    return;
}

if(uniqueTitle.includes(t)){
    for(idx in movieList){
        if(movieList[idx]['title']==t){
            movieList[idx]['totalRating']=movieList[idx]['totalRating']+rated();
            movieList[idx]['numOfRating']=movieList[idx]['numOfRating']+1;

            movieList[idx]['rating']=movieList[idx]['totalRating'] / movieList[idx]['numOfRating']

            localStorage.setItem('movieCatalog', JSON.stringify(movieList));
            console.log(movieList[idx]['rating']);
        }
}
}else{
    uniqueTitle.push(t);
movieList.push(
    {
        title: t,
        year: y,
        genre:g,
        rating: rated(),
        totalRating: rated(),
        numOfRating:1

    }
)
localStorage.setItem('movieCatalog', JSON.stringify(movieList));
localStorage.setItem('unique', JSON.stringify(uniqueTitle));
}
render();
}
function render(){

    let starText="★"
document.getElementById('movieList').innerHTML=movieList.map(i=>
    
    `
    <li>${i.title} (${i.year}) - ${i.genre}, Rating: ${i.rating} ${starText.repeat(Math.floor(i.rating))} </li>
    `
).join(' ')
}

let t=document.getElementById("title").value;
let y=document.getElementById('year').value;
let g=document.getElementById('genre').value;

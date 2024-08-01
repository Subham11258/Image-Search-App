const accessKey = 'aDBivPfz2oqRYcYx06hhO0lg7Ss0L88-1XJ3WIrN4i0';
const input = document.getElementById('input-field');
const btn = document.getElementById('search-button');
const result = document.getElementById('result');
const showMore = document.querySelector('.show');


let inputData = "";
let page = 1;

async function searchImages(){
  inputData = input.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const ans = data.results;
  if(page===1){
    result.innerHTML = "";
  }
  ans.map((answer)=>{
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('card');
    const image = document.createElement('img');
    image.src = answer.urls.small;
    image.alt = answer.alt_description;
    const imageLink = document.createElement('a');
    imageLink.href=answer.links.html;
    imageLink.textContent = answer.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    result.appendChild(imageWrapper);


  });
  page+=1;
  if(page>1){
    showMore.style.display="block";
  }
}

btn.addEventListener('click',(event)=>{
  event.preventDefault();
  page = 1;
  searchImages();
})
showMore.addEventListener('click',()=>{
  
  
  searchImages();
})
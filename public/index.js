let listContainer = document.getElementById( 'list-container' );
let input = document.getElementById( 'inp' );
let addBtn = document.getElementById( 'add-btn');

function toggleMe(e){
  if(  e.target.parentNode.style.textDecoration ==  'line-through'){
    e.target.parentNode.style.textDecoration = 'none'
  }else{
    e.target.parentNode.style.textDecoration = 'line-through'
  }


}


console.log('hello');
addBtn.addEventListener( "click", function() {
    // 1. Get the value from input
    let val = input.value;
    fetch('/add', {
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
        title: "foo",
       todo:val,
    }), method:'POST'})
    .then(r => r.json())
    .then(data => {
       
        console.log(data.todos)
        
        data.todos.forEach(element => {
            let li = document.createElement( 'li' )
            li.addEventListener('click', (e)=>{
           console.log(e.target.textContent)
         if(e.target.tagName==='BUTTON' && e.target.textContent == 'delete'){
            li.remove()
         }
          
            })
            li.innerHTML = `<div>
            ${element}-
            <button onclick='toggleMe(event)'> toggle </button>
            <button>delete</button>
            </div>`;
            listContainer.append(li)
        });
    })

})
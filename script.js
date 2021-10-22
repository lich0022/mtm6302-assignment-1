let $emoji = document.getElementById('container')

for (let i=129296; i<=129398; i++) {
    $emoji.innerHTML += `<div> <p> &#${i}</p> <p>${i} </p> </div>`
    
}
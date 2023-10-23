const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder-ceo',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief-Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office-Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social-Media-Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic-Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
];
const rowEl = document.querySelector('.row');

for (let i = 0; i < members.length; i++){

console.log(`Nome: ${members[i].name}, Ruolo: ${members[i].role}, Foto: ${members[i].photo}`)

printCol(members[i])

}


function printCol(members) {
    const col = document.createElement('div');
    col.classList.add('col-4')
    const template = `
    <div class="card text-start m-3">
        <img src="img/${members.name} ${members.role}.jpg" alt="image">
       <div class="card-body m-2">
        <h4 class="card-title">${members.name}</h4>
        <p class='card-text'>
        <ul>
            <li>Role: ${members.role} </li>
        </ul>
        </p>
       </div>
    </div>`
   col.innerHTML = template;

   rowEl.append(col);   
}

const btnSend = document.getElementById('send')
const btnReset = document.getElementById('reset')

btnSend.addEventListener('click', function(){
const newMembers = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        picture: document.getElementById('picture').value

}
members.push(newMembers);
printCol(newMembers);
btnReset()
})


btnReset.addEventListener('click', function (){
    
   document.getElementById('name').value = "",
   document.getElementById('role').value = "",
    document.getElementById('picture').value = ""

})
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
const rowEl = document.querySelector('.row')


for (let i = 0; i < members.length; i++){

console.log(`Nome: ${members[i].name}, Ruolo: ${members[i].role}, Foto: ${members[i].photo}`)

printCol(members[i])

}


function printCol(members) {
    const col = document.createElement('div');
    col.classList.add('col-4')
    const template = `
    <div class="card text-start">
        <img src="img/${members.name} ${members.role}.jpg" alt="image">
       <div class="card-body">
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
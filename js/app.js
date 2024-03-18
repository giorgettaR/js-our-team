// Utilizzando i dati forniti i tabella,
// creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni:
// nome
// ruolo
// foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    }

];

console.log(members)

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < members.length; i++ ) {
    console.log(members[i].name, members[i].role, members[i].picture)
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM semplicemente come stringhe

for (let i = 0; i < members.length; i++ ) {
    let member = document.createElement('div');
    member.innerHTML = 
    `
    ${members[i].name}
    ${members[i].role}
    ${members[i].picture}
    `
    console.log(member)
}

// oppure

for (let i = 0; i < members.length; i++ ) {
    let member = document.createTextNode(
    `
    ${members[i].name}
    ${members[i].role}
    ${members[i].picture}
    `
    );
    console.log(member)
}


// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

for (let i = 0; i < members.length; i++ ) {
    let memberPic = document.createElement('img');
    memberPic.src = `img/${members[i].picture}`;
    // document.querySelector('.pictures').appendChild(memberPic)
}

// BONUS 2:
// Organizzare i singoli membri in card/schede

for (let i = 0; i < members.length; i++ ) {

    // creazione card
    let memberCard = document.createElement('div');
    memberCard.classList.add('col-4', 'p-4', 'card', 'text-center', 'border', 'border-0');

    // creazione card img
    let memberPicSection = document.createElement('img');
    memberPicSection.classList.add('card-img-top')
    memberPicSection.src = `img/${members[i].picture}`;

    // creazione card body
    let memberName = document.createElement('h4')
    memberName.classList.add('card-title');
    memberName.innerHTML = `${members[i].name}`

    let memberRole = document.createElement('h6');
    memberRole.classList.add('card-subtitle');
    memberRole.innerHTML = `${members[i].role}`

    let cardNameRoleSection = document.createElement('div');
    cardNameRoleSection.classList.add('card-body', 'bg-white')
    cardNameRoleSection.appendChild(memberName)
    cardNameRoleSection.appendChild(memberRole)

    // aggiungere img e body alla card
    memberCard.appendChild(memberPicSection);
    memberCard.appendChild(cardNameRoleSection);

    // aggiungere card alla pagina
    document.querySelector('.team').appendChild(memberCard);
}

// DATI:
// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg



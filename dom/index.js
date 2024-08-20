//title element and change its test

const title = document.getElementById('title');
title.textContent = 'DOM TEST';

// title styles
title.style.color = 'blue';
title.style.fontSize = '50px';
title.style.textAlign = 'center';

// Add new paragraph
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Cohort 6 Evening Session - Junior Music';
document.body.appendChild(newParagraph);

// modify hte link href and test content
const link = 'https://kanzucodefoundation.org/';
link.textContent = 'Vist our Dom Site;'

// Class link
link.classlist.add('new-class');

// Create an item List
const list = document.createElement('ul');

const listItem1 = document.createElement ('li');
listItem1.textContent = 'Unity 1';
link.classlist.add('listItem1');

const listItem2 = document.createElement ('li');
listItem2.textContent = 'Freedom 1';
link.classlist.add('listItem2');


document.body.appendChild(list);

// Remove the first paragraph
const firstparagraph = document.querySelector('p');
document.body.removeChild(firstparagraph);

// class in the title styling
title.classList.toggle('highlight')

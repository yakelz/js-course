const listInput = document.getElementById('listInput');
const listBtn = document.getElementById('listBtn');
const list = document.getElementById('list');
const myArray = document.getElementById('myArray');

const notes = [
	{
		title: 'встать',
		completed: true,
	},
	{
		title: 'умыться',
		completed: false,
	},
];

function render() {
	list.innerHTML = '';
	if (notes.length === 0) {
		list.innerHTML = '<p> Нет заметок </p>';
		return;
	}
	for (let i = 0; i < notes.length; i++) {
		addNote(notes[i], i);
	}
}

render();

function getNoteTemplate(note, index) {
	return `
	<li>
		<div class="${note.completed ? 'completed' : ''}">
			${note.title}
		</div>
		<div class="buttons">
			<button data-index="${index}" data-action="toggle">Complete</button>
			<button data-index="${index}" data-action="delete">Delete</button> 
		</div>
	</li>
	`;
}

function addNote(note, index) {
	list.insertAdjacentHTML('beforeend', getNoteTemplate(note, index));
}

listBtn.onclick = function () {
	if (!listInput.value) {
		return;
	}
	const newNote = { title: listInput.value, completed: false };
	notes.push(newNote);
	render();
	listInput.value = '';
};

list.onclick = function (event) {
	if (!event.target.dataset) {
		return;
	}
	const index = Number(event.target.dataset.index);
	const action = event.target.dataset.action;
	if (action === 'delete') {
		notes.splice(index, 1);
	} else if (action === 'toggle') {
		notes[index].completed = !notes[index].completed;
	}
	render();
};

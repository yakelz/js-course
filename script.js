'use strict';
const listInput = document.getElementById('listInput');
const listBtn = document.getElementById('listBtn');
const list = document.getElementById('list');
const search = document.getElementById('searchInput');
const reversed = document.getElementById('reversedInput');
const reversedText = document.getElementById('reversedText');
const reversedResult = document.getElementById('reversedResult');

const notes = [
	{ title: 'Купить продукты', completed: false },
	{ title: 'Закончить проект', completed: true },
	{ title: 'Сходить в спортзал', completed: false },
	{ title: 'Почистить дом', completed: true },
	{ title: 'Прочитать книгу', completed: false },
	{ title: 'Сделать уроки', completed: true },
	{ title: 'Позвонить другу', completed: false },
	{ title: 'Поехать на природу', completed: false },
	{ title: 'Подготовить ужин', completed: true },
	{ title: 'Посмотреть фильм', completed: false },
	{ title: 'Записаться на курс', completed: false },
	{ title: 'Посадить цветы', completed: true },
	{ title: 'Прогуляться в парке', completed: false },
	{ title: 'Написать письмо', completed: true },
	{ title: 'Убрать в гараже', completed: false },
	{ title: 'Подарить подарок', completed: false },
	{ title: 'Посетить музей', completed: true },
	{ title: 'Сходить в кино', completed: false },
	{ title: 'Изучить новый язык', completed: false },
	{ title: 'Помочь соседу', completed: true },
];

function render(array = notes) {
	list.innerHTML = '';
	if (array.length === 0) {
		list.innerHTML = '<p> Нет заметок </p>';
		return;
	}
	for (let i = 0; i < array.length; i++) {
		addNote(array[i], i);
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

search.oninput = function () {
	const result = notes.filter((item) =>
		item.title.toLowerCase().includes(search.value.toLowerCase())
	);
	render(result);
};

reversed.oninput = function () {
	reversedText.innerHTML = reversed.value;
	const result = reversed.value.split('').toReversed().join('');
	reversedResult.innerHTML = result;
};

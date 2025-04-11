// js/main.js

import { Task, TaskManager } from './modules/task.js';
import { saveTasks, loadTasks } from './modules/storage.js';

const taskInput = document.getElementById('taskInput');
const deadlineInput = document.getElementById('deadlineInput');
const timeInput = document.getElementById('timeInput');
const subjectInput = document.getElementById('subjectInput');
const descInput = document.getElementById('descInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const filterSubject = document.getElementById('filterSubject');

const manager = new TaskManager();

// ✅ Fungsi async: simulasi fetch data dari localStorage
const simulateFetchTasks = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = loadTasks();
      resolve(data);
    }, 500);
  });
};

// ✅ Inisialisasi aplikasi secara async
const initializeApp = async () => {
  const fetchedTasks = await simulateFetchTasks();
  manager.loadTasks(fetchedTasks);
  render();
};

initializeApp();

const render = () => {
  const selectedSubject = filterSubject.value;
  taskList.innerHTML = '';

  const filteredTasks = manager.getAllTasks().filter(task => {
    return selectedSubject === 'all' || task.subject === selectedSubject;
  });

  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `flex justify-between items-start gap-4 p-4 rounded-xl shadow transition bg-white border ${
      task.completed ? 'opacity-70 line-through bg-green-50' : 'hover:shadow-lg'
    }`;

    li.innerHTML = `
      <div class="flex-grow">
        <input type="text" class="edit-input w-full bg-transparent text-lg font-medium outline-none ${task.completed ? 'text-gray-400' : 'text-gray-800'}" value="${task.title}" readonly>
        <p class="text-sm mt-1 text-gray-700">${task.description || 'Tidak ada deskripsi'}</p>
        <div class="text-sm flex flex-wrap gap-2 mt-2 text-gray-600">
          <span class="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs">📚 ${task.subject || 'Tidak ada mata kuliah'}</span>
          <span class="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">🗓️ ${task.deadline || '-'} ${task.time ? `• ⏰ ${task.time}` : ''}</span>
        </div>
      </div>
      <div class="flex gap-2 mt-1">
        <button title="Tandai selesai" class="text-green-600 hover:text-green-800 transition toggle-btn">✔</button>
        <button title="Edit tugas" class="text-yellow-600 hover:text-yellow-800 transition edit-btn">✎</button>
        <button title="Hapus tugas" class="text-red-600 hover:text-red-800 transition delete-btn">✖</button>
      </div>
    `;

    li.querySelector('.toggle-btn').addEventListener('click', () => {
      manager.toggleTask(task.id);
      saveTasks(manager.getAllTasks());
      render();
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
      manager.removeTask(task.id);
      saveTasks(manager.getAllTasks());
      render();
    });

    li.querySelector('.edit-btn').addEventListener('click', () => {
      const input = li.querySelector('.edit-input');
      if (input.readOnly) {
        input.readOnly = false;
        input.focus();
        input.classList.remove('bg-transparent');
        input.classList.add('bg-white', 'border', 'border-gray-300', 'rounded', 'px-2');
      } else {
        const newTitle = input.value.trim();
        if (newTitle) {
          manager.updateTask(task.id, newTitle);
          saveTasks(manager.getAllTasks());
        }
        input.readOnly = true;
        input.classList.remove('bg-white', 'border', 'border-gray-300', 'rounded', 'px-2');
        input.classList.add('bg-transparent');
        render();
      }
    });

    taskList.appendChild(li);
  });
};

addTaskBtn.addEventListener('click', () => {
  const title = taskInput.value.trim();
  const deadline = deadlineInput.value;
  const time = timeInput.value;
  const subject = subjectInput.value;
  const description = descInput.value.trim();

  if (title) {
    const task = new Task(title, deadline, time, subject, description);
    manager.addTask(task);
    saveTasks(manager.getAllTasks());

    taskInput.value = '';
    deadlineInput.value = '';
    timeInput.value = '';
    subjectInput.value = '';
    descInput.value = '';

    render();
  }
});

filterSubject.addEventListener('change', render);

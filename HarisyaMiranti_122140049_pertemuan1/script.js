// === TO-DO LIST LOGIC ===
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
  
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      taskList.innerHTML = "";
      tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    }
  
    function saveTasks() {
      const tasks = [];
      taskList.querySelectorAll("li").forEach(li => {
        tasks.push({
          text: li.querySelector("span").innerText,
          completed: li.classList.contains("completed")
        });
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function addTaskToDOM(text, completed = false) {
      const li = document.createElement("li");
      li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      
      const span = document.createElement("span");
      span.innerText = text;
  
      const btnGroup = document.createElement("div");
  
      const doneBtn = document.createElement("button");
      doneBtn.innerText = "Selesai";
      doneBtn.classList.add("btn", "btn-success", "me-2");
      doneBtn.onclick = function () {
        li.classList.toggle("completed");
        if (li.classList.contains("completed")) {
          li.classList.add("bg-success", "text-muted");
          span.classList.add("text-decoration-line-through");
        } else {
          li.classList.remove("bg-success", "text-muted");
          span.classList.remove("text-decoration-line-through");
        }
        saveTasks();
      };
  
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Hapus";
      deleteBtn.classList.add("btn", "btn-danger");
      deleteBtn.onclick = function () {
        li.remove();
        saveTasks();
      };
  
      btnGroup.appendChild(doneBtn);
      btnGroup.appendChild(deleteBtn);
  
      li.appendChild(span);
      li.appendChild(btnGroup);
  
      if (completed) {
        li.classList.add("completed", "bg-success", "text-muted");
        span.classList.add("text-decoration-line-through");
      }
  
      taskList.appendChild(li);
    }
  
    addTaskButton.addEventListener("click", function () {
      const text = taskInput.value.trim();
      if (text) {
        addTaskToDOM(text);
        saveTasks();
        taskInput.value = "";
      }
    });
  
    loadTasks();
  });
  
  // === KALKULATOR LOGIC ===
  function hitungKalkulator(a, b, op) {
    let result;
    switch (op) {
      case "tambah":
        result = a + b;
        break;
      case "kurang":
        result = a - b;
        break;
      case "kali":
        result = a * b;
        break;
      case "bagi":
        if (b === 0) return "Error: Pembagian dengan nol tidak diperbolehkan";
        result = a / b;
        break;
      default:
        return "Operasi tidak valid";
    }
    return result;
  }
  
  function tampilkanHasil(hasil) {
    document.getElementById("hasil-kalkulator").innerHTML = `<p>Hasil: ${hasil}</p>`;
  }
  
  document.getElementById("btn-tambah").addEventListener("click", function () {
    const a = parseFloat(document.getElementById("angka1").value);
    const b = parseFloat(document.getElementById("angka2").value);
    tampilkanHasil(hitungKalkulator(a, b, "tambah"));
  });
  document.getElementById("btn-kurang").addEventListener("click", function () {
    const a = parseFloat(document.getElementById("angka1").value);
    const b = parseFloat(document.getElementById("angka2").value);
    tampilkanHasil(hitungKalkulator(a, b, "kurang"));
  });
  document.getElementById("btn-kali").addEventListener("click", function () {
    const a = parseFloat(document.getElementById("angka1").value);
    const b = parseFloat(document.getElementById("angka2").value);
    tampilkanHasil(hitungKalkulator(a, b, "kali"));
  });
  document.getElementById("btn-bagi").addEventListener("click", function () {
    const a = parseFloat(document.getElementById("angka1").value);
    const b = parseFloat(document.getElementById("angka2").value);
    tampilkanHasil(hitungKalkulator(a, b, "bagi"));
  });
  
  // === FORM VALIDASI LOGIC ===
  const form = document.getElementById("validation-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Reset pesan error dan success
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("form-success").textContent = "";
  
    let valid = true;
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
  
    if (nameInput.value.trim().length <= 3) {
      document.getElementById("name-error").textContent =
        "Nama harus lebih dari 3 karakter.";
      valid = false;
    }
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      document.getElementById("email-error").textContent = "Email tidak valid.";
      valid = false;
    }
    if (passwordInput.value.length < 8) {
      document.getElementById("password-error").textContent =
        "Password minimal 8 karakter.";
      valid = false;
    }
  
    if (valid) {
      document.getElementById("form-success").textContent =
        "Form berhasil divalidasi!";
      form.reset();
    }
  });
  

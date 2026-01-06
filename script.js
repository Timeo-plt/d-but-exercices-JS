function DontTouchMe() {
    const circle = document.getElementById('circle');
    circle.addEventListener('mouseover', () => {
        constMaxX = window.innerWidth - circle.offsetWidth;
        constMaxY = window.innerHeight - circle.offsetHeight;
        const randomX = Math.floor(Math.random() * constMaxX);
        const randomY = Math.floor(Math.random() * constMaxY);
        circle.style.position = 'absolute';
        circle.style.left = `${randomX}px`;
        circle.style.top = `${randomY}px`;
        circle.style.transition = 'left 0.3s, top 0.3s';
    });
}

function bjrUser(){
    const prenom = prompt("Quel est votre prénom ?");
    const slt = document.getElementById('slt');
    if(prenom != null){
        slt.innerHTML = `Salut ${prenom}, bienvenue sur mon site !`;
    }
}

function todolist(){
    const newTask = document.getElementById('taskInput').value;
    const li = document.createElement('li');
    li.textContent = newTask;
    document.getElementById('taskList').appendChild(li);
}
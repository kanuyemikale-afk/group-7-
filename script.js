function login() {
    const status = document.getElementById("statusText");
    status.textContent = "Online";
    status.className = "online";
}

function logout() {
    const status = document.getElementById("statusText");
    status.textContent = "Offline";
    status.className = "offline";
}

function changeCourse() {
    document.getElementById("courseText").textContent = "Advanced JavaScript";
    document.getElementById("profileCard").classList.add("advanced");
}
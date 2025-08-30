//<!....nav bar start...!>
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// Add event listeners
document.getElementById('menuButton').addEventListener('click', showSidebar);
document.getElementById('closeButton').addEventListener('click', hideSidebar);

//<!....nav bar end...!>

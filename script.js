document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
});

document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');

    if (sidebar.classList.contains('collapsed')) {
        content.classList.add('collapsed');
    } else {
        content.classList.add('expanded');
    }
});

document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
    content.classList.toggle('expanded');
});

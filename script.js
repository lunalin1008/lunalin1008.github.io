document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    
    console.log('Button clicked!'); // 調試用
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
});

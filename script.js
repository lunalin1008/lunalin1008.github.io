document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('main');

    // 初始狀態設定
    if (sidebar.classList.contains('collapsed')) {
        content.classList.add('collapsed'); // 收縮時內容區域的左邊距
    } else {
        content.classList.add('expanded'); // 展開時內容區域的左邊距
    }
});

document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('main');

    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
    content.classList.toggle('expanded');
});

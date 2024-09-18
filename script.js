document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('main');

    // 初始狀態設定
    if (sidebar.classList.contains('collapsed')) {
        content.style.marginRight = '20px'; // 收縮時內容區域的右邊距
    } else {
        content.style.marginRight = '220px'; // 展開時內容區域的右邊距
    }
});

document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('main');

    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        content.style.marginRight = '20px'; // 收縮時內容區域的右邊距
    } else {
        content.style.marginRight = '220px'; // 展開時內容區域的右邊距
    }
});


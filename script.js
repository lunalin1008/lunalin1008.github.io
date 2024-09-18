function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");
    const menu = document.getElementById("sidebar-menu");

    // 檢查側邊欄是否已經縮小
    if (sidebar.classList.contains("collapsed")) {
        // 展開側邊欄
        sidebar.classList.remove("collapsed");
        mainContent.classList.remove("collapsed");
    } else {
        // 縮小側邊欄並隱藏按鈕
        sidebar.classList.add("collapsed");
        mainContent.classList.add("collapsed");
    }
}

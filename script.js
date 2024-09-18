function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");
    const menu = document.getElementById("sidebar-menu");

    if (sidebar.classList.contains("collapsed")) {
        sidebar.classList.remove("collapsed");
        mainContent.classList.remove("collapsed");
        menu.style.display = "block";  // 顯示按鈕
    } else {
        sidebar.classList.add("collapsed");
        mainContent.classList.add("collapsed");
        menu.style.display = "none";  // 隱藏按鈕
    }
}

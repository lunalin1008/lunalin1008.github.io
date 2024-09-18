function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.querySelector(".main-content");

    if (sidebar.style.width === "60px") {
        sidebar.style.width = "250px";
        mainContent.style.marginLeft = "250px";
    } else {
        sidebar.style.width = "60px";
        mainContent.style.marginLeft = "60px";
    }
}

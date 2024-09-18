/* 背景與排版 */
body {
    font-family: 'Helvetica', 'Arial', sans-serif;
    background-color: white;
    margin: 0;
    padding: 0;
    color: #333;
}

/* 側欄位按鈕樣式 */
#toggleSidebar {
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 24px;
    background-color: #333;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1000;
}

#toggleSidebar:hover {
    background-color: #555;
}

/* 側欄收縮/展開樣式 */
.sidebar {
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f8f8f8;
    padding: 30px 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease;
}

.sidebar.collapsed {
    width: 0;
    padding: 0;
    overflow: hidden;
}

/* 內容區調整 */
.content {
    margin-left: 220px;
    padding: 50px;
    transition: margin-left 0.3s ease;
}

.content.collapsed {
    margin-left: 20px;
}

section {
    margin-bottom: 80px;
}

section h1, section h2 {
    font-size: 28px;
    margin-bottom: 20px;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
}

section p {
    font-size: 18px;
    line-height: 1.6;
    color: #666;
}

/* 圖片 */
section img {
    width: 100%;
    max-width: 1000px;
    margin: 20px 0;
    display: block;
}

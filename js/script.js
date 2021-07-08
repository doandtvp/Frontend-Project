//header-sidebar
function showHeaderSidebar() {
    document.getElementById("header__sidebar-area").style.display = "block";
    document.getElementById("header_sidebar-opacity").style.left = "0";
    document.getElementById("header__sidebar").style.right = "0";
}

function hideHeaderSidebar() {
    document.getElementById("header__sidebar-area").style.display = "none";
}

//footer-sidebar
function showFooterSidebar() {
    document.getElementById("footer__sidebar-area").style.display = "block";
    document.getElementById("footer__sidebar").style.right = "0";
}

function hideFooterSidebar() {
    document.getElementById("footer__sidebar-area").style.display = "none";
}

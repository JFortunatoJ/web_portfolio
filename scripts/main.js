const root = document.documentElement;

window.addEventListener("scroll", function () {
    const navBar = document.getElementById("navBar");
    //console.log(window.pageYOffset);
    if (window.pageYOffset >= 180) {
        navBar.classList.add("navBar-sticky");
        root.style.setProperty('--nav-bar-left-verts', '0');
        root.style.setProperty('--nav-bar-right-verts', '100%');
        root.style.setProperty('--header-bottom-verts', '180px');
    } else {
        navBar.classList.remove("navBar-sticky");
        root.style.setProperty('--nav-bar-left-verts', '40px');
        root.style.setProperty('--nav-bar-right-verts', 'calc(100% - 40px)');
        root.style.setProperty('--header-bottom-verts', '205px');
    }
});
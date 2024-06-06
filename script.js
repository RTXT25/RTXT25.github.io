
function switchPage(pageToShow) {
    var pages = ['startpg', 'homepg', 'info', 'minecraft', 'projects', 'settingspg'];
    pages.forEach(function(pageId) {
        var page = document.getElementById(pageId);
        if (pageId === pageToShow) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }   
    });
}
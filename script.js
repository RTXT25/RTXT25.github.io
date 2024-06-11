
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
window.addEventListener('resize', function() {
    var width = document.getElementById('page-wrapper').offsetWidth;
    document.getElementById('page-wrapper').style.height = (width * 0.75) + 'px'; /* Adjust 0.75 to change the aspect ratio */
});
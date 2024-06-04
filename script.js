function switchPage(pageToShow) {
    var pages = ['startpg', 'homepg', 'info', 'minecraft', 'page5', 'settingspg'];
    pages.forEach(function(pageId) {
        var page = document.getElementById(pageId);
        if (pageId === pageToShow) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }   
    });


}
window.onload = function() {
    var checkbox = document.getElementById('skipstartcb');
    var isChecked = localStorage.getItem('checkboxState') === 'true';
    checkbox.checked = isChecked;

    checkbox.addEventListener('change', function() {
        localStorage.setItem('checkboxState', this.checked);
    });

    if (isChecked) {
        switchPage('homepg');
    }
};
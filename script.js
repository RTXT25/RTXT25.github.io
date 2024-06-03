        function switchPage(pageToShow) {
            var pages = ['startpg', 'homepg', 'page3', 'page4', 'page5', 'settingspg'];
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
            var words = ['Comic Sans Enjoyer', 'Splatoon Addict', 'Lunar was here','Average Balls Enjoyer', 'Insert Splash Text Here'];
            var randomWord = words[Math.floor(Math.random() * words.length)];
            document.getElementById('splashtxt').textContent = randomWord;
        };
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
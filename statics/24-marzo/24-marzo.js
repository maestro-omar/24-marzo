/* 24 de marzo – Memoria, Verdad y Justicia – shared scripts */

function openTab(evt, tabId) {
    var tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(function(t) { t.classList.remove("active"); });
    var btns = document.querySelectorAll(".tab");
    btns.forEach(function(b) { b.classList.remove("active"); });
    var tab = document.getElementById(tabId);
    if (tab) tab.classList.add("active");
    if (evt && evt.currentTarget) evt.currentTarget.classList.add("active");
}

GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    closeButton: true
});

(function() {
    var url = encodeURIComponent(window.location.href);
    var title = document.title;
    var fullText = title + ' – 24 de marzo – Memoria, Verdad y Justicia\n' + window.location.href;
    document.querySelectorAll('[data-share]').forEach(function(el) {
        if (el.dataset.share === 'whatsapp') {
            el.href = 'https://wa.me/?text=' + encodeURIComponent(fullText);
        } else if (el.dataset.share === 'twitter') {
            el.href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(title + ' – 24 de marzo') + '&url=' + url;
        } else if (el.dataset.share === 'facebook') {
            el.href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
        } else if (el.dataset.share === 'email') {
            el.href = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(fullText);
        } else if (el.dataset.share === 'instagram') {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                navigator.clipboard.writeText(window.location.href).then(function() {
                    var btn = el;
                    var origTitle = btn.title;
                    btn.title = '¡Enlace copiado!';
                    setTimeout(function() { btn.title = origTitle; }, 2000);
                });
            });
        }
    });
})();

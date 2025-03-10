document.getElementById('showMore').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    moreInfo.classList.toggle('hidden');
    if (moreInfo.classList.contains('hidden')) {
        this.textContent = 'Показати більше інформації';
    } else {
        this.textContent = 'Приховати додаткову інформацію';
    }
});
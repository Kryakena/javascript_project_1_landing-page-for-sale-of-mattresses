var
    images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    preloaded = document.getElementById('page-preloaded'),
    perc_display = document.getElementById('load_perc');

for (var i = 0; i < images_total_count; i++ ) {
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.error = image_loaded;
    image_clone.src = images[i].src;
}

function image_loaded() { // При загрузке до 100%, окно загрузки исчезнет
    images_loaded_count++;
    perc_display.innerHTML = (( ( 100 / images_total_count ) * images_loaded_count ) << 0) + '%';
    // Чтобы при делении не было дробных чисел

    if( images_loaded_count >= images_total_count ) {
        setTimeout(function() {
            if( !preloaded.classList.contains('done')) {
                preloaded.classList.add('done');
            }
        }, 1000);
    }
}
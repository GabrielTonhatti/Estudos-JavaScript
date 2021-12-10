import $ from 'jquery';

const duration = 600;

function filterByCity(city) {
    $(`[wm-city]`).each(function(i, e) {
        const isTarget = $(this).attr('wn-city') === city || city === null;


    });
}
$(document).ready(function() {
    $('#menuToggle').on('click', function() {
        const sidebar = $('#sidebar');
        const mainContent = $('#mainContent');
        const paginationContainer = $('.pagination-container');
        const menuIcon = $('.menu-icon');
        const closeIcon = $('.close-icon');
        
        sidebar.toggleClass('collapsed');
        mainContent.toggleClass('expanded');
        paginationContainer.toggleClass('expanded');
        
        if (sidebar.hasClass('collapsed')) {
            menuIcon.addClass('d-none');
            closeIcon.removeClass('d-none');
        } else {
            menuIcon.removeClass('d-none');
            closeIcon.addClass('d-none');
        }
    });
    $('.ar-pagination-btn').on('click', function() {
        $(this).next('.ar-pagination-box').toggleClass('show');
    });
});
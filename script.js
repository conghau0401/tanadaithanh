$(document).ready(function() {
    // Sidebar toggle functionality
    $('#menuToggle').on('click', function() {
        const sidebar = $('#sidebar');
        const mainContent = $('#mainContent');
        const paginationContainer = $('.pagination-container');
        const menuIcon = $('.menu-icon');
        const closeIcon = $('.close-icon');
        
        sidebar.toggleClass('collapsed');
        mainContent.toggleClass('expanded');
        paginationContainer.toggleClass('expanded');
        
        // Toggle icons
        if (sidebar.hasClass('collapsed')) {
            menuIcon.addClass('d-none');
            closeIcon.removeClass('d-none');
        } else {
            menuIcon.removeClass('d-none');
            closeIcon.addClass('d-none');
        }
    });
    
    // Mobile sidebar toggle
    function toggleMobileSidebar() {
        if ($(window).width() <= 768) {
            $('#sidebar').toggleClass('show');
        }
    }
    
    // Handle window resize
    $(window).on('resize', function() {
        if ($(window).width() > 768) {
            $('#sidebar').removeClass('show');
        }
    });
    
    // Table horizontal scroll with fixed action column
    $('.table-wrapper').on('scroll', function() {
        const scrollLeft = $(this).scrollLeft();
        const maxScroll = this.scrollWidth - this.clientWidth;
        
        // Add shadow effect when scrolling
        if (scrollLeft > 0) {
            $('.actions-column').addClass('shadow-left');
        } else {
            $('.actions-column').removeClass('shadow-left');
        }
    });
    
    // Search functionality
    $('.search-input').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        
        if (searchTerm === '') {
            $('tbody tr').show();
            return;
        }
        
        $('tbody tr').each(function() {
            const rowText = $(this).text().toLowerCase();
            if (rowText.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    
    // Filter functionality
    $('.filters-section select').on('change', function() {
        // Add your filter logic here
        console.log('Filter changed:', $(this).val());
    });
    
    // Pagination functionality
    $('.pagination .page-link').on('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all items
        $('.pagination .page-item').removeClass('active');
        
        // Add active class to clicked item
        $(this).parent().addClass('active');
        
        // Add your pagination logic here
        console.log('Page clicked:', $(this).text());
    });
    
    // Items per page change
    $('.pagination-select').first().on('change', function() {
        const itemsPerPage = $(this).val();
        console.log('Items per page changed:', itemsPerPage);
        // Add your logic to update table rows
    });
    
    // Action buttons in table
    $(document).on('click', '.btn-outline-secondary', function(e) {
        e.stopPropagation();
        console.log('View action clicked');
        // Add your view logic here
    });
    
    $(document).on('click', '.btn-outline-danger', function(e) {
        e.stopPropagation();
        if (confirm('Bạn có chắc chắn muốn xóa mục này?')) {
            console.log('Delete action confirmed');
            // Add your delete logic here
        }
    });
    
    // Tab functionality (Bootstrap handles this, but you can add custom logic)
    $('.nav-tabs .nav-link').on('click', function() {
        const tabId = $(this).data('bs-target');
        console.log('Tab switched to:', tabId);
        // Add any custom tab switching logic here
    });
    
    // Add/Import/Export button functionality
    $('.btn-primary').on('click', function() {
        if ($(this).text().trim().includes('Thêm mới')) {
            console.log('Add new item clicked');
            // Add your create new item logic here
        }
    });
    
    $('.btn-outline-secondary').on('click', function() {
        const buttonText = $(this).text().trim();
        if (buttonText.includes('Import')) {
            console.log('Import data clicked');
            // Add your import logic here
        } else if (buttonText.includes('Xuất Excel')) {
            console.log('Export Excel clicked');
            // Add your export logic here
        } else if (buttonText.includes('Xoá bộ lọc')) {
            console.log('Clear filters clicked');
            // Reset all filters
            $('.filters-section select').val('');
            $('tbody tr').show();
        }
    });
    
    // Search button in filters
    $('.btn-primary').not(':first').on('click', function() {
        if ($(this).text().trim().includes('Tìm kiếm')) {
            console.log('Search button clicked');
            // Add your search logic here
            const filters = {};
            $('.filters-section select').each(function() {
                const name = $(this).prev('label').text();
                const value = $(this).val();
                if (value) {
                    filters[name] = value;
                }
            });
            console.log('Applied filters:', filters);
        }
    });
    
    // Initialize tooltips if needed
    $('[data-bs-toggle="tooltip"]').tooltip();
    
    // Add smooth scrolling for better UX
    $('html').css('scroll-behavior', 'smooth');
    
    // Handle table row selection (optional)
    $('tbody tr').on('click', function(e) {
        if (!$(e.target).closest('button').length) {
            $('tbody tr').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});

// Additional utility functions
function showNotification(message, type = 'info') {
    // Add your notification logic here
    console.log(`${type.toUpperCase()}: ${message}`);
}

function updateTableData(data) {
    // Function to update table with new data
    const tbody = $('.custom-table tbody');
    tbody.empty();
    
    data.forEach((row, index) => {
        const tr = $('<tr>');
        // Add your row building logic here
        tbody.append(tr);
    });
}

function exportToExcel() {
    // Add Excel export functionality
    console.log('Exporting to Excel...');
}

function importData() {
    // Add import functionality
    console.log('Importing data...');
}
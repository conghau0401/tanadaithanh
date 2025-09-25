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
    $("#sync-ticket-data").on("click", () => {
        $("#loadingModal").modal("show")
        setTimeout(() => {
            $("#loadingModal").modal("hide")
        }, 3000);
    })
    // datepicker
    const localeVN = {
        format: 'DD/MM/YYYY',
        separator: ' - ',
        applyLabel: 'Áp dụng',
        cancelLabel: 'Hủy',
        fromLabel: 'Từ ngày',
        toLabel: 'Đến ngày',
        customRangeLabel: 'Tùy chỉnh',
        weekLabel: 'Tuần',
        daysOfWeek: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        monthNames: [
            'Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư',
            'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám',
            'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'
        ],
        firstDay: 1,
    };
    $('.date-from-to').daterangepicker({
        locale: localeVN,
        startDate: moment(),
        "autoApply": false,
        endDate: moment().add(1, 'days'),
    });
    $('#appointmentDate').daterangepicker({
        singleDatePicker: true,
        locale: localeVN,
        "autoApply": false,
    });
    $('#appointmentTime').daterangepicker({
        singleDatePicker: true,
        timePicker: true,
        timePicker24Hour: true,
        timePickerIncrement: 1, // Bước nhảy 1 phút (cho phút)
        timePickerSeconds: true, // Bật hiển thị giây
        locale: {
            format: 'HH:mm:ss', // Thêm ss cho giây
            applyLabel: 'Chọn',
            cancelLabel: 'Hủy'
        },
        startDate: moment().format('HH:mm:ss')
    }).on('show.daterangepicker', function(ev, picker) {
        // Ẩn phần calendar
        picker.container.find('.calendar-table').hide();
    });
});
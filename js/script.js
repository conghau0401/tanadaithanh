$(document).ready(function () {
    $('#menuToggle').on('click', function () {
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
    $('.ar-pagination-btn').on('click', function () {
        $(this).next('.ar-pagination-box').toggleClass('show');
    });
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.ar-pagination-btn, .ar-pagination-box').length) {
            $('.ar-pagination-box').removeClass('show');
        }
    });
    $(".sync-ticket-data").on("click", () => {
        $("#loadingModal").modal("show")
        setTimeout(() => {
            $("#loadingModal").modal("hide")
        }, 3000);
    })
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
        timePickerIncrement: 1,
        timePickerSeconds: true,
        locale: {
            format: 'HH:mm:ss',
            applyLabel: 'Chọn',
            cancelLabel: 'Hủy'
        },
        startDate: moment().format('HH:mm:ss')
    }).on('show.daterangepicker', function (ev, picker) {
        picker.container.find('.calendar-table').hide();
    });

    // const menu = document.querySelector(".table-btn-box");
    // document.body.appendChild(menu);
    // document.addEventListener("click", (e) => {
    //     const btn = e.target.closest(".ticket-setting");
    //     if (btn) {
    //     e.stopPropagation();
    //     const rect = btn.getBoundingClientRect();
    //     menu.style.top = rect.bottom + "px";
    //     menu.style.left = (rect.left - 160) + "px";
    //     menu.style.display = "block";
    //     } else {
    //     menu.style.display = "none";
    //     }
    // });
});
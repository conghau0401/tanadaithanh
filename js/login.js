$(document).ready(function () {
    $('#passwordToggle').click(function () {
        const passwordField = $('#password');
        const passwordIcon = $('.passwordIcon');

        if (passwordField.attr('type') === 'password') {
            passwordField.attr('type', 'text');
            passwordIcon.attr("src", "/icon/eye-slash.svg");
        } else {
            passwordField.attr('type', 'password');
            passwordIcon.attr("src", "/icon/eye.svg");
        }
    });

    // Form validation
    function validateField(fieldId, errorId) {
        const field = $('#' + fieldId);
        const error = $('#' + errorId);
        const value = field.val().trim();

        if (value === '') {
            field.addClass('is-invalid');
            error.show();
            return false;
        } else {
            field.removeClass('is-invalid');
            error.hide();
            return true;
        }
    }

    $('#username').on('input blur', function () {
        validateField('username', 'usernameError');
    });

    $('#password').on('input blur', function () {
        validateField('password', 'passwordError');
    });

    // Form submission
    $('#loginForm').submit(function (e) {
        e.preventDefault();

        const isUsernameValid = validateField('username', 'usernameError');
        const isPasswordValid = validateField('password', 'passwordError');

        if (isUsernameValid && isPasswordValid) {
            const submitBtn = $('.btn-login');
            submitBtn.prop('disabled', true).text('Đang đăng nhập...');

            setTimeout(function () {
                alert('Đăng nhập thành công!');
                submitBtn.prop('disabled', false).text('Đăng nhập');
            }, 1500);
        }
    });

    $('.form-control').focus(function () {
        $(this).removeClass('is-invalid');
        $(this).siblings('.error-message').hide();
    });
});
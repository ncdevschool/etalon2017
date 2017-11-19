/**
 * Created by anpi0316 on 11.10.2017.
 */
$(document).ready(function () {

    var ELEMENTS = {
        CONTAINER_DATA_USING_AJAX: '.jsDataUsingAjax',
        INPUT_PASSWORD: '.jsLoginPassword',
        INPUT_USERNAME: '.jsUsername',
        BTN_SUBMIT_LOGIN: '.jsSubmitLogin',
        NOTIFICATION_CREDENTIAL_INCORRECT: '.jsCredentialsIncorrectNotification'
    };

    var usersContainer = $(ELEMENTS.CONTAINER_DATA_USING_AJAX),
        $submitButton = $(ELEMENTS.BTN_SUBMIT_LOGIN),
        $usernameField = $(ELEMENTS.INPUT_USERNAME),
        $passwordField = $(ELEMENTS.INPUT_PASSWORD),
        $credentialNotification = $(ELEMENTS.NOTIFICATION_CREDENTIAL_INCORRECT);

    Validation.validateOnEmpty([$usernameField, $passwordField], [$submitButton]);

    $.ajax({
        url: 'students',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        mimeType: 'application/json',
        data: '',
        success: function (data) {
            if (data) {
                printUsers(data);
            }

        }
    });

    function printUsers(students) {
        students.some(function (student) {
            usersContainer.append('<span>' + student.studentId + ' | ' + student.username + ' | ' + student.email + '</span><br>')
        });
    }


    $usernameField.on('blur', function () {
        Validation.validateOnEmpty([$usernameField], [$submitButton]);
    });

    $passwordField.on('blur', function () {
        Validation.validateOnEmpty([$passwordField], [$submitButton]);
    });

    $submitButton.click(function (event) {
        event.stopPropagation();

        $.ajax({
            url: 'authorize',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                username: $usernameField.val(),
                password: $passwordField.val()
            }),
            success: function (xhr) {
                console.log(xhr.status);
                $credentialNotification.hide();
                window.location.href = "/home"
            },
            error: function (xhr, textStatus) {
                xhr.status == 401 ? $credentialNotification.show() : alert('Something went wrong, try again later.');
            }
        });


    })

});
/**
 * Created by anpi0316 on 11.10.2017.
 */
$(document).ready(function () {

    var ELEMENTS = {
        CONTAINER_DATA_USING_AJAX: '.jsDataUsingAjax'
    };

    var usersContainer = $(ELEMENTS.CONTAINER_DATA_USING_AJAX);

    $.ajax({
        url: 'usersAsJson',
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

    function printUsers(users) {
        users.some(function (user) {
            usersContainer.append('<span>' + user.id + ' | ' + user.name + '</span>')
        });
    }


});
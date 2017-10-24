/**
 * Created by anpi0316 on 11.10.2017.
 */
$(document).ready(function () {

    var ELEMENTS = {
        CONTAINER_DATA_USING_AJAX: '.jsDataUsingAjax'
    };

    var usersContainer = $(ELEMENTS.CONTAINER_DATA_USING_AJAX);

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
            usersContainer.append('<span>' + student.studentId +  ' | ' + student.username + ' | ' + student.email +'</span><br>')
        });
    }


});
/**
 * Created by Anton Petkun on 19.11.2017.
 */
$(document).ready(function () {

    var ELEMENTS = {
        FACULTY_NAME: '.jsFacultyName',
        CREATE_FACULTY_BUTTON: '.jsCreateFaculty'
    };

    var $createFacultyBtn = $(ELEMENTS.CREATE_FACULTY_BUTTON),
        $facultyName = $(ELEMENTS.FACULTY_NAME);

    $facultyName.on('blur', function () {
        Validation.validateOnEmpty([$facultyName], [$createFacultyBtn]);
    });

    $createFacultyBtn.click(function (event) {
        event.stopPropagation();
        $.ajax({
            url: 'faculty',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                name: $facultyName.val()
            }),
            success: function (xhr) {
                alert('Faculty was created');
                $facultyName.val('');
            },
            error: function (xhr, textStatus) {
                alert('Something went wrong, try again later.');
            }
        });
    })

});

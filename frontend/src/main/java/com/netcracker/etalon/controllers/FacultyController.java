package com.netcracker.etalon.controllers;

import com.netcracker.etalon.beans.FacultyViewModel;
import com.netcracker.etalon.beans.SpecialityViewModel;
import com.netcracker.etalon.entities.FacultyEntity;
import com.netcracker.etalon.entities.SpecialityEntity;
import com.netcracker.etalon.services.FacultyService;
import com.netcracker.etalon.services.SpecialityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.TypeDescriptor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Anton Petkun on 19.11.2017.
 */
@Controller
public class FacultyController {

    @Autowired
    private FacultyService facultyService;

    @Autowired
    private ConversionService conversionService;

    @Autowired
    private SpecialityService specialityService;

    private final TypeDescriptor facultyEntityTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(FacultyEntity.class));
    private final TypeDescriptor facultyViewModelTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(FacultyViewModel.class));

    @RequestMapping(value = "/specialities/{specialityId}", method = RequestMethod.GET)
    @ResponseBody
    public SpecialityViewModel getSpecialitiesById(@PathVariable String specialityId) {
        SpecialityEntity specialitiesByFacultyId = specialityService.getSpecialitiesByFacultyId(specialityId);
        return conversionService.convert(specialitiesByFacultyId, SpecialityViewModel.class);
    }


    @RequestMapping(value = "/faculty", method = RequestMethod.POST)
    @ResponseBody
    public void createFaculty(@RequestBody FacultyViewModel facultyViewModel) {
        List<FacultyEntity> facultyEntities = new ArrayList<>();
        facultyEntities.add(conversionService.convert(facultyViewModel, FacultyEntity.class));
        facultyService.addFaculty(facultyEntities);
    }

    @RequestMapping(value = "/faculties", method = RequestMethod.GET)
    @ResponseBody
    public List<FacultyViewModel> getAllFaculties() {
        List<FacultyEntity> allFaculties = facultyService.getAllFaculties();
        return (List<FacultyViewModel>) conversionService.convert(allFaculties, facultyEntityTypeDescriptor, facultyViewModelTypeDescriptor);
    }
}

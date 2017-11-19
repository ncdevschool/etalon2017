package com.netcracker.etalon.converters;

import com.netcracker.etalon.beans.FacultyViewModel;
import com.netcracker.etalon.entities.FacultyEntity;
import org.springframework.core.convert.converter.Converter;

/**
 * Created by Anton Petkun on 19.11.2017.
 */
public class FacultyViewModelToFacultyEntityConverter implements Converter<FacultyViewModel, FacultyEntity> {

    @Override
    public FacultyEntity convert(FacultyViewModel facultyViewModel) {

        FacultyEntity facultyEntity = new FacultyEntity();
        facultyEntity.setName(facultyViewModel.getName());
        return facultyEntity;
    }
}

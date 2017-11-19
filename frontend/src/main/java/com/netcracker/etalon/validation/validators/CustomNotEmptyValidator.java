package com.netcracker.etalon.validation.validators;

import com.mysql.cj.core.util.StringUtils;
import com.netcracker.etalon.validation.annotations.CustomNotEmpty;
import org.springframework.stereotype.Component;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * Created by Anton Petkun on 18.11.2017.
 */
@Component
public class CustomNotEmptyValidator implements ConstraintValidator<CustomNotEmpty, String> {


    @Override
    public void initialize(CustomNotEmpty customNotEmpty) {

    }

    @Override
    public boolean isValid(String value, ConstraintValidatorContext constraintValidatorContext) {
        return !StringUtils.isEmptyOrWhitespaceOnly(value);
    }
}

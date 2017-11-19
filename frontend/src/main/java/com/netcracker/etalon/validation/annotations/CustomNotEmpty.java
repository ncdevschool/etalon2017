package com.netcracker.etalon.validation.annotations;

import com.netcracker.etalon.validation.validators.CustomNotEmptyValidator;
import org.springframework.security.core.userdetails.User;

import javax.validation.Constraint;
import java.lang.annotation.*;


/**
 * Created by Anton Petkun on 18.11.2017.
 */

@Documented
@Constraint(validatedBy = CustomNotEmptyValidator.class)
@Target( { ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface CustomNotEmpty {

    String message() default "{CustomNotEmpty}";

    Class<?>[] groups() default {};

    Class<? extends User>[] payload() default {};
}

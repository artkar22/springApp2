package spring.security;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring.database.models.security.User;

/**
 * Created by Artur on 2017-02-24.
 */
@RestController
public class RegisterNewUserCtrl {

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public String register(@RequestBody final User userToRegister) {
            userToRegister.getLogin();
            userToRegister.getPassword();
            return "POSTED!";
    }
}

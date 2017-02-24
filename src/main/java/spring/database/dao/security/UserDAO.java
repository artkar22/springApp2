package spring.database.dao.security;

import spring.database.models.security.User;

import java.util.List;

/**
 * Created by Artur on 2017-02-24.
 */
public interface UserDAO {
    public void save(User u);

    public List<User> list();
}

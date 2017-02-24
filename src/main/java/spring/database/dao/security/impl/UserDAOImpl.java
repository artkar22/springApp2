package spring.database.dao.security.impl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import spring.database.dao.security.UserDAO;
import spring.database.models.security.User;

import java.util.List;

/**
 * Created by Artur on 2017-02-24.
 */
public class UserDAOImpl implements UserDAO {

    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void save(final User u) {
        final Session session = this.sessionFactory.openSession();
        final Transaction tx = session.beginTransaction();
        session.persist(u);
        tx.commit();
        session.close();
    }

    @SuppressWarnings("unchecked")
    public List<User> list() {
        final Session session = this.sessionFactory.openSession();
        final List<User> personList = session.createQuery("from Person").list();
        session.close();
        return personList;
    }
}

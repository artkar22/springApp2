package spring.testService;

/**
 * Created by Artur Karolak on 2017-02-01.
 */
public class Greeting {

    private final long id;
    private final String content;

    public Greeting(long id, String content) {
        this.id = id;
        this.content = content;
        ///jkajfaa
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}

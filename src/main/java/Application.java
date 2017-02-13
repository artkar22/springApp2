/**
 * Created by Inni on 2017-02-01.
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("springApp")
public class Application {

    public static void main(String[] args) {

        SpringApplication.run(Application.class, args);

    }
}

package spring.security.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;

/**
 * Created by Artur on 2017-03-16.
 */
@JsonInclude(NON_NULL)
@Data
public class InfoDTO {
    private String info;

    public InfoDTO(final String info) {
        this.info = info;
    }
}

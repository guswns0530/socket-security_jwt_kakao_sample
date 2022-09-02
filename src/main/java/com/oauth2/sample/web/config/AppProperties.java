package com.oauth2.sample.web.config;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Getter
@Configuration
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private final Auth auth = new Auth();
    private final OAuth2 oauth2 = new OAuth2();

    @Getter
    @Setter
    public static class Auth {
        private String tokenSecret;
        private Long accessTokenExpireLength ;
        private Long refreshTokenExpireLength;
        private String refreshCookieKey;
    }

    @Getter
    @Setter
    public static final class OAuth2 {
        private String authorizedRedirectUri;
    }
}

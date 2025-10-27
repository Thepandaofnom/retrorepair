package eccc;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadProductDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadProductDatabase.class);

  @Bean
  CommandLineRunner initDatabase(ProductRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new Product("SNES", 89.88)));
      log.info("Preloading " + repository.save(new Product("PS1", 299.99)));
    };
  }
}
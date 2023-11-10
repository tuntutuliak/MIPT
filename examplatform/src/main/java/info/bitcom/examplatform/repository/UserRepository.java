package info.bitcom.examplatform.repository;

import  info.bitcom.examplatform.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}

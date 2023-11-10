package info.bitcom.examplatform.repository;

import info.bitcom.examplatform.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, String> {
}

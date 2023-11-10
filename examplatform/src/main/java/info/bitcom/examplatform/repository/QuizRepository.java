package info.bitcom.examplatform.repository;

import info.bitcom.examplatform.models.Category;
import info.bitcom.examplatform.models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    List<Quiz> findByCategory(Category category);
}

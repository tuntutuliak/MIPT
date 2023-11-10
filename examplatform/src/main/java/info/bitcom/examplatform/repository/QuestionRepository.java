package info.bitcom.examplatform.repository;

import info.bitcom.examplatform.models.Question;
import info.bitcom.examplatform.models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByQuiz(Quiz quiz);
}

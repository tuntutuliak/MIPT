package info.bitcom.examplatform.services;

import info.bitcom.examplatform.models.Question;
import info.bitcom.examplatform.models.Quiz;

import java.util.List;

public interface QuestionService {

    Question addQuestion(Question question);

    List<Question> getQuestions();

    Question getQuestion(Long quesId);

    Question updateQuestion(Question question);

    void deleteQuestion(Long questionId);

    //Extra Methods
    List<Question> getQuestionsByQuiz(Quiz quiz);

}

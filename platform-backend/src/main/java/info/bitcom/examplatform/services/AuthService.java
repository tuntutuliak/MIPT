package info.bitcom.examplatform.services;


import info.bitcom.examplatform.models.LoginRequest;
import info.bitcom.examplatform.models.LoginResponse;
import info.bitcom.examplatform.models.User;

public interface AuthService {
    User registerUserService(User user) throws Exception;

    LoginResponse loginUserService(LoginRequest loginRequest) throws Exception;
}

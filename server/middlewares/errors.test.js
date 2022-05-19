const { generalError } = require("./errors");

describe("Given the generalError middleware", () => {
  describe("When it receives an error with an statusCode 403 and customMessage 'Incorrect Username or password' and a res", () => {
    test("Then it should call res' status and json methods with 403 and { msg : 'Incorrect Username or password'} respectively", () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = {
        statusCode: 403,
        customMessage: "Incorrect Username or password",
      };
      const expectedStatusCode = 403;
      const expectedJSON = { msg: "Incorrect Username or password" };

      generalError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith(expectedJSON);
    });
  });

  describe("When it receives an error with an status 500 and a message and a res", () => {
    test("Then it should call res' status and json methods with 500 and { msg : 'General error'} respectively", () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const error = {
        status: 500,
        message: "TypeError: Cannot read properties of undefined",
      };
      const expectedStatusCode = 500;
      const expectedJSON = { msg: "General error" };

      generalError(error, null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith(expectedJSON);
    });
  });
});

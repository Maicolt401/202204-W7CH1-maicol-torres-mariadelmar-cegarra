const { loginUser } = require("./userControllers");

const expectedToken = "uwuuwu";
const user = {
  username: "papafrita",
  id: "uwuuwu",
};

jest.mock("../../db/models/User", () => ({
  findOne: jest.fn().mockResolvedValue(user),
}));

jest.mock("bcrypt", () => ({
  compare: jest.fn().mockResolvedValue(true),
}));

jest.mock("jsonwebtoken", () => ({
  sign: () => expectedToken,
}));

describe("Given the loginUser function", () => {
  const req = {
    body: {
      username: "papafrita",
      password: "papafrita",
    },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  describe("When it receives a request with the correct username and password and a res", () => {
    test("Then it should response with status 200 and a token in the body", async () => {
      const expectedStatusCode = 200;

      await loginUser(req, res, null);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call res' json method with {token: 'uwuuwu'}", async () => {
      const expectedJson = { token: "uwuuwu" };

      await loginUser(req, res, null);

      expect(res.json).toHaveBeenCalledWith(expectedJson);
    });
  });
});

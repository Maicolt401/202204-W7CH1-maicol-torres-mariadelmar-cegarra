const registerUser = require("./registerController");

jest.mock("../../db/models/User", () => ({
  ...jest.requireActual("../../db/models/User"),
  create: jest.fn().mockResolvedValue(true),
}));

jest.mock("bcrypt", () => ({
  hash: jest.fn().mockResolvedValue(true),
}));

describe("Given a Register funtion", () => {
  describe("When it`s invoked whith a response", () => {
    test("Then it should call the response method status with 201", async () => {
      const req = {
        body: {
          username: "melonsuela",
          password: "suelamelon",
          admin: "true",
          yearOfBirth: "1998-03-10",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedStatus = 201;
      await registerUser(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
  });
});

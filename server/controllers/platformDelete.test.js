const deletePlatform = require("./platformDelete");

jest.mock("../../db/models/Platform", () => ({
  ...jest.requireActual("../../db/models/Platform"),
  findIdAndDelete: jest.fn().mockResolvedValueOnce(true),
}));

describe("Given the platform function", () => {
  describe("When it receives a request and delete platform to the list ", () => {
    test("Then it should response with status 200 ", async () => {
      const req = {
        params: {
          idPlatform: 1,
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const expectedStatusCode = 200;

      await deletePlatform(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});

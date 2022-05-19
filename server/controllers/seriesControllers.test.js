const mockseries = require("../mocks/series");
const { getSeries } = require("./seriesControllers");

jest.mock("../../db/models/serie", () => ({
  ...jest.requireActual("../../db/models/serie"),
  find: jest.fn().mockResolvedValue(mockseries),
}));

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
describe(" Given a getSeries funtion", () => {
  describe(" Whenit`s invoked with a response", () => {
    test("hen it should call the response method status with 200", async () => {
      const expectStatus = 200;

      await getSeries(null, res);

      expect(res.status).toHaveBeenCalledWith(expectStatus);
    });
  });
  test("Then it should call the method json with a list to series", () => {
    const expetedseries = [
      {
        id: 1,
        name: "the walkin dead",
        Creation: 2013,
        category: "terror",
      },
    ];
    getSeries(null, res);

    expect(res.json).toHaveBeenCalledWith({ series: expetedseries });
  });
});

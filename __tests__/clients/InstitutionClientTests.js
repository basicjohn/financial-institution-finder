import InstitutionClient from '../../src/clients/InstitutionClient';

describe("InstitutionClient Search", () => {
  test("Run search function that returns no result", () => {
    let testSearch = "***";
    return InstitutionClient.search(testSearch).then(response => {
      console.log(response);
    expect(response.data.length).toBe(0);
    });
  });
});
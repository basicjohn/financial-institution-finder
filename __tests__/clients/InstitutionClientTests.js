import InstitutionClient from '../../src/clients/InstitutionClient';

describe("InstitutionClient.search", () => {
  test("Run search function that returns no result", () => {
    let testSearch = "***";
    return InstitutionClient.search(testSearch).then(response => {
      expect(response.data.length).toBe(0);
    });
  });

  test("Run search function that returns result", () => {
    let testSearch = "new";
    return InstitutionClient.search(testSearch).then(response => {
      expect(response.data.length).toBeGreaterThan(0);
    });
  });
});


// describe("InstitutionClient.favorite", () => {
//   test("Run search function with ID that returns specific institution", () => {
//     let favorite = "8108";
//     return InstitutionClient.favorite(favorite).then(response => {
//       expect(response.data[1].data.id).toBe(1931);
//     });
//   });
// });
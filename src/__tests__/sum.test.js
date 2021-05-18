import score from "../util";
import answer from "../test-data/answered";

test("Test Data Score", () => {
  const a = score(answer);
  expect(a.score).toBe(2);
  expect(a.total).toBe(10);
});

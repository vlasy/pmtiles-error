import { expect } from "chai";
import { handler } from "../src/endpoint.js";

describe("serveRendered", () => {
  it("should correctly transform source style", async () => {
    const response = (await handler());
    // const response = ""
    console.log(response);

    expect(response).to.equal(false);
  });
});

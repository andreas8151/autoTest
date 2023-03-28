const request = require("supertest");
const { server } = require("../server");

describe("Testing server endpoints", () => {
  test("POST /register should return 400 if bad body", async () => {
    const response = await request(server).post("/register").send({});

    expect(response.status).toBe(400);
  });

  test("POST /login should return 400 if bad body", async () => {
    const response = await request(server).post("/login").send({});

    expect(response.status).toBe(400);
  });
});

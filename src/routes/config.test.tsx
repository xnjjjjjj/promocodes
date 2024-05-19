import {
  MAIN_ROUTE,
  FILMS_ROUTE,
  FILM_DETAIL_ROUTE,
  PROFILE_ROUTE,
  SERIALS_ROUTE,
  SERIAL_DETAIL_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from "./config";

describe("route paths", () => {
  it("should be corrent values", () => {
    expect(MAIN_ROUTE).toBe("/");
    expect(FILMS_ROUTE).toBe("/films");
    expect(FILM_DETAIL_ROUTE).toBe("/films/:filmid");
    expect(PROFILE_ROUTE).toBe("/profile");
    expect(SERIALS_ROUTE).toBe("/serials");
    expect(SERIAL_DETAIL_ROUTE).toBe("/serials/:filmid");
    expect(SIGNIN_ROUTE).toBe("/signin");
    expect(SIGNUP_ROUTE).toBe("/signup");
  });
});
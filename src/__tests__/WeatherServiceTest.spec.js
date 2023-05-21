import { test } from "vitest";
import axios from "axios";
import { fetchWeatherData } from "../services/WeatherService";

axios.get = async () => ({ data: "mocked data" });

test("fetchWeatherData should call axios.get and return data", async ({
  expect,
}) => {
  const city = "Barcelona";
  const country = "ES";

  const data = await fetchWeatherData(city, country);

  expect(data).toBe("mocked data");
});

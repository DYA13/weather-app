import { createAsyncThunk } from "@reduxjs/toolkit"
import { IWeather } from "./weatherSlice"

export const weatherRequestAsync = createAsyncThunk<IWeather, string>(
  "weather/fetch",
  async (city: string) => {
    const response: Response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50e3487e27f7dbda4cb229275c8aee77&lang=ru&units=metric`
    )
    console.log(response)
    if (response.ok && response.status >= 200 && response.status <= 300) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  }
)

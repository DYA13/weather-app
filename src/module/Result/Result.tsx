import React from "react"
import style from "./Result.module.scss"
import { useAppSelector } from "../../hooks"

type Props = {}

export const Result = (props: Props) => {
  const { weather, isLoading, error } = useAppSelector((state) => state.weather)
  return (
    <div className={style.result}>
      {isLoading ? (
        <p>Loading...</p>
      ) : weather.name ? (
        <>
          <p>{weather.main.temp} &deg;C </p>
          <p>{weather.name}</p>
        </>
      ) : error === "Not Found" ? (
        <p>The town is not found</p>
      ) : (
        <p>Please enter a city</p>
      )}
    </div>
  )
}

import React from "react"
import style from "./Result.module.scss"

type Props = {}

export const Result = (props: Props) => {
  return (
    <div className={style.result}>
      <p>25&#8451;</p>
      <p>Kaliningrad</p>
    </div>
  )
}

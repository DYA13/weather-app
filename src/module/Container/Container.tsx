import style from "./Container.module.scss"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Container = ({ children }: Props) => {
  return <div className={style.container}>{children}</div>
}

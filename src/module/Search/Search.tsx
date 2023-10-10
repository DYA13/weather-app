import styles from "./Search.module.scss"
import { ReactComponent as SearchIcon } from "./search.svg"
import { useState } from "react"
import { useAppDispatch } from "../../hooks"
import { weatherRequestAsync } from "../../store/weatherAction"
type Props = {}

export const Search = (props: Props) => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState("")
  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    dispatch(weatherRequestAsync(search))
  }

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value)
    }
  }

  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
      <input
        type='search'
        className={styles.search}
        onChange={handleChange}
        value={search}
      />
      <button className={styles.btn} type='submit'>
        <SearchIcon />
      </button>
    </form>
  )
}

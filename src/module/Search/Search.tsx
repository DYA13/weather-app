import styles from "./Search.module.scss"
import { ReactComponent as SearchIcon } from "./search.svg"
import { useState } from "react"
type Props = {}

export const Search = (props: Props) => {
  const [search, setSearch] = useState("")
  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
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

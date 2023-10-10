import styles from "./Search.module.scss"
import { ReactComponent as SearchIcon } from "./search.svg"
type Props = {}

export const Search = (props: Props) => {
  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
      <input type='search' className={styles.search} />
      <button className={styles.btn} type='submit'>
        <SearchIcon />
      </button>
    </form>
  )
}

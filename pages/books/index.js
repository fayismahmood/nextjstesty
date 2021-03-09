import Styles from "../../styles/books.module.scss" 
import Link from 'next/link'

function Books({books}) {
  //const [BookList, setBookList] = useState(null)

  return (
  <div className={Styles._booksContainer}>
    <nav>
      <h2>Books</h2>
      <ul>
        <li>AboutMe</li>
        <li>Blogs</li>
      </ul>
    </nav>
    <div className={Styles._books}>
    {
      books.books.map((e,i)=>
        (
          <Link href={`./books/${i}`}>
            <div className={Styles._eBook} key={e.isbn}>
              <span> {e.title}</span>
              <span> {e.isbn}</span>
            </div>
          </Link>

        )
        )
      
    }
    </div>
 </div>  
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/books')
  const books = await res.json()

  return {
    props: {
      books,
    },
  }
}


export default Books
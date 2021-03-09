import  Head from 'next/head'

function Post({ data }) {
  let {res}=data

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
 return(
   <div>
     <Head>
       <title>
         MBook | {res.title}
       </title>
       <meta type="og:title"  content={res.description} />
     </Head>
     <h1>{res.title}</h1>
      <div className="Details">
        <div className="_isbn">
          {res.isbn}
        </div>
        <div className="_author">
          {res.author}
        </div>
        <div className="_published">
          {res.published}
        </div>
      </div>
      <div>
        <p>
          {res.description}
        </p>
      </div>
   </div>
 )

  // Render post...
}

export async function getServerSideProps(context) {
  //let ee=useRouter()
  const res = await fetch(`http://localhost:3000/api/books/${context.query.book}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}

export default Post
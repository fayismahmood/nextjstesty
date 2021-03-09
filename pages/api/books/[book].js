const fs=require("fs")
const path=require("path")
let _Books=JSON.parse(fs.readFileSync(path.join(process.cwd(),"pages/api/books.json")).toString())



export default function _books(req, res) {
   console.log("asdfadsf");
   let _data=req.query.book
   res.json({
      res:_Books.books[_data]
   })
}

const fs=require("fs")
const path=require("path")
let _Books=JSON.parse(fs.readFileSync(path.join(process.cwd(),"pages/api/books.json")).toString())

export default (req, res) => {
    res.status(200).json(_Books)

}
  
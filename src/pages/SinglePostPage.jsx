import { useParams } from "react-router-dom"

const SinglePostPage = () => {
    const {id} = useParams()


  return (
    <div style={{marginBottom:"50px"}}>DummyJson - POST #{id}</div>
  )
}
export default SinglePostPage
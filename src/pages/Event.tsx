import { useParams } from "react-router-dom"

function Event () {
    const  { id } = useParams()
  return (
    <div>
      <h1>Event { id }</h1>
    </div>
  )
}

export default Event
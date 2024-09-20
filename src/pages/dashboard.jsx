import React, { useEffect, useState } from 'react'
import { fetchData, getdetails } from '../services'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Dashboard() {
    const [list, setList] = useState([])
    const [pageNo, setPageNo] = useState(10)
    const [serachTerm, setserachTerm] = useState("ghost")
    const [moviesDetails, setmoviesDetails] = useState("")
    useEffect(() => {   
        getData()
    }, [pageNo]
)
    const getData=async()=>{
        let data=await fetchData(serachTerm,pageNo)
        console.log(data)
        setList(data.Search
        )
    }
    const displayDetails=async(id)=>{
        let details= await getdetails(id)
        console.log(details)
        setmoviesDetails(details)
    }
  return (
    <>{
        moviesDetails?<>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={moviesDetails.Poster} />
      <Card.Body>
        <Card.Title>{moviesDetails.Title}</Card.Title>
        <Card.Text>
         {JSON.stringify(moviesDetails)}
        </Card.Text>
        <Button variant="primary" onClick={()=>setmoviesDetails(undefined)}>go back</Button>
      </Card.Body>
    </Card>
        </>:<>    <div>dashboard</div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Search for movies here......</Form.Label>
        <Form.Control type="text" placeholder="Search for movies here......" />
      </Form.Group>
      <div style={{display:"flex",flexWrap:"wrap", gap:"10pxsclea"}}>
    
      {list&& list.map((val)=> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={val.Poster} />
          <Card.Body>
            <Card.Title>{val.Title}</Card.Title>
            <Card.Text>
            {`type:${val.imdbID}`}
            </Card.Text>
            <Button variant="primary" onClick={()=>displayDetails(val.imdbID)}>Know More</Button>
          </Card.Body>
        </Card>)}
      </div></>
    }

    </>
  )
}

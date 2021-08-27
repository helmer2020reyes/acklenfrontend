import React,{useState,useEffect} from 'react';
import 'mdb-ui-kit/css/mdb.min.css';
import * as serviceBook from './../services/books';
import { Link } from 'react-router-dom';

export default function MainTable(){
    const [books, setBooks] = useState([{id: 0,title:"",description:"",isread:0,dateread:"",rate:"",genre:"",author:"",coverurl:"",dateadded:""}]);

    useEffect(() => { 
        const load = async () => {
            let data = await serviceBook.getBooks()
            setBooks(data);
        }

        load();
        console.log("ACTUALIZADO");
        
    }, [])

    return(
        
        <div>
        <table className="table">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>IsRead</th>
                <th>DateRead</th>
                <th>rate</th>
                <th>genre</th>
                <th>author</th>
                <th>CpverUrl</th>
                <th>DateAdded</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
{books.map( (e) => {
    return (
        <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.title}</td>
            <td>{e.description}</td>
            <td>{e.isread ? 'SI' : 'NO'}</td>
            <td>{e.dateread}</td>
            <td>{e.rate}</td>
            <td>{e.genre}</td>
            <td>{e.author}</td>
            <td>{e.coverurl}</td>
            <td>{e.dateadded}</td>
            <td>
                <div className="btn-group">
                    <button className="btn btn-default" onClick={()=>serviceBook.deleteBooks(e.id)}>Eliminar</button>
                </div>
            </td>
        </tr>
    )
})}
</tbody>
        </table>
        </div>
    )
}
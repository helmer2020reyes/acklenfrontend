import { React,useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import * as serviceBook from './../services/books';

export default function Formedit(){
    const [form, setForm ] = useState({
        'title': '',
        'description': '',
        'genre': '',
        'author': '',
        'coverurl': ''
    });

    const { id } = useParams();

    useEffect(  () => {
        const preLoad = async () => {
            let object = await serviceBook.getBookById(id);
            let { title, description, genre, author, coverurl } = object;
            console.log(object);
            setForm({title, description, genre, author, coverurl});
        }
        preLoad();
    }

    , [] )


    const handleInput = (event) => {
        const nameField = event.target.name;
        const valueField = event.target.value;


        setForm({
            ...form,
            [nameField]: valueField
        });

        console.log(form);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        serviceBook.updateBook(form, id);
        window.location.href = "/";

    }
return( <div className="col-6">
<div className="card">
    <div className="card-body bg-info">
    <form onSubmit={handleSubmit}>        
        <div className="form-group">
            <input type="text" name="title" placeholder="Titulo de libro" className="form-control"  value={form.title} onChange={handleInput} ></input>
        </div>
        <div className="form-group">
            <input type="text" name="description" placeholder="description" className="form-control" value={form.description} onChange={handleInput} ></input>
        </div>
        <div className="form-group">
            <input type="text" name="genre" placeholder="Genre" className="form-control" value={form.genre} onChange={handleInput} ></input>
        </div>
        <div className="form-group">
            <input type="text" name="author" placeholder="Author" className="form-control" value={form.author} onChange={handleInput} ></input>
        </div>
        <div className="form-group">
            <input type="text" name="coverurl" placeholder="CoverUrl" className="form-control" value={form.coverurl} onChange={handleInput} ></input>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-info btn-block">Enviar</button>
        </div>
    </form>
    </div>
</div>
</div>


)

}

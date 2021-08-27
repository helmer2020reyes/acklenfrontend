import { React,useState } from "react";
import * as serviceBook from './../services/books';

export default function FormAdd(){
    const [form, setForm]=useState({
        'title': '',
        'description': '',
        'isread':false,
        'dateread':'',
        'rate':'',
        'genre': '',
        'author': '',
        'coverurl': '',
        'dateadded': ''

    });

    const handleInput = (event) => {
        const nameField = event.target.name;

        const valueField = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setForm({
            ...form,
            [nameField]: valueField
        });
        console.log(form);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        serviceBook.AddBook(form);
        window.location.href = "/";
    }

    return(
            <div className="col-6">
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
                            <label htmlFor="isread">is read?</label>
                            <input type="checkbox" name="isread" id="isread" className="form-check-input" value={form.isread} onChange={handleInput} ></input>
                        </div>
                        <div className="form-group">
                            <input type="date" name="dateread" placeholder="DateRead" className="form-control" value={form.dateread} onChange={handleInput} ></input>
                        </div>
                        <div className="form-group">
                            <input type="number" name="rate" placeholder="rate" className="form-control" value={form.rate} onChange={handleInput} ></input>
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
                            <input type="date" name="dateadded" placeholder="dateadded" className="form-control" value={form.dateadded} onChange={handleInput} ></input>
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

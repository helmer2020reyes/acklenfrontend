export const deleteBooks = async (id)=>
{
    await fetch(`http://localhost:15367/api/Books/${id}`, {method:'DELETE'})

}

export const getBooks = async () =>
{   
    let response= await fetch ("http://localhost:15367/api/Books")
    let data= await response.json()
    return data;
}

export const getBookById = async (id) =>
{
    let response = await fetch(`http://localhost:15367/api/Books/${id}`);
    let data = await response.json();
    return data;
}

export const updateBook = async (object, id) =>
{
    console.log(object);
    await fetch(`http://localhost:15367/api/Books/${id}`, {
        method: 'PUT',
        body: JSON.stringify(object),
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export const AddBook= async(object)=>
{
    console.log("Antes de enviar: " + JSON.stringify(object));
    await fetch(`http://localhost:15367/api/Books/`, {
    method: 'POST',
    body: JSON.stringify(object),
    headers:{
        'Content-type': 'application/json'
    }
        
})

}

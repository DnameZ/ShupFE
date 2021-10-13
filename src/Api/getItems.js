import apiOrigin from "./api";


export const getAllItems=()=>
{
    return fetch(`${apiOrigin}`,
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
       },
    }).then((res) => res.json());
};
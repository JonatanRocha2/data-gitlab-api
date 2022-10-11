import fetch from 'node-fetch';

const MyHeaders = {
    Authorization: 'Bearer glprd-QXh4AuA-1zK9aMM5jtnf'
}

fetch('http://gitlab.sefa.pa.gov.br/api/v4/groups/7/projects',
    { headers: MyHeaders, per_page: 100, page: 4})
        .then(response => {
            response.json()
        .then((result) => {
            result.map((item) => console.log('Nome --- ' + item.name + 'ID --- ' + item.id))
        })
})

// fetch('http://gitlab.sefa.pa.gov.br/api/v4/projects/77/integrations',
//     { method: 'GET', headers: MyHeaders})
//         .then(response => {
//             response.json()
//         .then((result) => {
//             result.map((item) => console.log('ID --- ' + item.title ))
//         })
// })
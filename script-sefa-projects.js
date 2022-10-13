import fetch from 'node-fetch';

const MyHeaders = {
    Authorization: 'Bearer glprd-QXh4AuA-1zK9aMM5jtnf'
}

function getProjectId() {
    //page 1
    fetch('http://gitlab.sefa.pa.gov.br/api/v4/groups/7/projects?per_page=100&page=1',
        { headers: MyHeaders })
            .then(response => {
                response.json()
                .then((result) => {
                    result.map((item) => {
                        fetch(`http://gitlab.sefa.pa.gov.br/api/v4/projects/${item.id}/integrations/`,
                            { headers: MyHeaders })
                            .then(response => {
                                response.json()
                            .then((result) => {
                                result.map((data) => console.log(`Nome: ; ${item.name} ; Integracao: ; ${data.title}`))
                            })
                        })
                    })
                })
    })
    //page 2
    fetch('http://gitlab.sefa.pa.gov.br/api/v4/groups/7/projects?per_page=100&page=2',
        { headers: MyHeaders })
            .then(response => {
                response.json()
                .then((result) => {
                    result.map((item) => {
                        fetch(`http://gitlab.sefa.pa.gov.br/api/v4/projects/${item.id}/integrations/`,
                            { headers: MyHeaders })
                            .then(response => {
                                response.json()
                            .then((result) => {
                                result.map((data) => console.log(`Nome: ; ${item.name} ; Integracao: ; ${data.title}`))
                            })
                        })
                    })
                })
    })
    //page 3
    fetch('http://gitlab.sefa.pa.gov.br/api/v4/groups/7/projects?per_page=100&page=3',
    { headers: MyHeaders })
        .then(response => {
            response.json()
            .then((result) => {
                result.map((item) => {
                    fetch(`http://gitlab.sefa.pa.gov.br/api/v4/projects/${item.id}/integrations/`,
                        { headers: MyHeaders })
                        .then(response => {
                            response.json()
                        .then((result) => {
                            result.map((data) => console.log(`Nome: ; ${item.name} ; Integracao: ; ${data.title}`))
                        })
                    })
                })
            })
    })
    //page 4
    fetch('http://gitlab.sefa.pa.gov.br/api/v4/groups/7/projects?per_page=100&page=4',
    { headers: MyHeaders })
        .then(response => {
            response.json()
            .then((result) => {
                result.map((item) => {
                    fetch(`http://gitlab.sefa.pa.gov.br/api/v4/projects/${item.id}/integrations/`,
                        { headers: MyHeaders })
                        .then(response => {
                            response.json()
                        .then((result) => {
                            result.map((data) => console.log(`Nome: ; ${item.name} ; Integracao: ; ${data.title}`))
                        })
                    })
                })
            })
    })
}

getProjectId()



import fetch from 'node-fetch';

const MyHeaders = {
    Authorization: 'Bearer <seu-token-pessoal>'
}

function getProjectId() {
    //page 1
    fetch('http://gitlab.sefa.pa.gov.br/api/v4/groups/11/projects?per_page=100&page=1',
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



const repositorio = document.querySelector('.col-sm-6');
const nomeGitHub = document.querySelector('.titulo');
const imageGit = document.querySelector('.foto_pessoal');

function getAPIGitHub(){
    fetch('https://api.github.com/users/otaviodev004/repos')
    .then(async res => {
        if (!res.ok){
            throw new Error(res.status);
        }

        let data = await res.json();
        console.log(data);

        data.map( item => {
            let project = document.createElement('div');

            project.innerHTML = `
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            `;
            

            repositorio.appendChild(project);
        })
    })
}

getAPIGitHub();


function buscandoDados() {
    fetch('https://api.github.com/users/otaviodev004')
    .then(async res => {
        if (!res.ok){
            throw new Error(res.status);
        }

        let data = await res.json();
        console.log(data);

        let nomeGit = document.createElement('h1');
        let imgPerfil = document.createElement('div');

        nomeGit.innerHTML = `
            <div class="titulo">
                <h1>${data.name}</h1>
            </div>
        `;

        imgPerfil.innerHTML = `
            <div class="foto_pessoal">
                <img src="${data.avatar_url}" alt="imagem pessoal" width="330px">
            </div>
        `;
        
        document.getElementById('nomeGitHub').appendChild(nomeGit);
        document.getElementById('imageGit').appendChild(imgPerfil);
    })
    .catch(error => {
        console.error('Erro:', error);
    });

        // data.map( item => {
        //     let nomeGit = document.createElement('h1');

        //     console.log(item);

        //     nomeGit.innerHTML = `
        //         <div class="titulo">
        //                   <h1>${item.name}</h1>
        //               </div>
        //     `;
            
        //     nomeGitHub.appendChild(nomeGit);
        // })
    // })

}

buscandoDados();
onload = () => {
    //* de erro nome
    nome.onchange = () => {
        console.log('Digitou', nome.value);
    }
    nome.oninput = () => {
        if ('!@#$%^&*()-=<>,.;[]{}'.indexOf(nome.value.charAt(nome.value.length - 1)) >= 0)
            nome.value = nome.value.substr(0, nome.value.length - 1);
    };
    nome.onblur = () => {
        if (nome.value.length == 0) {
            instrucoesN.innerHTML = '*';
            instrucoesN.style.color = '#F00';
        } else instrucoesN.innerHTML = '';
    }
    //* de erro idade
    idade.onchange = () => {
        console.log('Digitou', idade.value);
    }
    idade.onchange = () => {
        console.log('Digitou', idade.value);
    }
    idade.onblur = () => {
        if (idade.value.length == 0) {
            instrucoesI.innerHTML = '*';
            instrucoesI.style.color = '#F00';
        } else instrucoesI.innerHTML = '';
    }
    //* de erro sexo
    sexo.onchange = () => {
        console.log('Digitou', sexo.value);
    }
    sexo.onchange = () => {
        console.log('Digitou', sexo.value);
    }
    sexo.onblur = () => {
        if (sexo.value.length == 0) {
            instrucoesS.innerHTML = '*';
            instrucoesS.style.color = '#F00';
        } else instrucoesS.innerHTML = '';
    }
    //* de erro descricao
    descricao.onchange = () => {
        console.log('Digitou', descricao.value);
    }
    descricao.onchange = () => {
        console.log('Digitou', descricao.value);
    }
    descricao.onblur = () => {
        if (descricao.value.length == 0) {
            instrucoesD.innerHTML = '*';
            instrucoesD.style.color = '#F00';
        } else instrucoesD.innerHTML = '';
    }
    //* de erro imagem
    imagemPost.onchange = () => {
        console.log('Digitou', imagemPost.value);
    }
    imagemPost.onblur = () => {
        if (imagemPost.value == 0) {
            instrucoesImg.innerHTML = '*';
            instrucoesImg.style.color = '#F00';
        } else instrucoesImg.innerHTML = '';
    }

}


export class container6 {
    constructor(idForm, idTextArea, idPost, idNome, idSexo, idIdade, idImagem, idAlbum) {
        this.form = document.getElementById(idForm);
        this.textArea = document.getElementById(idTextArea);
        this.post = document.getElementById(idPost);
        this.nome = document.getElementById(idNome);
        this.idade = document.getElementById(idIdade);
        this.sexo = document.getElementById(idSexo);
        this.imagem = document.getElementById(idImagem);
        this.album = document.getElementById(idAlbum);
        this.addSubmit();
    }

    onSubmit(func) {
        this.form.addEventListener('submit', func)
    }

    formValida(value) {
        if (value == '' || value == null || value == undefined || value.length < 1) {
            return false;
        }
        return true;
    }
    formValidaN(value1) {
        if (value1 == '' || value1 == null || value1 == undefined || value1.length < 1) {
            return false;
        }
        return true;
    }

    formValidaS(value3) {
        if (value3 == '' || value3 == null || value3 == undefined || value3.length < 1) {
            return false;
        }
        return true;
    }
    formValidaImg(value4) {
        if (value4 == '' || value4 == null || value4 == undefined || value4.length < 1) {
            return false;
        }
        return true;
    }
    formValidaLinkAlbum(value5) {
        if (value5 == '' || value5 == null || value5 == undefined || value5.length < 1) {
            return false;
        }
        return true;
    }


    addSubmit() {
        const handleSubmit = (event) => {
            event.preventDefault();
            if (this.formValida(this.textArea.value) && this.formValidaN(this.nome.value) && this.formValidaS(this.sexo.value) && this.formValidaImg(this.imagem.value) && this.formValidaLinkAlbum(this.album.value)){
                const newPost = document.createElement('div');
                newPost.classList.add('container6');
                newPost.innerHTML = `
                <div class="container6" id="cartazPerdido">
                    <div class="quadradoparaperdidos" >
                        <div class="row">
                            <div class="col-xs-12 col-md-12 col-lg-4">
                                <img id="fotoDePerfilA" class="FotoDePerfil" src="${this.imagem.value}">
                            </div>
                            <div class="col-xs-12 col-md-12 col-lg-6" id="InfoPerfil">
                                <p class="Nome"> <b>Nome do animal:</b> ${this.nome.value} </p>
                                <p class="idadeDoAnimalPerdidos"> <b> Idade:</b> ${this.idade.value} </p>
                                <p class="sexoDoAnimalPerdidos"><b>Sexo do animal:</b> ${this.sexo.value} </p>
                                <p class="descricaobreveanimal"> <b> Descricao breve do animal:</b> ${this.textArea.value} </p>
                                <p class="linkImgAnimal"> <b>Link para imagens do animal:</b><a href="${this.album.value}" target="_blank">Clique aqui</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                this.post.append(newPost);
                this.textArea.value = '';
                this.nome.value = '';
                this.idade.value = '';
                this.sexo.value = '';
                this.imagem.value = '';
                this.album.value = '';
            } else {
                alert('Verifique o(s) campo(s) digitado(s)')
            }
        }
        this.onSubmit(handleSubmit)
    }
}
const container66 = new container6('publicacao', 'descricao', 'cartazPerdido', 'nome', 'idade', 'sexo', 'imagemPost', 'albumDeImgs')
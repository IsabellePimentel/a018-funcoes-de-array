const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function caixaAlta (objeto){
    let resultado=objeto
    resultado.nome=resultado.nome.toUpperCase()
    resultado.profissao=resultado.profissao.toUpperCase()
    resultado.username=resultado.username.toUpperCase()
    resultado.senha=resultado.senha.toUpperCase()
    console.log(resultado)
}

caixaAlta(objeto)

const textoCorrido = (resultado) => {
    let texto = null
    texto = resultado.nome
    texto += resultado.profissao
    texto += resultado.username
    texto += resultado.senha
    console.log(texto)
}
textoCorrido(objeto)

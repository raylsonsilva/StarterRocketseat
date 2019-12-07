function passagemDeParametros(endereco) 
{
    console.log("O usuário mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + endereco.rua + " com nº " + endereco.numero);
}

function pares(x, y) 
{
    console.log ("Os números pares contidos no intervalo" + x + " e " + y + " são:")
    for (i=x;i<=y;i++)
    {
        if (i % 2 == 0) 
        {
            console.log (i)
        }
    }
}

function temHabilidade(skills) 
{
    if (!skills.indexOf("Javascript")) 
    {
        console.log(true);
    } else {
        console.log(false);
    }
}

function experiencia(anos)
{
    if (anos >= 0 && anos <= 1) 
    {
        console.log('Dev Iniciante');
    } else if (anos > 1 && anos <= 3) 
    {
        console.log('Dev Intermediário');
    }  else if (anos > 3 && anos <= 7) 
    {
        console.log('Dev Avançado');
    }  else if (anos > 7) 
    {
        console.log('Dev Jedi Master');
    } else {
        console.log('Você não é Dev!')
    }
}

function concatenaResultados(usuarios) 
{
    for (const usuario of usuarios) 
    {
        console.log("O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(","));
    }
}

var bodyElement = document.querySelector('body');
bodyElement.onload = function() 
{
    var endereco = 
    {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
    };

    passagemDeParametros(endereco);

    pares(0,10);

    var skills = ["Javascript", "ReactJS", "React Native"]
    
    temHabilidade(skills);

    var anosEstudo = 7;
    experiencia(anosEstudo);

    var usuarios = [
        {
            nome: "Diego",
            habilidades: ["Javascript", "ReactJS", "Redux"]
        },
        {
            nome: "Gabriel",
            habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
        }
    ];

    concatenaResultados(usuarios);
}

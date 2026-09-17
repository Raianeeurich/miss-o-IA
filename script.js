const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A prevenção de doenças é uma das principais estratégias da saúde pública. Quais ações podem contribuir para melhorar a prevenção na comunidade?",
        alternativas: [
            {
                texto: "Promover campanhas educativas sobre vacinação, higiene, alimentação saudável e prevenção de doenças.",
                afirmacao: "Você valoriza a educação em saúde e reconhece a importância da informação para prevenir doenças e promover qualidade de vida.",
                "Você valoriza a promoção da educação em saúde e compreende como o acesso à informação é fundamental para prevenir doenças e contribuir para uma melhor qualidade de vida."
            },
            {
                texto: "Ampliar o acesso da população aos serviços de saúde e incentivar consultas e exames preventivos.",
                afirmacao: "Você reconhece que o acesso aos serviços de saúde e o acompanhamento preventivo são fundamentais para cuidar da população.",
                "Você entende que garantir o acesso aos serviços de saúde e incentivar o acompanhamento preventivo são essenciais para promover o bem-estar e cuidar da saúde da população."
            }
        ]
    },
    {
        enunciado: "A saúde pública depende da participação da população e dos serviços de saúde. Quais atitudes podem contribuir para uma comunidade mais saudável?",
        alternativas: [
            {
                texto: "Participar de campanhas de vacinação e seguir orientações de profissionais da saúde.",
                afirmacao: "Você demonstra responsabilidade com a própria saúde e também com a proteção da comunidade.",
                "Você demonstra cuidado e responsabilidade com a sua saúde, contribuindo também para o bem-estar e a segurança de toda a comunidade."
            },
            {
                texto: "Adotar hábitos saudáveis, como praticar atividades físicas, manter uma alimentação equilibrada e cuidar da saúde mental.",
                afirmacao: "Você compreende que a promoção da saúde envolve cuidados físicos, emocionais e mudanças positivas no cotidiano.",
                "Você entende que promover a saúde significa cuidar do corpo e das emoções, além de adotar hábitos e atitudes que contribuam para uma rotina mais saudável."

            }
        ]
    },
    {
        enunciado: "A saúde mental também faz parte da saúde pública. Quais ações podem ajudar a promover o bem-estar emocional da população?",
        alternativas: [
            {
                texto: "Ampliar o acesso a profissionais e serviços de saúde mental para pessoas que necessitam de apoio.",
                afirmacao: "Você reconhece a importância do acesso ao cuidado profissional e da criação de uma rede de apoio para a saúde mental.",
                "Você entende que buscar ajuda de profissionais e contar com uma rede de apoio são atitudes importantes para preservar e fortalecer a saúde mental."
            },
            {
                texto: "Desenvolver campanhas de conscientização para combater o preconceito e incentivar as pessoas a procurar ajuda.",
                afirmacao: "Você valoriza a informação e acredita que combater o preconceito facilita a busca por apoio e cuidado em saúde mental.",
                "Você reconhece o valor da informação e entende que reduzir o preconceito pode incentivar as pessoas a procurar ajuda e receber os cuidados necessários para a saúde mental."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();
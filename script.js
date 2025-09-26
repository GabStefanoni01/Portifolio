/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const topBtn = document.getElementById('topBtn');
  
    window.addEventListener('scroll', () => {
      let current = '';
      const scrollY = window.scrollY;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
          current = section.getAttribute('id');
          section.classList.add('active');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
  
      if (scrollY > 300) {
        topBtn.style.display = 'block';
      } else {
        topBtn.style.display = 'none';
      }
    });
  
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
    const projetos = {
      kanban: {
        titulo: 'Kanban API',
        descricao: 'Desenvolvi uma API RESTful para gerenciar tarefas em um sistema de Kanban, permitindo criar, mover e organizar tarefas entre colunas como "Backlog", "Em Progresso" e "Concluído".',
        link: 'https://github.com/GabStefanoni01/Kanban-api'
      },
      gestaofi: {
        titulo: 'Gestão Financeira',
        descricao: 'API em Spring Boot com frontend Angular para controle de finanças pessoais. Banco de dados MySQL.',
        link: 'https://github.com/GabStefanoni01/GestaoFinanceiraCompleto'
      },
       gestaoes: {
        titulo: 'Gestão Escolar',
        descricao: 'Este é uma API completo de gestão escolar desenvolvido com Spring Boot Ele permite o gerenciamento de alunos, professores, turmas, disciplinas, notas e frequência de forma simples e eficiente.',
        link: 'https://github.com/GabStefanoni01/GestaoEscolaar'
      },
      ubs: {
        titulo: 'UBS Geraldo de Paula',
        descricao: 'Estamos desenvolvendo soluções para facilitar o acesso a informações para os funcionários da UBS Geraldo de Paula. O Objetivo principal é otimizar o fluxo de dados e garantir agilidade no atendimento.',
        link: 'https://github.com/GabStefanoni01/ubs-repo'
      },
      ptec: {
        titulo: 'Plustec Comércio e serviços técnicos',
        descricao: 'Desenvolvi um sistema para a Assistência Técnica Plustec, empresa autorizada pela Electrolux e Continental, especializada em instalação e manutenção de eletrodomésticos. O site foi projetado para proporcionar uma navegação intuitiva, destacando os serviços oferecidos, como instalação de coifas, cooktops, fogões, lava-louças e lava e seca, além de fornecer informações sobre manutenção preventiva e agendamento de serviços. Focamos em otimizar a experiência do usuário, refletindo a qualidade e a confiabilidade da Plustec no ambiente digital.',
        link: 'https://github.com/GabStefanoni01/Plustec'
      },
      tcc: {
        titulo: 'Trabalho de conclusão de curso(TCC) DailyMed',
        descricao: 'o Daily Med emerge como uma resposta inovadora e proativa para melhorar a gestão de medicamentos, visando proporcionar uma vida mais saudável e autônoma para a população idosa e enferma. Este projeto representa um compromisso contínuo em desenvolver soluções práticas e eficazes para um desafio de saúde significativo e em constante evolução.',
        link: ''
      },
       calc: {
        titulo: 'Calculadora',
        descricao: 'Realizei o desenvolvimento dessa Calculadora em Python em aula na materia de estrutura de dados em 2025',
        link: 'https://github.com/GabStefanoni01/Calculadora'
      }
    };

    function abrirDetalheProjeto(chave) {
      const projeto = projetos[chave];
      const conteudo = `
        <h2>${projeto.titulo}</h2>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank" class="btn-ver-mais">Ver no Github</a>
      `;
      document.getElementById('conteudo-projeto').innerHTML = conteudo;

      const overlay = document.getElementById('overlay');
      const detalhe = document.getElementById('projeto-detalhe');

      overlay.classList.add('ativo');
      detalhe.classList.add('ativo');

      // Animação de "digital loading"
      detalhe.classList.add('tech-animation');
      setTimeout(() => {
        detalhe.classList.remove('tech-animation');
      }, 600);
    }

    function fecharDetalheProjeto() {
      document.getElementById('overlay').classList.remove('ativo');
      document.getElementById('projeto-detalhe').classList.remove('ativo');
    }
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 0 20px #00ffe7, 0 0 40px #00ffe7';
      } else {
        header.style.boxShadow = 'none';
      }
    });

// Adiciona animação de hover nas linguagens
const linguagens = document.querySelectorAll('.linguagem');

linguagens.forEach(linguagem => {
  linguagem.addEventListener('mouseenter', () => {
    // A animação já é tratada pelo CSS, não precisa adicionar nada aqui.
  });

  linguagem.addEventListener('mouseleave', () => {
    // Nenhuma ação necessária ao sair, a animação é tratada pelo CSS.
  });
});
const nomeTexto = "Gabriel Stefanoni";
const tituloTexto = "Software Engineer Backend <:";
const nomeElemento = document.getElementById("typewriter-nome");
const tituloElemento = document.getElementById("typewriter-titulo");

let nomeIndex = 0;
let tituloIndex = 0;

function escreverTexto(elemento, texto, index, callback) {
  if (index < texto.length) {
    elemento.innerHTML += texto.charAt(index);
    setTimeout(() => escreverTexto(elemento, texto, index + 1, callback), 100);
  } else if (callback) {
    callback();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  escreverTexto(nomeElemento, nomeTexto, 0, () => {
    setTimeout(() => {
      escreverTexto(tituloElemento, tituloTexto, 0);
    }, 500);
  });
});
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");
const navLinks = document.querySelectorAll("#side-menu .nav-link");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("show");
});

// Fecha o menu ao clicar em qualquer link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("show");
  });
});

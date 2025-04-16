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
        titulo: 'Kanban App',
        descricao: 'Aplicação completa de gerenciamento de tarefas estilo Trello. Feita com React, Tailwind, Node.js e MongoDB.',
        link: '#'
      },
      gestao: {
        titulo: 'Gestão Financeira',
        descricao: 'API em Spring Boot com frontend Angular para controle de finanças pessoais. Banco de dados MySQL.',
        link: '#'
      },
      vila: {
        titulo: 'Vila Moraes Store',
        descricao: 'Website moderno e responsivo com foco em usabilidade e performance. HTML, CSS e SEO avançado.',
        link: '#'
      }
    };

    function abrirDetalheProjeto(chave) {
      const projeto = projetos[chave];
      const conteudo = `
        <h2>${projeto.titulo}</h2>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank" class="btn-ver-mais">Ver no Portfólio</a>
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
const tituloTexto = "Full Stack Developer <:";
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

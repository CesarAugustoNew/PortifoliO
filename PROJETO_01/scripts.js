// Seleciona o botão "anterior" pelo ID
let prevButton = document.getElementById('prev')

// Seleciona o botão "próximo" pelo ID
let nextButton = document.getElementById('next')

// Seleciona o container principal que envolve o slider
let container = document.querySelector('.container')

// Seleciona todos os itens/carros dentro do slider
let items = container.querySelectorAll('.list .item')

// Seleciona a área dos indicadores (dots e número)
let indicator = document.querySelector('.indicators')

// Seleciona todos os "dots" (li) que representam cada slide
let dots = indicator.querySelectorAll('ul li')

// Seleciona a lista que contém os slides, útil para animações CSS
let list = container.querySelector('.list')

// Variáveis de controle do slider
let active = 0               // índice do slide ativo
let firstPosition = 0        // índice do primeiro slide
let lastPosition = items.length - 1  // índice do último slide

// Função que atualiza o slider e os indicadores
function setSlider() {
    // Remove a classe "active" do slide atualmente ativo
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    // Remove a classe "active" do dot atualmente ativo
    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')

    // Adiciona a classe "active" ao dot correspondente ao slide ativo
    dots[active].classList.add('active')

    // Atualiza o número do slide exibido (ex.: 01, 02, 03)
    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}

// Ação quando o botão "próximo" é clicado
nextButton.onclick = () => {
    // Define a propriedade CSS "--calculation" (pode ser usada em animação)
    list.style.setProperty('--calculation', 1)

    // Calcula o próximo índice; se passar do último, volta para 0
    active = active + 1 > lastPosition ? 0 : active + 1

    // Atualiza o slider e os indicadores
    setSlider()

    // Adiciona a classe "active" ao novo slide ativo
    items[active].classList.add('active') 
}

// Ação quando o botão "anterior" é clicado
prevButton.onclick = () => {
    // Define a propriedade CSS "--calculation" para animação reversa
    list.style.setProperty('--calculation', -1)

    // Calcula o índice anterior; se passar do primeiro, vai para o último
    active = active - 1 < firstPosition ? lastPosition : active - 1

    // Atualiza o slider e os indicadores
    setSlider()

    // Adiciona a classe "active" ao slide agora ativo
    items[active].classList.add('active')
}

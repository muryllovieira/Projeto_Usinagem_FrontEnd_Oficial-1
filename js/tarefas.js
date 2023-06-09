'use strict'

import { pesquisarTarefas } from './apiTarefas.js';
//import "./router.js"

const criarDadosTarefa = async ()  => {
    const tarefasDados = await pesquisarTarefas();

    const containerTarefa = document.querySelector('.cards_turma')

    tarefasDados.forEach((tarefa) => {

        const aLinkCard = document.createElement('a')
        aLinkCard.classList.add('cardLink')


        const card = document.createElement('div')
        card.classList.add('card')

        const spanTipoTarefa = document.createElement('span')
        spanTipoTarefa.textContent = 'Tipo: ' +tarefa.nome_tipo_tarefa

        const imgPeca = document.createElement('img')
        imgPeca.src = tarefa.foto_peca

        const nomeTarefa = document.createElement('p')
        nomeTarefa.textContent =  tarefa.nome_tarefa

        card.append(aLinkCard,imgPeca,spanTipoTarefa,nomeTarefa)
       

        containerTarefa.append(card)
        
    })
 
}

criarDadosTarefa()
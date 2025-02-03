# 📌 Documentação SCRUM - Plano de Estudos Interativo

## 📍 1. Introdução
Este documento detalha a aplicação da metodologia **SCRUM** no desenvolvimento do projeto **Plano de Estudos Interativo para Vestibular**. A ferramenta permite que vestibulandos acompanhem um **cronograma de estudos semanal**, acessem materiais e realizem **simulados interativos**.

## 📍 2. Visão Geral do Projeto

### 🔹 Objetivo
Criar uma plataforma interativa que facilite a **organização dos estudos** para vestibulares, oferecendo um **cronograma semanal dinâmico**, acesso a **materiais didáticos** e **simulados**.

### 🔹 Público-Alvo
Estudantes que se preparam para **vestibulares e ENEM**, buscando um plano de estudos estruturado.

## 📍 3. Papéis do Time SCRUM

| **Papel** | **Responsável** | **Descrição** |
|-----------|------------------|------------------|
| **Product Owner** | Cliente/Stakeholder | Define requisitos, prioriza backlog e valida entregas. |
| **Scrum Master** | Gerente do Projeto | Facilita o SCRUM, resolve impedimentos e garante aderência ao framework ágil. |
| **Equipe de Desenvolvimento** | Dev Frontend, Dev Backend | Responsáveis pelo desenvolvimento e manutenção do sistema. |
| **Designer UX/UI** | Especialista em Design | Define a interface e experiência do usuário. |

## 📍 4. Artefatos do SCRUM

### 🔹 4.1 Product Backlog
Lista de funcionalidades priorizadas:

| **ID** | **Funcionalidade** | **Prioridade** |
|------|------------------|------------|
| **P1** | Implementar tela inicial com cronograma de estudos | Alta |
| **P2** | Criar seletor de semanas para planejamento dinâmico | Alta |
| **P3** | Criar tela de materiais e vincular links de estudo | Alta |
| **P4** | Criar simulado interativo com carregamento de questões | Alta |
| **P5** | Exibir resultados do simulado ao usuário | Média |
| **P6** | Implementar persistência de última seleção do usuário | Baixa |

### 🔹 4.2 Sprint Planning
O projeto foi dividido em **Sprints**, onde cada uma entrega incrementos funcionais:

| **Sprint** | **Objetivo** | **Tarefas** |
|------------|-------------|-----------|
| **Sprint 1** | Criar estrutura básica | Criar HTML/CSS da página principal e do seletor de datas |
| **Sprint 2** | Conectar cronograma e materiais | Implementar Fetch API para carregar CSVs e exibir materiais |
| **Sprint 3** | Criar simulado interativo | Implementar lógica de carregamento dinâmico de questões |
| **Sprint 4** | Refinamento final e testes | Melhorias, ajustes e otimização do desempenho |

## 📍 5. Ciclo de Desenvolvimento

### 🔹 **Daily Scrum**
- Encontro diário de 15 minutos para atualização do time sobre progresso e desafios.

### 🔹 **Sprint Review**
- Revisão das funcionalidades entregues ao final de cada Sprint.
- Demonstração ao Product Owner para validação.

### 🔹 **Sprint Retrospective**
- Discussão sobre melhorias no processo.
- Ajustes para próximas iterações.

## 📍 6. Definição de Pronto (DoD - Definition of Done)
- O código deve estar **testado e funcional**.
- O sistema deve estar **responsivo** e com boa UX/UI.
- Todas as funcionalidades devem estar **integradas e revisadas**.
- O backlog deve estar **atualizado** e validado pelo **Product Owner**.

## 📍 7. Repositório e Deploy
- O projeto está hospedado no **Vercel** para deploy contínuo.
- Código versionado no **GitHub** para controle de alterações.
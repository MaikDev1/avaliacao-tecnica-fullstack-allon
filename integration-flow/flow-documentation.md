# Fluxo de Integração - Smartconnector

## Objetivo
Extrair pedidos confirmados do banco, processar e enviar para a API de pedidos.

## Diagrama Visual
Aqui está o diagrama completo que eu montei:

![Diagrama do Fluxo](diagram.png)

## Query SQL
Está no arquivo `queries.sql` (usei INNER JOIN em todas as tabelas necessárias).

## O que cada nó faz (explicação minha):

- **Query SQL Pedidos Confirmados**: Busca todos os pedidos com status "confirmado" trazendo cliente, itens e produtos.
- **Agrupar Itens por Pedido**: Transforma as linhas planas em um objeto com array de itens (igual o body da API precisa).
- **Filtrar Pedidos Inválidos**: Remove qualquer pedido que não tenha data de entrega ou quantidade zero.
- **Transformar Dados para API**: Monta o JSON exato que o POST /pedidos espera.
- **Validação OK?**: Verifica se está tudo certo antes de enviar (regra de negócio).
- **Enviar para API**: Faz o POST real.
- **Tratamento de Erros**: Se der erro, tenta repetir 1 vez, registra log e notifica o suporte.

## Exemplo de Dados
**Entrada do banco** → vira o body da API (mostrei no arquivo anterior).

## Tratamento de Erros
Pensei em tudo: retry, log e notificação pro suporte caso algo dê errado.

Pronto para usar no Smartconnector!
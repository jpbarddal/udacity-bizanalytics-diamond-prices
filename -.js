# Prevendo Preços de Diamantes
Este projeto tem três objetivos:
* Dar uma amostra do que será feito no Nanodegree
* Te introduzir ao processo de submissão e revisão dos projetos
* Dar uma segurança com o básico antes de você iniciar. Se parecer muito fácil, não se preocupe. Temos outras coisas legais vindo.

### Visão Geral do Projeto

Uma companhia de jóias quer colocar um lance para comprar um grande lote de diamantes, mas não tem certeza de quanto dever ser dado no lance. Neste projeto, você irá usar o resultado de um modelo preditivo para fazer uma recomendação de quanto a companhia deve oferecer no seu lance.

### Numeração nos EUA

Todos os números que serão apresentados neste Nanodegree serão baseados no padrão de numeração dos EUA onde 5,269 é "cinco mil duzentos e sessenta e nove" e 158.1 é "cento e cinquenta e oito inteiros e 1 decimal". Este é um detalhe **muito** importante.

### Detalhes do Projeto

Um distribuidor de diamantes decidiu recentemente sair do mercado e colocou um conjunto de 3.000 diamantes para leilão. Vendo isso como uma grande oportunidade para expandir seu estoque, uma empresa de jóias mostrou interesse em fazer uma oferta. Para decidir o quanto oferecer, a equipe de análise da empresa usou um grande banco de dados de preços de diamante para construir um modelo para prever o preço de um diamante com base em seus atributos. Vocês, como os analistas de negócios, são encarregados de usar os resultados desse modelo para fazer uma recomendação de quanto a empresa deve oferecer.

Você aprenderá a construir modelos de regressão linear no primeiro curso. Por agora, a equação para calcular os preços de diamante previsto é fornecido para você. A equação é mostrada abaixo:

<center>**Price** = -5,269 + 8,413 x **Carat** + 158.1 x **Cut** + 454 x **Clarity**</center><br>


**Passo 1 - Compreender os dados:** Existem dois conjuntos de dados. *diamonds.csv* contém os dados usados para construir o modelo de regressão. *new_diamonds_new.csv* contém os dados para os diamantes que a empresa gostaria de comprar. Ambos os conjuntos de dados contêm dados de quilates, cortes e clareza (carat, cut e clarity) para cada diamante. Apenas o conjunto de dados *diamonds.csv* tem preços. Você vai prever os preços para o conjunto de dados *new_diamonds.csv*.

* *Carat* representa o peso do diamante, e é uma variável numérica.
* *Cut* representa a qualidade do corte do diamante, e cai em 5 categorias: justo, bom, muito bom, ideal e premium (fair, good, very good, ideal e premium). Nos dados, essas categorias são cada uma representada por um número, 1-5
* *Clarity* representa a pureza interna do diamante, e se enquadra em 8 categorias: I1, SI2, SI1, VS1, VS2, VVS2, VVS1 e IF. Nos dados, essas categorias são representadas por um número, 1-8

(Nota: Transformar variáveis de categoria em variáveis ordinais como esta nem sempre é apropriado, mas nós o fizemos aqui para simplificar.)

**Etapa 2 - Calcule o preço previsto para o diamante:** Para cada diamante, conecte os valores para cada uma das variáveis na equação. Em seguida, resolva a equação para obter o preço do diamante estimado ou previsto.

**Passo 3 - Faça uma recomendação:** Agora que você tem o preço previsto para cada diamante, é hora de calcular o preço do lance para todo o conjunto. Nota: O preço do diamante que o modelo prediz representa o preço de varejo final que o consumidor pagará. A empresa geralmente compra diamantes de distribuidores por 70% deste preço, de modo que seu preço de oferta recomendado deve representar isso.

### Submissão do projeto
Para completar o projeto, sinta-se livre para usar qualquer ferramenta analítica que você goste. Sugiro usar uma ferramenta de planilha como Excel, Numbers ou Planilhas do Google. Você também pode fazê-lo no Alteryx e/ou Tableau se você já tiver uma licença. Se você ainda não tem uma licença, você receberá uma após o período de avaliação gratuita do Nanodegree.

** Etapa 1 - Compreendendo o Modelo: **

1. De acordo com o modelo, se um diamante é 1 quilate mais pesado do que outro com o mesmo corte, quanto a mais devo esperar pagar? Por quê?

2. Se você estivesse interessado em um diamante de 1,5 quilates com um corte *Muito bom* (representado por um 3 no modelo) e uma classificação de clareza *VS2* (representado por um 5 no modelo), quanto você deveria pagar por ele segundo o modelo?
 
**Etapa 2 - Visualize os Dados:** Crie dois gráficos de dispersão. Se não tiver a certeza do que é um gráfico de dispersão, consulte [aqui] (https://www.mathsisfun.com/data/scatter-xy-plots.html).
* Gráfico 1 - Plote os dados para os diamantes do banco de dados, com quilates no eixo x e preço no eixo y.
* Gráfico 2 - Plote os dados para os diamantes para os quais você está prevendo preços, quilates no eixo x e preço previsto no eixo y.
* Nota: Você também pode traçar os dois conjuntos de dados no mesmo gráfico em cores diferentes.
* O que chama mais a atenção nesta comparação? Depois de ver esse gráfico, você se sente confiante na capacidade do modelo de prever os preços?

** Etapa 3 - A recomendação: ** Que lance você recomenda para a empresa de jóias? Por favor, explique como chegou a esse número.





/**
 * @author ricardo nishimura
 * myMoneyLog translation messages
 * save as UTF-8 file format
 */
mlog.translation = {
centschar             : ',',
thousandchar          : '.',
'account'             : 'conta',
'accumulated'         : 'acumulado',
'add'                 : 'adicionar',
'apply'               : 'aplicar',
'balance'             : 'saldo',
'category'            : 'categoria',
'category by month'   : 'categoria por mês',
'chart'               : 'gráfico',
'credit'              : 'crédito',
'data editor'         : 'editor dados',
'datasample'          : '2000-01-01\t0,00\tinicio\t\tconta\n2000-01-01\t0,00\tinicio\t\tinvestimento\n2000-01-01\t0,00\tinicio\t\tbolso\n2000-01-01\t0,00\tinicio\t\tcartao credito\n2000-01-01\t0,00\tinicio\talimentacao\n2000-01-01\t0,00\tinicio\tbanco\n2000-01-01\t0,00\tinicio\tcarro\n2000-01-01\t0,00\tinicio\teducacao\n2000-01-01\t0,00\tinicio\tcreditos\n2000-01-01\t0,00\tinicio\tlazer e turismo\n2000-01-01\t0,00\tinicio\tmercado\n2000-01-01\t0,00\tinicio\tmoradia\n2000-01-01\t0,00\tinicio\toutros\n2000-01-01\t0,00\tinicio\tsaude e beleza\n2000-01-01\t0,00\tinicio\ttransporte\n2000-01-01\t0,00\tinicio\tvestuario\n2000-01-01\t0,00\tinicio\timposto e taxa',
'date'                : 'data',
'debit'               : 'débito',
'description'         : 'descrição',
'entries'             : 'lançamentos',
'entry'               : 'entrada',
'expenses by category': 'gastos por categoria',
'filter'              : 'filtrar',
'from account'        : 'da conta',
'future entries'      : 'lançamentos futuros',
'help text'           : '<h1>Como usar</h1><h3>Contas e Categorias</h3>As contas e categorias não necessitam de pré-configuração, a medida que são inseridas elas entrarão automaticamente no sumário.<h3>Lançamento</h3><ul><li><span>As datas são formatadas com ano-mês-dia, sendo o ano com 4 digitos, mês e dia com 2 digitos.<br/>Exemplo (04 de janeiro de 2008): 2008-01-04</span></li><li><span>Os valores negativos são inseridos com o sinal (-), exemplo: -100,00</span></li><li><span>Descrição: utilize caracteres sem acentuação e evite caracteres especiais</span></li><li><span>Os campos categoria e conta possuem suporte à auto-completar, digite a primeira letra e uma lista de opções aparecerá, ou pressione uma tecla de seta e a lista completa irá aparecer, <b>pressione a tecla ESC para esconder a lista</b>, se necessário</span></li></ul><h3>Excluir e Editar</h3>Para excluir um lançamento, pressione o ícone X do lançamento desejado. Note que o lançamento excluído será exibido nos campos de entrada de dados, se desejar desfazer a exclusão ou editar, apenas adicione o lançamento novamente.<h3>Lançamentos recorrentes</h3>Ao inserir um lançamento recorrente, digite todos os dados normalmente, somente especifíque no valor a quantidade de vezes que irá ocorrer, exemplo:<br/>Prestação 600,00 de aluguel anual (12 vezes) que ocorre sempre no dia 5<br/><code>data: 2008-01-05<br/>valor: -600*12<br/>descrição: aluguel<br/>categoria: moradia<br/>conta: conta corrente<br/></code><br/>Note o sinal asterisco (*) simbolizando o vezes.<br/><br/>Outro exemplo seria a compra de uma TV de 550,00 dividido em 10 vezes, no campo valor você digita: -550/10<br/>Ou seja:<br/><code>data: 2008-01-10<br/>valor: -550/10<br/>descrição: TV<br/>categoria: presente<br/>conta: cartao credito<br/></code><br/>Serão realizados 10 lançamentos de -55,00 em todos os dias 10.<br/>Note que ocorrerá arredondamento do valor se necessário.<h3>Transferências</h3>Para realizar transferência de uma conta para a outra, deixe o campo categoria em branco, ao sair do campo categoria com a tecla TAB surgirá um novo campo "para conta", digite a conta de origem e a de destino, ao adicionar, dois lançamentos ocorrerão automaticamente (débito e crédito).<h3>Editor de dados</h3>Utilize o editor de dados se preferir editar a fonte de dados diretamente, algumas vezes é muito prático. Cada campo de dado é separado por um caractere de tabulação, por fim apenas pressione aplicar para salvar suas alterações.<h3>Pesquisa/Filtragem</h3>Os lançamentos podem ser filtrados facilmente digitando no campo filtrar. Filtragens avançados podem ser realizadas utilizando expressões regulares, selecione a opção "regex". <p>Exemplo: Filtrar lançamentos em "lazer" no mês de dezembro de 2007:</p><code>(2007-12).*lazer</code> <br/><br/><br/>',
'help'                : 'ajuda',
'months'              : 'meses',
'no data'             : 'nenhum dado',
'of'                  : 'de',
'option'              : 'opção',
'options'             : 'opções',
'overview'            : 'geral',
'page'                : 'página',
'regex'               : 'regex',
'regular expression'  : 'expressão regular',
'show last'           : 'mostrar últimos',
'show'                : 'mostrar',
'summary'             : 'saldos',
'text data source'    : 'texto fonte de dados',
'this total'          : 'este total',
'to account'          : 'para conta',
'total'               : 'total',
'value'               : 'valor'
};

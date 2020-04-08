/*OBSERVAÇÕES
    Named Exports
    você pode exportar mais de um valor. Quando for importar
utilize as chaves para especificar cada valor. O nome importado de

import{arq.import, arq.import } devem contém mesmo nome do export

import * as exportandoTudo

podemos também exportar function, class, const

Características:
 ** Strict mode
 - 'use strict' por padrão em todos os arquivos.

 ** Variáveis ficam no module apenas
 - Não vazam para o escopo global

 **This fora de um objeto faz referência a undefined
 - ao invés de fazer referência ao window.

 **Assíncrono

 *** 'use strict' ***

 nome = 'Dhiego'; Erro, variável global
 delete Arrayprototype; Erro, não deletável
 window.top = 200; Erro, não pode mudar
 const arguments = 3.14; Erro, palavra é reservada do JS.
*/

import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
Atomic Design
Este projeto adota a metodologia de Atomic Design para criar uma arquitetura de componentes reutilizáveis e escaláveis. A seguir, estão os principais conceitos aplicados:

1. Átomos
   Componentes básicos e indivisíveis, como botões e campos de entrada.

Exemplo: Button, Input 2. Moléculas
Combinações de átomos que formam unidades funcionais, como um item de lista.

Exemplo: TodoItem 3. Organismos
Agrupamentos de moléculas e átomos que formam seções completas da interface, como uma lista de tarefas.

Exemplo: TodoList 4. Templates
Estruturas de página que organizam organismos e definem o layout geral.

Exemplo: TodoTemplate 5. Páginas
Instâncias de templates preenchidas com conteúdo real, representando a página final.

Obs. A pasta "hooks" não participa do Atomic Design pois não é algo que aparece no DOM.

# **COMO FAZER O USO DO ALERTA**

### **Primeiro: Faça a importação do componente "Alerta" e do hook "useAlerta"**

```javascript
import { useAlerta } from "../../hooks/useAlerta"; 
import Alerta from "../../components/Alerta/Alerta"; 
```

- **`useAlerta`**: Este é o hook customizado que gerencia o estado do alerta (mensagem, tipo, e visibilidade).
- **`Alerta`**: Componente visual que exibe o alerta na interface do usuário.

### **Segundo: Utilize o hook `useAlerta` dentro do seu componente**

Dentro do componente onde você deseja mostrar o alerta, utilize o hook `useAlerta` para gerenciar seu estado.

```javascript
const { mensagemAlerta, tipoAlerta, mostrarAlerta, exibirAlerta } = useAlerta();
```

- **`mensagemAlerta`**: A mensagem que será exibida no alerta.
- **`tipoAlerta`**: O tipo do alerta (por exemplo: `"success"`, `"danger"`, `"warning"`, `"info"`).
- **`mostrarAlerta`**: Um valor booleano que determina se o alerta está visível ou não.
- **`exibirAlerta`**: A função que você usa para exibir o alerta, passando a mensagem, tipo e o tempo que o alerta deve permanecer visível.

### **Terceiro: Exiba o alerta com a função `exibirAlerta`**

Chame a função `exibirAlerta` quando desejar mostrar um alerta. Você pode passar três parâmetros:
1. **`mensagem`**: A mensagem que será mostrada no alerta.
2. **`tipo`**: O tipo de alerta (opcional, com o valor padrão `"info"`).
3. **`tempo`**: O tempo (em milissegundos) que o alerta ficará visível (opcional, com o valor padrão de 2000ms).

Exemplo de como exibir um alerta:

```javascript
exibirAlerta("Cadastro realizado com sucesso!", "success", 3000);
```

Este alerta aparecerá com a mensagem "Cadastro realizado com sucesso!", terá o estilo de sucesso e desaparecerá após 3 segundos.

### **Quarto: Exiba o componente `Alerta` no JSX**

Adicione o componente `Alerta` no JSX, passando os estados e funções necessários:

```jsx
<Alerta
  tipo={tipoAlerta}
  mensagem={mensagemAlerta}
  visivel={mostrarAlerta}
  aoFechar={() => setMostrarAlerta(false)}
/>
```

- **`tipo`**: O tipo do alerta, que pode ser `"success"`, `"danger"`, `"warning"`, etc.
- **`mensagem`**: A mensagem a ser exibida no alerta.
- **`visivel`**: Controle de visibilidade do alerta, baseado no estado `mostrarAlerta`.
- **`aoFechar`**: Função que será chamada quando o botão de fechar for clicado, geralmente para esconder o alerta (`setMostrarAlerta(false)`).

### **Quinto: Personalize e use conforme necessário**

O hook `useAlerta` e o componente `Alerta` podem ser usados em qualquer lugar da sua aplicação para exibir mensagens de alerta, seja em formulários, processos de login, entre outros. Basta chamar `exibirAlerta` e passar os parâmetros adequados.


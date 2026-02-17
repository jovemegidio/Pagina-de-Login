# Frontend — Login Page

Interface da página de login construída com **React 19**, **Tailwind CSS** e **Radix UI**.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento em `localhost:3000` |
| `npm run build` | Gera o build otimizado para produção |
| `npm test` | Executa os testes |
| `npm run deploy` | Faz build e deploy no GitHub Pages |

## Path aliases

O projeto usa `@/` como alias para a pasta `src/`:

```js
import { Button } from '@/components/ui/button';
import LoginPage from '@/pages/LoginPage';
```

Isso é configurado via CRACO + jsconfig.json.

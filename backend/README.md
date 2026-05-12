# Backend - Portfolio API

API em Python/Flask para receber mensagens de contato do formulário e enviar via Gmail.

## Setup Local

### 1. Gerar senha de app do Gmail

1. Acesse: https://myaccount.google.com/apppasswords
2. Selecione "Mail" e "Windows Computer" (ou seu SO)
3. Copie a senha gerada (16 caracteres)

### 2. Configurar variáveis de ambiente

```bash
# Copiar arquivo de exemplo
cp .env.example .env

# Editar .env com seus dados
GMAIL_EMAIL=seu-email@gmail.com
GMAIL_PASSWORD=sua-senha-de-16-caracteres-aqui
```

### 3. Instalar dependências

```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate

pip install -r requirements.txt
```

### 4. Rodar localmente

```bash
python app.py
```

A API rodará em `http://localhost:5000`

## Endpoints

### POST /send-message
Recebe e envia email de contato.

**Body:**
```json
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "mensagem": "Olá, gostaria de conversar sobre um projeto..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email enviado com sucesso"
}
```

### GET /health
Verificar se a API está online.

## Variáveis de Ambiente

- `GMAIL_EMAIL`: Seu email Gmail
- `GMAIL_PASSWORD`: Senha de app do Gmail (não a senha da conta!)

## Deploy

### Option 1: Render.com (Recomendado - Gratuito)

1. Push seu código para GitHub (já está)
2. Acesse https://render.com e faça login com GitHub
3. Clique "New +" → "Web Service"
4. Selecione seu repositório
5. Configure:
   - **Name:** portfolio-api
   - **Environment:** Python
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `python app.py`
6. Adicione variáveis de ambiente (Environment):
   - `GMAIL_EMAIL`
   - `GMAIL_PASSWORD`
7. Deploy!

A URL será algo como: `https://portfolio-api.onrender.com`

### Option 2: Railway.app

1. Acesse https://railway.app
2. Conecte ao GitHub
3. Selecione o repositório
4. Configure variáveis de ambiente
5. Deploy automático

### Atualizar URL no Frontend

Depois que fizer deploy, atualize no `.env.local` do frontend:

```
VITE_API_URL=https://portfolio-api.onrender.com
```

## Troubleshooting

**"Erro: Login inválido"**
- Certifique-se que 2FA está ativado no Gmail
- Use a senha de app (16 caracteres), não a senha da conta
- Se criou a senha de app há muito tempo, regenere uma nova

**"CORS Error"**
- Verifique se o `VITE_API_URL` está correto
- Na lista de `origins` do Flask, adicione seu domínio de deploy

**Email não chega**
- Verifique a pasta de Spam
- Gmail às vezes marca como suspeito na primeira vez

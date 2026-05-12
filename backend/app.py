from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "https://portfolio-gray-pi-pukhxurdry.vercel.app", "https://seu-dominio.com"])

GMAIL_EMAIL = os.getenv("GMAIL_EMAIL", "luccasalnunes@gmail.com")
GMAIL_PASSWORD = os.getenv("GMAIL_PASSWORD")

@app.route('/send-message', methods=['POST'])
def send_message():
    try:
        data = request.get_json()

        # Validar dados
        if not all([data.get('nome'), data.get('email'), data.get('mensagem')]):
            return jsonify({"success": False, "error": "Campos obrigatórios faltando"}), 400

        # Montar email
        msg = MIMEMultipart()
        msg['Subject'] = f"Novo contato: {data['nome']}"
        msg['From'] = GMAIL_EMAIL
        msg['To'] = GMAIL_EMAIL

        body = f"""
Novo contato do seu portfólio:

Nome: {data['nome']}
Email: {data['email']}

Mensagem:
{data['mensagem']}
        """

        msg.attach(MIMEText(body, 'plain'))

        # Enviar email
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(GMAIL_EMAIL, GMAIL_PASSWORD)
            server.sendmail(GMAIL_EMAIL, GMAIL_EMAIL, msg.as_string())

        return jsonify({"success": True, "message": "Email enviado com sucesso"}), 200

    except Exception as e:
        print(f"Erro ao enviar email: {str(e)}")
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)

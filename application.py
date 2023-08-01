from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from completer.chat import Chat
from pathlib import Path
import json
import os

app = Flask(__name__)
CORS(app)


@app.route('/chat', methods=['POST'])
def chat():
    try:
        user_input = request.json['message']
        print(f"Received message: {user_input}")
        chat = Chat()
        response = chat.interpret(user_input)
        print(f"Sending response: {response}")
        return jsonify({'response': response})
    except Exception as e:
        print(f"Error handling chat request: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/delete_logs', methods=['POST'])
def delete_logs():
    folders = ['suggestions', 'results', 'interpretations']
    for folder in folders:
        path = Path(f'logs/{folder}')
        files = path.glob('*.json')
        for file in files:
            file.unlink()
    return jsonify({'response': "Deleted all log files"})

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)

application = app

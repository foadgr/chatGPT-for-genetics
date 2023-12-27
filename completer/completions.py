import os
from typing import List

from openai import OpenAI
client = OpenAI()

class ChatCompleter:
    def __init__(self, model="gpt-3.5-turbo-1106", max_tokens=1000):
        self.model = model
        self.max_tokens = max_tokens
        
    def response(self, messages: List[dict]) -> str:
        response = client.chat.completions.create(
            model=self.model, 
            messages=messages,
            max_tokens=self.max_tokens,
            temperature=0,
            top_p=0.5,
            frequency_penalty=0,
            presence_penalty=0,
            stop=["###"]
        )
        print(response.choices[0].message.content)
        return response.choices[0].message.content
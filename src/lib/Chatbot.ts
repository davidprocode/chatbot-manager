import { MessageHandler } from "../lib/Message";

export class Chatbot {
  async reiciveMessageHandler(_message: { from: any; body: any }) {
    const message = _message.body.trim().toLowerCase();
    const from = _message.from;
    const timestamp = Date.now();

    await MessageHandler.save({
      from: _message.from,
      body: _message.body,
      timestamp: timestamp,
    });
    await MessageHandler.isNewFrom(from);
  }
}

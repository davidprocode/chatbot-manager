import {} from "os";
let storage: Message[] = [];

export type Message = {
  from: string;
  body: string;
  timestamp: number;
};

export class MessageHandler {
  static isNewFrom(from: string): boolean {
    let index = storage.find((m) => m.from === from);
    if (index) {
      return false;
    }
    return true;
  }
  static save(_message: Message) {
    storage.push({
      from: _message.from,
      body: _message.body,
      timestamp: _message.timestamp,
    });
  }
}

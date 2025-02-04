let storage: Message[] = [];

export type Message = {
  from: string;
  body: string;
  timestamp: number;
};

export class MessageHandler {
  static async isNewFrom(from: string): Promise<boolean> {
    let index = await storage.find((m) => m.from === from);
    if (index) {
      return false;
    }
    return true;
  }
  static getLastMessageFrom(from: string) {
    const lastMessage = storage
      .filter((m) => m.from === from)
      .sort((a, b) => b.timestamp - a.timestamp);
    return lastMessage[0];
  }

  static async save(_message: Message) {
    await storage.push({
      from: _message.from,
      body: _message.body,
      timestamp: _message.timestamp,
    });
  }
}

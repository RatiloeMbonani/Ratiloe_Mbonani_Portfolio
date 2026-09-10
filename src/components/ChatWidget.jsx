import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { matchAnswer } from "../data/faq";

const GREETING = { from: "bot", text: "Hi! Ask me about my background, skills, projects, or certificates." };
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question) return;

    const answer = matchAnswer(question);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: question },
      { from: "bot", text: answer },
    ]);
    setInput("");
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel">
          <div className="chat-panel-header">
            <span>Ask about my portfolio</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>
          <div className="chat-panel-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble chat-bubble-${m.from}`}>
                {m.text}
              </div>
            ))}
          </div>
          <form className="chat-input-row" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
            />
            <button type="submit" aria-label="Send">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle chat">
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
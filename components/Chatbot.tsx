"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/types";
import { Message, X, Send } from "@/lib/icons";
import {
  detectIntent,
  quickChips,
  replyForLocale,
  welcomeMessage,
} from "@/content/chatbot";
import type { ChatReply, LocalizedReply } from "@/content/chatbot";

type Msg = {
  id: number;
  role: "user" | "bot";
  text: string;
  link?: LocalizedReply["link"];
  actions?: LocalizedReply["actions"];
  disclaimer?: boolean;
};

function nl(text: string) {
  return text.split("\n").map((seg, i) =>
    seg === "" ? <br key={i} /> : <span key={i}>{seg}</span>
  );
}

export default function Chatbot({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const msgIdRef = useRef(0);

  useEffect(() => {
    const start: Msg = { id: msgIdRef.current++, role: "bot", text: welcomeMessage[locale] };
    setMessages([start]);
  }, [locale]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  function answer(q: string, viaChipIntent?: string) {
    const userMsg: Msg = { id: msgIdRef.current++, role: "user", text: q };
    const hasDevanagari = /[\u0900-\u097F]/.test(q);
    let reply: ChatReply;
    if (viaChipIntent) {
      const intent = quickChips.find((c) => c.intent === viaChipIntent);
      reply = detectIntent(intent?.intent ?? q).reply;
    } else {
      reply = detectIntent(q).reply;
    }
    const localized = replyForLocale(reply, locale, hasDevanagari);
    const botMsg: Msg = {
      id: msgIdRef.current++,
      role: "bot",
      text: localized.text,
      link: localized.link,
      actions: localized.actions,
      disclaimer: localized.disclaimer,
    };
    setMessages((m) => [...m, userMsg, botMsg]);
  }

  function send(text?: string, chipIntent?: string) {
    const q = (text ?? input).trim();
    if (!q) return;
    answer(q, chipIntent);
    setInput("");
  }

  return (
    <>
      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open Policy Adda AI chat"}
      >
        {open ? <X size={22} /> : <Message size={22} />}
      </button>

      {open && (
        <div className="chat-panel" role="dialog" aria-label="Policy Adda AI Assistant">
          <div className="chat-head">
            <div className="chat-avatar" aria-hidden="true">🤖</div>
            <div>
              <p className="chat-name">Policy Adda AI Assistant</p>
              <p className="chat-online">Online • Insurance Assistant</p>
            </div>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {messages.map((m) => (
              <div key={m.id} className={`chat-row ${m.role === "user" ? "from-user" : "from-bot"}`}>
                <div className="chat-bubble">
                  <p className="chat-text">{nl(m.text)}</p>
                  {m.link && (
                    <a
                      className="chat-link"
                      href={m.link.href}
                      target={m.link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {m.link.label}
                    </a>
                  )}
                  {m.actions && (
                    <div className="chat-actions">
                      {m.actions.map((a, i) => (
                        <a
                          key={i}
                          className="chat-action"
                          href={a.href}
                          target={a.external ? "_blank" : undefined}
                          rel="noreferrer"
                        >
                          {a.label}
                        </a>
                      ))}
                    </div>
                  )}
                  {m.disclaimer && (
                    <p className="chat-disclaimer">* Claims are settled as per insurer policy terms. We assist but never promise approval.</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="chat-chips">
            {quickChips.map((c) => (
              <button key={c.intent} className="chat-chip" onClick={() => send(c.label[locale], c.intent)}>
                {c.label[locale]}
              </button>
            ))}
          </div>

          <form
            className="chat-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              ref={inputRef}
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={locale === "hi" ? "अपना संदेश लिखें..." : "Type your message..."}
              aria-label="Chat message"
            />
            <button type="submit" className="chat-send" aria-label="Send message">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
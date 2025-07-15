"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, I'm here to assist you with appointments and general inquiries. How may I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your message. I'm here to help with scheduling, services, and general questions. What would you like to know?",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 bg-neutral-900 text-white p-4 rounded-full shadow-lg hover:bg-neutral-700 transition-all z-50 ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-80 h-96 bg-white rounded-none shadow-2xl border border-neutral-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-neutral-900 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium tracking-wide text-sm uppercase">Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-neutral-300">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-xs p-3 text-sm ${
                    message.isBot ? "bg-neutral-50 text-neutral-800" : "bg-neutral-900 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-neutral-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-neutral-200 text-sm focus:outline-none focus:border-neutral-400"
              />
              <button
                onClick={handleSendMessage}
                className="bg-neutral-900 text-white p-2 hover:bg-neutral-700 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

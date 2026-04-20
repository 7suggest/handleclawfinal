"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What exactly is HandleClaw?",
    answer: "It’s a smart AI assistant that works 24/7 in the background without resting. It reads your emails, schedules your meetings, and helps with your daily tasks without you having to click a button. Think of it as a digital employee that never sleeps.",
  },
  {
    question: "Do I need any technical skills to use this?",
    answer: "Not at all! We handle the entire complex setup for you—no coding, no messing with servers, or confusing computer stuff required. Once it's set up, you simply chat with your assistant through an app you already use like WhatsApp, Slack, or Telegram.",
  },
  {
    question: "Can I just install this myself for free?",
    answer: "You could, as the base technology is open-source. However, setting it up securely is incredibly difficult. Most people who try end up with huge security holes, accidentally exposing their private emails and data. We've even seen people break their computers trying to install it. You are paying us to lock down your security so your data stays perfectly safe.",
  },
  {
    question: "What exactly do I get when I sign up?",
    answer: "We securely set up your AI on a private cloud server, safely connect it to your email and calendar, and build up to 3 custom automated workflows just for you. We also include a 14-day premium support period. You'll be up and running the exact same day, chatting with your new assistant on your phone.",
  },
  {
    question: "What happens after I pay?",
    answer: "We'll reach out within 48 hours to schedule a quick 20-minute kickoff call. Then, we do a live setup session together anywhere from 1 to 3 hours. By the end of that day, your bot will be entirely live and ready to chat!",
  },
  {
    question: "Is it safe to give AI access to my email?",
    answer: "Security is our absolute #1 priority. We use strict security middle-men so the AI never sees your actual passwords. We configure everything to easily pass rigid corporate security reviews and you get an instant 'kill switch' to securely disconnect the AI at any moment with one click.",
  },
  {
    question: "What if the AI makes a mistake or sends a bad email?",
    answer: "It can't! We purposely start your AI with strict 'read-only' mode. That means it can read emails and draft responses for you to review, but it cannot actually hit 'send' until you approve it. We expand its permissions gradually as you build trust in the system.",
  },
  {
    question: "What happens if things break or need updates?",
    answer: "Software updates happen, and app connections sometimes break naturally over time. That's why we offer ongoing Managed Care. We monitor the system, install updates, and fix any issues quietly in the background so you and your team never have to worry about the tech.",
  },
  {
    question: "Should I choose a Cloud Server or a Mac Mini?",
    answer: "Most customers choose our basic Cloud Server option (which costs about $5-$10/month) because it’s highly secure, incredibly reliable, and we can manage it remotely for you effortlessly. You only need the Mac Mini if you absolutely want Apple iMessage connected, or want to own the physical hardware.",
  },
  {
    question: "Can I get different AI assistants for my whole team?",
    answer: "Yes! Many companies buy this for their entire 5 to 50-person team. You can give the CEO an assistant for emails and meetings, while the Sales team gets an assistant that connects to their CRM, and Finance gets one for reports. We'll help you map out exactly what your team requires.",
  },
  {
    question: "I heard OpenAI bought the technology behind this. Does it still work?",
    answer: "Yes! The fact that OpenAI bought the core open-source project just proves how powerful this technology is. The core engine remains open-source, and we specialize in securely setting it up and maintaining it for you, regardless of who owns the project's brand.",
  },
  {
    question: "Do I have to live in San Francisco to use this?",
    answer: "No, almost all of our customers are remote. We set up everything perfectly over a quick video call, no matter where you live in the world. (In-person setup is available as a premium option if you happen to be in the SF Bay Area, though!)",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-16 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-primary text-sm">
              quiz
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-0.5">
              Got Questions?
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-white/5 bg-[#0a0a0c] rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "border-primary/40 shadow-[0_0_30px_-10px_rgba(236,32,32,0.15)]" : "md:hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none cursor-pointer"
              >
                <span className="text-lg font-bold text-white/90 pr-8 leading-snug">
                  {faq.question}
                </span>
                <span className={`text-primary transition-transform duration-300 transform shrink-0 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[1000px] pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-white/60 leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6">Still have questions? We are happy to help.</p>
          <button 
            className="border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 text-white font-medium px-8 py-3 rounded-full transition-all duration-300"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ask us directly
          </button>
        </div>
      </div>
    </section>
  );
}

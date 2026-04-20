"use client";
import React, { useEffect, useRef } from "react";
import { useAuthModal } from "./AuthModalContext";

export default function AuthModal() {
  const { isOpen, closeModal } = useAuthModal();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="auth-modal-overlay"
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      onClick={handleBackdropClick}
      style={{ animation: "authFadeIn 0.25s ease-out" }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal */}
      <div
        ref={modalRef}
        id="auth-modal"
        className="relative w-full max-w-md rounded-2xl border border-white/10 overflow-hidden"
        style={{ animation: "authSlideUp 0.35s cubic-bezier(0.16,1,0.3,1)" }}
      >
        {/* Glow effects */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-60 h-60 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

        {/* Content */}
        <div className="relative bg-[#0a0a0e]/95 backdrop-blur-xl p-8 md:p-10">
          {/* Close button */}
          <button
            id="auth-modal-close"
            onClick={closeModal}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer group"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-white/50 group-hover:text-white text-lg transition-colors">
              close
            </span>
          </button>

          {/* Logo & Heading */}
          <div className="text-center mb-8">
            {/* Mini claw icon */}
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl primary-gradient flex items-center justify-center shadow-[0_0_30px_rgba(236,32,32,0.3)]">
              <span className="material-symbols-outlined text-white text-2xl">
                lock_open
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Sign in to continue
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">
              Create an account or log in to book your&nbsp;consultation&nbsp;call.
            </p>
          </div>

          {/* Auth Buttons */}
          <div className="space-y-3 mb-6">
            {/* Google */}
            <button
              id="auth-google-btn"
              className="w-full flex items-center gap-3 bg-white hover:bg-gray-100 text-[#1f1f1f] font-semibold py-3.5 px-5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-black/20"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Apple */}
            <button
              id="auth-apple-btn"
              className="w-full flex items-center gap-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white font-semibold py-3.5 px-5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span>Continue with Apple</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs font-medium uppercase tracking-widest">
              or
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Email option */}
          <button
            id="auth-email-btn"
            className="w-full flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/15 text-white/70 hover:text-white font-medium py-3 px-5 rounded-xl transition-all duration-200 cursor-pointer text-sm"
          >
            <span className="material-symbols-outlined text-base">mail</span>
            <span>Continue with Email</span>
          </button>

          {/* Terms */}
          <p className="text-white/25 text-[11px] text-center mt-6 leading-relaxed">
            By continuing, you agree to our{" "}
            <a href="#" className="text-white/40 hover:text-white/60 underline underline-offset-2 transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-white/40 hover:text-white/60 underline underline-offset-2 transition-colors">
              Privacy Policy
            </a>
          </p>

          {/* Security badge */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <span className="material-symbols-outlined text-[#10B981] text-sm">
              verified_user
            </span>
            <span className="text-[11px] text-white/30 font-medium">
              256-bit SSL encrypted
            </span>
          </div>
        </div>
      </div>

      {/* Inline animation keyframes */}
      <style jsx>{`
        @keyframes authFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes authSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

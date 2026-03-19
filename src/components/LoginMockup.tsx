import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Eye, EyeOff, LockIcon } from 'lucide-react';
import { themes } from '@/lib/authThemes';
import type { ThemeKey } from '@/lib/authThemes';

// ─── Login Card Mockup ────────────────────────────────────────────────────────

function LoginMockup({ theme }: { theme: ThemeKey }) {
  const t = themes[theme].preview;
  const [showPass, setShowPass] = useState(false);

  return (
    <motion.div
      key={theme}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full h-full ${t.wrapper} p-6 flex flex-col items-center justify-center`}
    >
      <div className={`w-full max-w-[280px] rounded-lg p-6 ${t.card}`}>

        {/* Heading */}
        <p className={`text-sm font-semibold ${t.heading} font-mono mb-0.5`}>Sign in</p>
        <p className={`text-xs ${t.muted} mb-4`}>to continue to your workspace</p>

        {/* Email input */}
        <div className="mb-2">
          <div className={`w-full text-xs px-3 py-2 rounded ${t.input} flex items-center gap-2`}>
            <Mail className="w-3 h-3 opacity-40 flex-shrink-0" />
            <span className={`${t.inputPlaceholder} text-xs`}>Email address</span>
          </div>
        </div>

        {/* Password input */}
        <div className="mb-4">
          <div className={`w-full text-xs px-3 py-2 rounded ${t.input} flex items-center gap-2`}>
            <LockIcon className="w-3 h-3 opacity-40 flex-shrink-0" />
            <span className={`${t.inputPlaceholder} text-xs flex-1`}>
              {showPass ? 'mypassword' : '••••••••••'}
            </span>
            <button onClick={() => setShowPass(!showPass)} className="opacity-40">
              {showPass
                ? <EyeOff className="w-3 h-3" />
                : <Eye className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Primary button */}
        <button
          className={`w-full text-xs font-semibold py-2 rounded font-mono ${t.button} mb-4 transition-colors`}
        >
          Continue
        </button>

        {/* Divider */}
        <div className={`flex items-center gap-2 mb-3 border-t ${t.divider}`}>
          <span className={`text-[10px] ${t.muted} -mt-2.5 bg-inherit px-1.5 mx-auto`}>or</span>
        </div>

        {/* Social */}
        <button
          className={`w-full text-xs py-2 rounded ${t.socialBtn} flex items-center justify-center gap-2 transition-colors`}
        >
          <Github className="w-3 h-3" />
          <span className={t.socialText}>Continue with GitHub</span>
        </button>

        {/* Footer */}
        <p className={`text-[10px] ${t.muted} text-center mt-4`}>
          No account?{' '}
          <span className={`${t.link} cursor-pointer font-medium`}>Sign up</span>
        </p>
      </div>
    </motion.div>
  );
}

export default LoginMockup;
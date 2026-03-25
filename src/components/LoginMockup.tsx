import { useState } from 'react';
import { Github, Mail, Eye, EyeOff, LockIcon } from 'lucide-react';
import { themes } from '@/lib/authThemes';
import type { ThemeKey } from '@/lib/authThemes';

function LoginMockup({ theme }: { theme: ThemeKey }) {
  const t = themes[theme].preview;
  const [showPass, setShowPass] = useState(false);

  return (
    <div
      key={theme}
      className={`w-full h-full ${t.wrapper} p-6 flex flex-col items-center justify-center crossfade-enter`}
    >
      <div className={`w-full max-w-[280px] rounded-lg p-6 ${t.card}`}>
        <p className={`text-sm font-semibold ${t.heading} font-mono mb-0.5`}>Sign in</p>
        <p className={`text-xs ${t.muted} mb-4`}>to continue to your workspace</p>

        <div className="mb-2">
          <div className={`w-full text-xs px-3 py-2 rounded ${t.input} flex items-center gap-2`}>
            <Mail className="w-3 h-3 opacity-40 flex-shrink-0" />
            <span className={`${t.inputPlaceholder} text-xs`}>Email address</span>
          </div>
        </div>

        <div className="mb-4">
          <div className={`w-full text-xs px-3 py-2 rounded ${t.input} flex items-center gap-2`}>
            <LockIcon className="w-3 h-3 opacity-40 flex-shrink-0" />
            <span className={`${t.inputPlaceholder} text-xs flex-1`}>
              {showPass ? 'mypassword' : '••••••••••'}
            </span>
            <button onClick={() => setShowPass(!showPass)} className="opacity-40">
              {showPass ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
            </button>
          </div>
        </div>

        <button className={`w-full text-xs font-semibold py-2 rounded font-mono ${t.button} mb-4 transition-colors`}>
          Continue
        </button>

        <div className={`flex items-center gap-2 mb-3 border-t ${t.divider}`}>
          <span className={`text-[10px] ${t.muted} -mt-2.5 bg-inherit px-1.5 mx-auto`}>or</span>
        </div>

        <button className={`w-full text-xs py-2 rounded ${t.socialBtn} flex items-center justify-center gap-2 transition-colors`}>
          <Github className="w-3 h-3" />
          <span className={t.socialText}>Continue with GitHub</span>
        </button>

        <p className={`text-[10px] ${t.muted} text-center mt-4`}>
          No account?{' '}
          <span className={`${t.link} cursor-pointer font-medium`}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginMockup;

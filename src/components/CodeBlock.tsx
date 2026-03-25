import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({ 
  code, 
  language = 'bash', 
  showLineNumbers = true,
  className = '' 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className={`relative overflow-hidden bg-kotauth-bg-code border border-kotauth-surface-2 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-kotauth-surface-2 bg-kotauth-surface-1/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-3 text-xs text-kotauth-text-tertiary font-mono">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-kotauth-text-tertiary hover:text-kotauth-text-secondary transition-colors font-mono"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-kotauth-success" />
              <span className="text-kotauth-success">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-xs sm:text-sm leading-relaxed">
          <code>
            {lines.map((line, index) => (
              <div key={index} className="flex">
                {showLineNumbers && (
                  <span className="w-8 text-right text-kotauth-text-muted select-none mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                )}
                <span 
                  className="text-kotauth-text-secondary"
                  dangerouslySetInnerHTML={{ 
                    __html: highlightCode(line) 
                  }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

// Single-pass tokenizer — avoids multi-pass regex corruption where later patterns
// match class names and attribute values inserted by earlier passes.
function highlightCode(line: string): string {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const span = (cls: string, text: string) =>
    `<span class="${cls}">${esc(text)}</span>`;

  const KEYWORDS = new Set([
    // JS / TS
    'const', 'let', 'var', 'function', 'async', 'await', 'import', 'export',
    'from', 'default', 'return', 'if', 'else', 'for', 'while', 'new',
    'class', 'interface', 'type', 'true', 'false', 'null', 'undefined',
    // Python
    'def', 'as', 'in', 'not', 'and', 'or', 'with', 'print',
    // Go
    'func', 'package', 'main',
    // Bash
    'curl', 'echo',
  ]);

  // Priority order: comment > string > number > identifier > any-other-char.
  // First alternative that matches wins — already-inserted HTML never gets re-scanned.
  const TOKEN_RE = new RegExp(
    '(\\/\\/[^\\n]*)' +                   // 1  JS/Go line comment
    '|(#[^\\n]*)' +                        // 2  Bash/Python line comment
    '|(`[^`\\n]*`)' +                      // 3  Template literal (whole, incl. ${})
    '|("(?:[^"\\\\\\n]|\\\\.)*")' +        // 4  Double-quoted string
    "|('(?:[^'\\\\\\n]|\\\\.)*')" +        // 5  Single-quoted string
    '|(\\b\\d+\\b)' +                      // 6  Integer literal
    '|([a-zA-Z_$][\\w$]*)' +              // 7  Identifier / keyword
    '|([\\s\\S])',                         // 8  Any other character (one at a time)
    'g'
  );

  let result = '';
  let m: RegExpExecArray | null;

  while ((m = TOKEN_RE.exec(line)) !== null) {
    const [, c1, c2, tmpl, dq, sq, num, ident, other] = m;

    if (c1 !== undefined)     result += span('text-kotauth-text-muted', c1);
    else if (c2 !== undefined) result += span('text-kotauth-text-muted', c2);
    else if (tmpl !== undefined) result += span('text-green-400', tmpl);
    else if (dq !== undefined)   result += span('text-green-400', dq);
    else if (sq !== undefined)   result += span('text-green-400', sq);
    else if (num !== undefined)  result += span('text-orange-400', num);
    else if (ident !== undefined)
      result += KEYWORDS.has(ident) ? span('text-purple-400', ident) : esc(ident);
    else if (other !== undefined) {
      if (other === '✓') result += span('text-kotauth-success', other);
      else result += esc(other);
    }
  }

  return result;
}

// Tabbed Code Block for multiple languages
interface TabbedCodeBlockProps {
  tabs: {
    label: string;
    language: string;
    code: string;
  }[];
  className?: string;
}

export function TabbedCodeBlock({ tabs, className = '' }: TabbedCodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`overflow-hidden bg-kotauth-bg-code border border-kotauth-surface-2 ${className}`}>
      {/* Tabs */}
      <div className="flex items-center border-b border-kotauth-surface-2 bg-kotauth-surface-1/50">
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-xs font-mono transition-colors relative ${
                activeTab === index 
                  ? 'text-kotauth-text-primary' 
                  : 'text-kotauth-text-tertiary hover:text-kotauth-text-secondary'
              }`}
            >
              {tab.label}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-kotauth-primary"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Code content */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <CodeBlock 
              code={tabs[activeTab].code} 
              language={tabs[activeTab].language}
              showLineNumbers={false}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

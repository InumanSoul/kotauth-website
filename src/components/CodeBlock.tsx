import { useState } from 'react';
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
  className = '',
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
                    __html: highlightCode(line),
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

function highlightCode(line: string): string {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const span = (cls: string, text: string) =>
    `<span class="${cls}">${esc(text)}</span>`;

  const KEYWORDS = new Set([
    'const', 'let', 'var', 'function', 'async', 'await', 'import', 'export',
    'from', 'default', 'return', 'if', 'else', 'for', 'while', 'new',
    'class', 'interface', 'type', 'true', 'false', 'null', 'undefined',
    'def', 'as', 'in', 'not', 'and', 'or', 'with', 'print',
    'func', 'package', 'main',
    'curl', 'echo',
  ]);

  const TOKEN_RE = new RegExp(
    '(\\/\\/[^\\n]*)' +
    '|(#[^\\n]*)' +
    '|(`[^`\\n]*`)' +
    '|("(?:[^"\\\\\\n]|\\\\.)*")' +
    "|('(?:[^'\\\\\\n]|\\\\.)*')" +
    '|(\\b\\d+\\b)' +
    '|([a-zA-Z_$][\\w$]*)' +
    '|([\\s\\S])',
    'g'
  );

  let result = '';
  let m: RegExpExecArray | null;

  while ((m = TOKEN_RE.exec(line)) !== null) {
    const [, c1, c2, tmpl, dq, sq, num, ident, other] = m;

    if (c1 !== undefined) result += span('text-kotauth-text-muted', c1);
    else if (c2 !== undefined) result += span('text-kotauth-text-muted', c2);
    else if (tmpl !== undefined) result += span('text-green-400', tmpl);
    else if (dq !== undefined) result += span('text-green-400', dq);
    else if (sq !== undefined) result += span('text-green-400', sq);
    else if (num !== undefined) result += span('text-orange-400', num);
    else if (ident !== undefined)
      result += KEYWORDS.has(ident) ? span('text-purple-400', ident) : esc(ident);
    else if (other !== undefined) {
      if (other === '✓') result += span('text-kotauth-success', other);
      else result += esc(other);
    }
  }

  return result;
}

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
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-kotauth-primary transition-all" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div key={activeTab} className="crossfade-enter">
          <CodeBlock
            code={tabs[activeTab].code}
            language={tabs[activeTab].language}
            showLineNumbers={false}
          />
        </div>
      </div>
    </div>
  );
}

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
        <pre className="font-mono text-sm leading-relaxed">
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

// Simple syntax highlighting
function highlightCode(line: string): string {
  // Comments
  line = line.replace(/(#.*$)/gm, '<span class="text-kotauth-text-muted">$1</span>');
  
  // Strings
  line = line.replace(/(".*?"|'.*?')/g, '<span class="text-green-400">$1</span>');
  
  // Keywords
  const keywords = ['const', 'let', 'var', 'function', 'async', 'await', 'import', 'from', 'export', 'default', 'return', 'if', 'else', 'for', 'while', 'class', 'interface', 'type'];
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
    line = line.replace(regex, '<span class="text-purple-400">$1</span>');
  });
  
  // Functions
  line = line.replace(/(\w+)(\()/g, '<span class="text-blue-400">$1</span>$2');
  
  // Numbers
  line = line.replace(/\b(\d+)\b/g, '<span class="text-orange-400">$1</span>');
  
  // Success indicators
  line = line.replace(/(✓)/g, '<span class="text-kotauth-success">$1</span>');
  
  // Docker command prompt
  line = line.replace(/^(\$)/, '<span class="text-kotauth-primary">$1</span>');
  
  return line;
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

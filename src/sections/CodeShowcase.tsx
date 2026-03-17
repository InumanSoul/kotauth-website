import { Check } from 'lucide-react';
import { TabbedCodeBlock } from '@/components/CodeBlock';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { GradientGlow } from '@/components/GradientGlow';

const codeTabs = [
  {
    label: 'JavaScript',
    language: 'javascript',
    code: `// Create a user
const user = await fetch('http://localhost:8080/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'secure-password'
  })
});

// Authenticate
const session = await fetch('http://localhost:8080/api/sessions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'secure-password'
  })
});`,
  },
  {
    label: 'Python',
    language: 'python',
    code: `import requests

# Create a user
user = requests.post('http://localhost:8080/api/users', json={
    'email': 'user@example.com',
    'password': 'secure-password'
})

# Authenticate
session = requests.post('http://localhost:8080/api/sessions', json={
    'email': 'user@example.com',
    'password': 'secure-password'
})`,
  },
  {
    label: 'Go',
    language: 'go',
    code: `package main

import (
    "bytes"
    "encoding/json"
    "net/http"
)

func main() {
    // Create a user
    body, _ := json.Marshal(map[string]string{
        "email":    "user@example.com",
        "password": "secure-password",
    })
    http.Post("http://localhost:8080/api/users", 
        "application/json", bytes.NewBuffer(body))
    
    // Authenticate
    http.Post("http://localhost:8080/api/sessions",
        "application/json", bytes.NewBuffer(body))
}`,
  },
  {
    label: 'cURL',
    language: 'bash',
    code: `# Create a user
curl -X POST http://localhost:8080/api/users \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "secure-password"
  }'

# Authenticate
curl -X POST http://localhost:8080/api/sessions \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "password": "secure-password"
  }'`,
  },
];

const features = [
  'RESTful API design',
  'Standard HTTP endpoints',
  'JSON request/response',
  'Webhook support',
  'Comprehensive documentation',
];

export function CodeShowcase() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <GradientGlow 
        className="top-1/2 left-0 -translate-y-1/2" 
        size={700}
        color="rgba(0, 119, 168, 0.08)"
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Code Block */}
          <AnimatedSection>
            <TabbedCodeBlock tabs={codeTabs} />
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection>
              <span className="eyebrow mb-4 block">Developer Experience</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-kotauth-text-primary leading-tight mb-4 font-mono">
                Developer-first APIs
              </h2>
              <p className="text-lg text-kotauth-text-secondary mb-8">
                Clean, intuitive APIs that just work. Get started in minutes with our 
                comprehensive REST API and documentation.
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-kotauth-success/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-kotauth-success" />
                    </div>
                    <span className="text-kotauth-text-secondary font-mono">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

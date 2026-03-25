import { Check } from 'lucide-react';
import { TabbedCodeBlock } from '@/components/CodeBlock';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { GradientGlow } from '@/components/GradientGlow';

// All examples demonstrate the same workflow:
// 1. Provision a user in a workspace
// 2. Assign a role for RBAC
// 3. Pull the audit trail to verify
// Base URL shape: {host}/t/{workspaceSlug}/api/v1
// Auth: Bearer kauth_<slug>_<key>  (scoped API key)

const codeTabs = [
  {
    label: 'JavaScript',
    language: 'javascript',
    code: `const BASE = 'https://auth.acme.com/t/myapp/api/v1';
const headers = {
  'Authorization': 'Bearer kauth_myapp_sk_xxxxxxxx',
  'Content-Type': 'application/json',
};

// 1. Provision a user
const user = await fetch(\`\${BASE}/users\`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    username: 'jsmith',
    email: 'j.smith@acme.com',
    fullName: 'John Smith',
    password: 'Str0ng!Pass',
  }),
}).then(r => r.json());
// → { id: 42, username: 'jsmith', enabled: true, ... }

// 2. Assign a role (RBAC)
await fetch(\`\${BASE}/users/\${user.id}/roles/3\`, {
  method: 'POST', headers,
});

// 3. Pull audit trail
const { data: events } = await fetch(
  \`\${BASE}/audit-logs?userId=\${user.id}&limit=5\`,
  { headers }
).then(r => r.json());
// → [{ eventType: 'ADMIN_USER_CREATED', ... }, ...]`,
  },
  {
    label: 'Python',
    language: 'python',
    code: `import requests

BASE = "https://auth.acme.com/t/myapp/api/v1"
headers = {
    "Authorization": "Bearer kauth_myapp_sk_xxxxxxxx",
    "Content-Type": "application/json",
}

# 1. Provision a user
user = requests.post(f"{BASE}/users", headers=headers, json={
    "username": "jsmith",
    "email": "j.smith@acme.com",
    "fullName": "John Smith",
    "password": "Str0ng!Pass",
}).json()
# → {"id": 42, "username": "jsmith", "enabled": True, ...}

# 2. Assign a role (RBAC)
requests.post(
    f"{BASE}/users/{user['id']}/roles/3",
    headers=headers
)

# 3. Pull audit trail
events = requests.get(
    f"{BASE}/audit-logs",
    headers=headers,
    params={"userId": user["id"], "limit": 5}
).json()["data"]
# → [{"eventType": "ADMIN_USER_CREATED", ...}, ...]`,
  },
  {
    label: 'Go',
    language: 'go',
    code: `package main

import (
    "bytes"; "encoding/json"
    "fmt";   "net/http"
)

const (
    base   = "https://auth.acme.com/t/myapp/api/v1"
    apiKey = "Bearer kauth_myapp_sk_xxxxxxxx"
)

func main() {
    client := &http.Client{}

    // 1. Provision a user
    payload, _ := json.Marshal(map[string]string{
        "username": "jsmith",
        "email":    "j.smith@acme.com",
        "fullName": "John Smith",
        "password": "Str0ng!Pass",
    })
    req, _ := http.NewRequest("POST", base+"/users",
        bytes.NewBuffer(payload))
    req.Header.Set("Authorization", apiKey)
    req.Header.Set("Content-Type", "application/json")
    resp, _ := client.Do(req)

    var user map[string]any
    json.NewDecoder(resp.Body).Decode(&user)
    // user["id"] → 42

    // 2. Assign a role (RBAC)
    req, _ = http.NewRequest("POST",
        fmt.Sprintf("%s/users/%v/roles/3", base, user["id"]), nil)
    req.Header.Set("Authorization", apiKey)
    client.Do(req)

    fmt.Printf("Provisioned: %s\\n", user["username"])
}`,
  },
  {
    label: 'cURL',
    language: 'bash',
    code: `BASE="https://auth.acme.com/t/myapp/api/v1"
KEY="Bearer kauth_myapp_sk_xxxxxxxx"

# 1. Provision a user
USER=$(curl -s -X POST "$BASE/users" \\
  -H "Authorization: $KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "jsmith",
    "email": "j.smith@acme.com",
    "fullName": "John Smith",
    "password": "Str0ng!Pass"
  }')

USER_ID=$(echo $USER | jq -r '.id')
# → 42

# 2. Assign a role (RBAC)
curl -s -X POST "$BASE/users/$USER_ID/roles/3" \\
  -H "Authorization: $KEY"

# 3. Pull audit trail
curl -s "$BASE/audit-logs?userId=$USER_ID&limit=5" \\
  -H "Authorization: $KEY" \\
  | jq '[.data[].eventType]'
# → ["ADMIN_USER_CREATED", "ADMIN_ROLE_ASSIGNED"]`,
  },
];

const features = [
  'Scoped API keys — Bearer kauth_<slug>_<key>',
  'Per-workspace base URL  /t/{slug}/api/v1',
  'Full RBAC — roles, groups, composite inheritance',
  'RFC 7807 Problem Details on every error',
  'Paginated responses with total / offset / limit',
  'Immutable audit trail — 30+ event types',
];

export function CodeShowcase() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <GradientGlow
        className="top-1/2 left-0 -translate-y-1/2"
        size={700}
        color="rgba(0, 119, 168, 0.18)"
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
                Provision, authorize, audit
              </h2>
              <p className="text-lg text-kotauth-text-secondary mb-8">
                One consistent REST API across every resource. Scoped API keys per workspace,
                RFC-compliant errors, and a full audit trail baked in from day one.
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-kotauth-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-kotauth-success" />
                    </div>
                    <span className="text-kotauth-text-secondary font-mono text-sm leading-relaxed">
                      {feature}
                    </span>
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

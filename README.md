# 🛡️ AI PR Guard

**Zero-noise GitHub Action that audits pull requests for risks introduced by AI coding tools (Cursor, Claude, Copilot).**

AI coding tools are incredible for velocity, but they frequently introduce:
- **Hardcoded secrets & prototype keys** left in test/setup files.
- **Arbitrary code execution** (`eval`, `new Function`) generated during quick fixes.
- **SQL / Command injection vulnerabilities** through unchecked string interpolations.

AI PR Guard runs directly on your PR diffs. **If there are no vulnerabilities, it stays completely silent.** No notification spam, no generic LLM praise, zero noise.

---

## 🚀 Quick Start

Add `.github/workflows/ai-pr-guard.yml` to your repository:

```yaml
name: AI PR Guard
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: n4da1z/ai-pr-guard@main
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

## 🎯 How It Works

1. **Lightweight & Fast:** Runs on native Node 20 with zero external dependencies in < 5 seconds.
2. **Actionable Feedback:** If an issue is found, comments directly on the PR with the exact risk and suggested remediation.
3. **Zero Noise:** Clean PR? No comments posted. Your team's notification log stays clean.

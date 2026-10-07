# Pretos Touch — Agent Specification Pack

Feed these Markdown files to the Antigravity agent as project requirements.

## Recommended order

1. `00_MASTER_BRIEF.md` — source of truth
2. `01_INFORMATION_ARCHITECTURE.md`
3. `02_SEO_STRATEGY.md`
4. `03_DESIGN_SYSTEM.md`
5. `04_ECOMMERCE_AND_CONVERSION.md`
6. `05_CONTENT_AND_SOCIAL.md`
7. `06_IMPLEMENTATION_RULES.md`
8. `07_LAUNCH_CHECKLIST.md`

## Agent instruction

Treat `00_MASTER_BRIEF.md` as the primary product requirement document.

Treat the remaining documents as detailed specifications. If two requirements conflict, follow the priority order in `00_MASTER_BRIEF.md` and flag material conflicts rather than silently inventing business requirements.

Business-specific details such as phone number, WhatsApp number, address, policies, payment provider, shipping rates, social handles, and final prices must be supplied by the owner. Use explicit placeholders instead of inventing them.

## Important

This pack describes the product and build requirements. It does not require a particular framework, CMS, payment provider, hosting provider, or database. The agent should inspect the existing project and choose/retain the appropriate implementation based on the repository.

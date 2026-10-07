# Pretos Touch — Technical Agent Specification Pack

This is the technical companion to the first Pretos Touch specification pack.

## Files

- `08_PAGE_BY_PAGE_UI.md` — exact UI requirements for each route
- `09_COMPONENT_TREE.md` — reusable component architecture
- `10_PRODUCT_DATA_SCHEMA.md` — product/category/review/article domain models
- `11_DATABASE_SCHEMA.md` — relational database structure
- `12_API_REQUIREMENTS.md` — frontend/backend contracts
- `13_INITIAL_PRODUCT_SEED_DATA.md` — five initial products + five categories
- `14_AGENT_BUILD_SEQUENCE.md` — recommended implementation order
- `15_ENVIRONMENT_CONFIG.md` — configuration and secrets contract

## How the agent should use this

Read the original master brief first, then these technical specifications.

Priority:
1. Master brief
2. Implementation rules
3. Page/UI specification
4. Data and database schema
5. API contract
6. Build sequence
7. Launch checklist

## Important

The seed products contain placeholders for facts that have not been supplied by the business owner. The agent must not turn those placeholders into invented claims.

The technical specification intentionally does not force a particular framework, database, CMS, payment provider, or hosting provider. The agent should inspect the existing repository and adapt these contracts to the selected stack.

const PROMPTS = [
  { cat: 'UI/UX Design', role: 'Senior UI Designer', prompt: 'Design a dark-mode SaaS dashboard interface for a cybersecurity analytics platform. Include a sidebar navigation, real-time threat feed, and interactive data widgets. Use a professional blue-gray palette with clear visual hierarchy.', tags: ['dashboard', 'dark-mode', 'saas'], locked: true },
  { cat: 'UI/UX Design', role: 'Product Designer', prompt: 'Create a mobile-first onboarding flow for a fintech app. Include 3 progressive slides with illustrations, a skip button, and a clear CTA. Focus on reducing cognitive load while conveying trust.', tags: ['onboarding', 'fintech', 'mobile'], locked: true },
  { cat: 'UI/UX Design', role: 'UX Designer', prompt: 'Design a form with 12+ fields for a health insurance application. Group into logical sections, add progress indicators, and include smart defaults. Ensure WCAG 2.1 AA compliance throughout.', tags: ['forms', 'healthcare', 'accessibility'], locked: false },
  { cat: 'UI/UX Design', role: 'Design Lead', prompt: 'Design a premium e-commerce product detail page for a luxury watch. Include high-res image gallery, 360-degree viewer, size guide, reviews section, and checkout CTA. Maintain exclusive brand tone.', tags: ['ecommerce', 'luxury', 'product-page'], locked: true },
  { cat: 'UI/UX Design', role: 'UI Designer', prompt: 'Create a responsive data table for a CRM system with sortable columns, inline editing, batch actions, pagination, and a filter panel. Optimize for density without sacrificing readability.', tags: ['data-table', 'crm', 'enterprise'], locked: false },
  { cat: 'UI/UX Design', role: 'UX Architect', prompt: 'Design a multi-step checkout flow for an e-commerce platform. Include guest checkout, saved payment methods, order summary sidebar, and progress stepper. Minimize abandonment risk.', tags: ['checkout', 'ecommerce', 'conversion'], locked: true },
  { cat: 'UI/UX Design', role: 'Visual Designer', prompt: 'Build a design system component library sidebar showing color tokens, typography scale, spacing grid, and interactive component examples. Include dark/light mode toggle.', tags: ['design-system', 'documentation', 'components'], locked: false },
  { cat: 'UI/UX Design', role: 'UX Researcher', prompt: 'Design a feedback collection interface with NPS survey, CSAT rating, and open-ended questions. Include visual progress and thank-you state. Mobile-responsive with minimal friction.', tags: ['feedback', 'survey', 'research'], locked: false },
  { cat: 'UI/UX Design', role: 'UI Developer', prompt: 'Create an interactive color palette picker with HSL sliders, hex input, contrast ratio display, and palette export in CSS/Tailwind formats. Real-time preview on sample UI mockups.', tags: ['color-tool', 'accessibility', 'developer-tools'], locked: true },
  { cat: 'Frontend Dev', role: 'React Engineer', prompt: 'Build a reusable virtualized list component in React with TypeScript. Support variable row heights, infinite scroll, sticky headers, and keyboard navigation. Memoize rendering for 10,000+ items.', tags: ['react', 'typescript', 'performance'], locked: true },
  { cat: 'Frontend Dev', role: 'CSS Architect', prompt: 'Implement a responsive grid system using CSS Grid with 12 columns, breakpoints at 480/768/1024/1440px, gutter options, and utility classes for alignment. Support both container-based and full-width layouts.', tags: ['css', 'grid', 'responsive'], locked: false },
  { cat: 'Frontend Dev', role: 'Next.js Developer', prompt: 'Build an app router layout in Next.js 14 with nested routes, loading states, error boundaries, and parallel routes for a dashboard. Include server components by default and client islands only where needed.', tags: ['nextjs', 'app-router', 'ssr'], locked: true },
  { cat: 'Frontend Dev', role: 'Web Performance Lead', prompt: 'Audit and optimize a React SPA with 85/100 Lighthouse score. Implement code splitting, lazy loading for images and routes, preconnect hints, resource hints, and critical CSS inlining. Target 95+ score.', tags: ['performance', 'optimization', 'lighthouse'], locked: false },
  { cat: 'Frontend Dev', role: 'TypeScript Specialist', prompt: 'Design a type-safe event emitter system with generics for payload types, wildcard listeners, async handlers, and typed error handling. Include full test coverage with Vitest.', tags: ['typescript', 'events', 'testing'], locked: true },
  { cat: 'Frontend Dev', role: 'Accessibility Engineer', prompt: 'Audit and remediate a web app for WCAG 2.2 AA compliance. Cover focus management, ARIA landmarks, screen reader announcements, color contrast, motion reduction, and keyboard navigation.', tags: ['a11y', 'wcag', 'audit'], locked: true },
  { cat: 'Frontend Dev', role: 'State Manager', prompt: 'Design a state management solution with Zustand for a multi-step form with complex dependencies. Include persistence, undo/redo, cross-step validation, and devtools integration.', tags: ['state-management', 'zustand', 'forms'], locked: false },
  { cat: 'Backend Dev', role: 'Node.js Architect', prompt: 'Design a RESTful API for a multi-tenant SaaS platform with JWT authentication, role-based access control, rate limiting, request validation, structured error responses, and OpenAPI documentation.', tags: ['api', 'authentication', 'rbac'], locked: true },
  { cat: 'Backend Dev', role: 'Database Engineer', prompt: 'Design a PostgreSQL schema for an e-commerce platform with products, variants, inventory, orders, users, and reviews. Include indexes for common queries, partitioning for orders, and full-text search.', tags: ['postgresql', 'schema', 'ecommerce'], locked: true },
  { cat: 'Backend Dev', role: 'Security Engineer', prompt: 'Implement OAuth 2.0 + OIDC authentication flow with PKCE for a SPA. Include refresh token rotation, CSRF protection, secure cookie configuration, and session management. Support Google and GitHub providers.', tags: ['oauth', 'security', 'authentication'], locked: true },
  { cat: 'Backend Dev', role: 'Microservices Lead', prompt: 'Design a microservices architecture for a real-time notification system. Include service discovery, message queuing with RabbitMQ, WebSocket gateway, and idempotent event processing with dead-letter queues.', tags: ['microservices', 'rabbitmq', 'websockets'], locked: false },
  { cat: 'Backend Dev', role: 'DevOps Engineer', prompt: 'Create a CI/CD pipeline with GitHub Actions for a monorepo. Include linting, type-checking, unit tests, integration tests, Docker build, and deployment to staging/production environments with approval gates.', tags: ['cicd', 'docker', 'github-actions'], locked: true },
  { cat: 'Backend Dev', role: 'GraphQL Architect', prompt: 'Design a GraphQL API for a content management system. Implement N+1 query prevention with DataLoader, pagination with cursors, subscription for real-time updates, and field-level authorization.', tags: ['graphql', 'dataloader', 'subscriptions'], locked: true },
  { cat: 'Backend Dev', role: 'Cache Strategist', prompt: 'Design a multi-layer caching strategy for a high-traffic API. Use Redis for session and query cache, CDN for static assets, application-level memoization, and cache invalidation patterns.', tags: ['caching', 'redis', 'performance'], locked: false },
  { cat: 'AI & ML', role: 'Prompt Engineer', prompt: 'Design a chain-of-thought prompt for a financial analysis LLM that extracts key metrics from earnings reports. Structure the response as JSON with confidence scores and source citations.', tags: ['prompt-engineering', 'llm', 'finance'], locked: true },
  { cat: 'AI & ML', role: 'ML Engineer', prompt: 'Build a feature engineering pipeline for customer churn prediction. Include time-windowed aggregations, categorical encoding, feature scaling, and SHAP-based feature selection. Use scikit-learn pipelines.', tags: ['ml', 'feature-engineering', 'churn'], locked: true },
  { cat: 'AI & ML', role: 'NLP Specialist', prompt: 'Design a text classification system for customer support tickets. Use a fine-tuned BERT model with confidence thresholds for auto-routing, human escalation, and continuous active learning feedback.', tags: ['nlp', 'bert', 'classification'], locked: false },
  { cat: 'AI & ML', role: 'AI Product Manager', prompt: 'Define evaluation metrics for a conversational AI assistant. Include accuracy, hallucination rate, response latency, user satisfaction, and task completion rate. Design an A/B testing framework.', tags: ['evaluation', 'conversational-ai', 'metrics'], locked: true },
  { cat: 'AI & ML', role: 'MLOps Engineer', prompt: 'Build an MLOps pipeline with MLflow for experiment tracking, model registry, and deployment. Include data versioning with DVC, automated retraining triggers, and model performance monitoring.', tags: ['mlops', 'mlflow', 'deployment'], locked: true },
  { cat: 'AI & ML', role: 'RAG Architect', prompt: 'Design a Retrieval-Augmented Generation system for a legal document Q&A. Implement chunking strategy, embedding selection, vector database (Pinecone/Weaviate), and hybrid search with reranking.', tags: ['rag', 'vectors', 'llm'], locked: true },
  { cat: 'AI & ML', role: 'Data Scientist', prompt: 'Create an anomaly detection pipeline for real-time system monitoring. Use isolation forest with streaming windowing, alert thresholds, drift detection, and automated root cause analysis suggestions.', tags: ['anomaly-detection', 'monitoring', 'real-time'], locked: false },
  { cat: 'AI & ML', role: 'AI Ethics Lead', prompt: 'Design a bias detection and mitigation framework for an ML hiring tool. Include demographic parity analysis, counterfactual evaluation, fairness metrics dashboard, and human-in-the-loop override.', tags: ['ethics', 'bias', 'fairness'], locked: true },
  { cat: 'Mobile', role: 'iOS Engineer', prompt: 'Build a SwiftUI navigation architecture for a social media app with tab bar, modal sheets, deep linking, and custom transitions. Support iOS 17+ with Swift 6 features and structured concurrency.', tags: ['swiftui', 'ios', 'navigation'], locked: true },
  { cat: 'Mobile', role: 'Android Engineer', prompt: 'Design a Jetpack Compose UI for a ride-sharing app. Include map integration, bottom sheet for ride options, real-time driver tracking, and smooth gesture-based interactions.', tags: ['jetpack-compose', 'android', 'maps'], locked: true },
  { cat: 'Mobile', role: 'React Native Dev', prompt: 'Build a cross-platform mobile UI for a health tracking app with charts, notifications, offline-first data sync, and biometric authentication. Use Reanimated 3 for 60fps animations.', tags: ['react-native', 'health', 'offline-first'], locked: true },
  { cat: 'Mobile', role: 'Mobile UX Designer', prompt: 'Design a thumb-friendly navigation pattern for a one-handed finance app. Place primary actions in the bottom half, use gesture-based shortcuts, and optimize for reachability on 6.7+ inch screens.', tags: ['mobile-ux', 'gestures', 'finance'], locked: false },
  { cat: 'Mobile', role: 'Flutter Developer', prompt: 'Create a Flutter widget library for a design system. Include buttons, inputs, cards, modals, and toasts with theming support, dark/light modes, and responsive layout adapters.', tags: ['flutter', 'design-system', 'widgets'], locked: false },
  { cat: 'Mobile', role: 'Mobile Security Lead', prompt: 'Design a mobile app security architecture. Include certificate pinning, encrypted local storage, runtime integrity checks, OAuth PKCE flow, and biometric gate for sensitive operations.', tags: ['security', 'encryption', 'biometrics'], locked: true },
  { cat: 'DevOps & Cloud', role: 'Cloud Architect', prompt: 'Design a multi-region AWS architecture for a global SaaS platform. Include EKS for orchestration, RDS Multi-AZ with read replicas, CloudFront CDN, Route53 latency routing, and disaster recovery strategy.', tags: ['aws', 'multi-region', 'kubernetes'], locked: true },
  { cat: 'DevOps & Cloud', role: 'Kubernetes Admin', prompt: 'Create a Kubernetes manifest set for a microservices app. Include Deployments, Services, Ingress, HPA, PodDisruptionBudget, NetworkPolicies, and ConfigMaps with Helm chart packaging.', tags: ['kubernetes', 'helm', 'microservices'], locked: true },
  { cat: 'DevOps & Cloud', role: 'Terraform Engineer', prompt: 'Design a Terraform module for a VPC with public/private subnets across 3 AZs. Include NAT gateways, flow logs, VPC endpoints for S3/DynamoDB, and transit gateway for future multi-account setup.', tags: ['terraform', 'vpc', 'infrastructure'], locked: false },
  { cat: 'DevOps & Cloud', role: 'SRE Lead', prompt: 'Design SLO/SLI framework for a payment processing system. Track latency p95, error budget, availability, and throughput. Implement alerting with multi-window, multi-burn-rate policy in Prometheus.', tags: ['sre', 'monitoring', 'prometheus'], locked: true },
  { cat: 'DevOps & Cloud', role: 'Platform Engineer', prompt: 'Build an internal developer platform UI with Backstage. Include service catalog, software templates, TechDocs, and plugin marketplace. Enable self-service infrastructure provisioning.', tags: ['backstage', 'developer-platform', 'self-service'], locked: true },
  { cat: 'DevOps & Cloud', role: 'Service Mesh Expert', prompt: 'Implement an Istio service mesh for a microservices deployment. Include mTLS, traffic splitting for canary deployments, circuit breakers, and distributed tracing with Jaeger.', tags: ['istio', 'service-mesh', 'tracing'], locked: false },
  { cat: 'DevOps & Cloud', role: 'Cost Optimization Lead', prompt: 'Design a FinOps cost optimization strategy for AWS. Include reserved instance analysis, right-sizing recommendations, S3 lifecycle policies, and automated cost anomaly alerts with budget thresholds.', tags: ['finops', 'cost-optimization', 'aws'], locked: false },
  { cat: 'Data & Analytics', role: 'Data Engineer', prompt: 'Build an ETL pipeline with Apache Airflow that ingests data from 5 sources (PostgreSQL, S3, Stripe API, Google Analytics, HubSpot). Include data quality checks, retry logic, and Slack notifications.', tags: ['etl', 'airflow', 'data-pipeline'], locked: true },
  { cat: 'Data & Analytics', role: 'Analytics Engineer', prompt: 'Design a dbt project for a marketing analytics data model. Stage raw events, build fact/dim tables for campaigns, attribution, and customer journey. Document with dbt docs and test with dbt tests.', tags: ['dbt', 'data-modeling', 'analytics'], locked: true },
  { cat: 'Data & Analytics', role: 'BI Developer', prompt: 'Create a Looker dashboard for executive revenue reporting. Include monthly recurring revenue, churn rate, customer acquisition cost, LTV, and cohort retention. Scheduled email delivery.', tags: ['looker', 'dashboard', 'revenue'], locked: false },
  { cat: 'Data & Analytics', role: 'Data Architect', prompt: 'Design a data lakehouse architecture on AWS. Use S3 as data lake, Glue for catalog, Athena for querying, Redshift for analytics, and QuickSight for visualization. Implement medallion architecture.', tags: ['data-lake', 'aws', 'architecture'], locked: true },
  { cat: 'Data & Analytics', role: 'Streaming Engineer', prompt: 'Build a real-time analytics pipeline with Kafka Streams for a social media platform. Process 100K+ events/sec, aggregate engagement metrics, detect trending topics, and output to Redis for low-latency access.', tags: ['kafka', 'streaming', 'real-time'], locked: true },
  { cat: 'Data & Analytics', role: 'Data Governance Lead', prompt: 'Design a data governance framework for a healthcare analytics platform. Include data classification, PII masking, audit logging, access control policies, and compliance with HIPAA and GDPR.', tags: ['governance', 'compliance', 'healthcare'], locked: true },
  { cat: 'Data & Analytics', role: 'SQL Expert', prompt: 'Write an optimized SQL query for a time-series analysis of 50M+ rows. Include window functions for rolling averages, date binning, CTE for intermediate calculations, and execution plan analysis.', tags: ['sql', 'optimization', 'time-series'], locked: false },
  { cat: 'Data & Analytics', role: 'A/B Testing Lead', prompt: 'Design a statistical A/B testing framework. Include sample size calculation, sequential testing with alpha spending, delta method for ratio metrics, and dashboard for real-time experiment monitoring.', tags: ['ab-testing', 'statistics', 'experimentation'], locked: true },
  { cat: 'Blockchain & Web3', role: 'Smart Contract Dev', prompt: 'Write an ERC-721 NFT smart contract in Solidity with lazy minting, royalty support (EIP-2981), merkle tree allowlist, and reveal mechanism. Include comprehensive Foundry tests.', tags: ['solidity', 'nft', 'smart-contract'], locked: true },
  { cat: 'Blockchain & Web3', role: 'dApp Developer', prompt: 'Build a React dApp that connects to MetaMask, displays NFT collection, implements buy/offer/trade flows, and integrates with IPFS for metadata. Use Wagmi and RainbowKit.', tags: ['dapp', 'react', 'ethereum'], locked: true },
  { cat: 'Blockchain & Web3', role: 'DeFi Engineer', prompt: 'Design a DeFi yield aggregator smart contract. Include deposit/withdraw, strategy allocation, compound rewards, emergency pause, and fee structure. Optimize for gas efficiency.', tags: ['defi', 'yield', 'gas-optimization'], locked: true },
  { cat: 'Blockchain & Web3', role: 'Security Auditor', prompt: 'Perform a smart contract security audit checklist. Cover reentrancy, access control, oracle manipulation, flash loan attacks, signature replay, and integer overflow. Include Slither and Mythril analysis.', tags: ['security-audit', 'smart-contract', 'testing'], locked: true },
  { cat: 'Blockchain & Web3', role: 'Web3 Frontend Dev', prompt: 'Build a Web3 dashboard showing wallet portfolio across multiple chains (Ethereum, Polygon, Arbitrum). Include token balances, NFT gallery, transaction history, and gas price tracker.', tags: ['web3', 'dashboard', 'multi-chain'], locked: true },
  { cat: 'Testing & QA', role: 'QA Engineer', prompt: 'Write a test plan for an e-commerce checkout flow. Include unit tests, integration tests, end-to-end tests with Playwright, performance testing with k6, and security testing for payment processing.', tags: ['test-plan', 'e2e', 'playwright'], locked: true },
  { cat: 'Testing & QA', role: 'Test Automation Lead', prompt: 'Build a test automation framework with Playwright and TypeScript. Include page object model, fixture management, parallel execution, visual regression testing, and CI integration.', tags: ['automation', 'playwright', 'framework'], locked: true },
  { cat: 'Testing & QA', role: 'Performance Engineer', prompt: 'Design a load testing strategy for a real-time chat application. Simulate 100K concurrent connections, measure message latency, server resource usage, and identify bottlenecks with profiling.', tags: ['performance', 'load-testing', 'websockets'], locked: false },
  { cat: 'Testing & QA', role: 'Security Tester', prompt: 'Create a penetration testing checklist for a web application. Cover OWASP Top 10: SQL injection, XSS, CSRF, SSRF, IDOR, authentication bypass, and insecure deserialization. Include remediation steps.', tags: ['penetration-testing', 'owasp', 'security'], locked: true },
  { cat: 'Testing & QA', role: 'Accessibility Tester', prompt: 'Build an automated accessibility audit pipeline. Integrate axe-core with Playwright, run WCAG 2.2 AA checks, generate violation reports, and track regressions over time with dashboard.', tags: ['a11y', 'automation', 'axe'], locked: true },
  { cat: 'Creative & Content', role: 'Creative Director', prompt: 'Develop a visual brand identity for a Web3 NFT marketplace. Include logo concepts, color system, typography selections, iconography style, and application mockups for web and mobile.', tags: ['brand-identity', 'web3', 'nft'], locked: true },
  { cat: 'Creative & Content', role: 'Copywriter', prompt: 'Write 5 landing page variants for a productivity app. Each variant targets a different persona: freelancer, team lead, enterprise buyer, student, and solopreneur. Include A/B testing hypotheses.', tags: ['copywriting', 'landing-page', 'personas'], locked: false },
  { cat: 'Creative & Content', role: 'Motion Designer', prompt: 'Design a micro-animation system for a fintech app. Include loading states, success/error feedback, navigation transitions, pull-to-refresh, and progress indicators. Keep under 300ms per animation.', tags: ['motion', 'animation', 'fintech'], locked: true },
  { cat: 'Creative & Content', role: 'Brand Strategist', prompt: 'Define a brand voice framework for an enterprise cybersecurity company. Include tone dimensions, vocabulary guidelines, messaging pillars, and examples for web, email, and support channels.', tags: ['brand-voice', 'cybersecurity', 'messaging'], locked: true },
  { cat: 'Creative & Content', role: 'Content Strategist', prompt: 'Plan a content marketing calendar for a DevOps tool. Include 12 blog posts, 4 whitepapers, 3 webinar scripts, and social media content aligned with product launch milestones and industry events.', tags: ['content-strategy', 'devops', 'marketing'], locked: false },
  { cat: 'Creative & Content', role: 'UX Writer', prompt: 'Write microcopy for a multi-step account deletion flow. Include warning messages, confirmation dialogs, data retention explanation, undo option, and final confirmation email template.', tags: ['ux-writing', 'microcopy', 'trust'], locked: true },
  { cat: 'Creative & Content', role: 'Video Script Writer', prompt: 'Write a 90-second explainer video script for an AI code assistant. Include hook, problem statement, solution demonstration, feature highlights, and CTA. Optimize for social media platforms.', tags: ['video-script', 'explainer', 'ai'], locked: false },
  { cat: 'Product & Strategy', role: 'Product Manager', prompt: 'Write a product requirements document for a team collaboration tool MVP. Include user stories for real-time editing, comments, version history, and integrations. Prioritize using RICE scoring.', tags: ['prd', 'collaboration', 'mvp'], locked: true },
  { cat: 'Product & Strategy', role: 'Growth Lead', prompt: 'Design a growth loop for a B2B SaaS platform. Include viral referral mechanics, freemium-to-paid conversion funnel, activation metrics, and A/B testing framework for pricing page optimization.', tags: ['growth', 'saas', 'conversion'], locked: true },
  { cat: 'Product & Strategy', role: 'Product Designer', prompt: 'Design a pricing page for a tiered SaaS product. Compare features across 3 plans, highlight recommended plan, include FAQ section, and show social proof with customer logos and testimonials.', tags: ['pricing', 'saas', 'conversion'], locked: false },
  { cat: 'Product & Strategy', role: 'Analytics Lead', prompt: 'Design a product analytics dashboard tracking DAU/MAU, retention cohorts, funnel conversion, feature adoption, and LTV:CAC ratio. Include segment filters and date range comparison.', tags: ['analytics', 'dashboard', 'metrics'], locked: true },
  { cat: 'Product & Strategy', role: 'Technical Writer', prompt: 'Write API documentation for a payment gateway REST API. Include authentication, error codes, idempotency, webhooks, and SDK usage examples in Python, JavaScript, and curl.', tags: ['documentation', 'api', 'developer-experience'], locked: true },
  { cat: 'Product & Strategy', role: 'Data Product Manager', prompt: 'Define requirements for a customer data platform. Include identity resolution, segment builder, audience export to ad platforms, privacy controls, and integration with 20+ data sources.', tags: ['cdp', 'data', 'privacy'], locked: true }
];

const CATEGORIES = [...new Set(PROMPTS.map(p => p.cat))].sort();
const UNLOCK_CODE = '00201113300073';
let unlocked = false;

class AELPromptLibrary {
  constructor() {
    this.filter = { category: 'all', search: '' };
    this.initTabs();
    this.init();
  }

  initTabs() {
    const nav = document.getElementById('tabNav');
    const panes = document.querySelectorAll('.tab-pane');
    if (nav) {
      nav.addEventListener('click', e => {
        const btn = e.target.closest('.tab-btn');
        if (!btn) return;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        const pane = document.getElementById(`pane-${btn.dataset.tab}`);
        if (pane) pane.classList.add('active');
      });
    }
  }

  init() {
    this.populateCategories();
    this.populateFilter();
    this.bindEvents();
    this.render();
    this.initCatGrid();
  }

  populateCategories() {
    const bar = document.getElementById('categoryBar');
    if (!bar) return;
    const allBtn = document.createElement('button');
    allBtn.className = 'cat active';
    allBtn.textContent = 'All';
    allBtn.dataset.cat = 'all';
    bar.appendChild(allBtn);
    CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'cat';
      btn.textContent = cat;
      btn.dataset.cat = cat;
      bar.appendChild(btn);
    });
  }

  populateFilter() {
    const select = document.getElementById('categoryFilter');
    if (!select) return;
    CATEGORIES.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      select.appendChild(opt);
    });
  }

  bindEvents() {
    const catBar = document.getElementById('categoryBar');
    if (catBar) {
      catBar.addEventListener('click', e => {
        const btn = e.target.closest('.cat');
        if (!btn) return;
        document.querySelectorAll('.cat').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        this.filter.category = btn.dataset.cat === 'all' ? 'all' : btn.dataset.cat;
        const sel = document.getElementById('categoryFilter');
        if (sel) sel.value = this.filter.category;
        this.render();
      });
    }

    const catFilter = document.getElementById('categoryFilter');
    if (catFilter) {
      catFilter.addEventListener('change', e => {
        this.filter.category = e.target.value;
        document.querySelectorAll('.cat').forEach(c => c.classList.toggle('active', c.dataset.cat === this.filter.category));
        this.render();
      });
    }

    const search = document.getElementById('searchInput');
    if (search) {
      search.addEventListener('input', e => {
        this.filter.search = e.target.value.toLowerCase();
        this.render();
      });
    }

    const grid = document.getElementById('promptGrid');
    if (grid) {
      grid.addEventListener('click', e => {
        const card = e.target.closest('.card');
        if (!card) return;
        const isLocked = card.classList.contains('locked-card');
        if (isLocked && !unlocked) {
          document.getElementById('unlockModal').classList.add('show');
          return;
        }
        const btn = e.target.closest('.copy-btn');
        if (!btn) return;
        const text = btn.dataset.prompt;
        navigator.clipboard.writeText(text).catch(() => {});
        this.showToast('Copied to clipboard!');
      });
    }

    const closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn) closeBtn.addEventListener('click', () => document.getElementById('unlockModal').classList.remove('show'));

    const unlockBtn = document.getElementById('unlockBtn');
    if (unlockBtn) {
      unlockBtn.addEventListener('click', () => {
        const code = document.getElementById('unlockCode').value.trim();
        if (code === UNLOCK_CODE) {
          unlocked = true;
          document.getElementById('unlockModal').classList.remove('show');
          this.showToast('All prompts unlocked!');
          this.render();
        } else {
          this.showToast('Invalid code. Contact owner.', 'error');
        }
      });
    }

    const modal = document.getElementById('unlockModal');
    if (modal) {
      modal.addEventListener('click', e => {
        if (e.target === e.currentTarget) e.target.classList.remove('show');
      });
    }
  }

  getFiltered() {
    let items = PROMPTS;
    if (this.filter.category !== 'all') items = items.filter(p => p.cat === this.filter.category);
    if (this.filter.search) {
      const q = this.filter.search;
      items = items.filter(p => p.prompt.toLowerCase().includes(q) || p.role.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)));
    }
    return items;
  }

  render() {
    const grid = document.getElementById('promptGrid');
    const count = document.getElementById('resultCount');
    if (!grid || !count) return;
    const items = this.getFiltered();
    count.textContent = `${items.length} prompt${items.length !== 1 ? 's' : ''}`;
    grid.innerHTML = '';
    if (!items.length) {
      grid.innerHTML = '<div class="empty"><i class="fas fa-search" style="font-size:1.5rem;margin-bottom:.5rem;display:block"></i>No prompts match your search</div>';
      return;
    }
    items.forEach(p => {
      const isLocked = p.locked && !unlocked;
      const card = document.createElement('div');
      card.className = `card${isLocked ? ' locked-card' : ''}`;
      const tags = p.tags.slice(0, 3).map(t => `<span style="font-size:.6rem;color:#8db7ff;font-family:monospace">#${t}</span>`).join(' ');
      card.innerHTML = `
        <div class="cat-tag">${p.cat}</div>
        <h3>${p.role}</h3>
        <div class="preview">${p.prompt}</div>
        <div class="meta">
          <div>${tags}</div>
          <div style="display:flex;align-items:center;gap:.5rem">
            ${isLocked ? '<span class="lock"><i class="fas fa-lock"></i></span>' : ''}
            ${!isLocked ? `<button class="copy-btn" data-prompt="${p.prompt.replace(/"/g, '&quot;')}"><i class="fas fa-copy"></i> Copy</button>` : ''}
          </div>
        </div>`;
      grid.appendChild(card);
    });
  }

  initCatGrid() {
    const grid = document.getElementById('catGrid');
    if (!grid) return;
    grid.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const count = PROMPTS.filter(p => p.cat === cat).length;
      const card = document.createElement('div');
      card.className = 'cat-card';
      card.innerHTML = `<div class="cat-name">${cat}</div><div class="cat-count">${count} prompts</div>`;
      grid.appendChild(card);
    });
  }

  showToast(msg, type) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = type === 'error' ? 'error' : '';
    t.style.opacity = '1';
    setTimeout(() => { t.style.opacity = '0'; }, 2500);
  }
}

document.addEventListener('DOMContentLoaded', () => { new AELPromptLibrary(); });

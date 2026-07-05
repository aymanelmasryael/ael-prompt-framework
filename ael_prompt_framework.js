const PROMPTS = [
  { cat: 'UI/UX Design', role: 'Senior UI Designer', prompt: 'Design a dark-mode SaaS dashboard interface for a cybersecurity analytics platform. Include a sidebar navigation, real-time threat feed, and interactive data widgets. Use a professional blue-gray palette with clear visual hierarchy.', tags: ['dashboard', 'dark-mode', 'saas'] },
  { cat: 'UI/UX Design', role: 'Product Designer', prompt: 'Create a mobile-first onboarding flow for a fintech app. Include 3 progressive slides with illustrations, a skip button, and a clear CTA. Focus on reducing cognitive load while conveying trust.', tags: ['onboarding', 'fintech', 'mobile'] },
  { cat: 'UI/UX Design', role: 'UX Designer', prompt: 'Design a form with 12+ fields for a health insurance application. Group into logical sections, add progress indicators, and include smart defaults. Ensure WCAG 2.1 AA compliance throughout.', tags: ['forms', 'healthcare', 'accessibility'] },
  { cat: 'UI/UX Design', role: 'Design Lead', prompt: 'Design a premium e-commerce product detail page for a luxury watch. Include high-res image gallery, 360-degree viewer, size guide, reviews section, and checkout CTA. Maintain exclusive brand tone.', tags: ['ecommerce', 'luxury', 'product-page'] },
  { cat: 'UI/UX Design', role: 'UI Designer', prompt: 'Create a responsive data table for a CRM system with sortable columns, inline editing, batch actions, pagination, and a filter panel. Optimize for density without sacrificing readability.', tags: ['data-table', 'crm', 'enterprise'] },
  { cat: 'UI/UX Design', role: 'UX Architect', prompt: 'Design a multi-step checkout flow for an e-commerce platform. Include guest checkout, saved payment methods, order summary sidebar, and progress stepper. Minimize abandonment risk.', tags: ['checkout', 'ecommerce', 'conversion'] },
  { cat: 'UI/UX Design', role: 'Visual Designer', prompt: 'Build a design system component library sidebar showing color tokens, typography scale, spacing grid, and interactive component examples. Include dark/light mode toggle.', tags: ['design-system', 'documentation', 'components'] },
  { cat: 'UI/UX Design', role: 'UX Researcher', prompt: 'Design a feedback collection interface with NPS survey, CSAT rating, and open-ended questions. Include visual progress and thank-you state. Mobile-responsive with minimal friction.', tags: ['feedback', 'survey', 'research'] },
  { cat: 'Frontend Dev', role: 'React Engineer', prompt: 'Build a reusable virtualized list component in React with TypeScript. Support variable row heights, infinite scroll, sticky headers, and keyboard navigation. Memoize rendering for 10,000+ items.', tags: ['react', 'typescript', 'performance'] },
  { cat: 'Frontend Dev', role: 'CSS Architect', prompt: 'Implement a responsive grid system using CSS Grid with 12 columns, breakpoints at 480/768/1024/1440px, gutter options, and utility classes for alignment. Support both container-based and full-width layouts.', tags: ['css', 'grid', 'responsive'] },
  { cat: 'Frontend Dev', role: 'Next.js Developer', prompt: 'Build an app router layout in Next.js 14 with nested routes, loading states, error boundaries, and parallel routes for a dashboard. Include server components by default and client islands only where needed.', tags: ['nextjs', 'app-router', 'ssr'] },
  { cat: 'Frontend Dev', role: 'Web Performance Lead', prompt: 'Audit and optimize a React SPA with 85/100 Lighthouse score. Implement code splitting, lazy loading for images and routes, preconnect hints, resource hints, and critical CSS inlining. Target 95+ score.', tags: ['performance', 'optimization', 'lighthouse'] },
  { cat: 'Frontend Dev', role: 'TypeScript Specialist', prompt: 'Design a type-safe event emitter system with generics for payload types, wildcard listeners, async handlers, and typed error handling. Include full test coverage with Vitest.', tags: ['typescript', 'events', 'testing'] },
  { cat: 'Frontend Dev', role: 'Accessibility Engineer', prompt: 'Audit and remediate a web app for WCAG 2.2 AA compliance. Cover focus management, ARIA landmarks, screen reader announcements, color contrast, motion reduction, and keyboard navigation.', tags: ['a11y', 'wcag', 'audit'] },
  { cat: 'Frontend Dev', role: 'State Manager', prompt: 'Design a state management solution with Zustand for a multi-step form with complex dependencies. Include persistence, undo/redo, cross-step validation, and devtools integration.', tags: ['state-management', 'zustand', 'forms'] },
  { cat: 'Backend Dev', role: 'Node.js Architect', prompt: 'Design a RESTful API for a multi-tenant SaaS platform with JWT authentication, role-based access control, rate limiting, request validation, structured error responses, and OpenAPI documentation.', tags: ['api', 'authentication', 'rbac'] },
  { cat: 'Backend Dev', role: 'Database Engineer', prompt: 'Design a PostgreSQL schema for an e-commerce platform with products, variants, inventory, orders, users, and reviews. Include indexes for common queries, partitioning for orders, and full-text search.', tags: ['postgresql', 'schema', 'ecommerce'] },
  { cat: 'Backend Dev', role: 'Security Engineer', prompt: 'Implement OAuth 2.0 + OIDC authentication flow with PKCE for a SPA. Include refresh token rotation, CSRF protection, secure cookie configuration, and session management. Support Google and GitHub providers.', tags: ['oauth', 'security', 'authentication'] },
  { cat: 'Backend Dev', role: 'Microservices Lead', prompt: 'Design a microservices architecture for a real-time notification system. Include service discovery, message queuing with RabbitMQ, WebSocket gateway, and idempotent event processing with dead-letter queues.', tags: ['microservices', 'rabbitmq', 'websockets'] },
  { cat: 'Backend Dev', role: 'DevOps Engineer', prompt: 'Create a CI/CD pipeline with GitHub Actions for a monorepo. Include linting, type-checking, unit tests, integration tests, Docker build, and deployment to staging/production environments with approval gates.', tags: ['cicd', 'docker', 'github-actions'] },
  { cat: 'Backend Dev', role: 'GraphQL Architect', prompt: 'Design a GraphQL API for a content management system. Implement N+1 query prevention with DataLoader, pagination with cursors, subscription for real-time updates, and field-level authorization.', tags: ['graphql', 'dataloader', 'subscriptions'] },
  { cat: 'Backend Dev', role: 'Cache Strategist', prompt: 'Design a multi-layer caching strategy for a high-traffic API. Use Redis for session and query cache, CDN for static assets, application-level memoization, and cache invalidation patterns.', tags: ['caching', 'redis', 'performance'] },
  { cat: 'AI & ML', role: 'Prompt Engineer', prompt: 'Design a chain-of-thought prompt for a financial analysis LLM that extracts key metrics from earnings reports. Structure the response as JSON with confidence scores and source citations.', tags: ['prompt-engineering', 'llm', 'finance'] },
  { cat: 'AI & ML', role: 'ML Engineer', prompt: 'Build a feature engineering pipeline for customer churn prediction. Include time-windowed aggregations, categorical encoding, feature scaling, and SHAP-based feature selection. Use scikit-learn pipelines.', tags: ['ml', 'feature-engineering', 'churn'] },
  { cat: 'AI & ML', role: 'NLP Specialist', prompt: 'Design a text classification system for customer support tickets. Use a fine-tuned BERT model with confidence thresholds for auto-routing, human escalation, and continuous active learning feedback.', tags: ['nlp', 'bert', 'classification'] },
  { cat: 'AI & ML', role: 'AI Product Manager', prompt: 'Define evaluation metrics for a conversational AI assistant. Include accuracy, hallucination rate, response latency, user satisfaction, and task completion rate. Design an A/B testing framework.', tags: ['evaluation', 'conversational-ai', 'metrics'] },
  { cat: 'AI & ML', role: 'MLOps Engineer', prompt: 'Build an MLOps pipeline with MLflow for experiment tracking, model registry, and deployment. Include data versioning with DVC, automated retraining triggers, and model performance monitoring.', tags: ['mlops', 'mlflow', 'deployment'] },
  { cat: 'AI & ML', role: 'RAG Architect', prompt: 'Design a Retrieval-Augmented Generation system for a legal document Q&A. Implement chunking strategy, embedding selection, vector database (Pinecone/Weaviate), and hybrid search with reranking.', tags: ['rag', 'vectors', 'llm'] },
  { cat: 'AI & ML', role: 'Data Scientist', prompt: 'Create an anomaly detection pipeline for real-time system monitoring. Use isolation forest with streaming windowing, alert thresholds, drift detection, and automated root cause analysis suggestions.', tags: ['anomaly-detection', 'monitoring', 'real-time'] },
  { cat: 'Mobile', role: 'iOS Engineer', prompt: 'Build a SwiftUI navigation architecture for a social media app with tab bar, modal sheets, deep linking, and custom transitions. Support iOS 17+ with Swift 6 features and structured concurrency.', tags: ['swiftui', 'ios', 'navigation'] },
  { cat: 'Mobile', role: 'Android Engineer', prompt: 'Design a Jetpack Compose UI for a ride-sharing app. Include map integration, bottom sheet for ride options, real-time driver tracking, and smooth gesture-based interactions.', tags: ['jetpack-compose', 'android', 'maps'] },
  { cat: 'Mobile', role: 'React Native Dev', prompt: 'Build a cross-platform mobile UI for a health tracking app with charts, notifications, offline-first data sync, and biometric authentication. Use Reanimated 3 for 60fps animations.', tags: ['react-native', 'health', 'offline-first'] },
  { cat: 'Mobile', role: 'Mobile UX Designer', prompt: 'Design a thumb-friendly navigation pattern for a one-handed finance app. Place primary actions in the bottom half, use gesture-based shortcuts, and optimize for reachability on 6.7+ inch screens.', tags: ['mobile-ux', 'gestures', 'finance'] },
  { cat: 'Mobile', role: 'Flutter Developer', prompt: 'Create a Flutter widget library for a design system. Include buttons, inputs, cards, modals, and toasts with theming support, dark/light modes, and responsive layout adapters.', tags: ['flutter', 'design-system', 'widgets'] },
  { cat: 'Mobile', role: 'Mobile Security Lead', prompt: 'Design a mobile app security architecture. Include certificate pinning, encrypted local storage, runtime integrity checks, OAuth PKCE flow, and biometric gate for sensitive operations.', tags: ['security', 'encryption', 'biometrics'] },
  { cat: 'DevOps & Cloud', role: 'Cloud Architect', prompt: 'Design a multi-region AWS architecture for a global SaaS platform. Include EKS for orchestration, RDS Multi-AZ with read replicas, CloudFront CDN, Route53 latency routing, and disaster recovery strategy.', tags: ['aws', 'multi-region', 'kubernetes'] },
  { cat: 'DevOps & Cloud', role: 'Kubernetes Admin', prompt: 'Create a Kubernetes manifest set for a microservices app. Include Deployments, Services, Ingress, HPA, PodDisruptionBudget, NetworkPolicies, and ConfigMaps with Helm chart packaging.', tags: ['kubernetes', 'helm', 'microservices'] },
  { cat: 'DevOps & Cloud', role: 'Terraform Engineer', prompt: 'Design a Terraform module for a VPC with public/private subnets across 3 AZs. Include NAT gateways, flow logs, VPC endpoints for S3/DynamoDB, and transit gateway for future multi-account setup.', tags: ['terraform', 'vpc', 'infrastructure'] },
  { cat: 'DevOps & Cloud', role: 'SRE Lead', prompt: 'Design SLO/SLI framework for a payment processing system. Track latency p95, error budget, availability, and throughput. Implement alerting with multi-window, multi-burn-rate policy in Prometheus.', tags: ['sre', 'monitoring', 'prometheus'] },
  { cat: 'DevOps & Cloud', role: 'Platform Engineer', prompt: 'Build an internal developer platform UI with Backstage. Include service catalog, software templates, TechDocs, and plugin marketplace. Enable self-service infrastructure provisioning.', tags: ['backstage', 'developer-platform', 'self-service'] },
  { cat: 'Data & Analytics', role: 'Data Engineer', prompt: 'Build an ETL pipeline with Apache Airflow that ingests data from 5 sources (PostgreSQL, S3, Stripe API, Google Analytics, HubSpot). Include data quality checks, retry logic, and Slack notifications.', tags: ['etl', 'airflow', 'data-pipeline'] },
  { cat: 'Data & Analytics', role: 'Analytics Engineer', prompt: 'Design a dbt project for a marketing analytics data model. Stage raw events, build fact/dim tables for campaigns, attribution, and customer journey. Document with dbt docs and test with dbt tests.', tags: ['dbt', 'data-modeling', 'analytics'] },
  { cat: 'Data & Analytics', role: 'BI Developer', prompt: 'Create a Looker dashboard for executive revenue reporting. Include monthly recurring revenue, churn rate, customer acquisition cost, LTV, and cohort retention. Scheduled email delivery.', tags: ['looker', 'dashboard', 'revenue'] },
  { cat: 'Data & Analytics', role: 'Data Architect', prompt: 'Design a data lakehouse architecture on AWS. Use S3 as data lake, Glue for catalog, Athena for querying, Redshift for analytics, and QuickSight for visualization. Implement medallion architecture.', tags: ['data-lake', 'aws', 'architecture'] },
  { cat: 'Data & Analytics', role: 'Streaming Engineer', prompt: 'Build a real-time analytics pipeline with Kafka Streams for a social media platform. Process 100K+ events/sec, aggregate engagement metrics, detect trending topics, and output to Redis for low-latency access.', tags: ['kafka', 'streaming', 'real-time'] },
  { cat: 'Data & Analytics', role: 'SQL Expert', prompt: 'Write an optimized SQL query for a time-series analysis of 50M+ rows. Include window functions for rolling averages, date binning, CTE for intermediate calculations, and execution plan analysis.', tags: ['sql', 'optimization', 'time-series'] },
  { cat: 'Blockchain & Web3', role: 'Smart Contract Dev', prompt: 'Write an ERC-721 NFT smart contract in Solidity with lazy minting, royalty support (EIP-2981), merkle tree allowlist, and reveal mechanism. Include comprehensive Foundry tests.', tags: ['solidity', 'nft', 'smart-contract'] },
  { cat: 'Blockchain & Web3', role: 'dApp Developer', prompt: 'Build a React dApp that connects to MetaMask, displays NFT collection, implements buy/offer/trade flows, and integrates with IPFS for metadata. Use Wagmi and RainbowKit.', tags: ['dapp', 'react', 'ethereum'] },
  { cat: 'Blockchain & Web3', role: 'DeFi Engineer', prompt: 'Design a DeFi yield aggregator smart contract. Include deposit/withdraw, strategy allocation, compound rewards, emergency pause, and fee structure. Optimize for gas efficiency.', tags: ['defi', 'yield', 'gas-optimization'] },
  { cat: 'Testing & QA', role: 'QA Engineer', prompt: 'Write a test plan for an e-commerce checkout flow. Include unit tests, integration tests, end-to-end tests with Playwright, performance testing with k6, and security testing for payment processing.', tags: ['test-plan', 'e2e', 'playwright'] },
  { cat: 'Testing & QA', role: 'Test Automation Lead', prompt: 'Build a test automation framework with Playwright and TypeScript. Include page object model, fixture management, parallel execution, visual regression testing, and CI integration.', tags: ['automation', 'playwright', 'framework'] }
];

const CATEGORIES = [...new Set(PROMPTS.map(p => p.cat))].sort();

class AELPromptLibrary {
  constructor() {
    this.filter = { category: 'all', search: '' };
    this.initTabs();
    this.init();
  }

  initTabs() {
    const nav = document.getElementById('tabNav');
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
    this.populateGenCategory();
    this.updateExportSummary();
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
        const btn = e.target.closest('.copy-btn');
        if (!btn) return;
        const text = btn.dataset.prompt;
        navigator.clipboard.writeText(text).catch(() => {});
        this.showToast('Copied to clipboard!');
      });
    }

    const genBtn = document.getElementById('generateBtn');
    if (genBtn) genBtn.addEventListener('click', () => this.generatePrompt());

    const exportCsv = document.getElementById('exportCsvBtn');
    if (exportCsv) exportCsv.addEventListener('click', () => this.exportCsv());

    const exportJson = document.getElementById('exportJsonBtn');
    if (exportJson) exportJson.addEventListener('click', () => this.exportJson());
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
      const card = document.createElement('div');
      card.className = 'card';
      const tags = p.tags.slice(0, 3).map(t => `<span style="font-size:.6rem;color:#8db7ff;font-family:monospace">#${t}</span>`).join(' ');
      card.innerHTML = `
        <div class="cat-tag">${p.cat}</div>
        <h3>${p.role}</h3>
        <div class="preview">${p.prompt}</div>
        <div class="meta">
          <div>${tags}</div>
          <button class="copy-btn" data-prompt="${p.prompt.replace(/"/g, '&quot;')}"><i class="fas fa-copy"></i> Copy</button>
        </div>`;
      grid.appendChild(card);
    });
  }

  populateGenCategory() {
    const sel = document.getElementById('genCategory');
    if (!sel) return;
    CATEGORIES.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      sel.appendChild(opt);
    });
  }

  generatePrompt() {
    const cat = document.getElementById('genCategory').value;
    const role = document.getElementById('genRole').value.trim();
    const task = document.getElementById('genTask').value.trim();
    const tags = document.getElementById('genTags').value.trim();

    if (!role || !task) {
      this.showToast('Please fill in Role and Task fields', 'error');
      return;
    }

    const tagArr = tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [cat.toLowerCase().replace(/&/g, '').split(' ')[0]];
    const generated = `${task} — As a ${role} specializing in ${cat}, provide a comprehensive and actionable response. Focus on best practices, modern tooling, and deliverable-ready outputs.`;

    const output = document.getElementById('genOutput');
    if (!output) return;
    output.innerHTML = `
      <div class="gen-result">
        <div class="gen-meta">
          <span class="gen-cat">${cat}</span>
          <span class="gen-role">${role}</span>
        </div>
        <div class="gen-text">${generated}</div>
        <div class="gen-tags">${tagArr.map(t => `<span class="gen-tag">#${t}</span>`).join('')}</div>
        <button class="copy-btn gen-copy" data-prompt="${generated.replace(/"/g, '&quot;')}"><i class="fas fa-copy"></i> Copy to Clipboard</button>
      </div>`;

    const copyBtn = output.querySelector('.gen-copy');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(generated).catch(() => {});
        this.showToast('Copied to clipboard!');
      });
    }
  }

  exportCsv() {
    const rows = [['Category', 'Role', 'Prompt', 'Tags']];
    PROMPTS.forEach(p => {
      rows.push([p.cat, p.role, `"${p.prompt.replace(/"/g, '""')}"`, p.tags.join('; ')]);
    });
    const csv = rows.map(r => r.join(',')).join('\n');
    this.downloadFile(csv, 'ael-prompts.csv', 'text/csv');
    this.showToast('CSV exported!');
  }

  exportJson() {
    const json = JSON.stringify(PROMPTS, null, 2);
    this.downloadFile(json, 'ael-prompts.json', 'application/json');
    this.showToast('JSON exported!');
  }

  downloadFile(content, filename, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  updateExportSummary() {
    const el = document.getElementById('exportSummary');
    if (!el) return;
    el.textContent = `${PROMPTS.length} prompts across ${CATEGORIES.length} categories ready for export.`;
    const total = document.getElementById('exportTotal');
    if (total) total.textContent = `${PROMPTS.length} prompts`;
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

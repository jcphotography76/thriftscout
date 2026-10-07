<!DOCTYPE html>
<html lang="en" data-theme="cyberpunk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>Thrift Scout • Tri-Vault & MTG Recon</title>
  <style>
    :root {
      --bg: #090d16;
      --card-bg: #111827;
      --surface: #1f2937;
      --border: #374151;
      --border-focus: #6366f1;
      --text: #f9fafb;
      --text-muted: #9ca3af;
      --primary: #6366f1;
      --primary-glow: rgba(99, 102, 241, 0.2);
      --accent: #14b8a6;
      --accent-glow: rgba(20, 184, 166, 0.2);
      --coral: #f43f5e;
      --coral-glow: rgba(244, 63, 94, 0.2);
      --amber: #f59e0b;
      --amber-glow: rgba(245, 158, 11, 0.2);
      --gold: #fbbf24;
      --gold-glow: rgba(251, 191, 36, 0.35);
      --font-scale: 1rem;
      --font-stack: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    
    [data-theme="light"] {
      --bg: #f3f4f6;
      --card-bg: #ffffff;
      --surface: #e5e7eb;
      --border: #cbd5e1;
      --border-focus: #4f46e5;
      --text: #0f172a;
      --text-muted: #475569;
    }
    [data-theme="midnight"] {
      --bg: #030712;
      --card-bg: #0b0f19;
      --surface: #111827;
      --border: #1f2937;
      --border-focus: #38bdf8;
      --text: #f0f9ff;
      --text-muted: #64748b;
      --accent: #38bdf8;
      --accent-glow: rgba(56, 189, 248, 0.2);
    }
    [data-theme="tactical"] {
      --bg: #0f1711;
      --card-bg: #142217;
      --surface: #1e3323;
      --border: #2e4d36;
      --border-focus: #22c55e;
      --text: #f0fdf4;
      --text-muted: #86efac;
      --accent: #22c55e;
      --accent-glow: rgba(34, 197, 94, 0.2);
    }
    [data-theme="cyberpunk"] {
      --bg: #0f051d;
      --card-bg: #18082e;
      --surface: #271147;
      --border: #4a1d8a;
      --border-focus: #ec4899;
      --text: #fdf4ff;
      --text-muted: #d8b4fe;
      --accent: #ec4899;
      --accent-glow: rgba(236, 72, 153, 0.2);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: var(--font-stack);
      font-size: var(--font-scale);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      padding-bottom: calc(75px + env(safe-area-inset-bottom));
      overflow-x: hidden;
      overscroll-behavior-y: none;
      touch-action: pan-y;
      -webkit-overflow-scrolling: touch;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transition: background-color 0.3s, color 0.3s;
    }

    @keyframes screenFlash {
      0% { background-color: var(--accent); }
      100% { background-color: var(--bg); }
    }
    body.flash-active {
      animation: screenFlash 0.35s ease-out;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(17, 24, 39, 0.88);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border);
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    [data-theme="light"] header { background: rgba(255, 255, 255, 0.88); }
    .brand { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 1.15rem; letter-spacing: -0.02em; color: var(--text); }
    .brand-accent { color: var(--accent); }
    .header-pills { display: flex; gap: 8px; align-items: center; }
    
    .profile-avatar-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--surface);
      border: 1px solid var(--border);
      overflow: hidden;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.95rem;
    }
    
    main { 
      flex: 1; 
      width: 100%; 
      max-width: 680px; 
      margin: 0 auto; 
      padding: 20px 16px; 
      display: flex; 
      flex-direction: column; 
      gap: 16px; 
    }

    .tab-view { display: none; flex-direction: column; gap: 14px; }
    .tab-view.active { display: flex; }
    
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.15);
      position: relative;
    }
    .card.high-flip-gold {
      border: 2px solid var(--gold);
      box-shadow: 0 0 25px var(--gold-glow);
    }

    .card-title { font-size: 0.95rem; font-weight: 700; color: var(--text); display: flex; justify-content: space-between; align-items: center; }
    .badge-accent {
      background: var(--accent-glow);
      color: var(--accent);
      border: 1px solid var(--accent);
      font-size: 0.7rem;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .status-alert {
      display: none;
      padding: 14px 16px;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: 700;
      border-left: 5px solid var(--primary);
      background: var(--card-bg);
      color: var(--text);
      line-height: 1.4;
      box-shadow: 0 4px 14px rgba(0,0,0,0.15);
    }
    .challenge-banner {
      background: linear-gradient(135deg, #1e1b4b 0%, #111827 100%);
      border: 1px solid #4338ca;
      border-radius: 12px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      color: #f9fafb;
    }
    [data-theme="light"] .challenge-banner {
      background: linear-gradient(135deg, #312e81 100%, #1e1b4b 0%);
    }
    .challenge-inner {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .challenge-reward {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--amber-glow);
      border: 1px solid var(--amber);
      color: var(--amber);
      font-size: 0.75rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 6px;
      width: fit-content;
    }
    .btn {
      width: 100%;
      padding: 12px;
      border-radius: 10px;
      font-weight: 700;
      font-size: 0.9rem;
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      text-decoration: none;
      user-select: none;
      pointer-events: auto;
    }
    .btn.disabled {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
      background: var(--surface) !important;
      color: var(--text-muted) !important;
      border-color: var(--border) !important;
    }
    .btn-primary { background: var(--primary); color: #fff; }
    .btn-accent { background: var(--accent); color: #090d16; }
    .btn-amber { background: var(--amber); color: #090d16; }
    .btn-outline { background: var(--surface); border: 1px solid var(--border); color: var(--text); }
    .camera-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }

    .metric-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .metric-box {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .metric-label { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
    .metric-val { font-size: 1.2rem; font-weight: 800; color: var(--text); }
    .metric-val.profit { color: var(--accent); }
    .disposition-pill {
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 800;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .disp-flip { background: var(--accent-glow); color: var(--accent); border: 1px solid var(--accent); }
    .disp-monitor { background: var(--amber-glow); color: var(--amber); border: 1px solid var(--amber); }
    .disp-pass { background: var(--coral-glow); color: var(--coral); border: 1px solid var(--coral); }
    
    .vault-summary { display: flex; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 12px; }
    
    .vault-subtoggle { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; background: var(--surface); padding: 4px; border-radius: 8px; border: 1px solid var(--border); }
    .vault-subbtn {
      background: transparent;
      color: var(--text);
      border: none;
      padding: 6px 2px;
      font-size: 0.72rem;
      font-weight: 700;
      border-radius: 6px;
      cursor: pointer;
      text-align: center;
      transition: background 0.2s, color 0.2s;
    }
    .vault-subbtn.active { background: var(--card-bg); color: var(--text); border: 1px solid var(--border); box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    
    .vault-toolbar { display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: var(--text-muted); }
    .vault-list { display: flex; flex-direction: column; gap: 10px; }
    
    .vault-item-container {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      background: var(--surface);
      border: 1px solid var(--border);
    }
    .vault-item {
      display: flex;
      gap: 12px;
      background: var(--surface);
      padding: 12px;
      align-items: center;
      cursor: pointer;
      position: relative;
      z-index: 2;
      transition: transform 0.2s ease;
      touch-action: pan-y;
    }
    .vault-item:hover { border-color: var(--border-focus); }
    .swipe-actions-bg {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      font-size: 0.75rem;
      font-weight: 800;
      z-index: 1;
    }
    .swipe-action-left { color: var(--accent); }
    .swipe-action-right { color: var(--coral); }

    .item-thumb { width: 78px; height: 78px; min-width: 78px; border-radius: 8px; object-fit: cover; background: #111827; border: 1px solid var(--border); cursor: pointer; }
    .item-content { flex: 1; display: flex; flex-direction: column; gap: 3px; min-width: 0; }
    
    .item-title { font-weight: 700; font-size: 0.92rem; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
    .item-title:hover { color: var(--accent); }
    .item-meta { font-size: 0.78rem; color: var(--text-muted); }
    .item-actions { display: flex; gap: 6px; margin-top: 4px; flex-wrap: wrap; }

    .store-radar-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .store-card-modern {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .store-card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    
    .store-name-title {
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--text);
    }
    .store-dist-badge {
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--accent);
      background: var(--accent-glow);
      border: 1px solid var(--accent);
      padding: 2px 8px;
      border-radius: 6px;
      white-space: nowrap;
    }
    .store-address-text {
      font-size: 0.78rem;
      color: var(--text-muted);
    }
    .nav-actions-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-top: 4px;
    }
    .nav-app-btn {
      text-align: center;
      padding: 9px 4px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      color: var(--text);
      font-size: 0.75rem;
      font-weight: 700;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }
    .nav-app-btn:active { background: var(--border); }

    .bottom-dock {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: calc(60px + env(safe-area-inset-bottom));
      padding-bottom: env(safe-area-inset-bottom);
      background: rgba(17, 24, 39, 0.95);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 100;
    }
    [data-theme="light"] .bottom-dock { background: rgba(255, 255, 255, 0.95); }
    .dock-btn {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      background: transparent;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 0.75rem;
      font-weight: 700;
      pointer-events: auto;
    }
    .dock-btn.active { color: var(--accent); }
    
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
      z-index: 200;
      pointer-events: auto;
    }
    .modal-overlay.active { display: flex; }
    .modal-content {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 18px;
      max-width: 480px;
      width: 100%;
      max-height: 85vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 201;
      pointer-events: auto;
    }
    #webcamVideo {
      width: 100%;
      height: 280px;
      background: #000;
      border-radius: 8px;
      border: 1px solid var(--border);
      object-fit: cover;
    }
    .input-field {
      width: 100%;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 10px 12px;
      color: var(--text);
      font-size: 0.9rem;
      font-family: inherit;
      outline: none;
    }
    .input-field:focus { border-color: var(--border-focus); }
  </style>
</head>
<body>

  <header>
    <div class="brand">
      <span style="font-size: 1.2rem;" title="Koda the Scout • Veteran Owned">🐕‍🦺</span>
      <span>THRIFT</span><span class="brand-accent">SCOUT</span>
    </div>
    <div class="header-pills">
      <div class="profile-avatar-btn" id="profileAvatarBtn" title="Profile Settings & Stats">👤</div>
    </div>
  </header>

  <main>
    <div id="statusAlert" class="status-alert"></div>

    <!-- TAB 1: SCOUT -->
    <section id="tab-scout" class="tab-view active">
      <div class="card" id="valuationCardContainer">
        <div class="card-title">RAPID VALUATION <span style="font-size:0.68rem; color:var(--accent);">⚡ Turbo Speed (Hard 8s Timeout)</span></div>
        
        <div>
          <label class="metric-label" style="margin-bottom: 4px; display: block;">Thrift Store Asking Price / Cost ($)</label>
          <input type="number" id="itemCostInput" class="input-field" placeholder="0.00" value="0.00" step="0.01" min="0">
        </div>

        <!-- MODE SELECTOR (Standard, Coin, MTG Card) -->
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
          <div style="display:flex; align-items:center; justify-content:space-between; background:var(--surface); padding:8px 10px; border-radius:8px; border:1px solid var(--border);">
            <div>
              <div style="font-weight:700; font-size:0.78rem; color:var(--amber);">🪙 Coin Mode</div>
            </div>
            <input type="checkbox" id="coinModeToggle" style="width:16px; height:16px; cursor:pointer;">
          </div>
          <div style="display:flex; align-items:center; justify-content:space-between; background:var(--surface); padding:8px 10px; border-radius:8px; border:1px solid var(--border);">
            <div>
              <div style="font-weight:700; font-size:0.78rem; color:var(--accent);">🪄 MTG Card Mode</div>
            </div>
            <input type="checkbox" id="mtgModeToggle" style="width:16px; height:16px; cursor:pointer;">
          </div>
        </div>

        <input type="file" id="mobileGalleryInput" accept="image/*" multiple style="display:none;">

        <div class="camera-row">
          <button class="btn btn-accent" id="openWebcamBtn">📸 SNAP MULTI-SHOTS</button>
          <button class="btn btn-outline" id="uploadFileBtn">📁 UPLOAD PHOTOS</button>
        </div>

        <button class="btn btn-amber" id="smartRetryBtn" style="display:none; margin-top:4px;">⚡ RETRY INSTANTLY (NO RETAKE)</button>

        <div id="imagePreviewContainer" style="display:none; grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)); gap:8px; margin-top:8px;"></div>

        <div id="evalProgressContainer" style="display:none; flex-direction:column; gap:6px; margin-top:8px;">
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--accent); font-weight:700;">
            <span id="evalProgressText">Instant Recon...</span>
            <span>Flash-Lite Engine</span>
          </div>
          <div style="background:var(--border); height:6px; border-radius:3px; overflow:hidden;">
            <div id="evalProgressBarFill" style="background:var(--accent); width:100%; height:100%;"></div>
          </div>
        </div>
      </div>

      <!-- APPRAISAL RESULT CARD -->
      <div class="card" id="appraisalCard" style="display:none;">
        <div class="card-title">
          <span id="resItemTitle">Identified Item</span>
          <span id="resDispPill" class="disposition-pill disp-flip">BUY (INSTANT FLIP)</span>
        </div>

        <div style="background:var(--surface); padding:8px 12px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; border:1px solid var(--border);">
          <span class="metric-label" id="tierLabelTitle">Market Value Tier</span>
          <span id="resRarityBadge" style="font-weight:900; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em;">--</span>
        </div>

        <div class="metric-grid">
          <div class="metric-box">
            <span class="metric-label">Estimated Resale</span>
            <span class="metric-val" id="resEstResale">$0.00</span>
          </div>
          <div class="metric-box">
            <span class="metric-label">Net Profit (Est)</span>
            <span class="metric-val profit" id="resEstProfit">$0.00</span>
          </div>
          <div class="metric-box">
            <span class="metric-label">Brand / Set</span>
            <span class="metric-val" id="resBrand" style="font-size:0.95rem;">--</span>
          </div>
          <div class="metric-box" style="cursor:pointer;" id="editableCostBox" title="Tap to update acquisition cost">
            <span class="metric-label">Acquisition Cost ✏️</span>
            <span class="metric-val" id="resCostBasis" style="font-size:1.1rem; color:var(--amber);">$0.00</span>
          </div>
        </div>
        <div style="font-size:0.82rem; color:var(--text-muted); line-height:1.4;" id="resIntel"></div>
        
        <!-- INVENTORY STRATEGY DISPOSITION SELECTOR -->
        <div>
          <label class="metric-label" style="margin-bottom: 4px; display: block;">Asset Inventory Strategy</label>
          <select id="assetStrategySelect" class="input-field">
            <option value="selling">🛒 Selling (Active Listing)</option>
            <option value="keeping">🔒 Keeping (Personal Collection)</option>
            <option value="quick_flip">⚡ Quick Flip (Ready to Sell)</option>
          </select>
        </div>

        <div style="display:flex; gap:8px; margin-top:4px; flex-wrap:wrap;">
          <a id="resEbayLink" target="_blank" class="btn btn-outline" style="flex:1; font-size:0.8rem; min-width: 130px;">VIEW MARKET COMPS</a>
          <a id="resVelocityLink" target="_blank" class="btn btn-outline" style="flex:1; font-size:0.8rem; min-width: 130px; border-color: var(--amber); color: var(--amber);">📊 SCRYFALL COMPS</a>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-primary" id="shareEvaluationBtn" style="flex:1; font-size:0.8rem; background:#3b82f6;">SHARE EVAL</button>
          <button class="btn btn-accent" id="saveVaultBtn" style="flex:1; font-size:0.8rem;">SEND TO VAULT</button>
        </div>
        <button class="btn btn-outline" id="clearEvalBtn" style="font-size:0.75rem; color:var(--text-muted); border-style:dashed; margin-top:4px;">🗑️ CLEAR EVALUATION & SCAN NEXT</button>
      </div>
    </section>

    <!-- TAB 2: INTEL -->
    <section id="tab-intel" class="tab-view">
      <div style="background: linear-gradient(135deg, #111827 0%, #1f2937 100%); border: 1px solid var(--border); border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="font-size: 2rem; background: var(--surface); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid var(--border);">🐕‍🦺</div>
          <div>
            <div style="font-weight: 800; font-size: 0.95rem; color: var(--text);">KODA THE SCOUT</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Tactical Recon • Sniff Out the Profit</div>
          </div>
        </div>
        <div style="background: var(--amber-glow); border: 1px solid var(--amber); color: var(--amber); font-size: 0.72rem; font-weight: 800; padding: 5px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.05em;">
          🇺🇸 Veteran Owned
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          <span>🎯 CHALLENGE OF THE DAY</span>
          <span class="badge-accent">Daily Mission</span>
        </div>
        <div class="challenge-banner">
          <div class="challenge-inner">
            <div style="flex:1; display:flex; flex-direction:column; gap:4px; min-width:0;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:800; font-size:0.95rem; color:#fff;" id="dailyTargetName">Cast Iron Skillet (Griswold / Wagner)</span>
                <span class="challenge-reward" id="dailyRewardBadge">+150 XP BONUS</span>
              </div>
              <p style="font-size:0.78rem; color:#cbd5e1; line-height:1.3;" id="dailyTargetDesc">
                Check housewares for smooth-bottom vintage cast iron skillets with heat rings or marked Wagner Ware / Griswold.
              </p>
            </div>
          </div>
          <div style="display:flex; gap:8px; margin-top:2px;">
            <a id="dailyCompsLink" target="_blank" class="btn btn-outline" style="font-size:0.75rem; padding:8px 12px; width:auto;" href="https://www.ebay.com/sch/i.html?_nkw=vintage+cast+iron+skillet+wagner+griswold&LH_Sold=1&LH_Complete=1">View Target Comps</a>
            <button class="btn btn-accent" id="claimChallengeBtn" style="font-size:0.75rem; padding:8px 12px; width:auto;">Apply Target to Scan</button>
          </div>
        </div>
      </div>

      <div class="card" style="cursor:pointer;" id="openHandbookBtn">
        <div class="card-title">
          <span>📖 SCOUT HANDBOOK & BADGES</span>
          <span class="badge-accent">Level Perks</span>
        </div>
        <p style="font-size:0.82rem; color:var(--text-muted);">Tap to view your level progression, badge rewards, and XP scoring rules.</p>
      </div>
    </section>

    <!-- TAB 3: TRI-VAULT -->
    <section id="tab-vault" class="tab-view">
      <div class="card">
        <div class="vault-subtoggle">
          <button id="vaultSubGeneral" class="vault-subbtn active">📦 General Thrift</button>
          <button id="vaultSubCoins" class="vault-subbtn">🪙 Coins & Cash</button>
          <button id="vaultSubMtg" class="vault-subbtn">🪄 MTG Cards</button>
        </div>
        <div class="vault-toolbar">
          <span id="vaultModeDesc">General Merchandise Archive</span>
          <span>Swipe Right ➡️ Sell | Swipe Left ⬅️ Delete</span>
        </div>
        <div class="vault-summary">
          <div>
            <div class="metric-label" id="vaultCategoryLabel">General Portfolio</div>
            <div class="metric-val profit" id="vaultTotal">$0.00</div>
          </div>
          <div style="text-align:right;">
            <div class="metric-label">Tracked Items</div>
            <div class="metric-val" id="vaultCount">0 items</div>
          </div>
        </div>
        <div class="vault-list" id="vaultItemList"></div>
      </div>
    </section>

    <!-- TAB 4: STORES -->
    <section id="tab-stores" class="tab-view">
      <div class="card">
        <div class="card-title">
          <span>LOCAL THRIFT HUBS</span>
          <span class="badge-accent" id="gpsPill">Proximity Active</span>
        </div>
        <p style="font-size:0.82rem; color:var(--text-muted);">Direct routes to verified area hubs with distance sorted automatically from your current position.</p>
        <div class="store-radar-grid" id="storeRadarGrid"></div>
      </div>
    </section>
  </main>

  <nav class="bottom-dock">
    <button class="dock-btn active" data-target="tab-scout">SCOUT</button>
    <button class="dock-btn" data-target="tab-intel">INTEL</button>
    <button class="dock-btn" data-target="tab-vault">VAULT</button>
    <button class="dock-btn" data-target="tab-stores">RADAR</button>
  </nav>

  <!-- WELCOME MODAL -->
  <div class="modal-overlay active" id="welcomeModal">
    <div class="modal-content" style="text-align:center; border:2px solid var(--amber); background: linear-gradient(135deg, #1e1b4b 0%, #090d16 100%);">
      <div style="font-size:3rem;">🐕‍🦺</div>
      <div style="font-size:1.25rem; font-weight:900; color:#fff;" id="welcomeUserTitle">SPECIALIST CLAYPOOL • FIELD HQ</div>
      <div style="font-size:0.75rem; color:var(--amber); font-weight:800; text-transform:uppercase; letter-spacing:0.06em;">Thrift Scout • Ultra-Speed Timeout Guard Active</div>
      <p style="font-size:0.84rem; color:#cbd5e1; line-height:1.4; margin-top:4px;">
        Welcome back, Specialist. Hard 8-second request timeouts and fallback heuristics enforced to prevent public network hangs.
      </p>
      <button class="btn btn-amber" id="enterHQBtn" style="margin-top:6px; cursor:pointer;">REPORT FOR DUTY</button>
    </div>
  </div>

  <!-- LEVEL & BADGES / PROFILE DRAWER MODAL -->
  <div class="modal-overlay" id="levelModal">
    <div class="modal-content">
      <div class="card-title">
        <span id="modalRankTitle">Scout Level & Badges</span>
        <button class="settings-btn" id="closeLevelBtn">X</button>
      </div>

      <div style="background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:16px; text-align:center;">
        <div style="font-size:2.5rem;" id="modalBadgeIcon">🥉</div>
        <div style="font-size:1.2rem; font-weight:800; color:var(--text); margin-top:4px;" id="modalRankName">Rookie</div>
        <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;" id="modalXpSubtitle">0 XP Earned</div>
        
        <div style="background:var(--border); height:6px; border-radius:3px; margin:10px 0; overflow:hidden;">
          <div class="progress-bar-fill" id="modalProgressFill" style="background:var(--accent); width:0%; height:100%;"></div>
        </div>
        <div style="font-size:0.75rem; color:var(--accent); font-weight:700;" id="modalNextRankInfo">750 XP to Picker</div>
      </div>

      <div style="display: flex; gap: 8px; margin-top: 4px;">
        <button class="btn btn-outline" id="openConfigFromDrawerBtn" style="flex:1; font-size:0.8rem;">⚙️ Config API Key</button>
        <button class="btn btn-outline" id="openSettingsFromDrawerBtn" style="flex:1; font-size:0.8rem;">👤 Edit Profile</button>
      </div>

      <div class="card-title" style="margin-top:4px; font-size:0.85rem;">BADGE TIERS</div>
      <div style="display:flex; flex-direction:column; gap:8px;" id="badgeTiersList"></div>
    </div>
  </div>

  <!-- PROFILE SETTINGS MODAL -->
  <div class="modal-overlay" id="profileModal">
    <div class="modal-content">
      <div class="card-title">
        <span>Specialist Profile & Settings</span>
        <button class="settings-btn" id="closeProfileBtn">X</button>
      </div>
      <div>
        <label class="metric-label">Specialist Last Name</label>
        <input type="text" id="profileNameInput" class="input-field" value="Claypool" style="margin-top:4px;">
      </div>
      <div>
        <label class="metric-label">Profile Avatar URL or Emoji</label>
        <input type="text" id="profileAvatarInput" class="input-field" value="👤" style="margin-top:4px;">
      </div>
      <div>
        <label class="metric-label">Interface Theme</label>
        <select id="themeSelect" class="input-field" style="margin-top:4px;">
          <option value="dark">Dark Ops (Default)</option>
          <option value="light">Daylight Recon (Light Mode)</option>
          <option value="midnight">Midnight Stealth</option>
          <option value="tactical">Tactical Woodland</option>
          <option value="cyberpunk" selected>Cyberpunk Grid</option>
        </select>
      </div>
      <div>
        <label class="metric-label">Text Scale / Font Size</label>
        <select id="fontScaleSelect" class="input-field" style="margin-top:4px;">
          <option value="0.9rem">Compact</option>
          <option value="1rem" selected>Standard</option>
          <option value="1.1rem">Enlarged (Accessibility)</option>
        </select>
      </div>
      <div style="display:flex; align-items:center; justify-content:space-between; background:var(--surface); padding:10px 12px; border-radius:8px; border:1px solid var(--border);">
        <div>
          <div style="font-weight:700; font-size:0.85rem;">Display Token Counter</div>
          <div style="font-size:0.72rem; color:var(--text-muted);">Show daily remaining API rate-limit tokens.</div>
        </div>
        <input type="checkbox" id="tokenCounterToggle" checked style="width:18px; height:18px; cursor:pointer;">
      </div>
      <button class="btn btn-accent" id="saveProfileBtn">Save Preferences</button>
    </div>
  </div>

  <!-- VAULT DETAILS MODAL -->
  <div class="modal-overlay" id="vaultDetailModal">
    <div class="modal-content">
      <div class="card-title">
        <span id="vDetailTitle">Vault Item Details</span>
        <button class="settings-btn" id="closeVaultDetailBtn">X</button>
      </div>
      <img id="vDetailThumb" style="width:100%; height:160px; object-fit:cover; border-radius:8px; border:1px solid var(--border);" alt="Asset Thumb">
      <div class="metric-grid">
        <div class="metric-box">
          <span class="metric-label">Acquired Cost (Tap to edit)</span>
          <span class="metric-val" id="vDetailCost" style="cursor:pointer; color:var(--amber);" title="Tap to update cost">$0.00 ✏️</span>
        </div>
        <div class="metric-box">
          <span class="metric-label">Target Resale</span>
          <span class="metric-val" id="vDetailResale">$0.00</span>
        </div>
        <div class="metric-box">
          <span class="metric-label">Est. Net Profit</span>
          <span class="metric-val profit" id="vDetailProfit">$0.00</span>
        </div>
        <div class="metric-box">
          <span class="metric-label">Inventory Strategy</span>
          <span class="metric-val" id="vDetailStrategy" style="font-size:0.9rem; color:var(--accent);">Selling</span>
        </div>
      </div>
      <div style="font-size:0.82rem; color:var(--text-muted); line-height:1.4;" id="vDetailIntel"></div>
      
      <div style="display:flex; gap:8px; margin-top:4px;">
        <button class="btn btn-accent" id="quickToggleSellBtn" style="flex:1; font-size:0.8rem;">⚡ SELL INSTANTLY</button>
        <a id="vDetailEbayLink" target="_blank" class="btn btn-outline" style="flex:1; font-size:0.8rem;">VIEW COMPS</a>
      </div>
    </div>
  </div>

  <!-- STORE REVIEW MODAL -->
  <div class="modal-overlay" id="storeReviewModal">
    <div class="modal-content">
      <div class="card-title">
        <span id="reviewStoreTitle">Store Insider Reviews</span>
        <button class="settings-btn" id="closeReviewModalBtn">X</button>
      </div>
      <div id="storeReviewsContainer" style="display:flex; flex-direction:column; gap:8px; max-height:220px; overflow-y:auto;"></div>
      <div style="border-top:1px solid var(--border); padding-top:10px; display:flex; flex-direction:column; gap:8px;">
        <div style="font-weight:700; font-size:0.85rem;">Leave an Insider Review</div>
        <div style="display:flex; gap:6px;">
          <select id="newReviewRating" class="input-field" style="width:90px;">
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
          <input type="text" id="newReviewText" class="input-field" placeholder="Restocks on Tuesdays, great glassware section..." style="flex:1;">
        </div>
        <button class="btn btn-accent" id="submitReviewBtn">Submit Insider Review</button>
      </div>
    </div>
  </div>

  <!-- IN-APP MULTI-SHOT CAMERA MODAL -->
  <div class="modal-overlay" id="webcamModal">
    <div class="modal-content" style="max-width: 480px;">
      <div class="card-title">
        <span id="camHeaderTitle">In-App Multi-Shot Stacking (0 Shots)</span>
        <button class="settings-btn" id="closeWebcamBtn">X</button>
      </div>
      <video id="webcamVideo" autoplay playsinline muted></video>
      <select id="cameraSourceSelect" class="input-field" style="display:none;"></select>
      
      <div id="stagedShotsTray" style="display:flex; gap:8px; overflow-x:auto; padding:4px 0; min-height:64px; align-items:center;">
        <span style="font-size:0.75rem; color:var(--text-muted);">Snap item, tag, & hallmark photos in sequence...</span>
      </div>

      <div style="display:flex; flex-direction:column; gap:8px; margin-top:4px;">
        <button class="btn btn-outline" id="captureWebcamBtn" style="padding: 14px;">📸 SNAP SHOT</button>
        <button class="btn btn-accent" id="finishWebcamScanBtn" style="padding: 14px;">⚡ RUN RECON (0)</button>
      </div>
    </div>
  </div>

  <!-- CONFIG MODAL -->
  <div class="modal-overlay" id="configModal">
    <div class="modal-content">
      <div class="card-title">System Settings</div>
      <div>
        <label class="metric-label">Gemini API Key</label>
        <input type="password" id="geminiApiKey" class="input-field" placeholder="AIzaSy..." style="margin-top:4px;">
      </div>
      <div>
        <label class="metric-label">Quota Reset</label>
        <button class="btn btn-outline" style="margin-top:4px; padding:8px;" id="resetQuotaBtn">Reset Daily Quota (100)</button>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn btn-outline" id="closeConfigBtn" style="flex:1;">Cancel</button>
        <button class="btn btn-accent" id="saveConfigBtn" style="flex:1;">Save</button>
      </div>
    </div>
  </div>

  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
    import { 
      getFirestore, collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot, query, orderBy 
    } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "AIzaSyAtDQnJuWvJOp__hVHO5fdNhjiRjZZkskI",
      authDomain: "thrift-scout-1b937.firebaseapp.com",
      projectId: "thrift-scout-1b937",
      storageBucket: "thrift-scout-1b937.firebasestorage.app",
      messagingSenderId: "559782240794",
      appId: "1:559782240794:web:5ace10f3f027b4cd82e7a3"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    function triggerHapticAndFlash(verdict = 'BUY', isJackpot = false) {
      if ('vibrate' in navigator) {
        if (isJackpot) {
          navigator.vibrate([150, 60, 150, 60, 300, 100, 400]);
        } else if (verdict === 'BUY') {
          navigator.vibrate([120, 80, 120]);
        } else if (verdict === 'MONITOR') {
          navigator.vibrate([100, 50, 100]);
        } else {
          navigator.vibrate([60, 40, 60, 40, 60]);
        }
      }

      document.body.classList.remove('flash-active');
      void document.body.offsetWidth;
      document.body.classList.add('flash-active');
      setTimeout(() => {
        document.body.classList.remove('flash-active');
      }, 350);
    }

    let audioCtx = null;
    function playAudioFeedback(verdict = 'BUY', isJackpot = false, shouldTriggerEffects = false) {
      if (shouldTriggerEffects) {
        triggerHapticAndFlash(verdict, isJackpot);
      }
      try {
        if (!audioCtx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) audioCtx = new AudioContext();
        }
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();

        const now = audioCtx.currentTime;

        if (isJackpot) {
          const jackpotFreqs = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00];
          jackpotFreqs.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
            osc.frequency.value = freq;
            const startTime = now + (idx * 0.08);
            gain.gain.setValueAtTime(0.25, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(startTime);
            osc.stop(startTime + 0.3);
          });
        } else if (verdict === 'BUY') {
          const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
          notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            const startTime = now + (idx * 0.06);
            gain.gain.setValueAtTime(0.2, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(startTime);
            osc.stop(startTime + 0.15);
          });
        } else if (verdict === 'MONITOR') {
          const monitorNotes = [440, 554.37];
          monitorNotes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            const startTime = now + (idx * 0.1);
            gain.gain.setValueAtTime(0.2, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.2);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(startTime);
            osc.stop(startTime + 0.2);
          });
        } else {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(350, now);
          osc.frequency.exponentialRampToValueAtTime(60, now + 0.45);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.48);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now);
          osc.stop(now + 0.48);
        }
      } catch (e) {
        // Audio fallback safely ignored
      }
    }

    const TIERS = [
      { name: "Rookie", icon: "🥉", minXp: 0, maxXp: 749, desc: "Novice hunter learning hallmarks & basic comps." },
      { name: "Picker", icon: "🥈", minXp: 750, maxXp: 1999, desc: "Consistent eye for vintage tags, wool, and electronics." },
      { name: "Pro Hunter", icon: "🥇", minXp: 2000, maxXp: 4999, desc: "High-volume precision scout with solid margins." },
      { name: "Master Scout", icon: "💎", minXp: 5000, maxXp: 9999, desc: "Elite collector with deep manufacturing era knowledge." },
      { name: "Apex Reseller", icon: "👑", minXp: 10000, maxXp: Infinity, desc: "Top tier authority commanding a high-performance vault." }
    ];

    const DAILY_MISSIONS = [
      {
        name: "Cast Iron Skillet (Griswold / Wagner)",
        desc: "Check housewares for smooth-bottom vintage cast iron skillets with heat rings or marked Wagner Ware / Griswold.",
        query: "vintage cast iron skillet wagner griswold"
      },
      {
        name: "Heavyweight Flannel Shirt",
        desc: "Find any vintage cotton flannel or chamois shirt (Woolrich, Pendleton, L.L. Bean, Five Brother). Check tags for Made in USA.",
        query: "vintage heavyweight flannel shirt made in usa"
      },
      {
        name: "Vintage Graphic Band or Tour Tee",
        desc: "Hunt for single-stitch hems or 90s licensed band, concert, or festival shirts (Brockum, Giant, Winterland tags).",
        query: "vintage single stitch band tee"
      },
      {
        name: "Graphing Calculator",
        desc: "Look in the bag walls or tech bins for Texas Instruments (TI-84, TI-83 Plus, TI-89) or Casio graphing models.",
        query: "ti-84 plus graphing calculator"
      }
    ];

    const todayIndex = new Date().getDate() % DAILY_MISSIONS.length;
    const currentMission = DAILY_MISSIONS[todayIndex];

    const STATE = {
      geminiKey: localStorage.getItem('ts_gemini_key') || '',
      dailyScans: parseInt(localStorage.getItem('ts_scans_left') || '100', 10),
      xp: parseInt(localStorage.getItem('ts_xp') || '0', 10),
      activeTab: 'scout',
      vaultCategory: 'general', // 'general', 'coins', 'mtg'
      vaultItems: [],
      userLastName: localStorage.getItem('ts_last_name') || 'Claypool',
      userAvatar: localStorage.getItem('ts_avatar') || '👤',
      currentTheme: localStorage.getItem('ts_theme') || 'cyberpunk',
      fontScale: localStorage.getItem('ts_font_scale') || '1rem',
      showTokens: localStorage.getItem('ts_show_tokens') !== 'false',
      userLat: null,
      userLon: null
    };

    let currentAppraisal = null;
    let selectedImagesBase64 = [];
    let compressedThumbDataUrl = null;
    let webcamStream = null;
    let currentlyOpenedVaultItem = null;
    let activeReviewStoreName = null;
    let isSavingToVault = false;

    const STORES = [
      { name: "Goodwill - Riverdale", address: "4123 Riverdale Rd, Riverdale, UT", lat: 41.1764, lon: -111.9961 },
      { name: "Deseret Industries - Harrisville", address: "1111 N 2000 W, Harrisville, UT", lat: 41.2825, lon: -112.0125 },
      { name: "Savers - Ogden", address: "150 36th St, Ogden, UT", lat: 41.2052, lon: -111.9723 },
      { name: "Deseret Industries - Centerville", address: "351 N Marketplace Dr, Centerville, UT", lat: 40.9238, lon: -111.8872 }
    ];

    document.documentElement.setAttribute('data-theme', STATE.currentTheme);
    document.body.style.fontSize = STATE.fontScale;

    document.getElementById('welcomeUserTitle').textContent = `SPECIALIST ${STATE.userLastName.toUpperCase()} • FIELD HQ`;
    document.getElementById('enterHQBtn').onclick = () => {
      playAudioFeedback('BUY', false, false);
      document.getElementById('welcomeModal').classList.remove('active');
    };

    const costInput = document.getElementById('itemCostInput');
    costInput.addEventListener('focus', function() {
      if (this.value === '0.00' || this.value === '0') {
        this.value = '';
      }
    });
    costInput.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.value = '0.00';
      }
    });

    const coinToggle = document.getElementById('coinModeToggle');
    const mtgToggle = document.getElementById('mtgModeToggle');

    coinToggle.onchange = () => { if (coinToggle.checked) mtgToggle.checked = false; };
    mtgToggle.onchange = () => { if (mtgToggle.checked) coinToggle.checked = false; };

    const levelModal = document.getElementById('levelModal');
    document.getElementById('profileAvatarBtn').onclick = () => {
      playAudioFeedback('MONITOR', false, false);
      openLevelModal();
    };
    document.getElementById('closeLevelBtn').onclick = () => levelModal.classList.remove('active');

    const profileModal = document.getElementById('profileModal');
    document.getElementById('openSettingsFromDrawerBtn').onclick = () => {
      levelModal.classList.remove('active');
      document.getElementById('profileNameInput').value = STATE.userLastName;
      document.getElementById('profileAvatarInput').value = STATE.userAvatar;
      document.getElementById('themeSelect').value = STATE.currentTheme;
      document.getElementById('fontScaleSelect').value = STATE.fontScale;
      document.getElementById('tokenCounterToggle').checked = STATE.showTokens;
      profileModal.classList.add('active');
    };
    document.getElementById('closeProfileBtn').onclick = () => profileModal.classList.remove('active');

    const configModal = document.getElementById('configModal');
    document.getElementById('openConfigFromDrawerBtn').onclick = () => {
      levelModal.classList.remove('active');
      document.getElementById('geminiApiKey').value = STATE.geminiKey;
      configModal.classList.add('active');
    };
    document.getElementById('closeConfigBtn').onclick = () => configModal.classList.remove('active');
    
    document.getElementById('saveConfigBtn').onclick = () => {
      playAudioFeedback('BUY', false, false);
      STATE.geminiKey = document.getElementById('geminiApiKey').value.trim();
      localStorage.setItem('ts_gemini_key', STATE.geminiKey);
      configModal.classList.remove('active');
      triggerAlert('API Key verified and saved.', false, true);
    };

    document.getElementById('saveProfileBtn').onclick = () => {
      playAudioFeedback('BUY', false, false);
      STATE.userLastName = document.getElementById('profileNameInput').value.trim() || 'Claypool';
      STATE.userAvatar = document.getElementById('profileAvatarInput').value.trim() || '👤';
      STATE.currentTheme = document.getElementById('themeSelect').value;
      STATE.fontScale = document.getElementById('fontScaleSelect').value;
      STATE.showTokens = document.getElementById('tokenCounterToggle').checked;

      localStorage.setItem('ts_last_name', STATE.userLastName);
      localStorage.setItem('ts_avatar', STATE.userAvatar);
      localStorage.setItem('ts_theme', STATE.currentTheme);
      localStorage.setItem('ts_font_scale', STATE.fontScale);
      localStorage.setItem('ts_show_tokens', STATE.showTokens);

      document.documentElement.setAttribute('data-theme', STATE.currentTheme);
      document.body.style.fontSize = STATE.fontScale;
      document.getElementById('welcomeUserTitle').textContent = `SPECIALIST ${STATE.userLastName.toUpperCase()} • FIELD HQ`;

      profileModal.classList.remove('active');
      triggerAlert('Specialist profile & preferences updated successfully.', false, true);
    };

    document.getElementById('editableCostBox').onclick = () => {
      if (!currentAppraisal) return;
      const newCostInput = prompt('Update acquisition cost for this scanned item ($):', currentAppraisal.cost || 0);
      if (newCostInput === null) return;
      const newCost = parseFloat(newCostInput);
      if (isNaN(newCost)) return;

      currentAppraisal.cost = newCost;
      const resaleVal = currentAppraisal.resale;
      const newProfit = resaleVal - newCost - (resaleVal * 0.1325);
      currentAppraisal.profit = Number(newProfit.toFixed(2));

      document.getElementById('resCostBasis').textContent = '$' + newCost.toFixed(2);
      document.getElementById('resEstProfit').textContent = '$' + currentAppraisal.profit.toFixed(2);

      let dispText = "BUY (INSTANT FLIP)";
      let verdictType = 'BUY';
      let isJackpot = currentAppraisal.profit >= 50.00;

      if (resaleVal <= 0 || currentAppraisal.profit < 5.00) {
        dispText = "PASS (INSUFFICIENT MARGIN)";
        verdictType = 'PASS';
        isJackpot = false;
      } else if (currentAppraisal.profit < 15.00) {
        dispText = "MONITOR (SLIM MARGIN)";
        verdictType = 'MONITOR';
        isJackpot = false;
      }

      currentAppraisal.disposition = dispText;
      const pill = document.getElementById('resDispPill');
      pill.textContent = dispText;
      if (dispText.includes('BUY')) pill.className = 'disposition-pill disp-flip';
      else if (dispText.includes('MONITOR')) pill.className = 'disposition-pill disp-monitor';
      else pill.className = 'disposition-pill disp-pass';

      triggerAlert('Acquisition cost updated. Recalculated net profit.', false, true);
    };

    document.getElementById('clearEvalBtn').onclick = () => {
      playAudioFeedback('MONITOR', false, false);
      currentAppraisal = null;
      document.getElementById('appraisalCard').style.display = 'none';
      resetScanInputs();
      triggerAlert('Evaluation cleared. Ready for next aisle scan.', false, true);
    };

    document.getElementById('dailyTargetName').textContent = currentMission.name;
    document.getElementById('dailyTargetDesc').textContent = currentMission.desc;
    document.getElementById('dailyCompsLink').href = "https://www.ebay.com/sch/i.html?_nkw=" + encodeURIComponent(currentMission.query) + "&LH_Sold=1&LH_Complete=1";
    document.getElementById('claimChallengeBtn').onclick = () => {
      playAudioFeedback('BUY', false, false);
      triggerAlert('Target mission "' + currentMission.name + '" primed for scan!', false, true);
      document.querySelectorAll('.dock-btn')[0].click();
      document.getElementById('openWebcamBtn').scrollIntoView({ behavior: 'smooth' });
    };

    function getCurrentTier(xp) {
      for (let i = TIERS.length - 1; i >= 0; i--) {
        if (xp >= TIERS[i].minXp) return { tier: TIERS[i], index: i };
      }
      return { tier: TIERS[0], index: 0 };
    }

    function updatePills() {
      localStorage.setItem('ts_scans_left', STATE.dailyScans);
      localStorage.setItem('ts_xp', STATE.xp);
    }
    updatePills();

    function openLevelModal() {
      const { tier, index } = getCurrentTier(STATE.xp);
      const nextTier = TIERS[index + 1];

      document.getElementById('modalBadgeIcon').textContent = tier.icon;
      document.getElementById('modalRankName').textContent = tier.name;
      document.getElementById('modalXpSubtitle').textContent = STATE.xp.toLocaleString() + ' Total XP Earned • ' + STATE.dailyScans + ' Scans Left';

      const fill = document.getElementById('modalProgressFill');
      const nextInfo = document.getElementById('modalNextRankInfo');

      if (nextTier) {
        const range = nextTier.minXp - tier.minXp;
        const currentProgress = STATE.xp - tier.minXp;
        const pct = Math.min(100, Math.max(0, Math.round((currentProgress / range) * 100)));
        fill.style.width = pct + '%';
        const needed = nextTier.minXp - STATE.xp;
        nextInfo.textContent = needed.toLocaleString() + ' XP needed to reach ' + nextTier.name + ' (' + pct + '%)';
      } else {
        fill.style.width = '100%';
        nextInfo.textContent = 'Maximum Rank Achieved! Top Tier Scout.';
      }

      const list = document.getElementById('badgeTiersList');
      list.innerHTML = '';
      TIERS.forEach(t => {
        const isUnlocked = STATE.xp >= t.minXp;
        const card = document.createElement('div');
        card.className = 'badge-card' + (isUnlocked ? ' unlocked' : '');
        card.innerHTML = 
          '<div class="badge-icon-box">' + t.icon + '</div>' +
          '<div style="flex:1;">' +
            '<div style="font-weight:800; font-size:0.9rem; color:' + (isUnlocked ? 'var(--amber)' : 'var(--text)') + ';">' + 
              t.name + ' ' + (isUnlocked ? '✓' : '<span style="font-size:0.75rem; color:var(--text-muted);">(' + t.minXp.toLocaleString() + ' XP)</span>') +
            '</div>' +
            '<div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">' + t.desc + '</div>' +
          '</div>';
        list.appendChild(card);
      });

      levelModal.classList.add('active');
    }

    document.getElementById('openHandbookBtn').onclick = openLevelModal;
    document.getElementById('closeVaultDetailBtn').onclick = () => {
      document.getElementById('vaultDetailModal').classList.remove('active');
    };

    document.getElementById('vDetailCost').onclick = async () => {
      if (!currentlyOpenedVaultItem) return;
      const newCostInput = prompt('Enter acquired cost for this asset ($):', currentlyOpenedVaultItem.cost || 0);
      if (newCostInput === null) return;
      const newCost = parseFloat(newCostInput);
      if (isNaN(newCost)) return;

      const resaleVal = Number(currentlyOpenedVaultItem.resale || currentlyOpenedVaultItem.estimatedValue || 35.00);
      const newProfit = Number((resaleVal - newCost - (resaleVal * 0.1325)).toFixed(2));
      
      try {
        await updateDoc(doc(db, 'vault_inventory', currentlyOpenedVaultItem.id), {
          cost: newCost,
          profit: newProfit
        });
        currentlyOpenedVaultItem.cost = newCost;
        currentlyOpenedVaultItem.profit = newProfit;
        openVaultDetail(currentlyOpenedVaultItem);
        triggerAlert('Asset acquisition cost updated successfully.', false, false);
      } catch (err) {
        alert('Failed to update cost: ' + err.message);
      }
    };

    document.getElementById('quickToggleSellBtn').onclick = async () => {
      if (!currentlyOpenedVaultItem) return;
      const newStrategy = currentlyOpenedVaultItem.strategy === 'selling' ? 'quick_flip' : 'selling';
      try {
        await updateDoc(doc(db, 'vault_inventory', currentlyOpenedVaultItem.id), {
          strategy: newStrategy
        });
        currentlyOpenedVaultItem.strategy = newStrategy;
        document.getElementById('vDetailStrategy').textContent = newStrategy === 'selling' ? 'Selling (Active)' : (newStrategy === 'keeping' ? 'Keeping' : 'Quick Flip');
        triggerAlert('Inventory strategy updated to ' + newStrategy + '.', false, false);
      } catch (err) {
        alert('Strategy update failed: ' + err.message);
      }
    };

    document.getElementById('resetQuotaBtn').onclick = function() {
      STATE.dailyScans = 100;
      updatePills();
      alert('Daily scans reset to 100.');
    };

    function triggerAlert(msg, isErr = false, autoScroll = false) {
      const box = document.getElementById('statusAlert');
      box.style.display = 'block';
      box.style.borderLeftColor = isErr ? 'var(--coral)' : 'var(--accent)';
      box.textContent = msg;
      if (autoScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    function dismissAlert() {
      document.getElementById('statusAlert').style.display = 'none';
    }

    document.querySelectorAll('.dock-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playAudioFeedback('MONITOR', false, false);
        document.querySelectorAll('.dock-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-view').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        STATE.activeTab = btn.dataset.target.replace('tab-', '');
        document.getElementById(btn.dataset.target).classList.add('active');
        if (STATE.activeTab === 'stores') {
          initStoresList();
        }
      });
    });

    document.getElementById('vaultSubGeneral').onclick = () => {
      playAudioFeedback('MONITOR', false, false);
      STATE.vaultCategory = 'general';
      document.getElementById('vaultSubGeneral').classList.add('active');
      document.getElementById('vaultSubCoins').classList.remove('active');
      document.getElementById('vaultSubMtg').classList.remove('active');
      document.getElementById('vaultModeDesc').textContent = 'General Merchandise Archive';
      document.getElementById('vaultCategoryLabel').textContent = 'General Portfolio';
      renderVault();
    };
    document.getElementById('vaultSubCoins').onclick = () => {
      playAudioFeedback('MONITOR', false, false);
      STATE.vaultCategory = 'coins';
      document.getElementById('vaultSubCoins').classList.add('active');
      document.getElementById('vaultSubGeneral').classList.remove('active');
      document.getElementById('vaultSubMtg').classList.remove('active');
      document.getElementById('vaultModeDesc').textContent = 'Numismatic & Bullion Vault';
      document.getElementById('vaultCategoryLabel').textContent = 'Coin Portfolio';
      renderVault();
    };
    document.getElementById('vaultSubMtg').onclick = () => {
      playAudioFeedback('MONITOR', false, false);
      STATE.vaultCategory = 'mtg';
      document.getElementById('vaultSubMtg').classList.add('active');
      document.getElementById('vaultSubGeneral').classList.remove('active');
      document.getElementById('vaultSubCoins').classList.remove('active');
      document.getElementById('vaultModeDesc').textContent = 'Magic: The Gathering Collection';
      document.getElementById('vaultCategoryLabel').textContent = 'MTG Portfolio';
      renderVault();
    };

    const mobileGalleryInput = document.getElementById('mobileGalleryInput');
    document.getElementById('uploadFileBtn').onclick = () => {
      playAudioFeedback('BUY', false, false);
      mobileGalleryInput.click();
    };
    mobileGalleryInput.onchange = (e) => {
      handleFileSelection(e.target.files);
    };

    function handleFileSelection(files) {
      if (!files || files.length === 0) return;
      playAudioFeedback('BUY', false, false);
      selectedImagesBase64 = [];
      const previewContainer = document.getElementById('imagePreviewContainer');
      previewContainer.innerHTML = '';
      previewContainer.style.display = 'grid';
      document.getElementById('smartRetryBtn').style.display = 'none';

      const isCoinMode = coinToggle.checked;
      const maxFilesToProcess = isCoinMode ? 2 : 1;

      let loadedCount = 0;
      const filesToProcess = Array.from(files).slice(0, maxFilesToProcess);

      filesToProcess.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            let w = img.width;
            let h = img.height;
            const maxDim = 480;
            if (w > h && w > maxDim) { h = Math.round((h * maxDim) / w); w = maxDim; }
            else if (h > maxDim) { w = Math.round((w * maxDim) / h); h = maxDim; }
            canvas.width = w;
            canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            
            const b64 = canvas.toDataURL('image/jpeg', 0.40).split(',')[1];
            selectedImagesBase64.push(b64);

            if (index === 0) {
              const thumbCanvas = document.createElement('canvas');
              thumbCanvas.width = 140;
              thumbCanvas.height = Math.round((canvas.height * 140) / canvas.width);
              thumbCanvas.getContext('2d').drawImage(img, 0, 0, thumbCanvas.width, thumbCanvas.height);
              compressedThumbDataUrl = thumbCanvas.toDataURL('image/jpeg', 0.55);
            }

            const thumbPreview = document.createElement('img');
            thumbPreview.src = canvas.toDataURL('image/jpeg', 0.40);
            thumbPreview.style.cssText = 'width: 70px; height: 70px; object-fit: cover; border-radius: 6px; border: 1px solid var(--border);';
            previewContainer.appendChild(thumbPreview);

            loadedCount++;
            if (loadedCount === filesToProcess.length) {
              runScanWorkflow();
            }
          };
          img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
      });
    }

    const webcamModal = document.getElementById('webcamModal');
    const webcamVideo = document.getElementById('webcamVideo');
    const cameraSelect = document.getElementById('cameraSourceSelect');
    const stagedShotsTray = document.getElementById('stagedShotsTray');
    const camHeaderTitle = document.getElementById('camHeaderTitle');
    const finishWebcamScanBtn = document.getElementById('finishWebcamScanBtn');
    let stagedImagesB64 = [];
    let stagedThumbUrl = null;

    document.getElementById('openWebcamBtn').onclick = async () => {
      playAudioFeedback('BUY', false, false);
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Webcam stream not supported on this browser context. HTTPS required.');
        return;
      }
      stagedImagesB64 = [];
      stagedThumbUrl = null;
      updateStagedTray();
      webcamModal.classList.add('active');
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(d => d.kind === 'videoinput');
        cameraSelect.innerHTML = '';
        if (videoDevices.length > 1) {
          videoDevices.forEach((dev, idx) => {
            const opt = document.createElement('option');
            opt.value = dev.deviceId;
            opt.text = dev.label || ('Camera ' + (idx + 1));
            cameraSelect.appendChild(opt);
          });
          cameraSelect.style.display = 'block';
        } else {
          cameraSelect.style.display = 'none';
        }
        await startWebcamStream();
      } catch (err) {
        alert('Could not access camera: ' + err.message);
        webcamModal.classList.remove('active');
      }
    };

    async function startWebcamStream(deviceId) {
      if (webcamStream) {
        webcamStream.getTracks().forEach(track => track.stop());
      }
      const constraints = {
        video: deviceId 
          ? { deviceId: { exact: deviceId } } 
          : { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: { exact: "environment" } }
      };
      try {
        webcamStream = await navigator.mediaDevices.getUserMedia(constraints);
        webcamVideo.srcObject = webcamStream;
        await webcamVideo.play();
      } catch (e) {
        try {
          webcamStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
          webcamVideo.srcObject = webcamStream;
          await webcamVideo.play();
        } catch (err2) {
          webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });
          webcamVideo.srcObject = webcamStream;
          await webcamVideo.play();
        }
      }
    }

    cameraSelect.onchange = () => startWebcamStream(cameraSelect.value);

    document.getElementById('closeWebcamBtn').onclick = () => {
      if (webcamStream) webcamStream.getTracks().forEach(t => t.stop());
      webcamModal.classList.remove('active');
    };

    document.getElementById('captureWebcamBtn').onclick = () => {
      playAudioFeedback('BUY', false, false);
      const canvas = document.createElement('canvas');
      canvas.width = webcamVideo.videoWidth || 640;
      canvas.height = webcamVideo.videoHeight || 480;
      canvas.getContext('2d').drawImage(webcamVideo, 0, 0, canvas.width, canvas.height);
      
      const b64 = canvas.toDataURL('image/jpeg', 0.40).split(',')[1];
      stagedImagesB64.push(b64);

      if (!stagedThumbUrl) {
        const thumbCanvas = document.createElement('canvas');
        thumbCanvas.width = 140;
        thumbCanvas.height = Math.round((canvas.height * 140) / canvas.width);
        thumbCanvas.getContext('2d').drawImage(webcamVideo, 0, 0, thumbCanvas.width, thumbCanvas.height);
        stagedThumbUrl = thumbCanvas.toDataURL('image/jpeg', 0.55);
      }

      updateStagedTray();
    };

    function updateStagedTray() {
      const isCoinMode = coinToggle.checked;
      const targetCount = isCoinMode ? 2 : 1;
      camHeaderTitle.textContent = `In-App Stacking (${stagedImagesB64.length}/${targetCount} Shots)`;
      finishWebcamScanBtn.textContent = `⚡ RUN RECON (${stagedImagesB64.length})`;
      stagedShotsTray.innerHTML = '';

      if (stagedImagesB64.length === 0) {
        stagedShotsTray.innerHTML = `<span style="font-size:0.75rem; color:var(--text-muted);">${isCoinMode ? 'Snap Obverse (Front) & Reverse (Back) coin photos...' : 'Snap item photo...'}</span>`;
        return;
      }

      stagedImagesB64.forEach((b64, idx) => {
        const img = document.createElement('img');
        img.src = 'data:image/jpeg;base64,' + b64;
        img.style.cssText = 'width: 54px; height: 54px; min-width: 54px; object-fit: cover; border-radius: 6px; border: 2px solid var(--accent);';
        stagedShotsTray.appendChild(img);
      });
    }

    finishWebcamScanBtn.onclick = () => {
      if (stagedImagesB64.length === 0) {
        alert('Please snap at least one photo before running recon.');
        return;
      }
      playAudioFeedback('BUY', false, false);
      const isCoinMode = coinToggle.checked;
      selectedImagesBase64 = isCoinMode ? stagedImagesB64.slice(0, 2) : [stagedImagesB64[stagedImagesB64.length - 1]];
      compressedThumbDataUrl = stagedThumbUrl;

      if (webcamStream) webcamStream.getTracks().forEach(t => t.stop());
      webcamModal.classList.remove('active');

      const previewContainer = document.getElementById('imagePreviewContainer');
      previewContainer.innerHTML = '';
      previewContainer.style.display = 'grid';
      selectedImagesBase64.forEach(b64 => {
        const thumbPreview = document.createElement('img');
        thumbPreview.src = 'data:image/jpeg;base64,' + b64;
        thumbPreview.style.cssText = 'width: 70px; height: 70px; object-fit: cover; border-radius: 6px; border: 1px solid var(--border);';
        previewContainer.appendChild(thumbPreview);
      });

      runScanWorkflow();
    };

    const smartRetryBtn = document.getElementById('smartRetryBtn');
    smartRetryBtn.onclick = () => {
      playAudioFeedback('BUY', false, false);
      smartRetryBtn.style.display = 'none';
      runScanWorkflow();
    };

    function resetScanInputs() {
      selectedImagesBase64 = [];
      compressedThumbDataUrl = null;
      document.getElementById('imagePreviewContainer').innerHTML = '';
      document.getElementById('imagePreviewContainer').style.display = 'none';
      document.getElementById('itemCostInput').value = '0.00';
      mobileGalleryInput.value = '';
    }

    // Robust model call with automated backoff retry for 503 high demand capacity limits
    async function callGeminiWithRetry(payload, apiKey, retries = 3, delay = 2000) {
      const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + encodeURIComponent(apiKey);
      for (let i = 0; i < retries; i++) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 12000);
        try {
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal
          });
          clearTimeout(timeoutId);
          const data = await res.json();
          if (res.ok) return data;
          if (res.status === 503 && i < retries - 1) {
            await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
            continue;
          }
          throw new Error(data.error?.message || `HTTP error ${res.status}`);
        } catch (err) {
          clearTimeout(timeoutId);
          if (i === retries - 1) throw err;
          await new Promise(res => setTimeout(res, delay));
        }
      }
    }

    async function runScanWorkflow() {
      if (!selectedImagesBase64 || selectedImagesBase64.length === 0) return;
      if (!STATE.geminiKey) {
        alert('Set Gemini API key in Config.');
        configModal.classList.add('active');
        return;
      }
      if (STATE.dailyScans <= 0) {
        alert('Daily scan limit reached.');
        return;
      }

      const itemCost = parseFloat(document.getElementById('itemCostInput').value) || 0.00;
      const isCoinMode = coinToggle.checked;
      const isMtgMode = mtgToggle.checked;

      const progressBox = document.getElementById('evalProgressContainer');
      const progressBarFill = document.getElementById('evalProgressBarFill');
      const progressText = document.getElementById('evalProgressText');
      progressBox.style.display = 'flex';
      progressBarFill.style.width = '50%';
      progressText.textContent = isMtgMode ? 'Scryfall MTG Recon...' : (isCoinMode ? 'Numismatic Scan...' : 'Turbo Instant Recon...');

      smartRetryBtn.style.display = 'none';

      let successData = null;

      let promptText = "";
      if (isMtgMode) {
        promptText = "Identify this Magic: The Gathering card (exact card name, expansion set name/code, collector number, foil status, condition). Return estimated TCGPlayer market value in USD. If comps or card pricing are unavailable or unknown, set resale to 0.00. Return ONLY raw JSON without Markdown:\n" +
          "{\n" +
          '  "brand": "Wizards of the Coast (MTG)",\n' +
          '  "item": "Card Name & Set",\n' +
          '  "resale": 25.00,\n' +
          '  "platform": "TCGPlayer",\n' +
          '  "shipping": "Standard Envelope",\n' +
          '  "intel": "Identified MTG card, set edition, and market price valuation.",\n' +
          '  "query": "exact card name set"\n' +
          "}";
      } else if (isCoinMode) {
        promptText = "Examine both sides (obverse and reverse) of this coin/currency. Identify issuing country, year, mint mark, silver/gold melt vs copper-nickel, grade, and numismatic value in USD. If comps/pricing are unavailable, set resale to 0.00. Return ONLY raw JSON without Markdown:\n" +
          "{\n" +
          '  "brand": "Issuing Mint / Country",\n' +
          '  "item": "Denomination & Year",\n' +
          '  "resale": 35.00,\n' +
          '  "platform": "Numismatic",\n' +
          '  "shipping": "Insured Mail",\n' +
          '  "intel": "Mint mark verification, silver melt status, grade notes",\n' +
          '  "query": "coin ebay sold comps"\n' +
          "}";
      } else {
        promptText = "Identify item & secondhand resale value. If comps are unavailable, set resale to 0.00. Return ONLY raw JSON without Markdown:\n" +
          "{\n" +
          '  "brand": "Manufacturer",\n' +
          '  "item": "Model descriptor",\n' +
          '  "resale": 15.00,\n' +
          '  "platform": "eBay",\n' +
          '  "shipping": "USPS Ground Advantage",\n' +
          '  "intel": "Tag or hallmark reality check",\n' +
          '  "query": "ebay sold keywords"\n' +
          "}";
      }

      const parts = [{ text: promptText }];
      selectedImagesBase64.forEach(b64 => {
        parts.push({ inline_data: { mime_type: 'image/jpeg', data: b64 } });
      });

      const payload = {
        contents: [{ parts: parts }],
        generationConfig: { temperature: 0.1, maxOutputTokens: 150 }
      };

      try {
        const data = await callGeminiWithRetry(payload, STATE.geminiKey);
        successData = data.candidates?.[0]?.content?.parts?.[0]?.text;
      } catch (e) {
        // Fallback heuristic result if network or quota limit triggers
      }

      progressBarFill.style.width = '100%';
      setTimeout(() => { progressBox.style.display = 'none'; }, 100);

      if (!successData) {
        successData = JSON.stringify({
          brand: isMtgMode ? "Wizards of the Coast (MTG)" : (isCoinMode ? "US Mint" : "Vintage Thrift Asset"),
          item: "Quick Field Recon Item",
          resale: 20.00,
          platform: isMtgMode ? "TCGPlayer" : "eBay",
          shipping: "Standard Shipping",
          intel: "Offline public fallback heuristic applied. Verify hallmarks/details manually.",
          query: "vintage collectible item"
        });
      }

      try {
        let cleanJsonText = successData.trim();
        cleanJsonText = cleanJsonText.replace(/^```json\s*/i, '');
        cleanJsonText = cleanJsonText.replace(/^```\s*/i, '');
        cleanJsonText = cleanJsonText.replace(/\s*```$/i, '');
        
        const jsonMatch = cleanJsonText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error('Invalid JSON format.');
        const parsed = JSON.parse(jsonMatch[0]);

        const parsedBrand = (parsed.brand && parsed.brand.trim() !== '') ? parsed.brand.trim() : (isCoinMode ? 'US Mint' : (isMtgMode ? 'Wizards of the Coast' : 'Unbranded'));
        const parsedItem = (parsed.item && parsed.item.trim() !== '') ? parsed.item.trim() : 'Identified Asset';
        const estResale = parseFloat(parsed.resale) || 0.00;
        const estProfit = estResale - itemCost - (estResale * 0.1325);

        let dispText = "BUY (INSTANT FLIP)";
        let verdictType = 'BUY';
        let isJackpot = estProfit >= 50.00;

        if (estResale <= 0 || estProfit < 5.00) {
          dispText = "PASS (INSUFFICIENT MARGIN)";
          verdictType = 'PASS';
          isJackpot = false;
        } else if (estProfit < 15.00) {
          dispText = "MONITOR (SLIM MARGIN)";
          verdictType = 'MONITOR';
          isJackpot = false;
        }

        playAudioFeedback(verdictType, isJackpot, true);

        const fullDesc = (parsedBrand + " " + parsedItem + " " + (parsed.intel || '')).toLowerCase();
        const isMissionMatch = currentMission.name.toLowerCase().split(' ').some(w => w.length > 3 && fullDesc.includes(w));
        const bonusXp = isMissionMatch ? 150 : 25;

        let marketTier = "Standard Tier";
        let tierColor = "#9ca3af";
        if (estResale >= 200) {
          marketTier = "👑 Grail Tier ($200+)";
          tierColor = "#fbbf24";
        } else if (estResale >= 100) {
          marketTier = "💎 Premium Tier ($100+)";
          tierColor = "#ec4899";
        } else if (estResale >= 50) {
          marketTier = "🔥 Mid-High Tier ($50+)";
          tierColor = "#f97316";
        } else if (estResale >= 25) {
          marketTier = "✨ Mid Tier ($25+)";
          tierColor = "#14b8a6";
        }

        currentAppraisal = {
          brand: parsedBrand,
          item: parsedItem,
          name: parsedBrand + " - " + parsedItem,
          cost: itemCost,
          resale: estResale,
          profit: Number(estProfit.toFixed(2)),
          platform: parsed.platform || (isMtgMode ? 'TCGPlayer' : 'eBay'),
          shipping: parsed.shipping || 'USPS Ground Advantage',
          disposition: dispText,
          intel: parsed.intel || 'Standard secondary market asset.',
          query: parsed.query || (parsedBrand + " " + parsedItem),
          rarity: marketTier,
          rarityColor: tierColor,
          imageThumb: compressedThumbDataUrl || ("data:image/jpeg;base64," + selectedImagesBase64[0]),
          category: isMtgMode ? 'mtg' : (isCoinMode ? 'coins' : 'general'),
          strategy: document.getElementById('assetStrategySelect').value || 'selling',
          status: 'owned',
          createdAt: Date.now()
        };

        renderAppraisal(currentAppraisal, isCoinMode || isMtgMode);
        resetScanInputs();
        STATE.dailyScans--;
        STATE.xp += bonusXp;
        updatePills();
        dismissAlert();

        if (isMissionMatch) {
          alert('🎯 Daily Mission Target Identified! +150 XP Bonus Awarded!');
        }

      } catch (err) {
        triggerAlert('Parsing error: ' + err.message, true, true);
        smartRetryBtn.style.display = 'block';
      }
    }

    function renderAppraisal(item, isSpecialMode = false) {
      document.getElementById('resItemTitle').textContent = item.name;
      document.getElementById('resEstResale').textContent = '$' + item.resale.toFixed(2);
      document.getElementById('resEstProfit').textContent = '$' + item.profit.toFixed(2);
      document.getElementById('resBrand').textContent = item.brand;
      document.getElementById('resCostBasis').textContent = '$' + (item.cost || 0).toFixed(2);
      document.getElementById('resIntel').textContent = item.intel;
      document.getElementById('assetStrategySelect').value = item.strategy || 'selling';

      document.getElementById('tierLabelTitle').textContent = isSpecialMode ? 'Card / Numismatic Tier' : 'Market Value Tier';
      const rarityBadge = document.getElementById('resRarityBadge');
      rarityBadge.textContent = item.rarity || 'Standard Tier';
      rarityBadge.style.color = item.rarityColor || '#9ca3af';

      const pill = document.getElementById('resDispPill');
      pill.textContent = item.disposition;
      
      if (item.disposition.includes('BUY')) {
        pill.className = 'disposition-pill disp-flip';
      } else if (item.disposition.includes('MONITOR')) {
        pill.className = 'disposition-pill disp-monitor';
      } else {
        pill.className = 'disposition-pill disp-pass';
      }

      const appraisalCard = document.getElementById('appraisalCard');
      if (item.profit >= 50) {
        appraisalCard.classList.add('high-flip-gold');
      } else {
        appraisalCard.classList.remove('high-flip-gold');
      }

      const hasComps = item.resale > 0;
      const ebayUrl = "[https://www.ebay.com/sch/i.html?_nkw=](https://www.ebay.com/sch/i.html?_nkw=)" + encodeURIComponent(item.query) + "&LH_Sold=1&LH_Complete=1";
      const scryfallUrl = "[https://scryfall.com/search?q=](https://scryfall.com/search?q=)" + encodeURIComponent(item.query);

      const ebayBtn = document.getElementById('resEbayLink');
      const scryfallBtn = document.getElementById('resVelocityLink');

      if (hasComps) {
        ebayBtn.href = ebayUrl;
        ebayBtn.classList.remove('disabled');
        ebayBtn.textContent = 'VIEW MARKET COMPS';

        scryfallBtn.href = item.category === 'mtg' ? scryfallUrl : ebayUrl;
        scryfallBtn.classList.remove('disabled');
        scryfallBtn.textContent = item.category === 'mtg' ? '📊 SCRYFALL COMPS' : '📊 MARKET COMPS';
      } else {
        ebayBtn.removeAttribute('href');
        ebayBtn.classList.add('disabled');
        ebayBtn.textContent = 'NO COMPS AVAILABLE';

        scryfallBtn.removeAttribute('href');
        scryfallBtn.classList.add('disabled');
        scryfallBtn.textContent = 'NO COMPS AVAILABLE';
      }

      appraisalCard.style.display = 'flex';
      appraisalCard.scrollIntoView({ behavior: 'smooth' });
    }

    document.getElementById('shareEvaluationBtn').onclick = async () => {
      playAudioFeedback('MONITOR', false, false);
      if (!currentAppraisal) return;

      const canvas = document.createElement('canvas');
      canvas.width = 600;
      canvas.height = 400;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#111827';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#14b8a6';
      ctx.lineWidth = 4;
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

      ctx.fillStyle = '#14b8a6';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('THRIFT SCOUT • FIELD RECON', 30, 45);

      ctx.fillStyle = '#f9fafb';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText(currentAppraisal.name, 30, 80);

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.drawImage(img, 30, 105, 150, 150);
        drawTextAndShare(canvas);
      };
      img.onerror = () => {
        drawTextAndShare(canvas);
      };
      img.src = currentAppraisal.imageThumb;
    };

    async function drawTextAndShare(canvas) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#9ca3af';
      ctx.font = '14px sans-serif';
      ctx.fillText('Target Resale:', 200, 125);
      ctx.fillStyle = '#f9fafb';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText('$' + currentAppraisal.resale.toFixed(2), 200, 155);

      ctx.fillStyle = '#9ca3af';
      ctx.font = '14px sans-serif';
      ctx.fillText('Est. Net Profit:', 200, 195);
      ctx.fillStyle = '#14b8a6';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('$' + currentAppraisal.profit.toFixed(2), 200, 225);

      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('VERDICT: ' + currentAppraisal.disposition, 30, 290);

      ctx.fillStyle = '#64748b';
      ctx.font = '12px sans-serif';
      ctx.fillText('Platform: ' + currentAppraisal.platform + ' • Cost: $' + (currentAppraisal.cost || 0).toFixed(2), 30, 325);

      canvas.toBlob(async (blob) => {
        const file = new File([blob], 'thrift-scout-eval.jpg', { type: 'image/jpeg' });
        const shareData = {
          title: 'Thrift Scout: ' + currentAppraisal.name,
          text: `Check out this find!\nItem: ${currentAppraisal.name}\nTarget Resale: $${currentAppraisal.resale.toFixed(2)}\nEst. Profit: $${currentAppraisal.profit.toFixed(2)}`,
          files: [file]
        };
        try {
          if (navigator.canShare && navigator.canShare(shareData)) {
            await navigator.share(shareData);
          } else if (navigator.share) {
            await navigator.share({ title: shareData.title, text: shareData.text, url: window.location.href });
          } else {
            await navigator.clipboard.writeText(shareData.text);
            alert('Evaluation details copied to clipboard!');
          }
        } catch (err) {
          // User cancelled share
        }
      }, 'image/jpeg', 0.90);
    }

    document.getElementById('saveVaultBtn').onclick = async () => {
      if (isSavingToVault || !currentAppraisal) return;
      isSavingToVault = true;
      playAudioFeedback('BUY', currentAppraisal.profit >= 50, false);
      
      currentAppraisal.strategy = document.getElementById('assetStrategySelect').value || 'selling';

      try {
        await addDoc(collection(db, 'vault_inventory'), currentAppraisal);
        STATE.xp += 50;
        updatePills();
        triggerAlert('Asset securely added to ' + currentAppraisal.category.toUpperCase() + ' Vault.', false, false);
        setTimeout(() => { isSavingToVault = false; }, 1200);
      } catch (err) {
        isSavingToVault = false;
        triggerAlert('Cloud sync failed: ' + err.message, true, false);
      }
    };

    function attachFirestoreListeners() {
      onSnapshot(query(collection(db, 'vault_inventory'), orderBy('createdAt', 'desc')), (snap) => {
        STATE.vaultItems = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        renderVault();
      });
    }
    attachFirestoreListeners();

    function renderVault() {
      const scrollPos = window.scrollY;
      const container = document.getElementById('vaultItemList');
      container.innerHTML = '';
      
      const filteredList = STATE.vaultItems.filter(item => {
        const cat = item.category || 'general';
        return cat === STATE.vaultCategory;
      });

      let totalValue = 0;

      filteredList.forEach(item => {
        const resaleVal = Number(item.resale || item.estimatedValue || 35.00);
        const costVal = Number(item.cost || 0);
        const computedProfit = resaleVal - costVal - (resaleVal * 0.1325);
        const val = Number(item.profit !== undefined && item.profit !== 0 ? item.profit : computedProfit);
        totalValue += val;

        const displayBrand = item.brand || 'Unbranded';
        const displayItem = item.item || item.name || 'Thrift Asset';
        const strategyTag = item.strategy === 'keeping' ? '🔒 Keeping' : (item.strategy === 'quick_flip' ? '⚡ Quick Flip' : '🛒 Selling');

        const thumbSrc = item.imageThumb || item.image || "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231b2336%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%2394a3b8%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22sans-serif%22%3EAsset%3C%2Ftext%3E%3C%2Fsvg%3E";

        const wrapper = document.createElement('div');
        wrapper.className = 'vault-item-container';

        const bgActions = document.createElement('div');
        bgActions.className = 'swipe-actions-bg';
        bgActions.innerHTML = '<span class="swipe-action-left">➡️ Sell</span><span class="swipe-action-right">Delete ⬅️</span>';
        wrapper.appendChild(bgActions);

        const row = document.createElement('div');
        row.className = 'vault-item';
        row.onclick = () => openVaultDetail(item);

        let vStartX = 0;
        let vStartY = 0;
        let vCurrentX = 0;
        let vDragging = false;
        let isHorizontalSwipe = false;

        row.addEventListener('touchstart', (e) => {
          vStartX = e.touches[0].clientX;
          vStartY = e.touches[0].clientY;
          vDragging = true;
          isHorizontalSwipe = false;
        }, { passive: true });

        row.addEventListener('touchmove', (e) => {
          if (!vDragging) return;
          vCurrentX = e.touches[0].clientX;
          const currentY = e.touches[0].clientY;
          const diffX = vCurrentX - vStartX;
          const diffY = currentY - vStartY;

          if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 8) {
            isHorizontalSwipe = true;
            row.style.transform = 'translateX(' + diffX + 'px)';
          }
        }, { passive: true });

        row.addEventListener('touchend', (e) => {
          if (!vDragging) return;
          vDragging = false;
          const diffX = vCurrentX - vStartX;
          row.style.transform = 'translateX(0px)';

          if (isHorizontalSwipe && Math.abs(diffX) > 75) {
            e.stopPropagation();
            e.preventDefault();
            playAudioFeedback('BUY', false, false);
            if (diffX > 0) {
              quickSellItem(item.id);
            } else {
              deleteCloudItemDirect(item.id);
            }
          }
        });

        row.innerHTML = 
          '<img class="item-thumb" src="' + thumbSrc + '" alt="Thumb" onerror="this.src=\'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231b2336%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%2394a3b8%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-size%3D%2211%22%20font-family%3D%22sans-serif%22%3EAsset%3C%2Ftext%3E%3C%2Fsvg%3E\'">' +
          '<div class="item-content">' +
            '<div class="item-title">' + displayBrand + ' - ' + displayItem + '</div>' +
            '<div class="item-meta">Buy: $' + costVal.toFixed(2) + ' • Target: $' + resaleVal.toFixed(2) + ' • ' + strategyTag + '</div>' +
            '<div class="item-actions" onclick="event.stopPropagation();">' +
              '<button class="btn btn-accent" style="padding:4px 8px; font-size:0.75rem; width:auto;" onclick="quickSellItem(\'' + item.id + '\')">SELL</button>' +
              '<button class="btn btn-outline" style="padding:4px 8px; font-size:0.75rem; width:auto; color:var(--coral);" onclick="deleteCloudItemDirect(\'' + item.id + '\')">DELETE</button>' +
            '</div>' +
          '</div>' +
          '<div style="text-align:right;">' +
            '<div style="color:var(--accent); font-weight:800; font-size:1rem;">+$' + val.toFixed(2) + '</div>' +
            '<div style="font-size:0.68rem; color:var(--text-muted); margin-top:2px;">EST. PROFIT</div>' +
          '</div>';

        wrapper.appendChild(row);
        container.appendChild(wrapper);
      });

      document.getElementById('vaultTotal').textContent = '$' + totalValue.toFixed(2);
      document.getElementById('vaultCount').textContent = filteredList.length + ' items';
      
      if (STATE.activeTab === 'vault') {
        window.scrollTo(0, scrollPos);
      }
    }

    window.openVaultDetail = (item) => {
      playAudioFeedback('MONITOR', false, false);
      currentlyOpenedVaultItem = item;
      const resaleVal = Number(item.resale || item.estimatedValue || 35.00);
      const costVal = Number(item.cost || 0);
      const profitVal = item.profit !== undefined && item.profit !== 0 ? item.profit : (resaleVal - costVal - (resaleVal * 0.1325));

      document.getElementById('vDetailTitle').textContent = (item.brand || 'Asset') + ' - ' + (item.item || item.name || 'Item');
      document.getElementById('vDetailThumb').src = item.imageThumb || item.image || '';
      document.getElementById('vDetailCost').textContent = '$' + costVal.toFixed(2) + ' ✏️';
      document.getElementById('vDetailResale').textContent = '$' + resaleVal.toFixed(2);
      document.getElementById('vDetailProfit').textContent = '$' + profitVal.toFixed(2);
      document.getElementById('vDetailStrategy').textContent = item.strategy === 'keeping' ? 'Keeping' : (item.strategy === 'quick_flip' ? 'Quick Flip' : 'Selling');
      document.getElementById('vDetailIntel').textContent = item.intel || item.shipping || 'No additional intelligence notes logged.';
      
      const hasComps = resaleVal > 0;
      const detailEbayLink = document.getElementById('vDetailEbayLink');
      if (hasComps) {
        detailEbayLink.href = item.category === 'mtg' ? ("[https://scryfall.com/search?q=](https://scryfall.com/search?q=)" + encodeURIComponent(item.query)) : ("[https://www.ebay.com/sch/i.html?_nkw=](https://www.ebay.com/sch/i.html?_nkw=)" + encodeURIComponent(item.query || (item.brand + " " + item.item)) + "&LH_Sold=1&LH_Complete=1");
        detailEbayLink.classList.remove('disabled');
        detailEbayLink.textContent = 'VIEW COMPS';
      } else {
        detailEbayLink.removeAttribute('href');
        detailEbayLink.classList.add('disabled');
        detailEbayLink.textContent = 'NO COMPS AVAILABLE';
      }

      document.getElementById('vaultDetailModal').classList.add('active');
    };

    window.quickSellItem = async (id) => {
      const target = STATE.vaultItems.find(i => i.id === id);
      if (!target) return;
      const defaultPrice = target.resale || 35.00;
      const soldInput = prompt('Enter final sold price ($):', defaultPrice);
      if (soldInput === null) return;
      const finalPrice = parseFloat(soldInput) || defaultPrice;
      const costBasis = target.cost || 0;
      const realized = finalPrice - costBasis - (finalPrice * 0.1325);

      try {
        await updateDoc(doc(db, 'vault_inventory', id), {
          status: 'sold',
          finalSoldPrice: finalPrice,
          profit: Number(realized.toFixed(2))
        });
        STATE.xp += 100;
        updatePills();
        playAudioFeedback('BUY', realized >= 50, false);
        triggerAlert('Asset marked as sold. Profit locked in.', false, false);
      } catch (err) {
        alert('Action failed: ' + err.message);
      }
    };

    window.deleteCloudItemDirect = async (id) => {
      try {
        await deleteDoc(doc(db, 'vault_inventory', id));
        triggerAlert('Asset purged from archive.', false, false);
        playAudioFeedback('PASS', false, false);
      } catch (err) {
        alert('Delete failed: ' + err.message);
      }
    };

    function calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 3958.8;
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      return (R * c).toFixed(1);
    }

    function initStoresList() {
      const grid = document.getElementById('storeRadarGrid');

      if (!navigator.geolocation) {
        renderStoreCards(STORES);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          STATE.userLat = pos.coords.latitude;
          STATE.userLon = pos.coords.longitude;
          const enriched = STORES.map(s => {
            const dist = calculateDistance(STATE.userLat, STATE.userLon, s.lat, s.lon);
            return { ...s, dist: parseFloat(dist) };
          }).sort((a, b) => a.dist - b.dist);
          renderStoreCards(enriched);
        },
        () => {
          renderStoreCards(STORES);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 60000 }
      );
    }

    function renderStoreCards(storeList) {
      const grid = document.getElementById('storeRadarGrid');
      grid.innerHTML = '';

      storeList.forEach(s => {
        const destQuery = encodeURIComponent(s.address);
        const card = document.createElement('div');
        card.className = 'store-card-modern';
        card.innerHTML = 
          '<div class="store-card-top">' +
            '<div>' +
              '<div class="store-name-title">' + s.name + '</div>' +
              '<div class="store-address-text">' + s.address + '</div>' +
            '</div>' +
            '<span class="store-dist-badge">' + s.dist + ' mi</span>' +
          '</div>' +
          '<div class="nav-actions-grid">' +
            '<a class="nav-app-btn" target="_blank" href="[https://www.google.com/maps/dir/?api=1&destination=](https://www.google.com/maps/dir/?api=1&destination=)' + destQuery + '">Google Maps</a>' +
            '<button class="nav-app-btn" onclick="openStoreReviews(\'' + s.name.replace(/'/g, "\\'") + '\')">⭐ Insider Reviews</button>' +
          '</div>';
        grid.appendChild(card);
      });
    }

    const storeReviewModal = document.getElementById('storeReviewModal');
    window.openStoreReviews = (storeName) => {
      playAudioFeedback('MONITOR', false, false);
      activeReviewStoreName = storeName;
      document.getElementById('reviewStoreTitle').textContent = storeName + ' • Insider Intel';
      
      const savedReviews = JSON.parse(localStorage.getItem('ts_reviews_' + storeName) || JSON.stringify([
        { author: 'Specialist Claypool', rating: 5, text: 'Great selection of vintage audio gear in the back aisles.' },
        { author: 'Scout Vanguard', rating: 4, text: 'Clean store, fast checkout, pricing on clothes is fair.' }
      ]));

      const container = document.getElementById('storeReviewsContainer');
      container.innerHTML = '';
      savedReviews.forEach(r => {
        const div = document.createElement('div');
        div.style.cssText = 'background:var(--surface); padding:8px 10px; border-radius:8px; border:1px solid var(--border); font-size:0.8rem;';
        div.innerHTML = '<div style="font-weight:700; color:var(--accent);">⭐ ' + r.rating + '/5 • ' + r.author + '</div><div style="color:var(--text-muted); margin-top:2px;">' + r.text + '</div>';
        container.appendChild(div);
      });

      storeReviewModal.classList.add('active');
    };

    document.getElementById('closeReviewModalBtn').onclick = () => {
      storeReviewModal.classList.remove('active');
    };

    document.getElementById('submitReviewBtn').onclick = () => {
      if (!activeReviewStoreName) return;
      const rating = document.getElementById('newReviewRating').value;
      const text = document.getElementById('newReviewText').value.trim();
      if (!text) {
        alert('Please enter a review comment.');
        return;
      }

      playAudioFeedback('BUY', false, false);
      const storageKey = 'ts_reviews_' + activeReviewStoreName;
      const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
      existing.unshift({
        author: 'Specialist ' + STATE.userLastName,
        rating: parseInt(rating),
        text: text
      });
      localStorage.setItem(storageKey, JSON.stringify(existing));
      document.getElementById('newReviewText').value = '';
      openStoreReviews(activeReviewStoreName);
      triggerAlert('Insider review submitted successfully.', false, false);
    };

    initStoresList();
  </script>
</body>
</html>

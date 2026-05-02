<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Heightech ERP — Alpinismo Industrial</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#0a0f1a;--surface:#111827;--surface2:#1a2332;--border:rgba(255,255,255,0.07);--text:#f1f5f9;--muted:#64748b;--green:#22c55e;--yellow:#f59e0b;--red:#ef4444;--blue:#3b82f6;--accent:#CC1818;--accent2:#FF4444;}
html,body{height:100%;background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif}
#root{height:100%}

/* LOGIN */
.login-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at 30% 40%,rgba(204,24,24,0.12) 0%,transparent 60%),var(--bg);padding:20px}
.login-box{background:var(--surface);border:1px solid var(--border);border-radius:24px;padding:40px;width:100%;max-width:420px;box-shadow:0 32px 80px rgba(0,0,0,0.5)}
.login-logo{text-align:center;margin-bottom:32px}
.login-logo svg{filter:drop-shadow(0 0 20px rgba(204,24,24,0.4))}
.login-title{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;text-align:center;margin-bottom:4px}
.login-sub{font-size:13px;color:var(--muted);text-align:center;margin-bottom:28px}
.login-err{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);color:#ff6b6b;padding:10px 14px;border-radius:10px;font-size:13px;margin-bottom:16px;text-align:center}

/* APP */
.app{display:flex;min-height:100vh}
.sidebar{width:240px;background:var(--surface);border-right:1px solid var(--border);display:flex;flex-direction:column;position:fixed;height:100vh;z-index:100;transition:transform .3s ease;overflow:hidden}
.sidebar-logo{padding:18px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;flex-shrink:0;cursor:pointer}
.sidebar-logo img{width:44px;height:44px;object-fit:contain;flex-shrink:0}
.logo-text{font-family:'Syne',sans-serif;font-weight:800;font-size:14px;line-height:1.2}
.logo-sub{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1px}
.nav{flex:1;padding:14px 10px;overflow-y:auto}
.nav-section{margin-bottom:22px}
.nav-label{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:1.5px;padding:0 10px;margin-bottom:5px;font-weight:700}
.nav-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;cursor:pointer;transition:all .15s;color:var(--muted);font-size:14px;font-weight:500;margin-bottom:2px;user-select:none}
.nav-item:hover{background:var(--surface2);color:var(--text)}
.nav-item.active{background:rgba(204,24,24,0.15);color:#FF4444}
.nav-item .ni{font-size:17px;flex-shrink:0}
.sidebar-footer{padding:14px;border-top:1px solid var(--border);flex-shrink:0}
.user-card{display:flex;align-items:center;gap:10px;cursor:pointer;padding:8px;border-radius:10px;transition:background .15s}
.user-card:hover{background:var(--surface2)}
.user-avatar{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#CC1818,#FF4444);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0;color:#fff}
.user-name{font-size:13px;font-weight:600}
.user-role{font-size:11px;color:var(--muted)}
.main{margin-left:240px;flex:1;min-height:100vh;display:flex;flex-direction:column}
.topbar{position:sticky;top:0;z-index:50;background:rgba(10,15,26,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:0 28px;height:60px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.topbar-title{font-family:'Syne',sans-serif;font-size:18px;font-weight:700}
.topbar-actions{display:flex;gap:10px;align-items:center}
.content{padding:28px;flex:1;overflow-y:auto}
.card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px;transition:border-color .2s}
.card:hover{border-color:rgba(255,255,255,0.12)}
.card-title{font-family:'Syne',sans-serif;font-size:15px;font-weight:700;margin-bottom:16px}
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.stat-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;flex-direction:column;gap:8px}
.stat-icon{font-size:24px;margin-bottom:4px}
.stat-value{font-family:'Syne',sans-serif;font-size:28px;font-weight:800;line-height:1}
.stat-label{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;font-weight:700}
.stat-change{font-size:12px;margin-top:2px}
.stat-change.up{color:var(--green)}.stat-change.dn{color:var(--red)}
.badge{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:50px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;white-space:nowrap}
.badge-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}
.progress-track{height:6px;background:rgba(255,255,255,0.06);border-radius:99px;overflow:visible;position:relative}
.progress-fill{height:100%;border-radius:99px;transition:width .5s ease;position:relative}
.progress-over{position:absolute;top:0;height:100%;border-radius:99px;background:rgba(255,180,0,0.5);border:1px solid #f59e0b}
.btn{display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;border:none;transition:all .15s;font-family:'DM Sans',sans-serif;user-select:none;white-space:nowrap}
.btn-primary{background:linear-gradient(135deg,#CC1818,#FF4444);color:#fff}
.btn-primary:hover{opacity:.9;transform:translateY(-1px)}
.btn-ghost{background:rgba(255,255,255,0.05);color:var(--text);border:1px solid var(--border)}
.btn-ghost:hover{background:rgba(255,255,255,0.09)}
.btn-sm{padding:7px 13px;font-size:12px;border-radius:8px}
.btn-icon{padding:9px;border-radius:8px}
.btn:disabled{opacity:.4;cursor:not-allowed;transform:none}
.btn-danger{background:rgba(239,68,68,0.12);color:var(--red);border:1px solid rgba(239,68,68,0.25)}
.btn-danger:hover{background:rgba(239,68,68,0.2)}
.btn-success{background:rgba(34,197,94,0.12);color:var(--green);border:1px solid rgba(34,197,94,0.25)}
.obra-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px;transition:all .2s}
.obra-card:hover{border-color:rgba(204,24,24,0.4);transform:translateY(-2px)}
.obra-nome{font-family:'Syne',sans-serif;font-size:15px;font-weight:700;margin-bottom:3px}
.obra-cliente{font-size:12px;color:var(--muted)}
.rank-item{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--border)}
.rank-item:last-child{border-bottom:none}
.rank-num{font-family:'Syne',sans-serif;font-size:13px;font-weight:800;color:var(--muted);width:24px;text-align:center;flex-shrink:0}
.rank-info{flex:1;min-width:0}
.rank-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rank-role{font-size:11px;color:var(--muted)}
.rank-pts{font-family:'Syne',sans-serif;font-size:15px;font-weight:800;color:var(--accent);flex-shrink:0}
.alert{display:flex;gap:12px;padding:13px;border-radius:12px;margin-bottom:10px;align-items:flex-start}
.alert-red{background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2)}
.alert-yellow{background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2)}
.alert-icon{font-size:17px;flex-shrink:0;margin-top:1px}
.alert-title{font-size:13px;font-weight:600;margin-bottom:2px}
.alert-desc{font-size:12px;color:var(--muted)}
.table-wrap{overflow-x:auto}
table{width:100%;border-collapse:collapse}
th{text-align:left;padding:10px 14px;font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;font-weight:700;border-bottom:1px solid var(--border);white-space:nowrap}
td{padding:11px 14px;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.04);vertical-align:middle}
tr:last-child td{border-bottom:none}
tr:hover td{background:rgba(255,255,255,0.02)}
.form-group{margin-bottom:15px}
.form-label{font-size:11px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px;display:block}
.form-input,.form-select,.form-textarea{width:100%;background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:11px 14px;color:var(--text);font-size:14px;font-family:'DM Sans',sans-serif;transition:border-color .2s;outline:none}
.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--accent)}
.form-textarea{resize:vertical;min-height:88px}
select option{background:#111827}
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px)}
.modal{background:var(--surface);border:1px solid var(--border);border-radius:20px;width:100%;max-width:600px;max-height:90vh;overflow-y:auto}
.modal-header{padding:22px 24px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:var(--surface);z-index:1}
.modal-title{font-family:'Syne',sans-serif;font-size:18px;font-weight:700}
.modal-body{padding:24px}
.modal-footer{padding:18px 24px;border-top:1px solid var(--border);display:flex;gap:10px;justify-content:flex-end}
.gantt-wrap{overflow-x:auto;padding-bottom:4px}
.gantt-row{display:flex;align-items:center;margin-bottom:8px;min-width:500px}
.gantt-label{width:155px;flex-shrink:0;font-size:12px;padding-right:12px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.gantt-track{flex:1;height:28px;background:rgba(255,255,255,0.04);border-radius:6px;position:relative;overflow:hidden}
.gantt-bar{position:absolute;height:100%;border-radius:6px;display:flex;align-items:center;padding:0 8px;font-size:11px;font-weight:600;white-space:nowrap;overflow:hidden}
.tabs{display:flex;gap:4px;background:var(--surface2);padding:4px;border-radius:12px;margin-bottom:20px}
.tab{flex:1;padding:9px 8px;text-align:center;border-radius:9px;cursor:pointer;font-size:13px;font-weight:500;color:var(--muted);transition:all .15s;white-space:nowrap}
.tab.active{background:var(--surface);color:var(--text);font-weight:600}
.check-item{display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;margin-bottom:6px;background:rgba(255,255,255,0.02);cursor:pointer}
.check-box{width:20px;height:20px;border-radius:6px;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .15s}
.check-box.checked{background:var(--green);border-color:var(--green)}
.chip{display:inline-flex;align-items:center;padding:3px 9px;border-radius:50px;font-size:11px;font-weight:600}
.section-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;gap:12px;flex-wrap:wrap}
.section-title{font-family:'Syne',sans-serif;font-size:20px;font-weight:800}
.section-sub{font-size:13px;color:var(--muted);margin-top:2px}
.mobile-toggle{display:none;background:none;border:none;color:var(--text);font-size:22px;cursor:pointer;padding:8px}
.notif-dot{width:8px;height:8px;background:var(--red);border-radius:50%;position:absolute;top:8px;right:8px}
.epi-row td:nth-child(2){font-weight:700}
::-webkit-scrollbar{width:4px;height:4px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:99px}
.toast-enter{animation:toastIn .3s ease}
@keyframes toastIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
.empty-state{text-align:center;padding:48px 20px;color:var(--muted)}
.empty-state .es-icon{font-size:48px;margin-bottom:16px}
.empty-state .es-title{font-family:'Syne',sans-serif;font-size:16px;font-weight:700;color:var(--text);margin-bottom:8px}
.empty-state .es-desc{font-size:14px;margin-bottom:24px}
.rel-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px;display:flex;gap:16px;align-items:flex-start;transition:all .2s;cursor:pointer}
.rel-card:hover{border-color:rgba(204,24,24,0.4);transform:translateY(-2px)}
.rel-icon{font-size:36px;flex-shrink:0;line-height:1}
.rel-titulo{font-family:'Syne',sans-serif;font-weight:700;font-size:15px;margin-bottom:6px}
.rel-desc{font-size:13px;color:var(--muted);margin-bottom:14px}
@media(max-width:900px){
  .sidebar{transform:translateX(-100%)}.sidebar.open{transform:translateX(0)}
  .main{margin-left:0}.mobile-toggle{display:block}.content{padding:16px}
  .grid-4{grid-template-columns:repeat(2,1fr)}.grid-3{grid-template-columns:repeat(2,1fr)}.grid-2{grid-template-columns:1fr}
  .topbar{padding:0 16px}
}
@media(max-width:500px){.grid-4,.grid-3,.grid-2{grid-template-columns:1fr}}
  </style>
</head>
<body>
<div id="root"></div>
<script type="text/babel">
const { useState, useEffect, useRef, createContext, useContext } = React;

/* ═══ STORAGE ═══════════════════════════════════════════════════ */
const S = {
  g:(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch{return d;}},
  s:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch{}}
};

/* ═══ LOGO SVG ═══════════════════════════════════════════════════ */
const LogoSVG = ({size=44}) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="16" fill="#CC1818"/>
    <rect width="80" height="80" rx="16" fill="url(#lg1)"/>
    <defs>
      <linearGradient id="lg1" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF4444"/>
        <stop offset="100%" stopColor="#AA0000"/>
      </linearGradient>
    </defs>
    {/* Building / tower icon */}
    <rect x="30" y="20" width="20" height="42" rx="2" fill="white" fillOpacity="0.9"/>
    <rect x="22" y="34" width="36" height="28" rx="2" fill="white" fillOpacity="0.7"/>
    {/* Windows */}
    <rect x="34" y="25" width="5" height="5" rx="1" fill="#CC1818"/>
    <rect x="41" y="25" width="5" height="5" rx="1" fill="#CC1818"/>
    <rect x="26" y="38" width="5" height="5" rx="1" fill="#CC1818"/>
    <rect x="34" y="38" width="5" height="5" rx="1" fill="#CC1818"/>
    <rect x="42" y="38" width="5" height="5" rx="1" fill="#CC1818"/>
    <rect x="50" y="38" width="5" height="5" rx="1" fill="#CC1818"/>
    <rect x="26" y="47" width="5" height="5" rx="1" fill="#CC1818"/>
    <rect x="34" y="47" width="5" height="5" rx="1" fill="#CC1818"/>
    <rect x="42" y="47" width="5" height="5" rx="1" fill="#CC1818"/>
    <rect x="50" y="47" width="5" height="5" rx="1" fill="#CC1818"/>
    {/* Rope anchor at top */}
    <circle cx="40" cy="17" r="4" fill="white"/>
    <line x1="40" y1="13" x2="40" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="37" y1="8" x2="43" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ═══ USUÁRIOS PADRÃO ════════════════════════════════════════════ */
const USERS_INIT = [
  {id:1, nome:"Pedro", login:"pedro", senha:"heightech123", role:"admin", avatar:"PE"},
  {id:2, nome:"Gestor", login:"gestor", senha:"gestor123", role:"admin", avatar:"GE"},
  {id:3, nome:"Operador", login:"operador", senha:"op123", role:"operador", avatar:"OP"},
];

/* ═══ INITIAL DATA ══════════════════════════════════════════════ */
const OBRAS_INIT=[
  {id:1,nome:"Torre Comercial Alpha",cliente:"Grupo Alpha SA",local:"Av. Paulista, 1000",status:"andamento",progresso:68,inicio:"2026-03-10",fim:"2026-05-20",equipe:[1,2,3,4],orcamento:85000,etapas:[
    {id:1,nome:"Lavagem Fachada",progresso:100,responsavel:1,inicio:"2026-03-10",fim:"2026-03-20",status:"concluido"},
    {id:2,nome:"Aplicação Primer",progresso:100,responsavel:2,inicio:"2026-03-21",fim:"2026-04-01",status:"concluido"},
    {id:3,nome:"Pintura 1ª Demão",progresso:85,responsavel:1,inicio:"2026-04-02",fim:"2026-04-25",status:"andamento"},
    {id:4,nome:"Pintura 2ª Demão",progresso:10,responsavel:2,inicio:"2026-04-26",fim:"2026-05-15",status:"andamento"},
    {id:5,nome:"Acabamento e Vedação",progresso:0,responsavel:3,inicio:"2026-05-16",fim:"2026-05-20",status:"pendente"},
  ]},
  {id:2,nome:"Edifício Solar",cliente:"Construtora Visão",local:"Rua das Flores, 500",status:"atrasado",progresso:42,inicio:"2026-02-01",fim:"2026-04-15",equipe:[2,5,6],orcamento:62000,etapas:[
    {id:1,nome:"Inspeção Estrutural",progresso:100,responsavel:2,inicio:"2026-02-01",fim:"2026-02-10",status:"concluido"},
    {id:2,nome:"Impermeabilização",progresso:70,responsavel:5,inicio:"2026-02-11",fim:"2026-03-15",status:"atrasado"},
    {id:3,nome:"Instalação Telas",progresso:0,responsavel:6,inicio:"2026-03-16",fim:"2026-04-10",status:"pendente"},
    {id:4,nome:"Teste e Entrega",progresso:0,responsavel:2,inicio:"2026-04-11",fim:"2026-04-15",status:"pendente"},
  ]},
  {id:3,nome:"Residencial Bela Vista",cliente:"Sr. Carlos Mendes",local:"Rua Bela Vista, 200",status:"concluido",progresso:105,inicio:"2026-01-05",fim:"2026-03-30",equipe:[1,3,7],orcamento:38000,etapas:[
    {id:1,nome:"Limpeza Fachada",progresso:100,responsavel:1,inicio:"2026-01-05",fim:"2026-01-20",status:"concluido"},
    {id:2,nome:"Pintura Completa",progresso:110,responsavel:3,inicio:"2026-01-21",fim:"2026-03-15",status:"concluido"},
    {id:3,nome:"Vedação Janelas",progresso:100,responsavel:7,inicio:"2026-03-16",fim:"2026-03-30",status:"concluido"},
  ]},
  {id:4,nome:"Hospital Central",cliente:"Grupo Saúde BR",local:"Av. Central, 2500",status:"andamento",progresso:25,inicio:"2026-04-01",fim:"2026-07-30",equipe:[4,5,6,7,8],orcamento:145000,etapas:[
    {id:1,nome:"Planejamento e Acesso",progresso:100,responsavel:4,inicio:"2026-04-01",fim:"2026-04-10",status:"concluido"},
    {id:2,nome:"Lavagem Geral",progresso:30,responsavel:5,inicio:"2026-04-11",fim:"2026-05-15",status:"andamento"},
    {id:3,nome:"Pintura Bloco A",progresso:0,responsavel:6,inicio:"2026-05-16",fim:"2026-06-20",status:"pendente"},
    {id:4,nome:"Pintura Bloco B",progresso:0,responsavel:7,inicio:"2026-06-01",fim:"2026-07-10",status:"pendente"},
    {id:5,nome:"Acabamento Geral",progresso:0,responsavel:8,inicio:"2026-07-11",fim:"2026-07-30",status:"pendente"},
  ]},
];
const FUNCS_INIT=[
  {id:1,nome:"Rafael Monteiro",funcao:"Alpinista Sênior",foto:"RM",pontos:1850,meta:1500,presenca:98,obras:[1,3],producao:342,retrabalhos:0,atrasos:1,cpf:"",telefone:""},
  {id:2,nome:"Lucas Alves",funcao:"Encarregado",foto:"LA",pontos:1620,meta:1500,presenca:95,obras:[1,2],producao:298,retrabalhos:1,atrasos:2,cpf:"",telefone:""},
  {id:3,nome:"Diego Santos",funcao:"Alpinista Pleno",foto:"DS",pontos:1340,meta:1500,presenca:90,obras:[1,3],producao:245,retrabalhos:2,atrasos:3,cpf:"",telefone:""},
  {id:4,nome:"Carlos Ferreira",funcao:"Alpinista Sênior",foto:"CF",pontos:1780,meta:1500,presenca:97,obras:[1,4],producao:320,retrabalhos:0,atrasos:0,cpf:"",telefone:""},
  {id:5,nome:"Marcos Lima",funcao:"Alpinista Pleno",foto:"ML",pontos:980,meta:1500,presenca:82,obras:[2,4],producao:188,retrabalhos:3,atrasos:5,cpf:"",telefone:""},
  {id:6,nome:"Pedro Costa",funcao:"Ajudante",foto:"PC",pontos:720,meta:1000,presenca:88,obras:[2,4],producao:140,retrabalhos:1,atrasos:2,cpf:"",telefone:""},
  {id:7,nome:"André Souza",funcao:"Alpinista Pleno",foto:"AS",pontos:1120,meta:1500,presenca:91,obras:[3,4],producao:210,retrabalhos:1,atrasos:1,cpf:"",telefone:""},
  {id:8,nome:"Felipe Rocha",funcao:"Ajudante",foto:"FR",pontos:650,meta:1000,presenca:85,obras:[4],producao:120,retrabalhos:2,atrasos:3,cpf:"",telefone:""},
];
const RDOS_INIT=[
  {id:1,obra:1,data:"2026-04-25",equipe:[1,2,3],servico:"Pintura 1ª Demão",quantidade:85,unidade:"m²",tempo:8,obs:"Condições ideais de tempo. Tinta aplicada uniformemente."},
  {id:2,obra:1,data:"2026-04-24",equipe:[1,2,4],servico:"Pintura 1ª Demão",quantidade:72,unidade:"m²",tempo:8,obs:"Vento forte pela manhã atrapalhou o início."},
  {id:3,obra:2,data:"2026-04-25",equipe:[2,5],servico:"Impermeabilização",quantidade:40,unidade:"m²",tempo:7,obs:"Material chegou com atraso."},
  {id:4,obra:4,data:"2026-04-25",equipe:[4,5,6],servico:"Lavagem Geral",quantidade:120,unidade:"m²",tempo:9,obs:"Acesso difícil ao bloco leste."},
];
const COMPS_INIT=[
  {id:1,obra:1,data:"2026-04-24",tipo:"clima",descricao:"Vento forte acima de 40km/h impossibilitou trabalho em corda dupla",impacto:"medio",solucao:"Equipe aguardou normalização e retomou à tarde",status:"resolvido"},
  {id:2,obra:2,data:"2026-04-25",tipo:"material",descricao:"Atraso na entrega da manta asfáltica pelo fornecedor",impacto:"alto",solucao:"Acionado fornecedor alternativo para entrega emergencial",status:"aberto"},
  {id:3,obra:4,data:"2026-04-20",tipo:"acesso",descricao:"Área bloqueada por andaime de terceiros no bloco leste",impacto:"medio",solucao:"Aguardando liberação pela construtora responsável",status:"aberto"},
];
const EPIS_INIT=[
  {id:1,nome:"Capacete de Segurança",qtd:12,min:10,val:"2027-06"},
  {id:2,nome:"Corda de Segurança 11mm",qtd:8,min:8,val:"2026-12"},
  {id:3,nome:"Trava-Quedas",qtd:5,min:8,val:"2026-08"},
  {id:4,nome:"Luva de Proteção",qtd:20,min:16,val:"2027-01"},
  {id:5,nome:"Óculos de Proteção",qtd:10,min:10,val:"2027-03"},
  {id:6,nome:"Botas de Segurança",qtd:6,min:8,val:"2027-06"},
  {id:7,nome:"Arnês Completo",qtd:8,min:8,val:"2026-06"},
  {id:8,nome:"Capacete com Viseira",qtd:4,min:4,val:"2027-09"},
];

/* ═══ CONSTANTS ══════════════════════════════════════════════════ */
const SC={andamento:"#22c55e",atrasado:"#ef4444",concluido:"#64748b",pendente:"#f59e0b"};
const SL={andamento:"Em Andamento",atrasado:"Atrasado",concluido:"Concluído",pendente:"Pendente"};
const IC={baixo:"#22c55e",medio:"#f59e0b",alto:"#ef4444"};
const TP={clima:"🌧 Clima",material:"📦 Material",acesso:"🚧 Acesso",seguranca:"⛑ Segurança",cliente:"👤 Cliente"};
const FUNCOES=["Alpinista Sênior","Alpinista Pleno","Encarregado","Ajudante"];
const SERVICOS=["Pintura","Lavagem","Impermeabilização","Vedação","Instalação de Telas","Inspeção","Manutenção","Acabamento"];
const NAV=[
  {section:"Principal",items:[{id:"dashboard",icon:"🏠",label:"Dashboard"},{id:"obras",icon:"🏗️",label:"Obras"},{id:"rdo",icon:"📝",label:"RDO"},{id:"complicacoes",icon:"⚠️",label:"Complicações"}]},
  {section:"Análise",items:[{id:"produtividade",icon:"📊",label:"Produtividade"},{id:"pontuacao",icon:"🏆",label:"Pontuação"},{id:"relatorios",icon:"📄",label:"Relatórios"}]},
  {section:"Gestão",items:[{id:"funcionarios",icon:"👷",label:"Funcionários"},{id:"epis",icon:"🦺",label:"EPIs"},{id:"usuarios",icon:"👤",label:"Usuários"}]},
];
const TITLES={dashboard:"Dashboard",obras:"Obras",rdo:"RDO / Relatório Diário",complicacoes:"Complicações",produtividade:"Produtividade",pontuacao:"Pontuação",relatorios:"Relatórios",funcionarios:"Funcionários",epis:"EPIs",usuarios:"Usuários"};
const nid=arr=>arr.length?Math.max(...arr.map(x=>x.id))+1:1;
const mkI=nome=>nome.trim().split(" ").filter(Boolean).slice(0,2).map(n=>n[0].toUpperCase()).join("");
const fmtR=v=>"R$"+(v/1000).toFixed(0)+"k";
const calcPBar=(value)=>{
  // suporta até 110%
  const v=Math.min(110,Math.max(0,Number(value)||0));
  const base=Math.min(100,v);
  const over=Math.max(0,v-100);
  return {v,base,over};
};

/* ═══ CONTEXT ════════════════════════════════════════════════════ */
const Ctx=createContext(null);
const useApp=()=>useContext(Ctx);

/* ═══ TOAST ══════════════════════════════════════════════════════ */
function Toasts(){
  const {toasts}=useApp();
  return <div style={{position:'fixed',bottom:24,right:24,zIndex:9999,display:'flex',flexDirection:'column',gap:8,pointerEvents:'none'}}>
    {toasts.map(t=>{
      const bg=t.type==='error'?'rgba(239,68,68,0.95)':t.type==='warn'?'rgba(245,158,11,0.95)':'rgba(34,197,94,0.95)';
      const ico=t.type==='error'?'✕':t.type==='warn'?'⚠️':'✓';
      return <div key={t.id} className="toast-enter" style={{display:'flex',alignItems:'center',gap:10,padding:'12px 18px',background:bg,borderRadius:12,color:'#fff',fontWeight:600,fontSize:13,boxShadow:'0 8px 32px rgba(0,0,0,0.4)',minWidth:220}}>
        <span style={{fontWeight:800}}>{ico}</span>{t.msg}
      </div>;
    })}
  </div>;
}

/* ═══ CONFIRM DIALOG ═════════════════════════════════════════════ */
function ConfirmDialog(){
  const {confirm,setConfirm}=useApp();
  if(!confirm)return null;
  return <div className="modal-overlay" style={{zIndex:9998}} onClick={e=>e.target===e.currentTarget&&setConfirm(null)}>
    <div className="modal" style={{maxWidth:380}}>
      <div className="modal-header"><div className="modal-title">⚠️ Confirmar ação</div></div>
      <div className="modal-body"><p style={{fontSize:14,color:'var(--muted)',lineHeight:1.6}}>{confirm.msg}</p></div>
      <div className="modal-footer">
        <button className="btn btn-ghost" onClick={()=>setConfirm(null)}>Cancelar</button>
        <button className="btn" style={{background:'var(--red)',color:'#fff'}} onClick={()=>{confirm.onConfirm();setConfirm(null);}}>Confirmar</button>
      </div>
    </div>
  </div>;
}

/* ═══ REUSABLE UI ════════════════════════════════════════════════ */
function Badge({status}){const c=SC[status]||"#64748b",l=SL[status]||status;return <span className="badge" style={{background:`${c}1a`,color:c}}><span className="badge-dot" style={{background:c}}/>{l}</span>;}

function PBar({value,color}){
  const {v,base,over}=calcPBar(value);
  const baseColor=color||(v>=70?"#22c55e":v>=40?"#f59e0b":"#ef4444");
  return <div className="progress-track" style={{overflow:'hidden'}}>
    <div className="progress-fill" style={{width:`${base}%`,background:baseColor,position:'relative'}}>
      {over>0&&<div style={{position:'absolute',right:0,top:0,height:'100%',width:`${over}%`,background:'#f59e0b',maxWidth:'100%'}}/>}
    </div>
  </div>;
}

function PBarFull({value,showLabel=true}){
  const {v,base,over}=calcPBar(value);
  const isOver=v>100;
  const baseColor=isOver?'#22c55e':v>=70?'#22c55e':v>=40?'#f59e0b':'#ef4444';
  return <div style={{display:'flex',alignItems:'center',gap:8}}>
    <div style={{flex:1,height:8,background:'rgba(255,255,255,0.06)',borderRadius:99,overflow:'hidden',position:'relative'}}>
      <div style={{position:'absolute',left:0,top:0,height:'100%',width:`${base}%`,background:baseColor,borderRadius:99,transition:'width .5s'}}/>
      {over>0&&<div style={{position:'absolute',left:`${base}%`,top:0,height:'100%',width:`${Math.min(over,10)}%`,background:'#f59e0b',borderRadius:'0 99px 99px 0'}}/>}
    </div>
    {showLabel&&<span style={{fontSize:12,fontWeight:700,minWidth:38,color:isOver?'#f59e0b':baseColor}}>{v}%{isOver&&' 🔥'}</span>}
  </div>;
}

function Av({initials,size=36}){return <div style={{width:size,height:size,borderRadius:'50%',background:'linear-gradient(135deg,#CC1818,#FF4444)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:size*0.33,fontWeight:700,flexShrink:0,color:'#fff'}}>{initials}</div>;}
function FG({label,err,children,hint}){return <div className="form-group"><label className="form-label">{label}{hint&&<span style={{fontSize:10,color:'var(--muted)',marginLeft:6,textTransform:'none',fontWeight:400}}>{hint}</span>}</label>{children}{err&&<span style={{fontSize:11,color:'var(--red)',marginTop:4,display:'block'}}>{err}</span>}</div>;}
function EmptyState({icon,title,desc,action}){return <div className="empty-state"><div className="es-icon">{icon}</div><div className="es-title">{title}</div><div className="es-desc">{desc}</div>{action}</div>;}

/* ═══ MODAL WRAPPER ══════════════════════════════════════════════ */
function Modal({title,onClose,children,footer,wide}){
  return <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
    <div className="modal" style={{maxWidth:wide?720:600}}>
      <div className="modal-header"><div className="modal-title">{title}</div><button className="btn btn-ghost btn-icon" onClick={onClose}>✕</button></div>
      <div className="modal-body">{children}</div>
      {footer&&<div className="modal-footer">{footer}</div>}
    </div>
  </div>;
}

/* ═══ OBRA MODAL ═════════════════════════════════════════════════ */
function ObraModal({obra,onClose}){
  const {adicionarObra,editarObra,funcionarios}=useApp();
  const ed=!!obra;
  const [f,setF]=useState(ed?{nome:obra.nome,cliente:obra.cliente,local:obra.local||'',status:obra.status,inicio:obra.inicio,fim:obra.fim,orcamento:obra.orcamento,equipe:[...obra.equipe],progresso:obra.progresso}:{nome:'',cliente:'',local:'',status:'andamento',inicio:'',fim:'',orcamento:'',equipe:[],progresso:0});
  const [errs,setErrs]=useState({});
  const u=(k,v)=>setF(p=>({...p,[k]:v}));
  const tEq=id=>u('equipe',f.equipe.includes(id)?f.equipe.filter(x=>x!==id):[...f.equipe,id]);
  const validate=()=>{const e={};if(!f.nome.trim())e.nome='Nome obrigatório';if(!f.cliente.trim())e.cliente='Cliente obrigatório';if(!f.inicio)e.inicio='Obrigatório';if(!f.fim)e.fim='Obrigatório';setErrs(e);return!Object.keys(e).length;};
  const salvar=()=>{if(!validate())return;const d={...f,orcamento:Number(f.orcamento)||0,progresso:Math.min(110,Math.max(0,Number(f.progresso)||0))};ed?editarObra(obra.id,d):adicionarObra(d);onClose();};
  return <Modal wide title={ed?'✏️ Editar Obra':'🏗️ Nova Obra'} onClose={onClose} footer={<><button className="btn btn-ghost" onClick={onClose}>Cancelar</button><button className="btn btn-primary" onClick={salvar}>{ed?'💾 Salvar alterações':'＋ Criar Obra'}</button></>}>
    <div className="grid-2">
      <FG label="Nome da Obra" err={errs.nome}><input className="form-input" value={f.nome} onChange={e=>u('nome',e.target.value)} placeholder="Ex: Torre Alpha" style={errs.nome?{borderColor:'var(--red)'}:{}}/></FG>
      <FG label="Cliente" err={errs.cliente}><input className="form-input" value={f.cliente} onChange={e=>u('cliente',e.target.value)} placeholder="Nome do cliente" style={errs.cliente?{borderColor:'var(--red)'}:{}}/></FG>
    </div>
    <FG label="Localização"><input className="form-input" value={f.local} onChange={e=>u('local',e.target.value)} placeholder="Endereço da obra"/></FG>
    <div className="grid-2">
      <FG label="Status"><select className="form-select" value={f.status} onChange={e=>u('status',e.target.value)}>{Object.entries(SL).map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></FG>
      <FG label="Progresso (%)" hint="(0 a 110%)"><input className="form-input" type="number" min="0" max="110" value={f.progresso} onChange={e=>u('progresso',e.target.value)}/></FG>
    </div>
    <div className="grid-2">
      <FG label="Data de Início" err={errs.inicio}><input className="form-input" type="date" value={f.inicio} onChange={e=>u('inicio',e.target.value)} style={errs.inicio?{borderColor:'var(--red)'}:{}}/></FG>
      <FG label="Prazo Final" err={errs.fim}><input className="form-input" type="date" value={f.fim} onChange={e=>u('fim',e.target.value)} style={errs.fim?{borderColor:'var(--red)'}:{}}/></FG>
    </div>
    <FG label="Orçamento (R$)"><input className="form-input" type="number" value={f.orcamento} onChange={e=>u('orcamento',e.target.value)} placeholder="85000"/></FG>
    <FG label={`Equipe da Obra (${f.equipe.length} selecionado${f.equipe.length!==1?'s':''})`}>
      <div style={{display:'flex',flexDirection:'column',gap:6,maxHeight:180,overflowY:'auto',padding:'4px 0'}}>
        {funcionarios.map(fn=><label key={fn.id} style={{display:'flex',alignItems:'center',gap:10,cursor:'pointer',padding:'8px 12px',background:'rgba(255,255,255,0.02)',borderRadius:10,border:f.equipe.includes(fn.id)?'1px solid var(--accent)':'1px solid var(--border)',transition:'border-color .15s'}}>
          <input type="checkbox" checked={f.equipe.includes(fn.id)} onChange={()=>tEq(fn.id)} style={{width:16,height:16,accentColor:'var(--accent)'}}/>
          <Av initials={fn.foto} size={26}/>
          <div><div style={{fontSize:13,fontWeight:600}}>{fn.nome}</div><div style={{fontSize:11,color:'var(--muted)'}}>{fn.funcao}</div></div>
        </label>)}
      </div>
    </FG>
  </Modal>;
}

/* ═══ ETAPA MODAL ════════════════════════════════════════════════ */
function EtapaModal({obraId,etapa,onClose}){
  const {obras,adicionarEtapa,editarEtapa,funcionarios}=useApp();
  const obra=obras.find(o=>o.id===obraId);
  const eq=obra?funcionarios.filter(fn=>obra.equipe.includes(fn.id)):[];
  const ed=!!etapa;
  const [f,setF]=useState(ed?{nome:etapa.nome,status:etapa.status,progresso:etapa.progresso,inicio:etapa.inicio||'',fim:etapa.fim||'',responsavel:etapa.responsavel||''}:{nome:'',status:'pendente',progresso:0,inicio:'',fim:'',responsavel:''});
  const u=(k,v)=>setF(p=>({...p,[k]:v}));
  const salvar=()=>{if(!f.nome.trim())return;const d={...f,progresso:Math.min(110,Math.max(0,Number(f.progresso)||0)),responsavel:f.responsavel?Number(f.responsavel):null};ed?editarEtapa(obraId,etapa.id,d):adicionarEtapa(obraId,d);onClose();};
  return <Modal title={ed?'✏️ Editar Etapa':'＋ Nova Etapa'} onClose={onClose} footer={<><button className="btn btn-ghost" onClick={onClose}>Cancelar</button><button className="btn btn-primary" onClick={salvar}>{ed?'💾 Salvar':'＋ Adicionar'}</button></>}>
    <FG label="Nome da Etapa"><input className="form-input" value={f.nome} onChange={e=>u('nome',e.target.value)} placeholder="Ex: Pintura 1ª Demão"/></FG>
    <div className="grid-2">
      <FG label="Status"><select className="form-select" value={f.status} onChange={e=>u('status',e.target.value)}>{Object.entries(SL).map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></FG>
      <FG label="Progresso (%)" hint="(0 a 110%)"><input className="form-input" type="number" min="0" max="110" value={f.progresso} onChange={e=>u('progresso',e.target.value)}/></FG>
    </div>
    <div className="grid-2">
      <FG label="Início"><input className="form-input" type="date" value={f.inicio} onChange={e=>u('inicio',e.target.value)}/></FG>
      <FG label="Prazo"><input className="form-input" type="date" value={f.fim} onChange={e=>u('fim',e.target.value)}/></FG>
    </div>
    <FG label="Responsável"><select className="form-select" value={f.responsavel||''} onChange={e=>u('responsavel',e.target.value)}>
      <option value="">— Sem responsável —</option>
      {eq.map(fn=><option key={fn.id} value={fn.id}>{fn.nome}</option>)}
    </select></FG>
  </Modal>;
}

/* ═══ FUNCIONÁRIO MODAL ══════════════════════════════════════════ */
function FuncModal({func,onClose}){
  const {adicionarFuncionario,editarFuncionario}=useApp();
  const ed=!!func;
  const [f,setF]=useState(ed?{nome:func.nome,funcao:func.funcao,cpf:func.cpf||'',telefone:func.telefone||'',meta:func.meta}:{nome:'',funcao:FUNCOES[0],cpf:'',telefone:'',meta:1500});
  const [errs,setErrs]=useState({});
  const u=(k,v)=>setF(p=>({...p,[k]:v}));
  const validate=()=>{const e={};if(!f.nome.trim())e.nome='Nome obrigatório';setErrs(e);return!Object.keys(e).length;};
  const salvar=()=>{if(!validate())return;const d={...f,meta:Number(f.meta)||1500};ed?editarFuncionario(func.id,d):adicionarFuncionario(d);onClose();};
  return <Modal title={ed?'✏️ Editar Funcionário':'👷 Cadastrar Funcionário'} onClose={onClose} footer={<><button className="btn btn-ghost" onClick={onClose}>Cancelar</button><button className="btn btn-primary" onClick={salvar}>{ed?'💾 Salvar':'＋ Cadastrar'}</button></>}>
    <FG label="Nome Completo" err={errs.nome}><input className="form-input" value={f.nome} onChange={e=>u('nome',e.target.value)} placeholder="Nome completo" style={errs.nome?{borderColor:'var(--red)'}:{}}/></FG>
    <FG label="Função"><select className="form-select" value={f.funcao} onChange={e=>u('funcao',e.target.value)}>{FUNCOES.map(fn=><option key={fn}>{fn}</option>)}</select></FG>
    <div className="grid-2">
      <FG label="CPF"><input className="form-input" value={f.cpf} onChange={e=>u('cpf',e.target.value)} placeholder="000.000.000-00"/></FG>
      <FG label="Telefone"><input className="form-input" value={f.telefone} onChange={e=>u('telefone',e.target.value)} placeholder="(00) 99999-9999"/></FG>
    </div>
    <FG label="Meta de Pontos (mensal)"><input className="form-input" type="number" value={f.meta} onChange={e=>u('meta',e.target.value)}/></FG>
  </Modal>;
}

/* ═══ EPI MODAL ══════════════════════════════════════════════════ */
function EpiModal({epi,onClose,mode}){
  const {adicionarEpi,atualizarEpi,adicionarEntradaEpi}=useApp();
  const [f,setF]=useState(mode==='entrada'?{qtd:''}:epi?{nome:epi.nome,qtd:epi.qtd,min:epi.min,val:epi.val}:{nome:'',qtd:'',min:'',val:''});
  const u=(k,v)=>setF(p=>({...p,[k]:v}));
  const [err,setErr]=useState('');
  const salvar=()=>{
    if(mode==='entrada'){if(!f.qtd||Number(f.qtd)<=0){setErr('Quantidade deve ser maior que 0');return;}adicionarEntradaEpi(epi.id,f.qtd);onClose();return;}
    if(!f.nome?.trim()){setErr('Nome obrigatório');return;}
    const d={nome:f.nome,qtd:Number(f.qtd)||0,min:Number(f.min)||0,val:f.val};
    epi?atualizarEpi(epi.id,d):adicionarEpi(d);onClose();
  };
  if(mode==='entrada')return <Modal title={`📦 Entrada de Estoque — ${epi.nome}`} onClose={onClose} footer={<><button className="btn btn-ghost" onClick={onClose}>Cancelar</button><button className="btn btn-primary" onClick={salvar}>✅ Registrar</button></>}>
    <FG label="Quantidade a adicionar" err={err}><input className="form-input" type="number" min="1" value={f.qtd} onChange={e=>u('qtd',e.target.value)} placeholder="Ex: 5"/></FG>
    <div style={{fontSize:13,color:'var(--muted)'}}>Estoque atual: <strong style={{color:'var(--text)'}}>{epi.qtd}</strong> unidades</div>
  </Modal>;
  return <Modal title={epi?'✏️ Editar EPI':'🦺 Novo EPI'} onClose={onClose} footer={<><button className="btn btn-ghost" onClick={onClose}>Cancelar</button><button className="btn btn-primary" onClick={salvar}>{epi?'💾 Salvar':'＋ Adicionar'}</button></>}>
    <FG label="Nome do EPI" err={err}><input className="form-input" value={f.nome} onChange={e=>u('nome',e.target.value)} placeholder="Ex: Capacete de Segurança"/></FG>
    <div className="grid-2">
      <FG label="Quantidade em estoque"><input className="form-input" type="number" min="0" value={f.qtd} onChange={e=>u('qtd',e.target.value)}/></FG>
      <FG label="Quantidade mínima"><input className="form-input" type="number" min="0" value={f.min} onChange={e=>u('min',e.target.value)}/></FG>
    </div>
    <FG label="Validade (AAAA-MM)"><input className="form-input" value={f.val} onChange={e=>u('val',e.target.value)} placeholder="2027-06"/></FG>
  </Modal>;
}

/* ═══ DASHBOARD ══════════════════════════════════════════════════ */
function Dashboard({setPage}){
  const {obras,funcionarios,complicacoes}=useApp();
  const anda=obras.filter(o=>o.status==='andamento').length;
  const atr=obras.filter(o=>o.status==='atrasado').length;
  const conc=obras.filter(o=>o.status==='concluido').length;
  const ranking=[...funcionarios].sort((a,b)=>b.pontos-a.pontos).slice(0,5);
  const medals=["🥇","🥈","🥉","4","5"];
  const alertas=[
    ...obras.filter(o=>o.status==='atrasado').map(o=>({type:'red',title:`${o.nome} — Atrasado`,desc:`Prazo: ${o.fim}. Progresso: ${o.progresso}%.`})),
    ...complicacoes.filter(c=>c.status==='aberto').slice(0,2).map(c=>({type:'yellow',title:`${TP[c.tipo]||c.tipo} — ${obras.find(o=>o.id===c.obra)?.nome||'Obra'}`,desc:c.descricao.slice(0,60)+'...'})),
  ].slice(0,5);
  return <div>
    <div className="section-header">
      <div><div className="section-title">Dashboard</div><div className="section-sub">Visão geral — {new Date().toLocaleDateString('pt-BR',{day:'numeric',month:'long',year:'numeric'})}</div></div>
      <div style={{display:'flex',gap:8'}}>
        <button className="btn btn-primary" onClick={()=>setPage('rdo')}>＋ Novo RDO</button>
      </div>
    </div>
    <div className="grid-4" style={{marginBottom:20}}>
      {[{icon:"🏗️",val:anda,label:"Em Andamento",col:"#22c55e",ch:"Obras ativas",up:true},{icon:"⚠️",val:atr,label:"Atrasadas",col:"#ef4444",ch:"Requerem atenção",up:false},{icon:"✅",val:conc,label:"Concluídas",col:"#64748b",ch:"Total concluído",up:true},{icon:"👷",val:funcionarios.length,label:"Funcionários",col:"var(--accent)",ch:"Equipe ativa",up:true}].map((s,i)=>
        <div className="stat-card" key={i}><div className="stat-icon">{s.icon}</div><div className="stat-value" style={{color:s.col}}>{s.val}</div><div className="stat-label">{s.label}</div><div className={`stat-change ${s.up?'up':'dn'}`}>{s.ch}</div></div>)}
    </div>
    <div className="grid-2" style={{marginBottom:20}}>
      <div className="card"><div className="card-title">🔔 Alertas</div>
        {alertas.length===0?<div style={{color:'var(--muted)',fontSize:13,textAlign:'center',padding:'12px 0'}}>✅ Nenhum alerta no momento</div>:alertas.map((a,i)=><div key={i} className={`alert alert-${a.type}`}><div className="alert-icon">{a.type==='red'?'🔴':'🟡'}</div><div><div className="alert-title">{a.title}</div><div className="alert-desc">{a.desc}</div></div></div>)}
      </div>
      <div className="card"><div className="card-title">🏆 Ranking</div>
        {ranking.length===0?<EmptyState icon="👷" title="Sem funcionários" desc="Cadastre funcionários para ver o ranking."/>:ranking.map((fn,i)=><div className="rank-item" key={fn.id}>
          <div className="rank-num">{i<3?medals[i]:i+1}</div>
          <Av initials={fn.foto} size={34}/>
          <div className="rank-info"><div className="rank-name">{fn.nome}</div><div className="rank-role">{fn.funcao}</div></div>
          <div className="rank-pts">{fn.pontos.toLocaleString()}</div>
        </div>)}
      </div>
    </div>
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
        <div className="card-title" style={{marginBottom:0}}>📋 Obras Ativas</div>
        <button className="btn btn-ghost btn-sm" onClick={()=>setPage('obras')}>Ver todas →</button>
      </div>
      {obras.filter(o=>o.status!=='concluido').length===0?<EmptyState icon="🏗️" title="Nenhuma obra ativa" desc="Crie obras no menu Obras." action={<button className="btn btn-primary" onClick={()=>setPage('obras')}>＋ Nova Obra</button>}/>:
      <div className="grid-2">{obras.filter(o=>o.status!=='concluido').map(o=><div className="obra-card" key={o.id} onClick={()=>setPage('obras')} style={{cursor:'pointer'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:12}}><div><div className="obra-nome">{o.nome}</div><div className="obra-cliente">{o.cliente}</div></div><Badge status={o.status}/></div>
        <PBarFull value={o.progresso}/>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:10,fontSize:12,color:'var(--muted)'}}><span>📅 {o.fim}</span><span>👥 {o.equipe.length} func.</span></div>
      </div>)}</div>}
    </div>
  </div>;
}

/* ═══ OBRA DETALHE ═══════════════════════════════════════════════ */
function ObraDetalhe({obra,onBack,onEdit}){
  const {funcionarios,excluirEtapa,adicionarEtapa,editarEtapa,askConfirm,addToast}=useApp();
  const [tab,setTab]=useState('gantt');
  const [checks,setChecks]=useState([]);
  const [etapaModal,setEtapaModal]=useState(null);
  const toggleCheck=i=>setChecks(c=>c.includes(i)?c.filter(x=>x!==i):[...c,i]);
  const getF=id=>funcionarios.find(fn=>fn.id===id);
  const checkItems=["EPI completo verificado","Corda de segurança inspecionada","Ponto de ancoragem testado","Comunicação com equipe de terra","Área abaixo isolada e sinalizada","Condições climáticas verificadas","Capacetes disponíveis para todos","Kit de primeiros socorros disponível","Rota de fuga definida","Registro fotográfico inicial"];
  const start=new Date(obra.inicio),end=new Date(obra.fim);
  const totalDays=(end-start)/86400000||1;
  const gl=d=>Math.max(0,((new Date(d)-start)/86400000)/totalDays*100);
  const gw=(s,e)=>Math.max(2,((new Date(e)-new Date(s))/86400000)/totalDays*100);
  const tabs=[['gantt','📅 Cronograma'],['etapas','📋 Etapas'],['equipe','👷 Equipe'],['checklist','✅ Segurança']];
  return <div>
    <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20,flexWrap:'wrap'}}>
      <button className="btn btn-ghost btn-sm" onClick={onBack}>← Voltar</button>
      <div style={{flex:1}}><div className="section-title">{obra.nome}</div><div className="section-sub">{obra.cliente} · {obra.local}</div></div>
      <button className="btn btn-ghost btn-sm" onClick={onEdit}>✏️ Editar</button>
      <Badge status={obra.status}/>
    </div>
    <div className="grid-4" style={{marginBottom:20}}>
      {[['📊',obra.progresso+'%','Concluído'],['✅',obra.etapas.filter(e=>e.status==='concluido').length+'/'+obra.etapas.length,'Etapas'],['👥',obra.equipe.length,'Funcionários'],['💰',fmtR(obra.orcamento),'Orçamento']].map(([ic,v,l])=>
        <div className="stat-card" key={l}><div className="stat-icon">{ic}</div><div className="stat-value" style={{fontSize:22,color:l==='Concluído'&&obra.progresso>100?'#f59e0b':'inherit'}}>{v}{l==='Concluído'&&obra.progresso>100?' 🔥':''}</div><div className="stat-label">{l}</div></div>)}
    </div>
    <div className="tabs">{tabs.map(([v,l])=><div key={v} className={`tab ${tab===v?'active':''}`} onClick={()=>setTab(v)}>{l}</div>)}</div>
    {tab==='gantt'&&<div className="card"><div className="card-title">Linha do Tempo (Gantt)</div>
      <div style={{fontSize:12,color:'var(--muted)',marginBottom:12}}>Período: {obra.inicio} → {obra.fim}</div>
      {obra.etapas.length===0?<EmptyState icon="📅" title="Sem etapas" desc="Adicione etapas na aba Etapas."/>:
      <div className="gantt-wrap">{obra.etapas.map(e=>{const c=SC[e.status];return <div className="gantt-row" key={e.id}>
        <div className="gantt-label" title={e.nome}>{e.nome}</div>
        <div className="gantt-track">{e.inicio&&e.fim?<div className="gantt-bar" style={{left:`${gl(e.inicio)}%`,width:`${gw(e.inicio,e.fim)}%`,background:`${c}22`,border:`1.5px solid ${c}`,color:c}}>{e.progresso}%{e.progresso>100?' 🔥':''}</div>:null}</div>
      </div>;})}</div>}
    </div>}
    {tab==='etapas'&&<div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
        <div className="card-title" style={{marginBottom:0}}>Etapas da Obra</div>
        <button className="btn btn-primary btn-sm" onClick={()=>setEtapaModal('new')}>＋ Nova Etapa</button>
      </div>
      {obra.etapas.length===0?<EmptyState icon="📋" title="Nenhuma etapa" desc="Clique em Nova Etapa para começar."/>:
      <div className="table-wrap"><table>
        <thead><tr><th>Etapa</th><th>Responsável</th><th>Início</th><th>Prazo</th><th>Progresso</th><th>Status</th><th></th></tr></thead>
        <tbody>{obra.etapas.map(e=>{const r=getF(e.responsavel);return <tr key={e.id}>
          <td style={{fontWeight:600}}>{e.nome}</td><td>{r?.nome||'—'}</td>
          <td style={{color:'var(--muted)',fontSize:12}}>{e.inicio||'—'}</td>
          <td style={{color:e.status==='atrasado'?'var(--red)':'var(--muted)',fontSize:12}}>{e.fim||'—'}</td>
          <td style={{width:160}}><PBarFull value={e.progresso}/></td>
          <td><Badge status={e.status}/></td>
          <td><div style={{display:'flex',gap:4}}>
            <button className="btn btn-ghost btn-sm btn-icon" onClick={()=>setEtapaModal(e)}>✏️</button>
            <button className="btn btn-danger btn-sm btn-icon" onClick={()=>askConfirm('Excluir esta etapa?',()=>{excluirEtapa(obra.id,e.id);addToast('Etapa excluída.','error');})}>🗑</button>
          </div></td>
        </tr>;})}
        </tbody>
      </table></div>}
    </div>}
    {tab==='equipe'&&<div className="card"><div className="card-title">Equipe na Obra</div>
      {obra.equipe.length===0?<EmptyState icon="👷" title="Equipe vazia" desc="Edite a obra para adicionar funcionários."/>:
      obra.equipe.map(fid=>{const fn=getF(fid);if(!fn)return null;const pct=Math.min(110,Math.round(fn.pontos/fn.meta*100));return <div key={fid} style={{display:'flex',alignItems:'center',gap:14,padding:'12px 0',borderBottom:'1px solid var(--border)'}}>
        <Av initials={fn.foto} size={42}/><div style={{flex:1}}><div style={{fontWeight:600,fontSize:14}}>{fn.nome}</div><div style={{fontSize:12,color:'var(--muted)'}}>{fn.funcao}</div><div style={{marginTop:6}}><PBarFull value={pct}/></div></div>
        <div style={{textAlign:'right'}}><div style={{fontFamily:'Syne',fontWeight:800,fontSize:16,color:'var(--accent)'}}>{fn.pontos}</div><div style={{fontSize:11,color:'var(--muted)'}}>pontos</div></div>
      </div>;})}
    </div>}
    {tab==='checklist'&&<div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
        <div className="card-title" style={{marginBottom:0}}>⛑ Checklist de Segurança</div>
        <span style={{fontSize:13,fontWeight:700,color:'var(--accent)'}}>{checks.length}/{checkItems.length}</span>
      </div>
      <PBarFull value={Math.round(checks.length/checkItems.length*100)} showLabel={true}/>
      <div style={{marginTop:14}}>{checkItems.map((item,i)=><div className="check-item" key={i} onClick={()=>toggleCheck(i)}>
        <div className={`check-box ${checks.includes(i)?'checked':''}`}>{checks.includes(i)&&<span style={{color:'#fff',fontSize:12}}>✓</span>}</div>
        <span style={{fontSize:13,textDecoration:checks.includes(i)?'line-through':'none',color:checks.includes(i)?'var(--muted)':'inherit'}}>{item}</span>
      </div>)}</div>
    </div>}
    {etapaModal&&<EtapaModal obraId={obra.id} etapa={etapaModal==='new'?null:etapaModal} onClose={()=>setEtapaModal(null)}/>}
  </div>;
}

/* ═══ OBRAS ══════════════════════════════════════════════════════ */
function Obras(){
  const {obras,excluirObra}=useApp();
  const [sel,setSel]=useState(null);
  const [obraModal,setObraModal]=useState(null);
  const obra=sel?obras.find(x=>x.id===sel):null;
  if(sel&&obra)return <>
    <ObraDetalhe obra={obra} onBack={()=>setSel(null)} onEdit={()=>setObraModal(obra)}/>
    {obraModal&&<ObraModal obra={obraModal} onClose={()=>setObraModal(null)}/>}
  </>;
  return <div>
    <div className="section-header">
      <div><div className="section-title">Cronograma de Obras</div><div className="section-sub">{obras.length} obra{obras.length!==1?'s':''} cadastrada{obras.length!==1?'s':''}</div></div>
      <button className="btn btn-primary" onClick={()=>setObraModal('new')}>＋ Nova Obra</button>
    </div>
    {obras.length===0?<div className="card"><EmptyState icon="🏗️" title="Nenhuma obra cadastrada" desc="Crie a primeira obra da Heightech Alpinismo." action={<button className="btn btn-primary" onClick={()=>setObraModal('new')}>＋ Nova Obra</button>}/></div>:
    <div className="grid-2">{obras.map(o=><div className="obra-card" key={o.id}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:12}}>
        <div onClick={()=>setSel(o.id)} style={{flex:1,cursor:'pointer'}}><div className="obra-nome">{o.nome}</div><div className="obra-cliente">{o.cliente}</div><div style={{fontSize:11,color:'var(--muted)',marginTop:2}}>📍 {o.local}</div></div>
        <Badge status={o.status}/>
      </div>
      <div style={{display:'flex',gap:20,margin:'12px 0'}}>
        {[['Início',o.inicio,false],['Prazo',o.fim,o.status==='atrasado'],['Equipe',o.equipe.length+' func.',false]].map(([l,v,red])=>
          <div key={l}><div style={{fontSize:10,color:'var(--muted)',textTransform:'uppercase',letterSpacing:'.5px',fontWeight:700}}>{l}</div><div style={{fontSize:13,fontWeight:600,color:red?'var(--red)':'inherit',marginTop:2}}>{v}</div></div>)}
      </div>
      <PBarFull value={o.progresso}/>
      <div style={{marginTop:12,display:'flex',gap:6,flexWrap:'wrap'}}>{o.etapas.slice(0,3).map(e=><span key={e.id} className="chip" style={{background:`${SC[e.status]}1a`,color:SC[e.status]}}>{e.nome}</span>)}{o.etapas.length>3&&<span className="chip" style={{background:'rgba(255,255,255,0.05)',color:'var(--muted)'}}>+{o.etapas.length-3}</span>}</div>
      <div style={{marginTop:14,display:'flex',gap:8,borderTop:'1px solid var(--border)',paddingTop:12,flexWrap:'wrap'}}>
        <button className="btn btn-ghost btn-sm" onClick={()=>setSel(o.id)}>👁 Ver Detalhes</button>
        <button className="btn btn-ghost btn-sm" onClick={()=>setObraModal(o)}>✏️ Editar</button>
        <button className="btn btn-danger btn-sm" onClick={()=>excluirObra(o.id)}>🗑 Excluir</button>
      </div>
    </div>)}</div>}
    {obraModal&&<ObraModal obra={obraModal==='new'?null:obraModal} onClose={()=>setObraModal(null)}/>}
  </div>;
}

/* ═══ RDO ════════════════════════════════════════════════════════ */
function RDO(){
  const {obras,funcionarios,rdos,adicionarRDO}=useApp();
  const [view,setView]=useState('novo');
  const [step,setStep]=useState(1);
  const [form,setForm]=useState({obra:'',equipe:[],servico:'',quantidade:'',unidade:'m²',tempo:'',obs:''});
  const [sent,setSent]=useState(false);
  const u=(k,v)=>setForm(f=>({...f,[k]:v}));
  const tEq=id=>u('equipe',form.equipe.includes(id)?form.equipe.filter(x=>x!==id):[...form.equipe,id]);
  const reset=()=>{setSent(false);setStep(1);setForm({obra:'',equipe:[],servico:'',quantidade:'',unidade:'m²',tempo:'',obs:''});};
  const getO=id=>obras.find(o=>o.id===Number(id));
  const enviar=()=>{adicionarRDO({...form,obra:Number(form.obra),quantidade:Number(form.quantidade),tempo:Number(form.tempo)});setSent(true);};
  return <div>
    <div className="section-header"><div><div className="section-title">Relatório Diário de Obra</div><div className="section-sub">RDO · {new Date().toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'})}</div></div></div>
    <div className="tabs">
      <div className={`tab ${view==='novo'?'active':''}`} onClick={()=>{setView('novo');reset();}}>＋ Novo RDO</div>
      <div className={`tab ${view==='hist'?'active':''}`} onClick={()=>setView('hist')}>📋 Histórico ({rdos.length})</div>
    </div>
    {view==='hist'&&<div className="card"><div className="card-title">Relatórios Enviados</div>
      {rdos.length===0?<EmptyState icon="📝" title="Nenhum RDO" desc="Envie o primeiro relatório diário."/>:
      <div className="table-wrap"><table>
        <thead><tr><th>Data</th><th>Obra</th><th>Serviço</th><th>Produção</th><th>Equipe</th><th>Obs.</th></tr></thead>
        <tbody>{[...rdos].reverse().map(r=>{const o=getO(r.obra);return <tr key={r.id}>
          <td style={{color:'var(--muted)',fontSize:12}}>{r.data}</td>
          <td style={{fontWeight:600}}>{o?.nome||'—'}</td>
          <td>{r.servico}</td>
          <td><span style={{color:'var(--accent)',fontWeight:700}}>{r.quantidade} {r.unidade}</span></td>
          <td>{r.equipe.length} func.</td>
          <td style={{color:'var(--muted)',fontSize:12,maxWidth:180,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{r.obs||'—'}</td>
        </tr>;})}
        </tbody>
      </table></div>}
    </div>}
    {view==='novo'&&!sent&&<div className="card" style={{maxWidth:600}}>
      <div style={{display:'flex',gap:8,marginBottom:24}}>{[1,2,3].map(s=><div key={s} style={{flex:1,height:4,borderRadius:99,background:s<=step?'linear-gradient(90deg,#CC1818,#FF4444)':'rgba(255,255,255,0.08)'}}/>)}</div>
      {step===1&&<><div style={{fontFamily:'Syne',fontSize:17,fontWeight:700,marginBottom:18}}>1. Identificação</div>
        <FG label="Obra"><select className="form-select" value={form.obra} onChange={e=>u('obra',e.target.value)}><option value="">Selecione...</option>{obras.map(o=><option key={o.id} value={o.id}>{o.nome}</option>)}</select></FG>
        <FG label="Equipe Presente"><div style={{display:'flex',flexDirection:'column',gap:6}}>
          {funcionarios.map(fn=><label key={fn.id} style={{display:'flex',alignItems:'center',gap:10,cursor:'pointer',padding:'9px 12px',background:'rgba(255,255,255,0.02)',borderRadius:10,border:form.equipe.includes(fn.id)?'1px solid var(--accent)':'1px solid var(--border)'}}>
            <input type="checkbox" checked={form.equipe.includes(fn.id)} onChange={()=>tEq(fn.id)} style={{width:16,height:16,accentColor:'var(--accent)'}}/>
            <Av initials={fn.foto} size={28}/><div><div style={{fontSize:13,fontWeight:600}}>{fn.nome}</div><div style={{fontSize:11,color:'var(--muted)'}}>{fn.funcao}</div></div>
          </label>)}
        </div></FG>
        <button className="btn btn-primary" style={{width:'100%'}} onClick={()=>setStep(2)} disabled={!form.obra||!form.equipe.length}>Próximo →</button>
      </>}
      {step===2&&<><div style={{fontFamily:'Syne',fontSize:17,fontWeight:700,marginBottom:18}}>2. Atividades</div>
        <FG label="Tipo de Serviço"><select className="form-select" value={form.servico} onChange={e=>u('servico',e.target.value)}><option value="">Selecione...</option>{SERVICOS.map(s=><option key={s}>{s}</option>)}</select></FG>
        <div style={{display:'flex',gap:12}}>
          <div className="form-group" style={{flex:2}}><label className="form-label">Quantidade</label><input className="form-input" type="number" placeholder="85" value={form.quantidade} onChange={e=>u('quantidade',e.target.value)}/></div>
          <div className="form-group" style={{flex:1}}><label className="form-label">Unidade</label><select className="form-select" value={form.unidade} onChange={e=>u('unidade',e.target.value)}>{['m²','m','un','kg','L'].map(un=><option key={un}>{un}</option>)}</select></div>
        </div>
        <FG label="Horas Trabalhadas"><input className="form-input" type="number" placeholder="8" value={form.tempo} onChange={e=>u('tempo',e.target.value)}/></FG>
        <div style={{display:'flex',gap:10}}><button className="btn btn-ghost" onClick={()=>setStep(1)}>← Voltar</button><button className="btn btn-primary" style={{flex:1}} onClick={()=>setStep(3)} disabled={!form.servico||!form.quantidade}>Próximo →</button></div>
      </>}
      {step===3&&<><div style={{fontFamily:'Syne',fontSize:17,fontWeight:700,marginBottom:18}}>3. Finalizar</div>
        <FG label="Observações"><textarea className="form-textarea" placeholder="Andamento, condições, intercorrências..." value={form.obs} onChange={e=>u('obs',e.target.value)}/></FG>
        <div style={{display:'flex',gap:10}}><button className="btn btn-ghost" onClick={()=>setStep(2)}>← Voltar</button><button className="btn btn-primary" style={{flex:1}} onClick={enviar}>✅ Enviar RDO</button></div>
      </>}
    </div>}
    {view==='novo'&&sent&&<div className="card" style={{textAlign:'center',padding:48,maxWidth:500}}>
      <div style={{fontSize:64,marginBottom:16}}>✅</div>
      <div style={{fontFamily:'Syne',fontSize:22,fontWeight:800,marginBottom:8}}>RDO Enviado!</div>
      <div style={{color:'var(--muted)',fontSize:14,marginBottom:24}}>Relatório registrado com sucesso. Pontuação da equipe atualizada.</div>
      <div style={{display:'flex',gap:10,justifyContent:'center'}}><button className="btn btn-ghost" onClick={()=>setView('hist')}>📋 Ver Histórico</button><button className="btn btn-primary" onClick={reset}>＋ Novo RDO</button></div>
    </div>}
  </div>;
}

/* ═══ COMPLICAÇÕES ═══════════════════════════════════════════════ */
function Complicacoes(){
  const {complicacoes,obras,adicionarComplicacao,resolverComplicacao}=useApp();
  const [show,setShow]=useState(false);
  const [nf,setNf]=useState({obra:'',tipo:'clima',impacto:'medio',desc:'',sol:''});
  const u=(k,v)=>setNf(f=>({...f,[k]:v}));
  const addComp=()=>{if(!nf.desc.trim()||!nf.obra)return;adicionarComplicacao({obra:Number(nf.obra),tipo:nf.tipo,impacto:nf.impacto,descricao:nf.desc,solucao:nf.sol});setShow(false);setNf({obra:'',tipo:'clima',impacto:'medio',desc:'',sol:''});};
  return <div>
    <div className="section-header">
      <div><div className="section-title">Registro de Complicações</div><div className="section-sub">{complicacoes.filter(c=>c.status==='aberto').length} ocorrência(s) abertas</div></div>
      <button className="btn btn-primary" onClick={()=>setShow(true)}>＋ Registrar</button>
    </div>
    {complicacoes.length===0?<div className="card"><EmptyState icon="✅" title="Nenhuma complicação" desc="Registre ocorrências e intercorrências das obras."/></div>:
    <div style={{display:'flex',flexDirection:'column',gap:14}}>
      {complicacoes.map(c=>{const obra=obras.find(o=>o.id===c.obra),ic=IC[c.impacto];return <div className="card" key={c.id} style={{borderLeft:`3px solid ${ic}`}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10,flexWrap:'wrap',gap:8}}>
          <div><div style={{display:'flex',gap:8,alignItems:'center',marginBottom:4,flexWrap:'wrap'}}>
            <span style={{fontFamily:'Syne',fontWeight:700,fontSize:15}}>{TP[c.tipo]||c.tipo}</span>
            <span className="chip" style={{background:`${ic}1a`,color:ic}}>{c.impacto.toUpperCase()}</span>
          </div><div style={{fontSize:12,color:'var(--muted)'}}>📍 {obra?.nome||'Obra'} · {c.data}</div></div>
          <Badge status={c.status}/>
        </div>
        <div style={{fontSize:13,marginBottom:10}}>{c.descricao}</div>
        {c.solucao&&<div style={{fontSize:12,background:'rgba(255,255,255,0.03)',padding:'9px 12px',borderRadius:8,borderLeft:'2px solid var(--accent)'}}><span style={{color:'var(--accent)',fontWeight:600}}>Solução: </span>{c.solucao}</div>}
        {c.status==='aberto'&&<div style={{marginTop:12}}><button className="btn btn-ghost btn-sm" onClick={()=>resolverComplicacao(c.id)}>✅ Marcar resolvido</button></div>}
      </div>;})}
    </div>}
    {show&&<Modal title="⚠️ Registrar Complicação" onClose={()=>setShow(false)} footer={<><button className="btn btn-ghost" onClick={()=>setShow(false)}>Cancelar</button><button className="btn btn-primary" onClick={addComp} disabled={!nf.desc.trim()||!nf.obra}>Registrar</button></>}>
      <FG label="Obra"><select className="form-select" value={nf.obra} onChange={e=>u('obra',e.target.value)}><option value="">Selecione...</option>{obras.map(o=><option key={o.id} value={o.id}>{o.nome}</option>)}</select></FG>
      <div className="grid-2">
        <FG label="Tipo"><select className="form-select" value={nf.tipo} onChange={e=>u('tipo',e.target.value)}>{Object.entries(TP).map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></FG>
        <FG label="Impacto"><select className="form-select" value={nf.impacto} onChange={e=>u('impacto',e.target.value)}><option value="baixo">Baixo</option><option value="medio">Médio</option><option value="alto">Alto</option></select></FG>
      </div>
      <FG label="Descrição *"><textarea className="form-textarea" value={nf.desc} onChange={e=>u('desc',e.target.value)} placeholder="Descreva a ocorrência..." style={{minHeight:80}}/></FG>
      <FG label="Solução (opcional)"><textarea className="form-textarea" value={nf.sol} onChange={e=>u('sol',e.target.value)} placeholder="Descreva a solução ou ação tomada..." style={{minHeight:60}}/></FG>
    </Modal>}
  </div>;
}

/* ═══ PRODUTIVIDADE ══════════════════════════════════════════════ */
function Produtividade(){
  const {funcionarios,obras}=useApp();
  const total=funcionarios.reduce((a,f)=>a+f.producao,0);
  const totalPts=funcionarios.reduce((a,f)=>a+f.pontos,0);
  return <div>
    <div className="section-header"><div><div className="section-title">Produtividade</div><div className="section-sub">Análise individual e comparativa</div></div></div>
    <div className="grid-4" style={{marginBottom:20}}>
      {[['⚡',total+' m²','Total Produzido'],['👷',funcionarios.length,'Funcionários Ativos'],['🏗️',obras.filter(o=>o.status!=='concluido').length,'Obras em Curso'],['🏆',totalPts.toLocaleString(),'Pontos no Sistema']].map(([ic,v,l])=>
        <div className="stat-card" key={l}><div className="stat-icon">{ic}</div><div className="stat-value" style={{fontSize:22}}>{v}</div><div className="stat-label">{l}</div></div>)}
    </div>
    <div className="card"><div className="card-title">Performance Individual</div>
      {funcionarios.length===0?<EmptyState icon="👷" title="Sem funcionários" desc="Cadastre funcionários para ver a produtividade."/>:
      <div className="table-wrap"><table>
        <thead><tr><th>Funcionário</th><th>Função</th><th>Pontos / Meta</th><th>Meta</th><th>Presença</th><th>Retrabalhos</th><th>Atrasos</th></tr></thead>
        <tbody>{[...funcionarios].sort((a,b)=>b.pontos-a.pontos).map(f=>{const pct=Math.min(110,Math.round(f.pontos/f.meta*100));return <tr key={f.id}>
          <td><div style={{display:'flex',alignItems:'center',gap:10}}><Av initials={f.foto} size={32}/><div><div style={{fontWeight:600}}>{f.nome}</div><div style={{fontSize:11,color:'var(--muted)'}}>{f.producao} m² produzidos</div></div></div></td>
          <td style={{color:'var(--muted)'}}>{f.funcao}</td>
          <td><div style={{fontFamily:'Syne',fontWeight:800,color:pct>100?'#f59e0b':'var(--accent)'}}>{f.pontos.toLocaleString()}{pct>100?' 🔥':''}</div><div style={{marginTop:4,width:120}}><PBarFull value={pct}/></div></td>
          <td style={{color:'var(--muted)'}}>{f.meta.toLocaleString()}</td>
          <td><span style={{color:f.presenca>=95?'var(--green)':f.presenca>=85?'var(--yellow)':'var(--red)',fontWeight:700}}>{f.presenca}%</span></td>
          <td><span style={{color:f.retrabalhos===0?'var(--green)':f.retrabalhos<=1?'var(--yellow)':'var(--red)',fontWeight:700}}>{f.retrabalhos}</span></td>
          <td><span style={{color:f.atrasos===0?'var(--green)':f.atrasos<=2?'var(--yellow)':'var(--red)',fontWeight:700}}>{f.atrasos}</span></td>
        </tr>;})}
        </tbody>
      </table></div>}
    </div>
  </div>;
}

/* ═══ PONTUAÇÃO ══════════════════════════════════════════════════ */
function Pontuacao(){
  const {funcionarios}=useApp();
  const sorted=[...funcionarios].sort((a,b)=>b.pontos-a.pontos);
  const medals=["🥇","🥈","🥉"];
  return <div>
    <div className="section-header"><div><div className="section-title">Ranking de Pontuação</div><div className="section-sub">Desempenho da equipe · Mês atual</div></div></div>
    {sorted.length===0?<div className="card"><EmptyState icon="🏆" title="Sem dados" desc="Cadastre funcionários para ver o ranking."/></div>:
    <div style={{display:'flex',flexDirection:'column',gap:12}}>
      {sorted.map((f,i)=>{const pct=Math.min(110,Math.round(f.pontos/f.meta*100));const isOver=pct>100;return <div className="card" key={f.id} style={{display:'flex',alignItems:'center',gap:16,borderLeft:`3px solid ${i===0?'#fbbf24':i===1?'#94a3b8':i===2?'#b45309':'var(--border)'}`}}>
        <div style={{fontFamily:'Syne',fontWeight:800,fontSize:28,width:48,textAlign:'center',flexShrink:0}}>{i<3?medals[i]:i+1}</div>
        <Av initials={f.foto} size={48}/>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontWeight:700,fontSize:15}}>{f.nome}</div>
          <div style={{fontSize:12,color:'var(--muted)',marginBottom:8}}>{f.funcao}</div>
          <PBarFull value={pct}/>
        </div>
        <div style={{textAlign:'right',flexShrink:0}}>
          <div style={{fontFamily:'Syne',fontWeight:800,fontSize:24,color:isOver?'#f59e0b':'var(--accent)'}}>{f.pontos.toLocaleString()}{isOver?' 🔥':''}</div>
          <div style={{fontSize:11,color:'var(--muted)'}}>meta: {f.meta.toLocaleString()}</div>
          <div style={{fontSize:12,fontWeight:700,color:pct>=100?'var(--green)':'var(--muted)',marginTop:4}}>{pct}% da meta</div>
        </div>
      </div>;})}
    </div>}
  </div>;
}

/* ═══ FUNCIONÁRIOS ═══════════════════════════════════════════════ */
function Funcionarios(){
  const {funcionarios,excluirFuncionario,askConfirm,addToast}=useApp();
  const [modal,setModal]=useState(null);
  return <div>
    <div className="section-header">
      <div><div className="section-title">Funcionários</div><div className="section-sub">{funcionarios.length} cadastrado{funcionarios.length!==1?'s':''}</div></div>
      <button className="btn btn-primary" onClick={()=>setModal('new')}>＋ Cadastrar</button>
    </div>
    {funcionarios.length===0?<div className="card"><EmptyState icon="👷" title="Nenhum funcionário" desc="Cadastre os membros da equipe." action={<button className="btn btn-primary" onClick={()=>setModal('new')}>＋ Cadastrar</button>}/></div>:
    <div className="card"><div className="table-wrap"><table>
      <thead><tr><th>Funcionário</th><th>Função</th><th>Pontos</th><th>Meta</th><th>Presença</th><th>Produção</th><th></th></tr></thead>
      <tbody>{funcionarios.map(f=><tr key={f.id}>
        <td><div style={{display:'flex',alignItems:'center',gap:12}}><Av initials={f.foto} size={36}/><div><div style={{fontWeight:600}}>{f.nome}</div>{f.telefone&&<div style={{fontSize:11,color:'var(--muted)'}}>{f.telefone}</div>}</div></div></td>
        <td style={{color:'var(--muted)'}}>{f.funcao}</td>
        <td><span style={{fontFamily:'Syne',fontWeight:800,color:f.pontos>=f.meta?'#f59e0b':'var(--accent)'}}>{f.pontos.toLocaleString()}{f.pontos>=f.meta?' 🔥':''}</span></td>
        <td style={{color:'var(--muted)'}}>{f.meta.toLocaleString()}</td>
        <td><span style={{fontWeight:700,color:f.presenca>=95?'var(--green)':f.presenca>=85?'var(--yellow)':'var(--red)'}}>{f.presenca}%</span></td>
        <td style={{fontWeight:700}}>{f.producao} m²</td>
        <td><div style={{display:'flex',gap:4}}>
          <button className="btn btn-ghost btn-sm btn-icon" onClick={()=>setModal(f)}>✏️</button>
          <button className="btn btn-danger btn-sm btn-icon" onClick={()=>askConfirm(`Excluir ${f.nome}?`,()=>{excluirFuncionario(f.id);addToast(`${f.nome} removido.`,'error');})}>🗑</button>
        </div></td>
      </tr>)}
      </tbody>
    </table></div></div>}
    {modal&&<FuncModal func={modal==='new'?null:modal} onClose={()=>setModal(null)}/>}
  </div>;
}

/* ═══ EPIs ════════════════════════════════════════════════════════ */
function EPIs(){
  const {epis,excluirEpi,askConfirm,addToast}=useApp();
  const [epiModal,setEpiModal]=useState(null);
  const [epiMode,setEpiMode]=useState(null);
  const openModal=(e,mode)=>{setEpiModal(e);setEpiMode(mode);};
  const criticos=epis.filter(e=>e.qtd<e.min);
  return <div>
    <div className="section-header">
      <div><div className="section-title">Controle de EPIs</div><div className="section-sub">{epis.length} itens · {criticos.length} crítico{criticos.length!==1?'s':''}</div></div>
      <button className="btn btn-primary" onClick={()=>openModal(null,'new')}>＋ Novo EPI</button>
    </div>
    {criticos.length>0&&<div className="alert alert-red" style={{marginBottom:16}}><div className="alert-icon">🔴</div><div><div className="alert-title">EPIs com estoque crítico</div><div className="alert-desc">{criticos.map(e=>e.nome).join(', ')}</div></div></div>}
    {epis.length===0?<div className="card"><EmptyState icon="🦺" title="Nenhum EPI cadastrado" desc="Registre os equipamentos de proteção." action={<button className="btn btn-primary" onClick={()=>openModal(null,'new')}>＋ Novo EPI</button>}/></div>:
    <div className="card"><div className="table-wrap"><table>
      <thead><tr><th>EPI</th><th>Estoque</th><th>Mínimo</th><th>Validade</th><th>Situação</th><th></th></tr></thead>
      <tbody className="epi-row">{epis.map(e=>{const ok=e.qtd>=e.min;const cor=ok?'var(--green)':'var(--red)';return <tr key={e.id}>
        <td style={{fontWeight:700}}>🦺 {e.nome}</td>
        <td><span style={{fontWeight:700,color:cor,fontSize:16}}>{e.qtd}</span></td>
        <td style={{color:'var(--muted)'}}>{e.min}</td>
        <td style={{color:'var(--muted)',fontSize:12}}>{e.val}</td>
        <td><span className="badge" style={{background:`${ok?'#22c55e':'#ef4444'}1a`,color:ok?'#22c55e':'#ef4444'}}>{ok?'✓ OK':'⚠️ Crítico'}</span></td>
        <td><div style={{display:'flex',gap:4}}>
          <button className="btn btn-ghost btn-sm" onClick={()=>openModal(e,'entrada')}>＋ Entrada</button>
          <button className="btn btn-ghost btn-sm btn-icon" onClick={()=>openModal(e,'edit')}>✏️</button>
          <button className="btn btn-danger btn-sm btn-icon" onClick={()=>askConfirm(`Excluir ${e.nome}?`,()=>{excluirEpi(e.id);addToast('EPI removido.','error');})}>🗑</button>
        </div></td>
      </tr>;})}
      </tbody>
    </table></div></div>}
    {epiModal!==null&&epiMode&&<EpiModal epi={epiMode==='new'?null:epiModal} onClose={()=>{setEpiModal(null);setEpiMode(null);}} mode={epiMode}/>}
  </div>;
}

/* ═══ USUÁRIOS ════════════════════════════════════════════════════ */
function Usuarios(){
  const {usuarios,adicionarUsuario,excluirUsuario,currentUser,addToast,askConfirm}=useApp();
  const [modal,setModal]=useState(false);
  const [f,setF]=useState({nome:'',login:'',senha:'',role:'operador'});
  const [err,setErr]=useState('');
  const u=(k,v)=>setF(p=>({...p,[k]:v}));
  const salvar=()=>{
    if(!f.nome.trim()||!f.login.trim()||!f.senha.trim()){setErr('Todos os campos são obrigatórios');return;}
    if(usuarios.find(u=>u.login===f.login)){setErr('Login já em uso');return;}
    adicionarUsuario({...f});setModal(false);setF({nome:'',login:'',senha:'',role:'operador'});setErr('');
    addToast('Usuário criado com sucesso!');
  };
  return <div>
    <div className="section-header">
      <div><div className="section-title">Gerenciar Usuários</div><div className="section-sub">{usuarios.length} usuário{usuarios.length!==1?'s':''} cadastrado{usuarios.length!==1?'s':''}</div></div>
      {currentUser?.role==='admin'&&<button className="btn btn-primary" onClick={()=>setModal(true)}>＋ Novo Usuário</button>}
    </div>
    <div className="card"><div className="table-wrap"><table>
      <thead><tr><th>Usuário</th><th>Login</th><th>Perfil</th><th>Senha</th><th></th></tr></thead>
      <tbody>{usuarios.map(u=><tr key={u.id}>
        <td><div style={{display:'flex',alignItems:'center',gap:10}}><div style={{width:36,height:36,borderRadius:'50%',background:'linear-gradient(135deg,#CC1818,#FF4444)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,color:'#fff',fontSize:13}}>{u.avatar}</div><span style={{fontWeight:600}}>{u.nome}</span>{u.id===currentUser?.id&&<span style={{fontSize:10,background:'rgba(204,24,24,0.15)',color:'var(--accent)',padding:'2px 8px',borderRadius:99,fontWeight:700}}>VOCÊ</span>}</div></td>
        <td style={{color:'var(--muted)',fontFamily:'monospace'}}>{u.login}</td>
        <td><span className="badge" style={{background:u.role==='admin'?'rgba(204,24,24,0.15)':'rgba(59,130,246,0.15)',color:u.role==='admin'?'#FF4444':'#60a5fa'}}>{u.role==='admin'?'Administrador':'Operador'}</span></td>
        <td style={{color:'var(--muted)',fontFamily:'monospace',fontSize:12}}>{'•'.repeat(Math.min(u.senha.length,8))}</td>
        <td>{u.id!==currentUser?.id&&currentUser?.role==='admin'&&<button className="btn btn-danger btn-sm btn-icon" onClick={()=>askConfirm(`Excluir usuário ${u.nome}?`,()=>{excluirUsuario(u.id);addToast(`${u.nome} removido.`,'error');})}>🗑</button>}</td>
      </tr>)}
      </tbody>
    </table></div></div>
    {modal&&<Modal title="👤 Novo Usuário" onClose={()=>setModal(false)} footer={<><button className="btn btn-ghost" onClick={()=>setModal(false)}>Cancelar</button><button className="btn btn-primary" onClick={salvar}>＋ Criar</button></>}>
      {err&&<div className="login-err">{err}</div>}
      <FG label="Nome"><input className="form-input" value={f.nome} onChange={e=>u('nome',e.target.value)} placeholder="Nome completo"/></FG>
      <FG label="Login"><input className="form-input" value={f.login} onChange={e=>u('login',e.target.value)} placeholder="usuário" autoComplete="off"/></FG>
      <FG label="Senha"><input className="form-input" type="password" value={f.senha} onChange={e=>u('senha',e.target.value)} placeholder="••••••"/></FG>
      <FG label="Perfil"><select className="form-select" value={f.role} onChange={e=>u('role',e.target.value)}><option value="admin">Administrador</option><option value="operador">Operador</option></select></FG>
    </Modal>}
  </div>;
}

/* ═══ RELATÓRIOS - MODAL DE IMPRESSÃO ═══════════════════════════ */
function RelatorioModal({tipo,onClose}){
  const {obras,funcionarios,rdos,complicacoes,epis}=useApp();
  const hoje=new Date().toLocaleDateString('pt-BR',{day:'numeric',month:'long',year:'numeric'});

  const imprimir=()=>{
    const w=window.open('','_blank','width=900,height=700');
    if(!w){alert('Permitir pop-ups para imprimir o relatório.');return;}
    const el=document.getElementById('rel-print-area');
    if(!el){alert('Erro ao gerar relatório.');return;}
    w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Relatório Heightech</title>
    <style>
      *{box-sizing:border-box;margin:0;padding:0}
      body{font-family:Arial,sans-serif;color:#111;padding:32px;font-size:13px}
      h1{font-size:20px;font-weight:800;margin-bottom:4px}
      h2{font-size:15px;font-weight:700;margin:20px 0 10px;border-bottom:2px solid #CC1818;padding-bottom:4px;color:#CC1818}
      .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;padding-bottom:16px;border-bottom:3px solid #CC1818}
      .header-left h1{color:#CC1818}.header-right{text-align:right;font-size:11px;color:#666}
      table{width:100%;border-collapse:collapse;margin-bottom:16px}
      th{background:#CC1818;color:#fff;padding:8px 10px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.5px}
      td{padding:8px 10px;border-bottom:1px solid #eee;font-size:12px}
      tr:nth-child(even) td{background:#fafafa}
      .badge{display:inline-block;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:700;text-transform:uppercase}
      .stat-row{display:flex;gap:16px;margin-bottom:20px;flex-wrap:wrap}
      .stat-box{border:1px solid #ddd;border-radius:8px;padding:12px 16px;min-width:120px}
      .stat-box .val{font-size:22px;font-weight:800;color:#CC1818}
      .stat-box .lbl{font-size:10px;color:#888;text-transform:uppercase;letter-spacing:.5px}
      .footer{margin-top:32px;padding-top:12px;border-top:1px solid #ddd;font-size:10px;color:#999;text-align:center}
      @media print{body{padding:16px}}
    </style></head><body>${el.innerHTML}
    <div class="footer">Heightech Alpinismo Industrial · NR-35 · ANEAC · IRATA · Gerado em ${hoje}</div>
    </body></html>`);
    w.document.close();
    setTimeout(()=>{w.focus();w.print();},500);
  };

  const SCol=({s})=>{const cols={andamento:'#22c55e',atrasado:'#ef4444',concluido:'#64748b',pendente:'#f59e0b',aberto:'#ef4444',resolvido:'#22c55e'};const labels={andamento:'Em Andamento',atrasado:'Atrasado',concluido:'Concluído',pendente:'Pendente',aberto:'Aberto',resolvido:'Resolvido'};const col=cols[s]||'#64748b';return <span className="badge" style={{background:`${col}22`,color:col,border:`1px solid ${col}44`,display:'inline-block',padding:'2px 8px',borderRadius:99,fontSize:10,fontWeight:700,textTransform:'uppercase'}}>{labels[s]||s}</span>;};

  const HeaderRel=({titulo,sub})=><div style={{marginBottom:20}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',paddingBottom:12,borderBottom:'2px solid var(--accent)',marginBottom:16}}>
      <div><div style={{fontFamily:'Syne',fontWeight:800,fontSize:18}}>{titulo}</div><div style={{fontSize:12,color:'var(--muted)',marginTop:3}}>{sub}</div></div>
      <div style={{fontSize:11,color:'var(--muted)',textAlign:'right'}}>Gerado em {hoje}<br/>Heightech Alpinismo Industrial</div>
    </div>
  </div>;

  const TH=({children})=><th style={{textAlign:'left',padding:'9px 12px',fontSize:10,color:'#FF6666',textTransform:'uppercase',letterSpacing:'.5px',fontWeight:700,borderBottom:'1px solid var(--border)',background:'rgba(204,24,24,0.08)'}}>{children}</th>;
  const TD=({children,style={}})=><td style={{padding:'9px 12px',fontSize:12,borderBottom:'1px solid rgba(255,255,255,0.04)',verticalAlign:'middle',...style}}>{children}</td>;
  const StatBox=({ic,v,l,c})=><div style={{background:'var(--surface2)',border:'1px solid var(--border)',borderRadius:12,padding:'12px 18px',minWidth:110}}>
    <div style={{fontSize:20,marginBottom:4}}>{ic}</div>
    <div style={{fontFamily:'Syne',fontWeight:800,fontSize:20,color:c||'var(--accent)'}}>{v}</div>
    <div style={{fontSize:10,color:'var(--muted)',textTransform:'uppercase',letterSpacing:'.5px'}}>{l}</div>
  </div>;

  let content=null;

  if(tipo===0){
    const ativas=obras.filter(o=>o.status!=='concluido');
    const totalOrc=obras.reduce((a,o)=>a+(o.orcamento||0),0);
    content=<div>
      <HeaderRel titulo="📊 Relatório Semanal de Obras" sub={`${obras.length} obras · ${ativas.length} em andamento`}/>
      <div style={{display:'flex',gap:12,marginBottom:20,flexWrap:'wrap'}}>
        {[['🏗️',obras.filter(o=>o.status==='andamento').length,'Em Andamento','#22c55e'],['⚠️',obras.filter(o=>o.status==='atrasado').length,'Atrasadas','#ef4444'],['✅',obras.filter(o=>o.status==='concluido').length,'Concluídas','#64748b'],['💰','R$'+(totalOrc/1000).toFixed(0)+'k','Total Orçado','var(--accent)']].map(([ic,v,l,c])=><StatBox key={l} ic={ic} v={v} l={l} c={c}/>)}
      </div>
      <div className="table-wrap"><table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead><tr><TH>Obra</TH><TH>Cliente</TH><TH>Status</TH><TH>Progresso</TH><TH>Equipe</TH><TH>Prazo</TH><TH>Orçamento</TH></tr></thead>
        <tbody>{obras.map(o=><tr key={o.id}>
          <TD style={{fontWeight:600}}>{o.nome}</TD>
          <TD style={{color:'var(--muted)'}}>{o.cliente}</TD>
          <TD><SCol s={o.status}/></TD>
          <TD><div style={{display:'flex',alignItems:'center',gap:8}}><div style={{flex:1,height:6,background:'rgba(255,255,255,0.06)',borderRadius:99,overflow:'hidden',minWidth:60}}><div style={{height:'100%',width:`${Math.min(100,o.progresso)}%`,background:SC[o.status]||'#22c55e',borderRadius:99}}/></div><span style={{fontWeight:700,fontSize:12,color:o.progresso>100?'#f59e0b':'inherit'}}>{o.progresso}%{o.progresso>100?' 🔥':''}</span></div></TD>
          <TD>{o.equipe.length} func.</TD>
          <TD style={{color:o.status==='atrasado'?'var(--red)':'var(--muted)',fontSize:11}}>{o.fim}</TD>
          <TD style={{fontWeight:700,color:'var(--accent)'}}>R${(o.orcamento||0).toLocaleString()}</TD>
        </tr>)}</tbody>
      </table></div>
    </div>;
  }else if(tipo===1){
    const sorted=[...funcionarios].sort((a,b)=>b.producao-a.producao);
    const totalProd=funcionarios.reduce((a,f)=>a+f.producao,0);
    content=<div>
      <HeaderRel titulo="⚡ Relatório de Produtividade" sub={`${funcionarios.length} funcionários · ${totalProd} m² total produzido`}/>
      <div style={{display:'flex',gap:12,marginBottom:20,flexWrap:'wrap'}}>
        {[['⚡',totalProd+' m²','Total Produzido','var(--accent)'],['🏆',funcionarios.filter(f=>f.pontos>=f.meta).length,'Bateram Meta','#22c55e'],['⚠️',funcionarios.filter(f=>f.pontos<f.meta).length,'Abaixo da Meta','#ef4444'],['📊',funcionarios.length?Math.round(totalProd/funcionarios.length)+' m²':'0','Média/Func.','var(--blue)']].map(([ic,v,l,c])=><StatBox key={l} ic={ic} v={v} l={l} c={c}/>)}
      </div>
      <div className="table-wrap"><table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead><tr><TH>#</TH><TH>Funcionário</TH><TH>Função</TH><TH>Produção</TH><TH>Pontos</TH><TH>Meta</TH><TH>% Meta</TH><TH>Presença</TH></tr></thead>
        <tbody>{sorted.map((f,i)=>{const pct=Math.min(110,Math.round(f.pontos/f.meta*100));return <tr key={f.id}>
          <TD style={{fontWeight:800,color:'var(--muted)'}}>{i+1}</TD>
          <TD><div style={{display:'flex',alignItems:'center',gap:8}}><Av initials={f.foto} size={28}/><span style={{fontWeight:600}}>{f.nome}</span></div></TD>
          <TD style={{color:'var(--muted)'}}>{f.funcao}</TD>
          <TD style={{fontWeight:700,color:'var(--accent)'}}>{f.producao} m²</TD>
          <TD style={{fontWeight:700,color:pct>100?'#f59e0b':'inherit'}}>{f.pontos.toLocaleString()}{pct>100?' 🔥':''}</TD>
          <TD style={{color:'var(--muted)'}}>{f.meta.toLocaleString()}</TD>
          <TD><span style={{fontWeight:700,color:pct>=100?'#22c55e':pct>=70?'#f59e0b':'#ef4444'}}>{pct}%</span></TD>
          <TD><span style={{color:f.presenca>=95?'#22c55e':f.presenca>=85?'#f59e0b':'#ef4444',fontWeight:700}}>{f.presenca}%</span></TD>
        </tr>;})}
        </tbody>
      </table></div>
    </div>;
  }else if(tipo===2){
    const concluidas=obras.filter(o=>o.status==='concluido');
    const andamento=obras.filter(o=>o.status==='andamento'||o.status==='atrasado');
    const totalConc=concluidas.reduce((a,o)=>a+(o.orcamento||0),0);
    const totalAnd=andamento.reduce((a,o)=>a+(o.orcamento||0),0);
    const totalGeral=obras.reduce((a,o)=>a+(o.orcamento||0),0);
    const totalProd=rdos.reduce((a,r)=>a+(r.quantidade||0),0);
    content=<div>
      <HeaderRel titulo="💰 Relatório Financeiro" sub={`${obras.length} obras · Orçamento total: R$${totalGeral.toLocaleString()}`}/>
      <div style={{display:'flex',gap:12,marginBottom:20,flexWrap:'wrap'}}>
        {[['💰','R$'+totalGeral.toLocaleString(),'Total Orçado','var(--accent)'],['✅','R$'+totalConc.toLocaleString(),'Receita Concluída','#22c55e'],['🏗️','R$'+totalAnd.toLocaleString(),'Em Execução','#f59e0b'],['⚡',totalProd+' m²','Total Executado','var(--blue)']].map(([ic,v,l,c])=><StatBox key={l} ic={ic} v={v} l={l} c={c}/>)}
      </div>
      <div className="table-wrap"><table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead><tr><TH>Obra</TH><TH>Cliente</TH><TH>Status</TH><TH>Orçamento</TH><TH>Progresso</TH><TH>Valor Executado Est.</TH></tr></thead>
        <tbody>{[...obras].sort((a,b)=>(b.orcamento||0)-(a.orcamento||0)).map(o=>{const exec=Math.round((o.orcamento||0)*Math.min(o.progresso,100)/100);return <tr key={o.id}>
          <TD style={{fontWeight:600}}>{o.nome}</TD>
          <TD style={{color:'var(--muted)'}}>{o.cliente}</TD>
          <TD><SCol s={o.status}/></TD>
          <TD style={{fontWeight:700}}>R${(o.orcamento||0).toLocaleString()}</TD>
          <TD><span style={{fontWeight:700,color:o.progresso>100?'#f59e0b':'inherit'}}>{o.progresso}%{o.progresso>100?' 🔥':''}</span></TD>
          <TD style={{fontWeight:700,color:'#22c55e'}}>R${exec.toLocaleString()}</TD>
        </tr>;})}
        </tbody>
      </table></div>
      <div style={{marginTop:14,padding:'12px 16px',background:'rgba(34,197,94,0.08)',border:'1px solid rgba(34,197,94,0.2)',borderRadius:10,fontSize:13}}>
        <strong>Valor executado estimado total: </strong><span style={{color:'#22c55e',fontWeight:800,fontSize:16}}>R${obras.reduce((a,o)=>a+Math.round((o.orcamento||0)*Math.min(o.progresso,100)/100),0).toLocaleString()}</span>
      </div>
    </div>;
  }else if(tipo===3){
    const criticos=epis.filter(e=>e.qtd<e.min);
    content=<div>
      <HeaderRel titulo="⛑ Relatório de Segurança" sub={`${epis.length} EPIs monitorados · ${criticos.length} item(ns) crítico(s)`}/>
      <div style={{display:'flex',gap:12,marginBottom:20,flexWrap:'wrap'}}>
        {[['✅',epis.filter(e=>e.qtd>=e.min).length,'EPIs OK','#22c55e'],['⚠️',criticos.length,'EPIs Críticos','#ef4444'],['⛑',complicacoes.filter(c=>c.tipo==='seguranca').length,'Ocorrências Seg.','#f59e0b'],['🏗️',obras.filter(o=>o.status==='andamento').length,'Obras Ativas','var(--accent)']].map(([ic,v,l,c])=><StatBox key={l} ic={ic} v={v} l={l} c={c}/>)}
      </div>
      <div className="table-wrap"><table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead><tr><TH>EPI</TH><TH>Estoque</TH><TH>Mínimo</TH><TH>Validade</TH><TH>Situação</TH></tr></thead>
        <tbody>{epis.map(e=>{const ok=e.qtd>=e.min;return <tr key={e.id}>
          <TD style={{fontWeight:600}}>🦺 {e.nome}</TD>
          <TD style={{fontWeight:700,color:ok?'#22c55e':'#ef4444'}}>{e.qtd}</TD>
          <TD style={{color:'var(--muted)'}}>{e.min}</TD>
          <TD style={{color:'var(--muted)',fontSize:11}}>{e.val}</TD>
          <TD><SCol s={ok?'andamento':'atrasado'}/></TD>
        </tr>;})}
        </tbody>
      </table></div>
      {criticos.length>0&&<div style={{marginTop:14,padding:'12px 16px',background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:10}}>
        <div style={{fontWeight:700,color:'#ef4444',marginBottom:8}}>⚠️ EPIs para reposição imediata:</div>
        {criticos.map(e=><div key={e.id} style={{fontSize:13,padding:'4px 0'}}>🦺 {e.nome} — Estoque: <strong style={{color:'#ef4444'}}>{e.qtd}</strong> / Mínimo: {e.min}</div>)}
      </div>}
    </div>;
  }else if(tipo===4){
    const abertas=complicacoes.filter(c=>c.status==='aberto');
    content=<div>
      <HeaderRel titulo="🔴 Relatório de Complicações" sub={`${complicacoes.length} total · ${abertas.length} abertas`}/>
      <div style={{display:'flex',gap:12,marginBottom:20,flexWrap:'wrap'}}>
        {[['🔴',abertas.length,'Abertas','#ef4444'],['✅',complicacoes.filter(c=>c.status==='resolvido').length,'Resolvidas','#22c55e'],['⚡',complicacoes.filter(c=>c.impacto==='alto').length,'Impacto Alto','#ef4444'],['📋',complicacoes.length,'Total','var(--muted)']].map(([ic,v,l,c])=><StatBox key={l} ic={ic} v={v} l={l} c={c}/>)}
      </div>
      <div className="table-wrap"><table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead><tr><TH>Data</TH><TH>Obra</TH><TH>Tipo</TH><TH>Impacto</TH><TH>Descrição</TH><TH>Status</TH></tr></thead>
        <tbody>{[...complicacoes].sort((a,b)=>a.status==='aberto'?-1:1).map(c=>{const ic={baixo:'#22c55e',medio:'#f59e0b',alto:'#ef4444'}[c.impacto];const ob=obras.find(o=>o.id===c.obra);return <tr key={c.id}>
          <TD style={{color:'var(--muted)',fontSize:11}}>{c.data}</TD>
          <TD style={{fontWeight:600}}>{ob?.nome||'—'}</TD>
          <TD>{TP[c.tipo]||c.tipo}</TD>
          <TD><span style={{fontWeight:700,color:ic,textTransform:'uppercase',fontSize:11}}>{c.impacto}</span></TD>
          <TD style={{maxWidth:200,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{c.descricao}</TD>
          <TD><SCol s={c.status}/></TD>
        </tr>;})}
        </tbody>
      </table></div>
    </div>;
  }else if(tipo===5){
    const ranking=[...funcionarios].sort((a,b)=>b.pontos-a.pontos);
    const calcBonus=f=>{const pct=f.pontos/f.meta;if(pct>=1.2)return{label:'Excelente 🔥',val:Math.round(f.meta*0.15),cor:'#22c55e'};if(pct>=1.1)return{label:'Acima da Meta',val:Math.round(f.meta*0.12),cor:'#22c55e'};if(pct>=1.0)return{label:'Meta atingida',val:Math.round(f.meta*0.08),cor:'#22c55e'};if(pct>=0.8)return{label:'Próximo',val:Math.round(f.meta*0.03),cor:'#f59e0b'};return{label:'Abaixo da meta',val:0,cor:'#ef4444'};};
    const totalBonus=ranking.reduce((a,f)=>a+calcBonus(f).val,0);
    content=<div>
      <HeaderRel titulo="🏆 Relatório de Bonificação" sub={`${funcionarios.length} funcionários · Bônus estimado: R$${totalBonus.toLocaleString()}`}/>
      <div style={{display:'flex',gap:12,marginBottom:20,flexWrap:'wrap'}}>
        {[['🥇',funcionarios.filter(f=>f.pontos>=f.meta).length,'Bateram Meta','#22c55e'],['📊',funcionarios.length?Math.round(funcionarios.reduce((a,f)=>a+Math.min(110,f.pontos/f.meta*100),0)/funcionarios.length)+'%':'0%','Média % Meta','var(--accent)'],['💰','R$'+totalBonus.toLocaleString(),'Total Bônus Est.','#f59e0b'],['🏆',ranking[0]?.nome?.split(' ')[0]||'—','Líder Atual','var(--accent)']].map(([ic,v,l,c])=><StatBox key={l} ic={ic} v={v} l={l} c={c}/>)}
      </div>
      <div className="table-wrap"><table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead><tr><TH>Pos.</TH><TH>Funcionário</TH><TH>Pontos</TH><TH>Meta</TH><TH>% Meta</TH><TH>Classificação</TH><TH>Bônus Est.</TH></tr></thead>
        <tbody>{ranking.map((f,i)=>{const pct=Math.min(110,Math.round(f.pontos/f.meta*100));const b=calcBonus(f);return <tr key={f.id}>
          <TD style={{fontFamily:'Syne',fontWeight:800,color:'var(--muted)'}}>{i<3?['🥇','🥈','🥉'][i]:i+1}</TD>
          <TD><div style={{display:'flex',alignItems:'center',gap:8}}><Av initials={f.foto} size={26}/><span style={{fontWeight:600}}>{f.nome}</span></div></TD>
          <TD style={{fontFamily:'Syne',fontWeight:800,color:pct>100?'#f59e0b':'var(--accent)'}}>{f.pontos.toLocaleString()}{pct>100?' 🔥':''}</TD>
          <TD style={{color:'var(--muted)'}}>{f.meta.toLocaleString()}</TD>
          <TD><span style={{fontWeight:700,color:pct>=100?'#22c55e':pct>=80?'#f59e0b':'#ef4444'}}>{pct}%</span></TD>
          <TD><span style={{fontWeight:700,color:b.cor}}>{b.label}</span></TD>
          <TD style={{fontWeight:800,color:b.val>0?'#22c55e':'var(--muted)'}}>{b.val>0?'R$'+b.val.toLocaleString():'—'}</TD>
        </tr>;})}
        </tbody>
      </table></div>
      <div style={{marginTop:12,padding:'10px 14px',background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)',borderRadius:8,fontSize:11,color:'var(--muted)'}}>
        Critério: +20% meta = 15% bônus · +10% = 12% · Meta atingida = 8% · 80-99% = 3% · Abaixo 80% = sem bônus
      </div>
    </div>;
  }

  return <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&onClose()}>
    <div className="modal" style={{maxWidth:860}}>
      <div className="modal-header">
        <div className="modal-title">📄 Relatório</div>
        <div style={{display:'flex',gap:8}}>
          <button className="btn btn-primary btn-sm" onClick={imprimir}>🖨️ Imprimir / Exportar PDF</button>
          <button className="btn btn-ghost btn-icon" onClick={onClose}>✕</button>
        </div>
      </div>
      <div className="modal-body" id="rel-print-area">{content}</div>
    </div>
  </div>;
}

/* ═══ RELATÓRIOS - LISTA ═════════════════════════════════════════ */
function Relatorios(){
  const {obras,funcionarios,rdos}=useApp();
  const [relAtivo,setRelAtivo]=useState(null);
  const rels=[
    {icon:"📊",titulo:"Relatório Semanal de Obras",desc:"Resumo completo com progresso, equipe e orçamento.",cor:"var(--accent)",btn:"Gerar Relatório"},
    {icon:"⚡",titulo:"Relatório de Produtividade",desc:"Análise de produção por funcionário vs metas.",cor:"var(--blue)",btn:"Gerar Relatório"},
    {icon:"💰",titulo:"Relatório Financeiro",desc:"Orçamentos, receita concluída e valor executado.",cor:"var(--green)",btn:"Gerar Relatório"},
    {icon:"⛑",titulo:"Relatório de Segurança",desc:"Inventário de EPIs críticos e ocorrências.",cor:"var(--yellow)",btn:"Gerar Relatório"},
    {icon:"🔴",titulo:"Relatório de Complicações",desc:"Histórico completo de problemas e soluções.",cor:"var(--red)",btn:"Gerar Relatório"},
    {icon:"🏆",titulo:"Relatório de Bonificação",desc:"Ranking, % de meta atingida e bônus estimado.",cor:"#fbbf24",btn:"Gerar Relatório"},
  ];
  return <div>
    <div className="section-header">
      <div><div className="section-title">Relatórios Automáticos</div><div className="section-sub">{rdos.length} RDOs · {obras.length} obras · {funcionarios.length} funcionários · Clique para gerar e imprimir</div></div>
    </div>
    <div className="grid-2">{rels.map((r,i)=><div key={r.titulo} className="rel-card" onClick={()=>setRelAtivo(i)}>
      <div className="rel-icon">{r.icon}</div>
      <div style={{flex:1}}>
        <div className="rel-titulo">{r.titulo}</div>
        <div className="rel-desc">{r.desc}</div>
        <button className="btn btn-primary btn-sm" onClick={e=>{e.stopPropagation();setRelAtivo(i);}}>📄 {r.btn}</button>
      </div>
    </div>)}</div>
    {relAtivo!==null&&<RelatorioModal tipo={relAtivo} onClose={()=>setRelAtivo(null)}/>}
  </div>;
}

/* ═══ LOGIN ══════════════════════════════════════════════════════ */
function Login({onLogin}){
  const [login,setLogin]=useState('');
  const [senha,setSenha]=useState('');
  const [err,setErr]=useState('');
  const [loading,setLoading]=useState(false);
  const users=S.g('ht_users',USERS_INIT);

  const entrar=()=>{
    if(!login.trim()||!senha.trim()){setErr('Preencha usuário e senha');return;}
    setLoading(true);
    setTimeout(()=>{
      const u=users.find(u=>u.login===login.trim()&&u.senha===senha.trim());
      if(u){onLogin(u);}else{setErr('Usuário ou senha incorretos');setLoading(false);}
    },600);
  };

  return <div className="login-wrap">
    <div className="login-box">
      <div className="login-logo">
        <LogoSVG size={72}/>
      </div>
      <div className="login-title">Heightech ERP</div>
      <div className="login-sub">Alpinismo Industrial · Sistema de Gestão</div>
      {err&&<div className="login-err">{err}</div>}
      <div className="form-group">
        <label className="form-label">Usuário</label>
        <input className="form-input" value={login} onChange={e=>{setLogin(e.target.value);setErr('');}} placeholder="seu.login" onKeyDown={e=>e.key==='Enter'&&entrar()}/>
      </div>
      <div className="form-group" style={{marginBottom:24}}>
        <label className="form-label">Senha</label>
        <input className="form-input" type="password" value={senha} onChange={e=>{setSenha(e.target.value);setErr('');}} placeholder="••••••••" onKeyDown={e=>e.key==='Enter'&&entrar()}/>
      </div>
      <button className="btn btn-primary" style={{width:'100%',padding:'14px',fontSize:15,justifyContent:'center'}} onClick={entrar} disabled={loading}>
        {loading?'Entrando...':'Entrar →'}
      </button>
      <div style={{marginTop:20,padding:'14px',background:'rgba(255,255,255,0.03)',borderRadius:10,fontSize:12,color:'var(--muted)'}}>
        <div style={{fontWeight:700,marginBottom:6,color:'var(--text)'}}>Acessos padrão:</div>
        <div>👑 Admin: <strong>pedro</strong> / heightech123</div>
        <div style={{marginTop:4}}>👤 Gestor: <strong>gestor</strong> / gestor123</div>
      </div>
    </div>
  </div>;
}

/* ═══ APP PRINCIPAL ══════════════════════════════════════════════ */
function App(){
  const [currentUser,setCurrentUser]=useState(()=>S.g('ht_session',null));
  const [page,setPage]=useState('dashboard');
  const [sideOpen,setSideOpen]=useState(false);
  const [obras,setObras]=useState(()=>S.g('obras',OBRAS_INIT));
  const [funcionarios,setFuncionarios]=useState(()=>S.g('funcs',FUNCS_INIT));
  const [rdos,setRdos]=useState(()=>S.g('rdos',RDOS_INIT));
  const [complicacoes,setComplicacoes]=useState(()=>S.g('comps',COMPS_INIT));
  const [epis,setEpis]=useState(()=>S.g('epis',EPIS_INIT));
  const [usuarios,setUsuarios]=useState(()=>S.g('ht_users',USERS_INIT));
  const [toasts,setToasts]=useState([]);
  const [confirm,setConfirm]=useState(null);

  useEffect(()=>{S.s('obras',obras);},[obras]);
  useEffect(()=>{S.s('funcs',funcionarios);},[funcionarios]);
  useEffect(()=>{S.s('rdos',rdos);},[rdos]);
  useEffect(()=>{S.s('comps',complicacoes);},[complicacoes]);
  useEffect(()=>{S.s('epis',epis);},[epis]);
  useEffect(()=>{S.s('ht_users',usuarios);},[usuarios]);
  useEffect(()=>{if(currentUser)S.s('ht_session',currentUser);else localStorage.removeItem('ht_session');},[currentUser]);

  const addToast=(msg,type='success')=>{const id=Date.now();setToasts(t=>[...t,{id,msg,type}]);setTimeout(()=>setToasts(t=>t.filter(x=>x.id!==id)),3200);};
  const askConfirm=(msg,onConfirm)=>setConfirm({msg,onConfirm});

  // OBRAS CRUD
  const adicionarObra=d=>{const novo={...d,id:nid(obras),etapas:[]};setObras(o=>[...o,novo]);addToast('Obra criada!');};
  const editarObra=(id,d)=>{setObras(o=>o.map(x=>x.id===id?{...x,...d}:x));addToast('Obra atualizada!');};
  const excluirObra=id=>{askConfirm('Excluir esta obra?',()=>{setObras(o=>o.filter(x=>x.id!==id));addToast('Obra excluída.','error');});};
  const adicionarEtapa=(obraId,d)=>{setObras(o=>o.map(x=>x.id===obraId?{...x,etapas:[...x.etapas,{...d,id:nid(x.etapas)}]}:x));addToast('Etapa adicionada!');};
  const editarEtapa=(obraId,etapaId,d)=>{setObras(o=>o.map(x=>x.id===obraId?{...x,etapas:x.etapas.map(e=>e.id===etapaId?{...e,...d}:e)}:x));addToast('Etapa atualizada!');};
  const excluirEtapa=(obraId,etapaId)=>{setObras(o=>o.map(x=>x.id===obraId?{...x,etapas:x.etapas.filter(e=>e.id!==etapaId)}:x));};

  // FUNCIONÁRIOS CRUD
  const adicionarFuncionario=d=>{const novo={...d,id:nid(funcionarios),foto:mkI(d.nome),pontos:0,presenca:100,obras:[],producao:0,retrabalhos:0,atrasos:0};setFuncionarios(f=>[...f,novo]);addToast(`${d.nome} cadastrado!`);};
  const editarFuncionario=(id,d)=>{setFuncionarios(f=>f.map(x=>x.id===id?{...x,...d,foto:mkI(d.nome)}:x));addToast('Funcionário atualizado!');};
  const excluirFuncionario=id=>{setFuncionarios(f=>f.filter(x=>x.id!==id));};

  // RDO
  const adicionarRDO=d=>{
    const novo={...d,id:nid(rdos),data:new Date().toLocaleDateString('pt-BR')};
    setRdos(r=>[...r,novo]);
    setFuncionarios(f=>f.map(fn=>d.equipe.includes(fn.id)?{...fn,pontos:fn.pontos+(d.quantidade||0),producao:fn.producao+(d.quantidade||0)}:fn));
    addToast('RDO enviado! Pontuação atualizada.');
  };

  // COMPLICAÇÕES
  const adicionarComplicacao=d=>{setComplicacoes(c=>[...c,{...d,id:nid(complicacoes),data:new Date().toLocaleDateString('pt-BR'),status:'aberto'}]);addToast('Complicação registrada.','warn');};
  const resolverComplicacao=id=>{setComplicacoes(c=>c.map(x=>x.id===id?{...x,status:'resolvido'}:x));addToast('Complicação resolvida!');};

  // EPIS
  const adicionarEpi=d=>{setEpis(e=>[...e,{...d,id:nid(epis)}]);addToast('EPI cadastrado!');};
  const atualizarEpi=(id,d)=>{setEpis(e=>e.map(x=>x.id===id?{...x,...d}:x));addToast('EPI atualizado!');};
  const excluirEpi=id=>{setEpis(e=>e.filter(x=>x.id!==id));};
  const adicionarEntradaEpi=(id,qtd)=>{setEpis(e=>e.map(x=>x.id===id?{...x,qtd:x.qtd+Number(qtd)}:x));addToast('Entrada registrada!');};

  // USUÁRIOS
  const adicionarUsuario=d=>{const novo={...d,id:nid(usuarios),avatar:mkI(d.nome)};setUsuarios(u=>[...u,novo]);};
  const excluirUsuario=id=>{setUsuarios(u=>u.filter(x=>x.id!==id));};

  const navTo=id=>{setPage(id);setSideOpen(false);};
  const logout=()=>{askConfirm('Deseja sair do sistema?',()=>{setCurrentUser(null);setPage('dashboard');addToast('Sessão encerrada.');});};

  if(!currentUser)return <Login onLogin={u=>{setCurrentUser(u);addToast(`Bem-vindo, ${u.nome}! 👋`,'success');}}/>;

  const pages={dashboard:<Dashboard setPage={setPage}/>,obras:<Obras/>,rdo:<RDO/>,complicacoes:<Complicacoes/>,produtividade:<Produtividade/>,pontuacao:<Pontuacao/>,relatorios:<Relatorios/>,funcionarios:<Funcionarios/>,epis:<EPIs/>,usuarios:<Usuarios/>};
  const PageComp=pages[page]||pages.dashboard;

  return <Ctx.Provider value={{obras,funcionarios,rdos,complicacoes,epis,usuarios,currentUser,toasts,confirm,setConfirm,adicionarObra,editarObra,excluirObra,adicionarEtapa,editarEtapa,excluirEtapa,adicionarFuncionario,editarFuncionario,excluirFuncionario,adicionarRDO,adicionarComplicacao,resolverComplicacao,adicionarEpi,atualizarEpi,excluirEpi,adicionarEntradaEpi,adicionarUsuario,excluirUsuario,addToast,askConfirm}}>
    <div className="app">
      {sideOpen&&<div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',zIndex:99}} onClick={()=>setSideOpen(false)}/>}
      <div className={`sidebar ${sideOpen?'open':''}`}>
        <div className="sidebar-logo" onClick={()=>navTo('dashboard')}>
          <LogoSVG size={44}/>
          <div><div className="logo-text">Heightech</div><div className="logo-sub">Alpinismo Industrial</div></div>
        </div>
        <nav className="nav">{NAV.map(s=><div className="nav-section" key={s.section}>
          <div className="nav-label">{s.section}</div>
          {s.items.map(item=><div key={item.id} className={`nav-item ${page===item.id?'active':''}`} onClick={()=>navTo(item.id)}>
            <span className="ni">{item.icon}</span>{item.label}
          </div>)}
        </div>)}</nav>
        <div className="sidebar-footer">
          <div className="user-card" onClick={logout} title="Clique para sair">
            <div className="user-avatar">{currentUser.avatar||currentUser.nome[0]}</div>
            <div style={{flex:1,minWidth:0}}>
              <div className="user-name" style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{currentUser.nome}</div>
              <div className="user-role">{currentUser.role==='admin'?'Administrador':'Operador'} · Sair</div>
            </div>
            <span style={{fontSize:16,color:'var(--muted)'}}>↩</span>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="topbar">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <button className="mobile-toggle" onClick={()=>setSideOpen(o=>!o)}>☰</button>
            <span className="topbar-title">{TITLES[page]||page}</span>
          </div>
          <div className="topbar-actions">
            <button className="btn btn-ghost btn-icon" style={{position:'relative'}} onClick={()=>navTo('relatorios')} title="Relatórios">📄</button>
            <button className="btn btn-ghost btn-icon" style={{position:'relative'}} title="Notificações">🔔{complicacoes.filter(c=>c.status==='aberto').length>0&&<span className="notif-dot"/>}</button>
            <button className="btn btn-ghost btn-sm" onClick={logout}>↩ Sair</button>
          </div>
        </div>
        <div className="content">{PageComp}</div>
      </div>
      <Toasts/>
      <ConfirmDialog/>
    </div>
  </Ctx.Provider>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
</script>
</body>
</html>

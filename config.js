// Sistema de Configurações Globais do MPP
// Este arquivo deve ser incluído em todas as páginas

class MPPConfig {
  constructor() {
    this.configs = {
      tema: 'claro',
      idioma: 'pt',
      som: false,
      notificacao: false,
      animacoes: true,
      modoDev: false,
      telaInicial: 'ji.html'
    };
    this.init();
  }

  init() {
    this.carregarConfigs();
    this.aplicarConfigs();
    this.setupEventListeners();
  }

  carregarConfigs() {
    this.configs.tema = localStorage.getItem('tema') || 'claro';
    this.configs.idioma = localStorage.getItem('idioma') || 'pt';
    this.configs.som = localStorage.getItem('som') === 'true';
    this.configs.notificacao = localStorage.getItem('notificacao') === 'true';
    this.configs.animacoes = localStorage.getItem('animacoes') !== 'false';
    this.configs.modoDev = localStorage.getItem('modoDev') === 'true';
    this.configs.telaInicial = localStorage.getItem('telaInicial') || 'ji.html';
  }

  aplicarConfigs() {
    // Aplicar tema
    document.body.classList.add(this.configs.tema);

    // Aplicar modo dev
    if (this.configs.modoDev) {
      document.body.style.border = '3px solid red';
      console.log('🛠️ Modo Desenvolvedor ativado!');
    }

    // Aplicar animações
    if (!this.configs.animacoes) {
      this.desabilitarAnimacoes();
    }

    // Aplicar idioma se houver função específica
    if (typeof aplicarIdioma === 'function') {
      aplicarIdioma();
    }
  }

  desabilitarAnimacoes() {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        transition: none !important;
        animation: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  setupEventListeners() {
    // Escutar mudanças de visibilidade para re-aplicar configurações
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.aplicarConfigs();
      }
    });
  }

  // Métodos públicos para outras páginas usarem
  getConfig(chave) {
    return this.configs[chave];
  }

  setConfig(chave, valor) {
    this.configs[chave] = valor;
    localStorage.setItem(chave, valor);
    this.aplicarConfigs();
  }

  tocarSom(frequencia = 800, duracao = 200) {
    if (!this.configs.som) return;

    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(frequencia, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duracao/1000);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duracao/1000);
    } catch (e) {
      console.warn('Web Audio API não suportada');
    }
  }

  mostrarNotificacao(mensagem, tipo = 'info') {
    if (!this.configs.notificacao && tipo !== 'success' && tipo !== 'error') return;

    // Sistema de notificações do navegador
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('MPP', {
        body: mensagem,
        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM2NjdlZWEiLz4KPHBhdGggZD0iTTggMTJMMjQgMTJMMjQgMjBMMCAyMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg=='
      });
    }

    // Notificação na tela
    this.mostrarNotificacaoTela(mensagem, tipo);
  }

  mostrarNotificacaoTela(mensagem, tipo = 'info') {
    const notification = document.createElement('div');
    notification.className = `mpp-notification ${tipo}`;
    notification.textContent = mensagem;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 20px;
      border-radius: 10px;
      color: white;
      font-weight: bold;
      z-index: 10000;
      animation: mppSlideIn 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      max-width: 300px;
    `;

    const cores = {
      success: '#4CAF50',
      error: '#f44336',
      warning: '#ff9800',
      info: '#2196F3'
    };
    notification.style.backgroundColor = cores[tipo] || cores.info;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'mppSlideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Inicializar configurações quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  window.mppConfig = new MPPConfig();
});

// Adicionar estilos globais para notificações
const style = document.createElement('style');
style.textContent = `
  @keyframes mppSlideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes mppSlideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }

  /* Temas globais */
  body.claro {
    background-color: #f0f0f0;
    color: #333;
  }
  body.escuro {
    background-color: #121212;
    color: #f0f0f0;
  }
  body.verde {
    background-color: #001f00;
    color: #00ff00;
  }
  body.rosa {
    background-color: #ffe6f0;
    color: #cc0066;
  }
`;
document.head.appendChild(style);
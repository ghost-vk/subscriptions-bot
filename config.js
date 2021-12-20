require('dotenv').config()

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  URL: process.env.URL || '',
  GHOST_ID: process.env.GHOST_ID,
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEV: process.env.NODE_ENV !== 'production',
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  SUPPORT_CHAT_LINK: 'https://t.me/ghost_vkv',
  TELEGRAM_API: `https://api.telegram.org/bot${process.env.BOT_TOKEN}`,
  SUPPORT_URL: process.env.SUPPORT_URL,

  orderStatus: {
    opened: 'opened',
    completed: 'completed',
    closed: 'closed',
    waitingReceipt: 'waiting_receipt',
    waitingConfirm: 'waiting_confirm',
  },

  userCommands: {
    subscriptions: 'Активные подписки',
    products: 'Доступные подписки',
    history: 'Мои заказы',
    support: '⚙ ️Поддержка',
  },

  productCategory: {
    subscription: { code: 'subscription', name: '⏳ Подписки' },
    material: { code: 'material', name: '📚 Материалы' },
    service: { code: 'service', name: '👩🏻‍💻 Услуги' },
  },

  adminAction: '',
  adminCommands: {
    confirm: '🟢 Подтвердить',
    reject: '🔴 Отклонить',
    orders: '🧐 Необработанные',
    ban: '😈 Бан',
    admin: '/admin',
    mailingAll: '/mailall',
    mailingSubscribers: '/mailsubscribers',
    mailingAllWithoutSubscribers: '/mailnosubscribers',
    sendTestMessageToChannel: 'Тестовое сообщение 📢',
  },

  isAdmin(id) {
    const userId = Number(id)
    const adminId = Number(process.env.GHOST_ID)
    return !!(userId && adminId && userId === adminId)
  },

  setAdminAction(action) {
    const availableCommands = Object.values(this.adminCommands)
    if (availableCommands.includes(action)) {
      this.adminAction = action
    }
  },

  resetAdminAction() {
    this.adminAction = null
  },

  setUrl(url) {
    this.URL = url
  },
}

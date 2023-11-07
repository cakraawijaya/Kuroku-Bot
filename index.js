// Disini tempat untuk semua inisialisasi diletakkan
// ---------------------------------------------------------------------------------------------------------------
// Token API
const token = '1322332711:AAEnv0oBO3ecSHQSJBmrkD2q0sKTCxTEz_0';

// Bot telegram
const bot = new lumpia.init(token);

// Chat id admin bot
const admin_bot = 'CHAT ID TELEGRAM ANDA';

// Username bot
const username_bot = 'kuroku_bot';

// Inline keyboard
let keyboard = [];
const button = lumpia.button;
const markup = lumpia.markup;

// Penunjukkan waktu
let date = new Date();
let tanggal = Utilities.formatDate(date, "Asia/Jakarta", "yyyy/MM/dd");
let waktu_lengkap = Utilities.formatDate(date, "Asia/Jakarta", "yyyy/MM/dd , HH:mm:ss");




// Disini tempat untuk semua fungsi diletakkan
// ---------------------------------------------------------------------------------------------------------------
// Handle komunikasi via POST dari Telegram ke (webhook) GAS
function doPost(e) {
  bot.doPost(e);
}

// Bagian ini untuk mengatur WebHook
function setWebHook() {
  let url = 'WEB URL DEPLOY ANDA';
  let result = bot.telegram.setWebhook(url);
  Logger.log(result);
}




// Disini tempat untuk semua perintah dan fungsi pendukung diletakkan
// ---------------------------------------------------------------------------------------------------------------
// Menu yang pertama kali muncul ketika bot dibuka
bot.start(ctx => {  
  
  // Menu
  let menu = 'start';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  // Ucapan selamat datang
  let msg = '📢 Selamat datang di <b>'+username_bot+'</b>. Bot ini dapat memberikan edukasi praktis terkait bagaimana cara merawat hewan peliharaan.\n\n👋 Hai <b>'+nama+'</b>...\n🚹 Username = @'+user;
  msg += '\n\nSilakan pilih menu dibawah ini..';

  // Opsi keyboard baris-1
  keyboard[0] = [
    button.text('🐈 Jenis', 'me_jenis'),
    button.text('🍗 Pakan', 'me_pakan')
  ];

  // Opsi keyboard baris-2
  keyboard[1] = [
    button.text('🌱 Habitat', 'me_habitat'),
    button.text('💊 Kesehatan', 'me_kesehatan')
  ];

  // Opsi keyboard baris-3
  keyboard[2] = [
    button.text('❓Status Bot', 'me_status')
  ];

  // Output yang dikirim oleh bot
  ctx.replyWithHTML(msg,{ reply_markup: markup.inlineKeyboard(keyboard) }) 
  & bot.telegram.sendMessage(admin_bot, pvmsg);
})

// Aksi Bot Telegram pada Menu Utama
// Respon jenis
bot.action('me_jenis', ctx => { 
  // Menu
  let menu = 'jenis';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  ctx.replyWithHTML('Ini balasan menu Jenis.') & bot.telegram.sendMessage(admin_bot, pvmsg);
});
// Respon pakan
bot.action('me_pakan', ctx => { 
  // Menu
  let menu = 'pakan';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  ctx.replyWithHTML('Ini balasan menu Pakan.') & bot.telegram.sendMessage(admin_bot, pvmsg);
});
// Respon habitat
bot.action('me_habitat', ctx => { 
  // Menu
  let menu = 'habitat';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  ctx.replyWithHTML('Ini balasan menu Habitat.') & bot.telegram.sendMessage(admin_bot, pvmsg);
});
// Respon kesehatan
bot.action('me_kesehatan', ctx => { 
  // Menu
  let menu = 'kesehatan';

  // Pengguna
  let nama = ctx.from.first_name;
  let user = ctx.from.username;
  if (ctx.from.last_name) { 
    nama += " " + ctx.from.last_name;
  }

  // Notifikasi pengakses
  let pvmsg = '⚠️ Ada yang mengakses bot anda ❗\n\n🆔 ID : '+ctx.from.id+'\n👤 Nama : '+nama;
  pvmsg += '\n🚹 Username : @'+user+'\n📁 Akses menu : '+menu+"\n⏰ Date : "+waktu_lengkap+".";

  ctx.replyWithHTML('Ini balasan menu Kesehatan.') & bot.telegram.sendMessage(admin_bot, pvmsg);
});
// Respon status
bot.action('me_status', ctx => ctx.answerCallbackQuery('Sistem sedang berjalan ['+tanggal+']'));

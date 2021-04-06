const fs = require('fs-extra')

const help = (#, cts, pendaftar) => {
    return `
💝 *Zdbot  Spesealist Ramadhan* 💝

 CREATOR : ZidanGanz
 wa.me/625895413910
 ${pendaftar.length} Orang Dikenal
 https://zidanzfa.com [Tempat beli follower dll terpercaya]

Bot Ini Masih Dalam Tahap Pengembangan Cuk!Jelas beda ama yang 100% jadi Tod!
💝 *LIST FITUR* 💝

➵ *${#}join*
➵ *${#}brainly*
➵ *${#}sticker*
➵ *${#}take*
➵ *${#}lirik*
➵ *${#}tts*
➵ *${#}ttp*
➵ *${#}pastebin*
➵ *${#}textmaker*
➵ *${#}quotemaker*
➵ *${#}hitung*
➵ *${#}cekip*
➵ *${#}waktu*
➵ *${#}cantik*
➵ *${#}ganteng*
➵ *${#}sticker*
➵ *${#}stickergif*
➵ *${#}stickerlightning*
➵ *${#}stickerfire*
➵ *${#}toimg*
➵ *${#}shota*
➵ *${#}wallanime*
➵ *${#}quoteanime*
➵ *${#}malanime*
➵ *${#}maluser*
➵ *${#}malcharacter*
➵ *${#}meme*
➵ *${#}jelek*
➵ *${#}mypic*
➵ *${#}yourpic*
➵ *${#}ytsearch*
➵ *${#}simi*
➵ *${#}google*
➵ *${#}translate*
➵ *${#}apakah*
➵ *${#}kapankah*
➵ *${#}nilai*
➵ *${#}bisakah*
➵ *${#}gdrive*
➵ *${#}neko*
➵ *${#}cewe*
➵ *${#}maps*
➵ *${#}ig*
➵ *${#}tt* Error :(
➵ *${#}mark*
➵ *${#}smule*
➵ *${#}antibadword*
➵ *${#}antisticker*
➵ *${#}lock*
➵ *${#}unlock*
➵ *${#}add*
➵ *${#}kick*
➵ *${#}tagall*
➵ *${#}promote*
➵ *${#}demote*
➵ *${#}setgcname*
➵ *${#}setgcpp*
➵ *${#}ping*

_JIKA ADA YANG ERROR SILAHKAN KETIK *#bugreport* Keluh Kesahmu Sayang_
 Zdbot TELAH AKTIF SELAMA :
 ${cts}

💝 *Zdbot FARIZA* 💝
`
}
exports.help = help
const ownercmd = (#) => {
    return `
╔══✪〘 OWNER 〙✪══
║
╠➥ *${#}block 62858xxxxx*
╠➥ *${#}unblock 62858xxxxx*
╠➥ *${#}addadmin @tagmember*
╠➥ *${#}deladmin @tagmember*
╠➥ *${#}restart*
╠➥ *${#}ekickall*
╠➥ *${#}banchat*
╠➥ *${#}unbanchat*
╠➥ *${#}setname [teks]*
╠➥ *${#}setstatus [teks]*
╠➥ *${#}setprofilepic*
╠➥ *${#}eval [kode JavaScript]*
║
╚═〘 ELAINA BOT 〙`
}
exports.ownercmd = ownercmd
const admincmd = (#) => {
    return `
╔══✪〘 ADMIN 〙✪══
║
╠➥ *${#}mute*
╠➥ *${#}unmute*
╠➥ *${#}ban @tagmember*
╠➥ *${#}gift @tagmember jumlah*
╠➥ *${#}unban @tagmember*
╠➥ *${#}daftarulang @tagmember umur*
╠➥ *${#}spamcall [81273xxxx]*
╠➥ *${#}addbadword [text]*
╠➥ *${#}delbadword [text]*
╠➥ *${#}listbadword [text]*
╠➥ *${#}resetsticker @tagmember*
╠➥ *${#}resetbadword @tagmember*
╠➥ *${#}kickall*
╠➥ *${#}oleave*
╠➥ *${#}opromote*
╠➥ *${#}odemote*
╠➥ *${#}odelete*
╠➥ *${#}oadd 62813xxxxx*
╠➥ *${#}okickall*
╠➥ *${#}otagall*
║
╚═〘 ELAINA BOT 〙`
}
exports.admincmd = admincmd
const nsfwcmd = (#) => {
    return `
╔══✪〘 NSFW 〙✪══
║
╠➥ *${#}randombokep
╠➥ *${#}randomhentai*
╠➥ *${#}randomnsfwneko*
╠➥ *${#}randomtrapnime*
╠➥ *${#}nhentai [kode]*
╠➥ *${#}nhder [kode]*
╠➥ *${#}xnxx [linkXnxx]*
║
╚═〘 ELAINA BOT 〙`
}
exports.nsfwcmd = nsfwcmd
const praycmd = (#) => {
    return `
╔══✪〘 PRAY 〙✪══
║
╠➥ *${#}quran [urutan surah]*
╠➥ *${#}infosurah [nama surah]*
╠➥ *${#}tafsir [nama surah] [ayat]*
╠➥ *${#}jadwalsholat [daerah]*
╠➥ *${#}listsurah*
╠➥ *${#}listdaerah*
║
╚═〘 ELAINA BOT 〙`
}
exports.praycmd = praycmd
const kerangcmd = (#) => {
    return `
╔══✪〘 KERANG 〙✪══
║
╠➥ *${#}apakah [optional]*
╠➥ *${#}rate* [optional]*
╠➥ *${#}bisakah* [optional]*
╠➥ *${#}kapankah* [optional]*
║
╚═〘 ELAINA BOT 〙`
}
exports.kerangcmd = kerangcmd
const funcmd = (#) => {
    return `
╔══✪〘 FUN 〙✪══
║
╠➥ *${#}caklontong*
╠➥ *${#}family100*
╠➥ *${#}tebakgambar*
╠➥ *${#}cerpen*
╠➥ *${#}puisi1*
╠➥ *${#}puisi2*
╠➥ *${#}puisi3*
╠➥ *${#}glitch [|teks1|teks2]*
╠➥ *${#}lovemessage [teks]*
╠➥ *${#}romance [teks]*
╠➥ *${#}party [teks]*
╠➥ *${#}silk [teks]*
╠➥ *${#}thunder [teks]*
╠➥ *${#}blackpink [teks]*
╠➥ *${#}pornhub [|teks1|teks2]*
╠➥ *${#}magernulis1 [teks]*
╠➥ *${#}ramalpasangan [kamu|pasangan]*
╠➥ *${#}zodiak* [zodiak kamu]
╠➥ *${#}artinama [nama]*
╠➥ *${#}artinama [nama]*
╠➥ *${#}artimimpi [mimpi]*
╠➥ *${#}heroml [nama hero]*
╠➥ *${#}nulis [teks]*
╠➥ *${#}sandwriting [teks]*
╠➥ *${#}quotemaker [|teks|author|theme]*
║
╚═〘 ELAINA BOT 〙
`
}
exports.funcmd = funcmd
const mediacmd = (#) => {
    return `
╔══✪〘 MEDIA 〙✪══
║
╠➥ *${#}newstickerline*
╠➥ *${#}news*
╠➥ *${#}jadwalbola [query]*
╠➥ *${#}distance [query]*
╠➥ *${#}covid [negara]*
╠➥ *${#}jadwalTv [channel]*
╠➥ *${#}cuaca [tempat]*
╠➥ *${#}resepmasakan [optional]*
╠➥ *${#}tts [kode bhs] [teks]*
╠➥ *${#}igstalk [@username]*
╠➥ *${#}tiktokstalk [@username]*
╠➥ *${#}smulestalk [@username]*
╠➥ *${#}kbbi [query]*
╠➥ *${#}wiki [query]*
╠➥ *${#}shopee [query]*
╠➥ *${#}google [query]*
╠➥ *${#}pinterest [query]*
╠➥ *${#}playstore [query]*
╠➥ *${#}googleimage [query]*
╠➥ *${#}brainlysearch [query]*
╠➥ *${#}ytsearch [query]*
╠➥ *${#}translate [bahasa] [teks]*
╠➥ *${#}brainly [pertanyaan] [.jumlah]*
╠➥ *${#}lirik [optional]*
╠➥ *${#}chord [optional]*
╠➥ *${#}qrcode [optional]*
╠➥ *${#}maps [optional]*
╠➥ *${#}textmaker [teks1|teks2]*
╠➥ *${#}checkip [ipaddress]*
╠➥ *${#}ssweb [linkWeb]*
╠➥ *${#}shorturl [linkWeb]*
║
╚═〘 ELAINA BOT 〙`
}
exports.mediacmd = mediacmd
const animecmd = (#) => {
    return `
╔══✪〘 ANIME 〙✪══
║
╠➥ *${#}loli*
╠➥ *${#}shota*
╠➥ *${#}waifu*
╠➥ *${#}husbu*
╠➥ *${#}randomNekoNime*
╠➥ *${#}randomTrapNime*
╠➥ *${#}randomAnime*
╠➥ *${#}quotesnime*
╠➥ *${#}wait*
╠➥ *${#}koin*
╠➥ *${#}maluser [username]*
╠➥ *${#}malanime [query]*
╠➥ *${#}malcharacter [query]*
╠➥ *${#}kusonime [query]*
╠➥ *${#}neonime [query]*
╠➥ *${#}dewabatch [query]*
╠➥ *${#}komiku [query]*
╠➥ *${#}animesearch [query]*
║
╚═〘 ELAINA BOT 〙`
}
exports.animecmd = animecmd
const othercmd = (#) => {
    return `
╔══✪〘 OTHER 〙✪══
║
╠➥ *${#}bahasa*
╠➥ *${#}sticker*
╠➥ *${#}stickergif*
╠➥ *${#}sfire*
╠➥ *${#}slightning*
╠➥ *${#}ttp [teks]*
╠➥ *${#}stickertoimg*
╠➥ *${#}neko*
╠➥ *${#}pokemon*
╠➥ *${#}inu*
╠➥ *${#}infoGempa*
╠➥ *${#}quotes*
╠➥ *${#}ptl*
╠➥ *${#}dadu*
╠➥ *${#}koin*
╠➥ *${#}quoterandom*
╠➥ *${#}wa.me*
║
╚═〘 ELAINA BOT 〙`
}
exports.othercmd = othercmd
const downloadcmd = (#) => {
    return `
╔══✪〘 DOWNLOADER 〙✪══
║
╠➥ *${#}gdrive [linkGDrive]*
╠➥ *${#}ytmp3 [linkYt]*
╠➥ *${#}ytmp4 [linkYt]*
╠➥ *${#}ig [linkIg]*
╠➥ *${#}fb [linkFb]*
╠➥ *${#}twitter [linkTwitter]*
╠➥ *${#}smule [linkSmule]*
╠➥ *${#}tiktok [linkTiktok]*
╠➥ *${#}starmaker [linkStarmaker]*
╠➥ *${#}xnxx [linkXnxx]*
╠➥ *${#}nhder [kodeNuclear]*
╠➥ *${#}joox [lagu]*
╠➥ *${#}play [lagu]*
╠➥ *${#}music [lagu]*
╠➥ *${#}getmusic [IdDownload]*
╠➥ *${#}video [video]*
╠➥ *${#}getvideo [IdDownload]*
║
╚═〘 ELAINA BOT 〙`
}
exports.downloadcmd = downloadcmd
const groupcmd = (#) => {
    return `
Cenglog`
}
exports.groupcmd = groupcmd
const readme = (#) => {
    return `
            *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${#}tiktokstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${#}igstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${#}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${#}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${#}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${#}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${#}getmusic 1*
Contoh : *Jika tidak reply pesan : ${#}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${#}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${#}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${#}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkXnxx]* Diisi dengan link Xnxx yang valid tanpa tanda “[” dan “]”
Contoh : *${#}xnxx http://www.xnxx.com/loli/stev-gay*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *${#}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${#}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${#}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${#}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${#}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${#}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${#}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${#}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${#}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${#}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${#}googlesearch siapa itu elaina*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${#}cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *${#}tts id Test*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${#}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${#}lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *${#}checkip 182.0.144.145*`
}
exports.readme = readme
const info = () => {
    return `
💝 *INFORMASI* 💝

➵ *BOT USING : OPENWA*
➵ *NAME : Zdbot FARIZA*
➵ *VERSION : 4.0*
➵ *GITHUB : github.com/ZidanGanzz*

💝 *Zdbot FARIZA* 💝
`
}

exports.info = info
const snk = () => {
    return `Syarat dan Ketentuan Bot *Zdbot*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk
const sewa = () => {
    return `
╔══✪〘 IKLAN 〙✪══
║
╠═══════════════════════════
╠➥ *DAFTAR SEWA & BUAT BOT :*
╠➥ *SEWA : 25K/GRUP (BULAN)*
╠➥ *BUAT : 100K (BISA JADI OWNER)*
╠➥ *PEMBAYARAN BISA MELALUI :*
╠➥ *OVO, PAYPAL, DANA, PULSA +5K*
╠═══════════════════════════
╠➥ *KEUNTUNGAN SEWA BOT :*
╠➥ *1. BISA MENJADI ADMIN ELAINA*
╠➥ *2. BISA MENDAPATKAN COMMAND ADMIN*
╠➥ *KEUNTUNGAN BUAT BOT :*
╠➥ *1. BISA MENJADI OWNER BOT SENDIRI*
╠➥ *2. BISA MENGGANTI NAMA BOT SENDIRI*
╠➥ *3. BISA MEMBAWA BOT KE GROUP*
╠➥ *4. BISA MENGGUNAKAN COMMAND OWNER*
╠➥ *5. BISA MENYEWAKAN BOT KEMBALI*
╠═══════════════════════════
╠➥ *JIKA MINAT IKLAN DIATAS*
╠➥ *HARAP HUBUNGI NOMOR DIBAWAH :*
╠➥ *wa.me/625895413910*
║
╚═〘 ELAINA BOT 〙
`
}
exports.sewa = sewa
const sumbang = () => {
    return `
Mau donasi kak? ih kakak baik banget... 
Zdbot jadi sayang :*
Kakak bisa donasi melalui:
➵ Pulsa	:085895413910
➵ Dana	:085895413910

Terimakasih kakak. Donasi dari kakak akan Zdbot gunakan untuk keperluan bot ini
dan untuk membeli Kopi Buat Zidan Tersayang :*
`
}
exports.sumbang = sumbang
const listChannel = () => {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel
const bahasalist = () => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist

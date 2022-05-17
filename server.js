const TelegramBot = require('node-telegram-bot-api')
const express = require("express")
const app = express()
const bot = new TelegramBot ( `5172416163:AAHAzvkw1TwpRNN6c_BLafBhSa1Oo_awxcQ`, {
    polling : true
})      

bot.onText(/\/start/ , msg =>{
    const chatId = msg.chat.id
    bot.sendMessage(chatId , "Tilni tanlang" ,  {
        reply_markup : JSON.stringify({
            keyboard: [
                [
                    {
                        text : 'Uzbek'
                    },
                    {
                        text : "Russian"
                    }
                ]
            ],
            resize_keyboard: true
        })
   
})
   
})
bot.on('message' , msg =>{
    const chatId = msg.chat.id
    if (msg.text === 'Uzbek') {
    bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/photo_2021-10-11_16-23-19.jpg?alt=media&token=b7a8ee1b-265c-4a74-b2b7-90a1335ba113',  {
        reply_markup : JSON.stringify({
            keyboard: [
                [
                    {
                        text : 'Portfolio 🌠'
                    },
                    {
                        text : "Men haqimda ma'lumot 🙋🏻‍♂️"
                    }
                ],
                [
                    {
                        text : "Men bilan bo'g'lanish 📥"
                    },
                ],
            ],
            resize_keyboard: true
        }),
        caption : ` Assalomu aleykum ${msg.chat.first_name} Portfolio botimga Hush kelibsiz !

Bu botda siz men haqimda ma'lumot , Portfoliolar va hozirgi vaqtgacha qilgan ishlarim 🚀
        
Men bilan bog'lanish yoki menga o'zingiz haqingizda ma'lumtlar berishingiz mumkin 🤩
        
Ijtimoy tarmoqlar : ⏬ 
<a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>
         `,
                parse_mode : 'HTML',
    })

    bot.on('message' , msg =>{
        if (msg.text === 'Portfolio 🌠') {
            const chatId = msg.chat.id
            bot.sendPhoto(chatId , 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/Thumbnail.png?alt=media&token=f1690564-a115-4ce7-a033-e3a6b0d4c681', {
                reply_markup: JSON.stringify({
                    keyboard: 
                        [
                            [
                                {
                                    text : "1-Portfolio HorDog 🐶",
                                },
                                {
                                    text : "1-Real project"
                                }
                            ],
                            [
                                {
                                    text : "2-Portfolio Sneakers shop ⛸",
                                },
    
                                {
                                    text : "3-Portfolio CRM 🚀",
                                }
                            ],
                            [
    
                                {
                                    text : "4-Portfolio Instagram  📸",
                                },
                                {
                                    text : "5-Portfolio Malika bozor Desktoop 🏢",
                                },

                            ],
                            [
                                {
                                    text : "6-Portfolio CRM Najot talim  📸",
                                }
                            ],
                            [
                                {
                                    text : "🔙 Orqaga"
                                }
                            ]
                         ],
                         resize_keyboard : true,
    
                }),
                caption : `Portfoliolarimni shu yerda joylab boraman 🚀
    
    Hamma o'zini bot bo'lishni xoxlaydi men ham huddi shunaqa edim orzu qilardim 😊
                
    Maqsad qo'ydim shu o'ylagan niyatlarimga yetim har bir inson maqsadlari uchun kurashish kerak ekan 🤩
                
    Ijtimoy tarmoqlar : ⏬ 
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>
                                     `,
    
                                     parse_mode : 'HTML'
            })
        }
    })
    bot.on('message' , msg =>{
        const chatId = msg.chat.id
    
        if (msg.text == '🔙 Orqaga') {
            bot.sendMessage(chatId, 'Asosiy menyu',  {
                reply_markup : JSON.stringify({
                    keyboard: [
                        [
                            {
                                text : 'Portfolio 🌠'
                            },
                            {
                                text : "Men haqimda ma'lumot 🙋🏻‍♂️"
                            }
                        ],
                        [
                            {
                                text : "Men bilan bo'g'lanish 📥"
                            },
                        ],
                    ],
                    resize_keyboard: true
                }),
            })
        }
        {
            if (msg.text == '1-Real project') {
                bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/real-project.jpg?alt=media&token=2c70565a-ae1b-4c5f-bbf1-050a4b59a667',{
                    caption : `Atambayev Saidbek | 1 Real project
        
        HTML | CSS | JavaScript
                     
      1.Login Api ✅
      2. Giving Infos✅
      3. Api ✅ 
      4. Contection Api ✅
                        
      Live watch : ⏬ 
      <a href="https://toshkent-yoshlari.netlify.app/">Toshkentyoshlarnisevadi.uz</a>
          
      Ijtimoy tarmoqlar : ⏬ 
      <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                            parse_mode : 'HTML',
                })
            }
            if (msg.text == '1-Portfolio HorDog 🐶') {
                bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/hor-dog.jpg?alt=media&token=49efd4d1-486f-4b32-94c2-f2671884fe54',{
                    caption : `Atambayev Saidbek | 1 Portfolio
        
    Shop  HTML | CSS | JavaScript✅
      1. Login ✅
      2.  Responsive ✅
      3. Modal ✅
      4. Api ✅
    
      Live watch ⏬
      https://gracious-hawking-99f8f7.netlify.app
          
      Ijtimoy tarmoqlar : ⏬ 
      <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                            parse_mode : 'HTML',
                })
        }
        if (msg.text == '2-Portfolio Sneakers shop ⛸') {
            bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/sneaker.jpg?alt=media&token=f1ccfc53-b989-4165-9519-594f326425b2',{
                caption : `Atambayev Saidbek | 2 Portifolio
    
    Sneakers shop ⛸
                
    HTML | SCSS | JavaScript ✅
                
    1.Api ✅
    2.Language  UZ | RU | EN ✅
    3. money  SUM | RUBL | DOLLAR ✅
    4.Login ✅
    5. Dark Light✅
     
    Live watch ⏬
    https://snacer.netlify.app/
      
    Ijtimoy tarmoqlar : ⏬ 
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                        parse_mode : 'HTML',
            })
    }
    if (msg.text == '3-Portfolio CRM 🚀') {
        bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/admin-panel.jpg?alt=media&token=12055f8b-b3c0-4f67-a26e-cc7cd17ecf1a',{
            caption : `Atambayev Saidbek | 3  Portifolio 
    
    Admin Panel 🚀 
            
    React Js  | SCSS | Server json  ✅
            
    1.Server json back end✅
    2. Delete edit create Api ✅
    3. Search sort ✅
            
            
    Live watch ⏬        
    https://adminpan.netlify.app/
    
    Ijtimoy tarmoqlar : ⏬ 
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                    parse_mode : 'HTML',
        })
    }
    if (msg.text == '5-Portfolio Malika bozor Desktoop 🏢') {
        bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/bozor.jpg?alt=media&token=c4d7247b-f6b0-4a0a-b53a-29c42b9f1b82',{
            caption : `Atambayev Saidbek | 5-Portfolio
    
    Malika bozor Desktoop ✅ 🏢
            
    Front end
    Reactjs | CSS | Javascript ✅
            
    Back end 
    Nodejs | Framwork expressjs ✅
            
    1.API ✅
    2.Market add , edit , delete ✅
    3.Product add , edit , delete✅
            
    Live watch ⏬
    https://malikabozor.netlify.app/
    
    Ijtimoy tarmoqlar : ⏬ 
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                    parse_mode : 'HTML',
        })
    }
    if (msg.text == '4-Portfolio Instagram  📸') {
        bot.sendMediaGroup(chatId,[  
            {
              type: 'photo',
              media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/ins-1.jpg?alt=media&token=37a32a04-4010-41f8-a73f-f94cdd60a5d1'
            },
            {
                type: 'photo',
                media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/ins-2.jpg?alt=media&token=ef28e256-028f-4a37-892f-9f99698fff5a',
            },
            {
                type: 'photo',
                media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/ins-3.jpg?alt=media&token=fdbeb7d1-fd37-423e-872b-b209e1197371',
            },
            {
                type: 'photo',
                media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/ins-4.jpg?alt=media&token=241ce9ed-960d-49fc-9464-fab022ba7ee5',
            },
            {
              type: 'photo',
              media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/ins-5.jpg?alt=media&token=7d6b231e-7a14-4562-85a8-34df99df7162',
                caption : `Atambayev Saidbek | 4-Portfolio 🚀
    
Instagram  📸
                
Back end
Node js | express.js | ejs ✅
                
1. API ✅
2. RESPONSIVE ✅
3. Image upload  ✅
                
One-tier application  ⏬
https://instagram02.herokuapp.com/
      
Ijtimoy tarmoqlar : ⏬ 
<a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                        parse_mode : 'HTML',
            }] ,

        )
}
if (msg.text == '6-Portfolio CRM Najot talim  📸') {
    bot.sendMessage(chatId , "crm najot talim")
    bot.sendMediaGroup(chatId,[  
        {
          type: 'photo',
          media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-1.png?alt=media&token=b0ee9d6e-abfa-448f-86a0-97a4d51ea752'
        },
        {
            type: 'photo',
            media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-2.png?alt=media&token=e97fce7e-4501-4b6c-aacd-4258b92673f0',
        },
        {
            type: 'photo',
            media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-3.jpg?alt=media&token=e89cd8cf-e306-4f53-840f-6cb22a0e01c3',
        },
        {
            type: 'photo',
            media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-4.jpg?alt=media&token=c4c0133a-8b9f-4a3c-84b3-cfb1f1a02db3',
        },
        {
            type: 'photo',
            media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-5.png?alt=media&token=3112ad18-7c7e-4501-bebf-ea3c0383c381',
        },
        {
            type: 'photo',
            media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-6.jpg?alt=media&token=d963d430-f08d-417d-81c4-b9dbf615eb71',
        },
        {
            type: 'photo',
            media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-7.jpg?alt=media&token=c1e61ae2-67b7-4607-8669-3a0abe66cea5',
        },
        {
            type: 'photo',
            media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-8.png?alt=media&token=379f8728-87d8-44ca-8296-83ab5505fb2a',
        },
        {
          type: 'photo',
          media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-9.png?alt=media&token=9e82d593-f9e5-46d2-b193-e6c04bfb8936',
            caption : `Atambayev Saidbek | 6-Portfolio 

Najot ta'lim CRM 🧾
            
Back end  
Node js | express js  | ejs 👨🏻‍💻
            
Front end 
Html | css | bootstrap 🌠
            
1.API ✅
2.RESPONSIVE ✅
3. Image upload ✅
4. cookies  ✅
            
One-tier application ⏬
https://crm-najot.herokuapp.com/
  
Ijtimoy tarmoqlar : ⏬ 
<a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,

                    parse_mode : 'HTML',
        }] ,

    )

}
        }
    })
    
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
        if (msg.text == "Men haqimda ma'lumot 🙋🏻‍♂️") {
            bot.sendMessage(chatId, "Men haqimda ma'lumot 🙋🏻‍♂️", {
                reply_markup : JSON.stringify({
                    keyboard: [
                        [
                            {
                                text : 'Men haqimda 🙋🏻‍♂️'
                            },
                            {
                                text : "Resume 🧾"
                            }
                        ],
                        [
                            {
                                text : "🔙 Orqaga"
                            },
                        ],
                    ],
                    resize_keyboard: true
                })
            })
    
    }
    
    })
    bot.on("message" , msg =>{
        const chatId = msg.chat.id 
    
        if (msg.text == "Men haqimda 🙋🏻‍♂️") {
            bot.sendPhoto(chatId , 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/photo_2021-11-14_03-25-22.jpg?alt=media&token=2f158903-3dc6-48db-928e-0dba000aba68', {
                caption : `Men Atambayev Saidbek Sirdaryo viloyati Sirdaryo shaharida 01.09.2004 yilda tug'ilgan man 🚀
      
    2010-yildan  2017-yilgacha O'zbek jang sa'nati sport turi bo'yicha shug'ilangaman 7 kara Viloyat chempioni  va 5 kara O'zbekiston chempion bo'lgaman 🥋         
    
    2020-2021 yilda Zamonaviy kasblardan biri bo'lgan Shaxsiy brandni rivojlantirish bo'yicha o'z ishlarimni olib borgaman 📚
    
    2021-2022 yilda Web dasturlash sohasida System Front jamoam bilan o'z real projectlarimni boshlagaman 👨🏻‍💻
    
    Hozirgi vaqtda Najot ta'lim o'quv markazida Full stack yo'nalishda o'qimoqdaman  🦾
    
    Ijtimoy tarmoqlar : ⏬ 
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>
                `,
                parse_mode : 'HTML',
            })
        }   
    })
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
    
        if (msg.text == "Resume 🧾") {
            bot.sendDocument(chatId , "https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/Atambayev_Saidbek_English_resume.pdf?alt=media&token=6048bef4-fff3-4f8e-92ae-0f1d825bc4c1" , {
    
            })
            bot.sendDocument(chatId , "https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/Atambayev_Saidbek_Uzb_resume.pdf?alt=media&token=33921248-069d-4dbc-9555-f640a1b430a5" , {
    
            })
        }
    })
    
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
    
        if (msg.text == "Men bilan bo'g'lanish 📥") {
            bot.sendMessage(chatId, "Men bilan bo'g'lanish 📥", {
                reply_markup : JSON.stringify({
                    keyboard: [
                        [
                            {
                                text : 'Mening Raqamim 📞'
                            },
                            {
                                text : 'Mening Email 📧'              
                            },
                        ],
                        [
                            {
                                text : "telegram orqali bo'glanish 💬 "
                            },
                        ],
                        [
                                {
                                    text : `Telefon raqamingizni qoldiring ☎️`
                                }
                        ],
                        [
                            {
                                text : "🔙 Orqaga"
                            },
                        ],
                    ],
                    resize_keyboard: true
                })
            }) 
        }
    
        
    })
    
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
        if (msg.text == "Mening Raqamim 📞") { 
            bot.sendMessage(chatId , "+998 91 (503) - 93 - 90")
        }
    })
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
        if (msg.text == "Mening Email 📧") { 
            bot.sendMessage(chatId , "atambayevsaid84@gmail.com")
        }
    })
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
        if (msg.text == "telegram orqali bo'glanish 💬") { 
            bot.sendMessage(chatId , "@personal_brand01")
        }
    })
    
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
        if (msg.text == "Telefon raqamingizni qoldiring ☎️") { 
            bot.sendMessage(chatId , "Kontaktingizni jonating" , {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: 'Telefon raqamini ulashish ',
                                request_contact: true
                            }
                        ],
                        [
                            {
                                text : "🔙 Orqaga"
                            },
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }
    })
    }

})

bot.on('message' , msg =>{
    const chatId = msg.chat.id
    if (msg.text === 'Russian') {
    bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/photo_2021-10-11_16-23-19.jpg?alt=media&token=b7a8ee1b-265c-4a74-b2b7-90a1335ba113',  {
        reply_markup : JSON.stringify({
            keyboard: [
                [
                    {
                        text : 'портфолио 🌠'
                    },
                    {
                        text : "Информация обо мне 🙋🏻‍♂️"
                    }
                ],
                [
                    {
                        text : "Свяжитесь со мной 📥"
                    },
                ],
            ],
            resize_keyboard: true
        }),
        caption : ` Привет ${msg.chat.first_name} Добро пожаловать в мое портфолио!

В этом боте вы найдете информацию обо мне, портфолио и о том, что я уже сделал 🚀
                
Вы можете связаться со мной или дать мне информацию о себе 🤩
        
 Социальные сети: ⏬ 
<a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>
         `,
                parse_mode : 'HTML',
    })

    bot.on('message' , msg =>{
        if (msg.text === 'портфолио 🌠') {
            const chatId = msg.chat.id
            bot.sendPhoto(chatId , 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/Thumbnail.png?alt=media&token=f1690564-a115-4ce7-a033-e3a6b0d4c681', {
                reply_markup: JSON.stringify({
                    keyboard: 
                        [
                            [
                                {
                                    text : "1-портфолио HorDog 🐶",
                                },
                                {
                                    text : "1-реальный проект"
                                }
                            ],
                            [
                                {
                                    text : "2-портфолио Sneakers shop ⛸",
                                },
    
                                {
                                    text : "3-портфолио CRM 🚀",
                                }
                            ],
                            [
    
                                {
                                    text : "4-портфолио Instagram  📸",
                                },
                                {
                                    text : "5-портфолио Malika bozor Desktoop 🏢",
                                }
                            ],
                            [
                                {
                                    text : "6-Портфолио CRM Najot talim  📸",
                                }
                            ],
                            [
                                {
                                    text : "🔙 назад"
                                }
                            ]
                         ],
                         resize_keyboard : true,
    
                }),
                caption : `Здесь я буду размещать свои портфолио 🚀
    
Все хотят быть ботами, я бы хотела быть такой же 😊
                            
Моя цель бороться за цели каждого сироты
                            
Социальные сети: ⏬ 
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>
                                     `,
    
                                     parse_mode : 'HTML'
            })
        }
    })
    bot.on('message' , msg =>{
        const chatId = msg.chat.id
    
        if (msg.text == '🔙 назад') {
            bot.sendMessage(chatId, 'Главное меню',  {
                reply_markup : JSON.stringify({
                    keyboard: [
                        [
                            {
                                text : 'портфолио 🌠'
                            },
                            {
                                text : "Информация обо мне 🙋🏻‍♂️"
                            }
                        ],
                        [
                            {
                                text : "Свяжитесь со мной 📥"
                            },
                        ],
                    ],
                    resize_keyboard: true
                }),
            })
        }
        {
            if (msg.text == '1-реальный проект') {
                bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/real-project.jpg?alt=media&token=2c70565a-ae1b-4c5f-bbf1-050a4b59a667',{
                    caption : `Atambayev Saidbek | 1 Real project
        
        HTML | CSS | JavaScript
                     
      1.Login Api ✅
      2. Giving Infos✅
      3. Api ✅ 
      4. Contection Api ✅
                        
      Live watch : ⏬ 
      <a href="https://toshkent-yoshlari.netlify.app/">Toshkentyoshlarnisevadi.uz</a>
          
      Ijtimoy tarmoqlar : ⏬ 
      <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                            parse_mode : 'HTML',
                })
            }
            if (msg.text == '1-портфолио HorDog 🐶') {
                bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/hor-dog.jpg?alt=media&token=49efd4d1-486f-4b32-94c2-f2671884fe54',{
                    caption : `Атамбаев Саидбек | 1-Портфолио
        
    Shop  HTML | CSS | JavaScript✅
      1. Login ✅
      2.  Responsive ✅
      3. Modal ✅
      4. Api ✅
    
      Смотреть в прямом эфире ⏬
      https://gracious-hawking-99f8f7.netlify.app
          

      социальные сети: ⏬ 
      <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                            parse_mode : 'HTML',
                })
        }
        if (msg.text == '2-портфолио Sneakers shop ⛸') {
            bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/sneaker.jpg?alt=media&token=f1ccfc53-b989-4165-9519-594f326425b2',{
                caption : `Atambayev Saidbek | 2 Portifolio
    
    Sneakers shop ⛸
                
    HTML | SCSS | JavaScript ✅
                
    1.Api ✅
    2.Language  UZ | RU | EN ✅
    3. money  SUM | RUBL | DOLLAR ✅
    4.Login ✅
    5. Dark Light✅
     
    Смотреть в прямом эфире ⏬
    https://snacer.netlify.app/
      
    социальные сети: ⏬ 
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                        parse_mode : 'HTML',
            })
    }
    if (msg.text == '3-портфолио CRM 🚀') {
        bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/admin-panel.jpg?alt=media&token=12055f8b-b3c0-4f67-a26e-cc7cd17ecf1a',{
            caption : `Atambayev Saidbek | 3  Portifolio 
    
    Admin Panel 🚀 
            
    React Js  | SCSS | Server json  ✅
            
    1.Server json back end✅
    2. Delete edit create Api ✅
    3. Search sort ✅
            
            
    Смотреть в прямом эфире ⏬   
    https://adminpan.netlify.app/
    
    социальные сети: ⏬  
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                    parse_mode : 'HTML',
        })
    }
    if (msg.text == '5-портфолио Malika bozor Desktoop 🏢') {
        bot.sendPhoto(chatId, 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/bozor.jpg?alt=media&token=c4d7247b-f6b0-4a0a-b53a-29c42b9f1b82',{
            caption : `Atambayev Saidbek | 5-Portfolio
    
    Malika bozor Desktoop ✅ 🏢
            
    Front end
    Reactjs | CSS | Javascript ✅
            
    Back end 
    Nodejs | Framwork expressjs ✅
            
    1.API ✅
    2.Market add , edit , delete ✅
    3.Product add , edit , delete✅
            
    Смотреть в прямом эфире ⏬ 
    https://malikabozor.netlify.app/
    
    социальные сети: ⏬ 
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                    parse_mode : 'HTML',
        })
    }
        if (msg.text == '4-портфолио Instagram  📸') {
            bot.sendMediaGroup(chatId,[  
                {
                  type: 'photo',
                  media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/ins-1.jpg?alt=media&token=37a32a04-4010-41f8-a73f-f94cdd60a5d1'
                },
                {
                    type: 'photo',
                    media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/ins-3.jpg?alt=media&token=fdbeb7d1-fd37-423e-872b-b209e1197371',
                },
                {
                    type: 'photo',
                    media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/ins-3.jpg?alt=media&token=fdbeb7d1-fd37-423e-872b-b209e1197371',
                },
                {
                    type: 'photo',
                    media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/ins-4.jpg?alt=media&token=241ce9ed-960d-49fc-9464-fab022ba7ee5',
                },
                {
                  type: 'photo',
                  media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/ins-5.jpg?alt=media&token=7d6b231e-7a14-4562-85a8-34df99df7162',
                    caption : `Atambayev Saidbek | 4-Portfolio 🚀
        
    Instagram  📸
                    
    Back end
    Node js | express.js | ejs ✅
                    
    1. API ✅
    2. RESPONSIVE ✅
    3. Image upload  ✅
                    
    Смотреть в прямом эфире ⏬ 
    https://instagram02.herokuapp.com/
          
    социальные сети: ⏬ 
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
                            parse_mode : 'HTML',
                }] ,
    
            )
    }
    if (msg.text == '6-Портфолио CRM Najot talim  📸') {
        // bot.sendMessage(chatId , "crm najot talim")
        bot.sendMediaGroup(chatId,[  
            {
              type: 'photo',
              media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-1.png?alt=media&token=b0ee9d6e-abfa-448f-86a0-97a4d51ea752'
            },
            {
                type: 'photo',
                media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-2.png?alt=media&token=e97fce7e-4501-4b6c-aacd-4258b92673f0',
            },
            {
                type: 'photo',
                media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-3.jpg?alt=media&token=e89cd8cf-e306-4f53-840f-6cb22a0e01c3',
            },
            {
                type: 'photo',
                media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-4.jpg?alt=media&token=c4c0133a-8b9f-4a3c-84b3-cfb1f1a02db3',
            },
            {
                type: 'photo',
                media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-5.png?alt=media&token=3112ad18-7c7e-4501-bebf-ea3c0383c381',
            },
            {
                type: 'photo',
                media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-6.jpg?alt=media&token=d963d430-f08d-417d-81c4-b9dbf615eb71',
            },
            {
                type: 'photo',
                media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-7.jpg?alt=media&token=c1e61ae2-67b7-4607-8669-3a0abe66cea5',
            },
            {
                type: 'photo',
                media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-8.png?alt=media&token=379f8728-87d8-44ca-8296-83ab5505fb2a',
            },
            {
              type: 'photo',
              media: 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/crm-9.png?alt=media&token=9e82d593-f9e5-46d2-b193-e6c04bfb8936',
                caption : `Atambayev Saidbek | 6-Портфолио 
    
    Najot ta'lim CRM 🧾
                
    Back end  
    Node js | express js  | ejs 👨🏻‍💻
                
    Front end 
    Html | css | bootstrap 🌠
                
    1.API ✅
    2.RESPONSIVE ✅
    3. Image upload ✅
    4. cookies  ✅
                
    One-tier application ⏬
    https://crm-najot.herokuapp.com/
      
    Ijtimoy tarmoqlar : ⏬ 
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>`,
    
                        parse_mode : 'HTML',
            }] ,
    
        )
    
    }
        }
    })
    
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
        if (msg.text == "Информация обо мне 🙋🏻‍♂️") {
            bot.sendMessage(chatId, "Информация обо мне 🙋🏻‍♂️", {
                reply_markup : JSON.stringify({
                    keyboard: [
                        [
                            {
                                text : 'обо мне 🙋🏻‍♂️'
                            },
                            {
                                text : "Резуме 🧾"
                            }
                        ],
                        [
                            {
                                text : "🔙 назад"
                            },
                        ],
                    ],
                    resize_keyboard: true
                })
            })
    
    }
    
    })
    bot.on("message" , msg =>{
        const chatId = msg.chat.id 
    
        if (msg.text == "обо мне 🙋🏻‍♂️") {
            bot.sendPhoto(chatId , 'https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/photo_2021-11-14_03-25-22.jpg?alt=media&token=2f158903-3dc6-48db-928e-0dba000aba68', {
                caption : `Я Атамбаев Саидбек, родился 1 сентября 2004 года в городе Сырдарья Сырдарьинской области.
      
С 2010 по 2017 год занимался узбекскими единоборствами, стал 7-кратным чемпионом области и 5-кратным чемпионом Узбекистана 🥋
               
В 2020-2021 годах вел собственную работу по развитию Личного Бренда, одной из Современных Профессий 📚
               
В 2021-2022 году я начну свои реальные проекты в области веб-программирования с командой System Front 👨🏻‍💻
               
В настоящее время я изучаю Full Stack в Образовательном учебном центре Спасения 🦾
               
    Социальные сети: ⏬
    <a href="https://t.me/The_Atambaev">Telegram</a> | <a href="https://instagram.com/said_bek20?utm_medium=copy_link">Instagram</a> | <a href="https://github.com/Uzwebprogram">GitHub</a>
                `,
                parse_mode : 'HTML',
            })
        }   
    })
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
    
        if (msg.text == "Резуме 🧾") {
            bot.sendDocument(chatId ,"https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/Atambayev_Saidbek_English_resume.pdf?alt=media&token=6048bef4-fff3-4f8e-92ae-0f1d825bc4c1" , {
    
            })
            bot.sendDocument(chatId , "https://firebasestorage.googleapis.com/v0/b/telegrambot-2ae36.appspot.com/o/Atambayev_Saidbek_Uzb_resume.pdf?alt=media&token=33921248-069d-4dbc-9555-f640a1b430a5" , {
    
            })
        }
    })
    
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
    
        if (msg.text == "Свяжитесь со мной 📥") {
            bot.sendMessage(chatId, "Свяжитесь со мной 📥", {
                reply_markup : JSON.stringify({
                    keyboard: [
                        [
                            {
                                text : 'Мой номер 📞'
                            },
                            {
                                text : 'Моя электронная почта 📧'              
                            },
                        ],
                        [
                            {
                                text : "общение в телеграмм 💬"
                            },
                        ],
                        [
                                {
                                    text : `Оставьте свой номер телефона ☎️`
                                }
                        ],
                        [
                            {
                                text : "🔙 назад"
                            },
                        ],
                    ],
                    resize_keyboard: true
                })
            }) 
        }
    
        
    })
    
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
        if (msg.text == "Мой номер 📞") { 
            bot.sendMessage(chatId , "+998 91 (503) - 93 - 90")
        }
    })
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
        if (msg.text == "Моя электронная почта 📧") { 
            bot.sendMessage(chatId , "atambayevsaid84@gmail.com")
        }
    })
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
        if (msg.text == "общение в телеграмм 💬") { 
            bot.sendMessage(chatId , "@personal_brand01")
        }
    })
    
    bot.on("message" , msg =>{
        const chatId = msg.chat.id
        if (msg.text == "Оставьте свой номер телефона ☎️") { 
            bot.sendMessage(chatId , "Отправьте свой контакт" , {
                reply_markup: JSON.stringify({
                    keyboard: [
                        [
                            {
                                text: 'Совместное использование номера телефона ',
                                request_contact: true
                            }
                        ],
                        [
                            {
                                text : "🔙 назад"
                            },
                        ]
                    ],
                    resize_keyboard: true
                })
            })
        }
    })
    }

})

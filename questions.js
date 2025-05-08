var questions = [
    ["May job posting ba sa Facebook, WhatsApp, o random website na hindi naman kilala bilang job hiring platform?",
     "Humihingi ba ng mga 'processing' o 'training' fee ang employer?",
     "Malinaw ba ang job description sa ina-applyan mo na trabaho?",
    "Nagpapakilala ba ang employer at may maayos ba silang contact details?",
    "Ipinaliwanag ba nila ang magiging sahod mo?",
    "Meron ba silang opisyal na hiring center o online verified na video conferencing app?",
    "Sinasabing urgent at dapat kang mag-decide agad para makuha ang trabaho?",
    "May pinapapirmahan ba silang kontrata bago ka magsimula?",
    "Maraming positive ba na sinasabi ang mga tao sa kumpanyang ina-applyan mo?",
    "Sa official website o verified job portal mo ba nalaman ang job posting?"],
    ["May lumabas bang pop-up ad na nagsasabing “Congratulations! Ikaw ang nanalo”?",
    "Ang link ba ng website may kakaibang spelling, katulad ng 'fácebook.com' o 'amaz0n.net'?",
    "Nagpa-pop up ba ang babala na may virus ang device mo at kailangan mong i-click para maayos?",
    "Hiniling ba ng website ang personal information mo kahit hindi naman kailangan? (e.g., full name, address, credit card details)?",
    "Kapag nag-click ka sa isang link, napunta ka ba sa ibang website na hindi mo inaasahan?",
    "Ang itsura ba ng website puno ng mga pop-ups, flashy banners, ads at may mga typos at maling grammar?",
    "Kung sinusubukan mo na umalis sa website, may nagpapakita bang pop-up na pinipilit kang ibalik sa website?",
    "Nag-aalok ba ang website ng sobrang magandang deal (Katulad ng 90% discount sa bagong Iphone)?",
    "Sinabi ba ng website na nanalo ka ng premyo pero kailangan mong magbayad ng 'shipping fee' o maglagay ng credit card info?",
    "Positibo ba ang sinasabi ng mga tao tungkol sa website na ito?"
    ],
    ["Humihingi ba ng OTP o verification code ang tumawag/text sa'yo?", 
     "May pinapadalang link sa text o email at sinasabing kailangan mong i-click ito para ayusin ang account mo?",
     "Sinabi ba ng tumawag na may problema sa bank account mo, pero hindi mo naman sila kinontak",
     "Nakareceive ka ng text tungkol sa promo ng iyong telecom provider. Totoo ba ito kung galing sa official sender name (hal. GLOBE, SMART, DITO)?",
     "May tumawag na nagpapakilalang kamag-anak mo at nanghihingi ng pera. Totoo ba ito kung hindi niya masabi ang pangalan niya at hinihiling niyang hulaan mo?",
     "Sinabi ba ng tumawag na makakasuhan ka o makukulong kung hindi ka agad magbayad?",
     "May nag-text na nagsasabing nanalo ka sa isang contest na hindi mo naman nasalihan. Totoo ba ito?",
     "May natanggap kang email na mukhang galing sa bangko mo, pero ang email address ay may random na characters (hal. support@bank123xyz.com). Legit ba ito?",
     "May tumawag na taga-\"customer support\" at sinabing i-install mo ang isang app para matulungan ka sa account mo. Safe ba itong gawin?",
     "Nakareceive ka ng text na may \"wrong send\" na pera sa e-wallet mo at pinapabalik agad. Ano ang mas ligtas na gawin?"
    ]
]

var choice_weights = [
  [[0, // Oo
    5  // Hindi
  ],[
      5, // Oo
      0  // Hindi
  ],[
      0, // Oo
      5  // Hindi
  ],[
      0, // Oo
      5  // Hindi
  ],[
      0, // Oo
      5  // Hindi
  ],[
      0, // Oo
      5  // Hindi
  ],[
      5, // Oo
      0  // Hindi
  ],[
      0, // Oo
      5  // Hindi
  ],[
      0, // Oo
      5  // Hindi
  ],[
      0, // Oo
      5  // Hindi
  ]],
   [[5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        0, // Oo
        5  // Hindi
    ]],
    [[5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        0, // Oo
        5  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        0, // Oo
        5  // Hindi
    ]],
      [[5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        0, // Oo
        5  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        5, // Oo
        0  // Hindi
    ],[
        0, // Oo
        5  // Hindi
    ]]
]

var rating_comments = [
    ["Mukhang Safe, Pero Mag-ingat Pa Rin. Huwag basta-basta magbigay ng impormasyon.",
     "Mukhang Safe, Pero Mag-ingat Pa Rin. Huwag basta-basta magbigay ng impormasyon.",
     "Duda Pero Puwedeng Legit. Hanapin pa ang company background bago mag-apply. ",
     "Mataas ang Panganib! Mag-research pa bago magtiwala. ",
     "SCAM Alert! Huwag mag-apply, i-block ang recruiter, at i-report ang job post. "
    ],
    ["Mukhang Safe, Pero Mag-ingat Pa Rin. Huwag basta-basta magbigay ng impormasyon.",
     "Mukhang Safe, Pero Mag-ingat Pa Rin. Huwag basta-basta magbigay ng impormasyon.",
     "May Dapat Pang I-check. Maghanap pa ng ibang proof bago magtiwala.",
     "Mataas ang Panganib! Mag-ingat at huwag mag-click ng kahit anong kahina-hinalang link. ",
     "SCAM Alert! Huwag maglagay ng kahit anong impormasyon at umalis agad sa website."
    ],
    ["Mukhang Safe, Pero Mag-inat Pa Rin. Huwag basta-basta magbigay ng impormasyon.",
     "Mukhang Safe, Pero Mag-inat Pa Rin. Huwag basta-basta magbigay ng impormasyon.",
     "May Dapat Pang I-check. Baka ito ay isang call/SMS scam",
     "Mataas ang Panganib! Mag-ingat at huwag magbigay ng personal na impormasyon",
     "SCAM Alert! Huwag magbigay ng anumang impormasyon"
    ],
    ["It is definitely not a deepfake",
     "It might probably be a deepfake",
     "Take caution, it might be a deepfake",
     "Most probably a deepfake",
     "It is definitely a deepfake"
    ]
]

var rating_descriptions = [
    ["",
    "",
    "",
    "",
    ""
   ],
   ["",
   "",
   "",
   "",
   ""
   ],
   ["",
   "",
   "",
   "",
   ""
   ],
   ["",
    "",
    "",
    "",
    ""
   ],
]
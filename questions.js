var questions = [
    [],
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
    [],
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
    ["It is definitely not a deepfake",
     "It might probably be a deepfake",
     "Take caution, it might be a deepfake",
     "Most probably a deepfake",
     "It is definitely a deepfake"
    ],
    ["It is definitely not a call/SMS scam",
     "It might probably be a call/SMS scam",
     "Take caution, it might be a call/SMS scam",
     "Most probably a call/SMS scam",
     "It is definitely a call/SMS scam"
    ]
]

var rating_descriptions = [
    ["This appears to be authentic, with no clear signs of manipulation. However, verifying the source is always a good practice before sharing information.",
     "It seems genuine, but minor alterations can be difficult to detect. Cross-referencing with original sources can help confirm its authenticity.",
     "Exercise caution—certain elements, such as slight distortions or unnatural movements, suggest possible manipulation. Verifying through multiple reliable sources is recommended.",
     "This is likely a deepfake, as there are noticeable inconsistencies in facial expressions, voice patterns, or lighting. It is advisable to fact-check before drawing conclusions.",
     "This is almost certainly a deepfake, showing clear signs of AI-generated manipulation. Rely on credible sources to verify its legitimacy before accepting it as real."
    ],
    ["This appears to be a legitimate call or message with no signs of fraud. The sender or caller is recognizable, and the content aligns with previous legitimate communications. However, verifying the source is always a good practice before responding.",
     "This seems genuine, but some aspects could be worth verifying. If the message requests personal information or urgent action, confirm its legitimacy through official channels. When in doubt, contact the organization directly using a trusted number.",
     "Exercise caution—certain elements suggest this could be a scam. Look for red flags such as unknown senders, unexpected requests, or unusual urgency. Avoid clicking links or sharing personal details until verification is complete.",
     "This is likely a scam, as there are multiple warning signs. Legitimate organizations typically do not ask for sensitive information through calls or SMS. It is best to ignore the message and report it if necessary.",
     "This is almost certainly a scam, as it exhibits clear fraudulent characteristics, such as impersonating a bank, government agency, or trusted company. Do not respond, click any links, or provide any information. Block the number and report the scam to the appropriate authorities."
    ]
]
export interface Presenter {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks?: {
    youtube?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    website?: string;
  };
  showIds?: string[]; // References to shows the presenters host
}

export const presenters: Presenter[] = [
  {
    id: 'miriam-angil',
    name: 'Miriam Angil',
    role: 'Morning Host',
    image: '/images/presenters/miriam.jpeg',
    bio: "Miriam Angil is the host of our flagship morning show, 'The Breakfast Club'. With her infectious energy and engaging personality, \
      Miriam has become a beloved voice in the community. She brings a wealth of experience to the airwaves, having worked in radio for over \
      a decade. Miriam is passionate about social justice and community empowerment, and she uses her platform to raise awareness of important \
      issues. In her free time, she enjoys hiking, reading, and spending time with her family.",
    socialLinks: {
      twitter: 'https://twitter.com/alexrivera',
      instagram: 'https://instagram.com/alexrivera',
    },
    showIds: ['the-breakfast-club'],
  },
  {
    id: 'salim-barissa',
    name: 'Salim Barissa',
    role: 'Morning Host, Sports Analyst',
    image: '/images/presenters/salim.jpeg',
    bio: "Salim Barissa is the co-host of 'The Breakfast Club' and the host of 'Kick Off', our daily sports show. Salim is a former professional \
      footballer who played for the national team for over a decade. He brings his unique insights and analysis to the world of sports, covering \
      everything from local matches to international tournaments. Salim is known for his quick wit and sharp commentary, and he has a loyal \
      following of sports fans who tune in daily to hear his take on the latest games and controversies.",
    showIds: ['the-breakfast-club', 'kick-off'],
  },
  {
    id: 'emmanuel-gona',
    name: 'Emmanuel Gona',
    role: 'Morning Host',
    image: '/images/presenters/emmanuel.jpeg',
    bio: "Emmanuel Gona is the host of 'The Breakfast Club', our flagship morning show. With his warm and engaging personality, Emmanuel has \
      become a familiar voice in households across the country. He has a background in journalism and a passion for storytelling, and he uses \
      his platform to highlight the stories and experiences of people from all walks of life. Emmanuel is a dedicated advocate for social \
      change and community development, and he is committed to using his voice for good.",
    showIds: ['the-breakfast-club'],
  },
  {
    id: 'japheth-makanaki',
    name: 'Japheth Makanaki',
    role: 'Sports Analyst and Host',
    image: '/images/presenters/japheth.jpeg',
    bio: "Japheth Makanaki is the host of 'Kick Off', our daily sports show. Japheth is a former professional \
        footballer who played for the national team for over a decade. He brings his unique insights and analysis to the world of sports, covering \
        everything from local matches to international tournaments. Japheth is known for his quick wit and sharp commentary, and he has a loyal \
        following of sports fans who tune in daily to hear his take on the latest games and controversies.",
    showIds: ['kick-off'],
  },
  {
    id: 'dorcas-uwiyera',
    name: 'Dorcas Uwiyera',
    role: 'Talk Show Host',
    image: '/images/presenters/dorcas.jpeg',
    bio: `Dorcas is the kind of soul who brings a little sparkle whenever she goes, full of emotion, honesty and a quiet kind of confidence. If her life were a show, Euphoria would fit just right, deep, expressive and unapologetically real. She sways to smooth rhythm of Versace on the Floor by Bruno Mars, a song that speaks to her love for soft, slow moments. And while she once rocked Akala shoes with pride, she now smiles at the memory like a throwback she's grown from. Her favorite emoji is the teary-eyed emotional face because she feels deeply and wears her heart where people can see it. Interestingly, she agrees with how people describe her, something not many can say. She knows herself and she owns it. She doesn't chase celebrity crushes, she's fully in love with her boyfriend and that's enough for her. Her gloss is always close by, and chicken salad is her go to comfort meal, light, tasty and just right for any mood. If you know Dorcas, you've heard her say, "Chemsha chai udaku ibambe!", a cheeky, fun phrase that matches her playful side. Beyond the laughs, she has a softer creative layer too, she paints, quietly letting her thoughts come to life. Dorcas always chooses herself knowing her worth. The most frustrating part of her job is the internet. It slows her down, causes delays and sometimes tests her patience more than anything else. Live moments come with their own surprises too. Once she mispronounced words like "temporary" and "particular" while on air. Instead of being embarrassed, she laughed it off and kept it moving because that's who Dorcas is, grounded, graceful and never afraid to show a little humanity.`,
    showIds: ['swahilipot-cafe'],
  },
  {
    id: 'mama-zakia',
    name: 'Mama Zakia (Zully)',
    role: 'The Night Shift',
    image: '/images/presenters/zakia.jpeg',
    bio: 'Mama Zakia hosts The Night Shift.',
    showIds: ['the-night-shift'],
  },
  {
    id: 'dj-kams',
    name: 'DJ Kams',
    role: 'Show DJ',
    image: '/images/presenters/kams.jpeg',
    bio: 'Dj Kams is the co-host and DJ for the Swahilipot Cafe show. With his infectious energy and engaging personality, \
      Dj Kams has become a beloved voice in the community. He brings a wealth of experience to the airwaves, having worked in radio for over \
      a decade. Dj Kams is passionate about social justice and community empowerment, and he uses his platform to raise awareness of important \
      issues. In his free time, he enjoys hiking, reading, and spending time with his family.',
    socialLinks: {
      youtube: 'https://www.youtube.com/@vdjkams',
    },
    showIds: ['swahilipot-cafe'],
  },
  {
    id: 'munga-sauti-teule',
    name: 'Munga Sauti Teule',
    role: 'Drive Show Host',
    image: '/images/presenters/munga.jpeg',
    bio: 'Munga Sauti Teule hosts the Swahilipot Drive Show and Swahilipot Aroma show.',
    showIds: ['swahilipot-drive-show', 'swahilipot-aroma'],
  },
  {
    id: 'cardiac-poet',
    name: 'Cardiac Poet',
    role: 'Mikuki ya Maneno',
    image: '/images/presenters/cardiac.jpeg',
    bio: `Cardiac Poet hosts the Mikuki ya Maneno Show. Oliver Mwakio lives up to the title 'A Working Man'. Not just as a tagline, but as a reflection of his everyday grind in the media world. A vibrant radio personality with a magnetic vibe, he brings energy and authenticity to every show, easily recognized by his signature on air phrase, 'oooouuuyah!' Though always in the spotlight, Oliver carries a few surprises beneath his cool exterior. He secretly enjoys vibing to 'Songa', and while he now cringes at ever rocking a mohawk, it's all part of the journey that shaped his unique style. His love for self-expression is clear, often highlighted by his favorite emojis: red hearts and sparkly stars, used generously in his texts and social media. Misunderstood by some as 'unapproachable', Oliver insists otherwise. In truth, he's down to earth, engaging and always ready to connect. His celebrity crush? The ever talented Jovial, whose charm and artistry he deeply admires. And whether he's heading to work or chilling off duty, he never leaves his chain behind, it's his go-to essential. When it comes to food, Oliver is a true Kenyan at heart. His dream meal, one he could happily live on forever is a hearty plate of ugali, nyama choma and kachumabri. And don't be fooled by his on air persona because this guy has hidden talents too, from shaking his ears to effortlessly devouring large amounts of food, things most people wouldn't guess about him. If given the chance to switch lives for a day, he'd pick Bahati, stepping into the shoes of a fellow entertainer and public figure. But despite the glamour that comes with the job, Oliver is quick to admit that showing up everyday, motivated and ready, is the real challenge many don't see behind the scenes. Of course, live radio isn't without it's hiccups. One unforgettable moment was during the launch of a new application. Still getting the hang of it, Oliver hit a technical bump on air but thanks to his producer who was just a call away, he smoothly bounced back. Driven, grounded and full of personality, Oliver Mwakio is more than just a voice on the mic, he's a storyteller, an entertainer and a true working man.`,
    showIds: ['mikuki-ya-maneno'],
  },
  {
    id: 'malenga001',
    name: 'Malenga 001',
    role: 'Mikuki ya Maneno',
    image: '/images/presenters/malenga.jpeg',
    bio: `Malenga 001 hosts the Mikuki ya Maneno Show. Rajab Salim also known as Malenga 001, sees himself as The Designated Saviour, a grounded soul who blends wisdom, creativity and unexpected humor. While he doesn't indulge in typical guilty pleasures, his favorite pastime is as simple as it gets, just laying on his bed letting the world pause for a moment. Once a fan of magnetic rings, he now looks back at that trend with a grin. His favorite emoji is the 'thank you', a true reflection of his humility. Often seen as too serious, Malenga sees it differently, he's just intentional and deeply thoughtful. As a kid, he had a celebrity crush on Sanaipei, but these days he's all about real connections. His watch never leaves his side and his favorite meal is any plate with rice and 'something'. When he's not working you'll find him cooking, but nothing beats the mood shift brought by his two childhood friends, they can flip his day around in seconds. If given a day to trade lives, he'd step into the shoes of Mombasa Governor Abdulswamad Shariff, a nod to his love for leadership and service. However, his biggest challenge in community work is the heartbreak of helping people who often forget the effort just as quickly. On air he's had his fair share of spicy moments like the time both his ex and current girlfriend texted him during a live show asking for a mention. He did mention them, just not the way they hoped. Malenga 001 is real, kind and always keeps it honest. That's what makes him stand out.`,
    showIds: ['mikuki-ya-maneno'],
  },
  {
    id: 'cj-bawazir',
    name: 'CJ Bawazir',
    role: 'Drive Show Host',
    image: '/images/presenters/cj.jpeg',
    bio: 'CJ Bawazir hosts the Swahilipot Drive show.',
    showIds: ['swahilipot-drive-show'],
  },
  {
    id: 'tonny-omuga',
    name: 'Tonny Omuga',
    role: 'The Night Shift',
    image: '/images/presenters/tonny.jpeg',
    bio: 'Tonny Omuga hosts The Night Shift.',
    showIds: ['the-night-shift'],
  },
  {
    id: 'dida-doshi',
    name: 'Dida Doshi',
    role: 'Presenter',
    image: '/images/presenters/dida.jpeg',
    bio: "Dida Doshi, known to many in Kenya as simply 'Dida,' is a bold, expressive soul with a talent for both personality and presence. If her life were a film, it would be something between Ginny and Georgia and Wednesday. Her taste in music is just as bold, with Kissing Strangers secretly topping her guilty pleasures playlist. Though she doesn't dwell much on past fashion trends, Dida keeps things effortless and authentic. The laughing emoji is her go-to reaction, reflecting her vibrant and often humorous view of the world. Some people have called her 'mean,' a label she firmly disagrees with. When it comes to love and admiration, Dida keeps it real—she proudly calls Lewis Hamilton her celebrity crush. Her notebook is the one thing you'll always find in her bag, filled with ideas and thoughts. A reflection of her past is her love for drawing and art, something she used to enjoy but kept mostly to herself. If she could live another life for a day, she'd want to walk in the shoes of someone who's famous, stylish, self-aware, loaded with confidence (and a good shoe game), and someone who knows how to enjoy life's pleasures—especially good food. On air, Dida's signature is her name: 'Dida Doshi, Double D, D-Square.' It's more than a catchphrase—it's a vibe. Behind her vibrant energy is a quiet hustle. She still laughs at the time she unknowingly did a full three-hour radio show live—a moment that taught her a lot. In every way, Dida is unapologetically herself—full of laughter, depth, and undeniable fire.",
    showIds: ['swahilipot-drive-show'],
  },
  {
    id: 'eugene',
    name: 'Eugene',
    role: 'Head of Production',
    image: '/images/presenters/eugene.jpeg',
    bio: 'Eugene is a professional producer at the SwahilipotFm.',
  },
  {
    id: 'dj-spinking',
    name: 'DJ Spinking',
    role: 'Show DJ',
    image: '/images/presenters/dj-spinking.jpeg',
    bio: `DJ Spinking is the co-host and DJ for the Swahilipot Drive show. George Ndegwa Lukuni lives with a spark that feels almost magical no wonder Harry Potter would be the story that mirrors his life. He's got a bright soul and finds peace in songs like "Breathless" by Shawn Mendes, letting music speak when words fall short. He has no fashion regrets, he's always kept it cool and true to himself. His go to emoji is the laughing face because he's all about joy, light vibes and not taking life too seriously. Some call him soft but George knows that softness is strength. Back in the day, he had a crush on Rihanna, his laptop is always with him, ready and always working. When it comes to food, he's loyal to Ugali and kata shingo, a meal that hits everytime. His vibe on air is all about pure, natural energy nothing forced, nothing fake. He's got dance moves too, something not everyone knows about, and he doesn't hesitate to show off a little rhythm when the moment is right. If he could trade lives for a day, it would be with Alikiba, stylish, talented and always in control. But behind the mic, the hardest part of his job is networking. It takes effort, patience and a whole lot of social energy people rarely see. He's had a few unexpected moments on air too, like the time a background song played over his music set causing a distracting mashup. But like a pro, he adjusted and kept the flow going. George is the definition of steady energy, grounded, talented and real.`,
    socialLinks: {
      youtube: 'https://www.youtube.com/@Djspinking',
    },
    showIds: ['swahilipot-drive-show'],
  },
 
];

export const getPresenterById = (id: string): Presenter | undefined => {
  return presenters.find((presenter) => presenter.id === id);
};

export const getPresentersByShowId = (showId: string): Presenter[] => {
  return presenters.filter((presenter) => presenter.showIds?.includes(showId));
};

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
    image: '/miriam.jpeg',
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
    image: 'https://placehold.co/400',
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
    image: 'https://placehold.co/400',
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
    image: 'https://placehold.co/400',
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
    image: 'https://placehold.co/400',
    bio: 'Dorcas Uwiyera hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. \
      With a background in journalism and psychology, Dorcas has a unique ability to connect with guests from all walks of life and draw out fascinating \
      stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside \
      the studio, Dorcas is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.',
    showIds: ['swahilipot-cafe'],
  },
  {
    id: 'dj-kams',
    name: 'DJ Kams',
    role: 'Show DJ',
    image: 'https://placehold.co/400',
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
    image: 'https://placehold.co/400',
    bio: 'Munga Sauti Teule hosts the Swahilipot Drive Show and Swahilipot Aroma show.',
    showIds: ['swahilipot-drive-show', 'swahilipot-aroma'],
  },
  {
    id: 'cardiac-poet',
    name: 'Cardiac Poet',
    role: 'Mikuki ya Maneno',
    image: 'cardiac.jpeg',
    bio: 'Cardiac Poet hosts the Mikuki ya Maneno Show.',
    showIds: ['mikuki-ya-maneno'],
  },
  {
    id: 'malenga001',
    name: 'Malenga 001',
    role: 'Mikuki ya Maneno',
    image: 'malenga.JPG',
    bio: 'Malenga 001 hosts the Mikuki ya Maneno Show.',
    showIds: ['mikuki-ya-maneno'],
  },
  {
    id: 'cj-bawazir',
    name: 'CJ Bawazir',
    role: 'Drive Show Host',
    image: 'https://placehold.co/400',
    bio: 'CJ Bawazir hosts the Swahilipot Drive show.',
    showIds: ['swahilipot-drive-show'],
  },
  {
    id: 'dida-doshi',
    name: 'Dida Doshi',
    role: 'Presenter',
    image: 'https://placehold.co/400',
bio: 'Dida Doshi, known to many in Kenya as simply "Dida," is a bold, expressive soul with a talent for both personality and presence. If her life were a film, it would be something between Ginny and Georgia and Wednesday. Her taste in music is just as bold, with Kissing Strangers secretly topping her guilty pleasures playlist. Though she doesn\'t dwell much on past fashion trends, Dida keeps things effortless and authentic. The laughing emoji is her go-to reaction, reflecting her vibrant and often humorous view of the world. Some people have called her "mean," a label she firmly disagrees with. When it comes to love and admiration, Dida keeps it real—she proudly calls Lewis Hamilton her celebrity crush. Her notebook is the one thing you’ll always find in her bag, filled with ideas and thoughts. A reflection of her past is her love for drawing and art, something she used to enjoy but kept mostly to herself. If she could live another life for a day, she’d want to walk in the shoes of someone who’s famous, stylish, self-aware, loaded with confidence (and a good shoe game), and someone who knows how to enjoy life’s pleasures—especially good food. On air, Dida\'s signature is her name: “Dida Doshi, Double D, D-Square.” It’s more than a catchphrase—it’s a vibe. Behind her vibrant energy is a quiet hustle. She still laughs at the time she unknowingly did a full three-hour radio show live—a moment that taught her a lot. In every way, Dida is unapologetically herself—full of laughter, depth, and undeniable fire.',
    showIds: ['swahilipot-drive-show'],
  },
  {
    id: 'eugene',
    name: 'Eugene',
    role: 'Head of Production',
    image: 'eugene.jpeg',
    bio: 'Eugene is a professional producer at the SwahilipotFm.',
  },
  {
    id: 'dj-spinking',
    name: 'DJ Spinking',
    role: 'Show DJ',
    image: 'https://placehold.co/400',
    bio: 'DJ Spinking is the co-host and DJ for the Swahilipot Drive show.',
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

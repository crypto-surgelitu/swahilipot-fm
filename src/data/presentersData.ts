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
      id: "miriam-angil",
      name: "Miriam Angil",
      role: "Morning Host",
      image: "https://placehold.co/400",
      bio: "Miriam Angil is the host of our flagship morning show, 'The Breakfast Club'. With her infectious energy and engaging personality, \
        Miriam has become a beloved voice in the community. She brings a wealth of experience to the airwaves, having worked in radio for over \
        a decade. Miriam is passionate about social justice and community empowerment, and she uses her platform to raise awareness of important \
        issues. In her free time, she enjoys hiking, reading, and spending time with her family.",
      socialLinks: {
        twitter: "https://twitter.com/alexrivera",
        instagram: "https://instagram.com/alexrivera",
      },
      showIds: ["the-breakfast-club"]
    },
    {
      id: "salim-barissa",
      name: "Salim Barissa",
      role: "Morning Host, Sports Analyst",
      image: "https://placehold.co/400",
      bio: "Salim Barissa is the co-host of 'The Breakfast Club' and the host of 'Kick Off', our daily sports show. Salim is a former professional \
        footballer who played for the national team for over a decade. He brings his unique insights and analysis to the world of sports, covering \
        everything from local matches to international tournaments. Salim is known for his quick wit and sharp commentary, and he has a loyal \
        following of sports fans who tune in daily to hear his take on the latest games and controversies.",
      showIds: ["the-breakfast-club", "kick-off"]
    },
    {
      id: "emmanuel-gona",
      name: "Emmanuel Gona",
      role: "Morning Host",
      image: "https://placehold.co/400",
      bio: "Emmanuel Gona is the host of 'The Breakfast Club', our flagship morning show. With his warm and engaging personality, Emmanuel has \
        become a familiar voice in households across the country. He has a background in journalism and a passion for storytelling, and he uses \
        his platform to highlight the stories and experiences of people from all walks of life. Emmanuel is a dedicated advocate for social \
        change and community development, and he is committed to using his voice for good.",
      showIds: ["the-breakfast-club"]
    },
      {
        id: "japheth-makanaki",
        name: "Japheth Makanaki",
        role: "Sports Analyst and Host",
        image: "https://placehold.co/400",
        bio: "Japheth Makanaki is the host of 'Kick Off', our daily sports show. Japheth is a former professional \
          footballer who played for the national team for over a decade. He brings his unique insights and analysis to the world of sports, covering \
          everything from local matches to international tournaments. Japheth is known for his quick wit and sharp commentary, and he has a loyal \
          following of sports fans who tune in daily to hear his take on the latest games and controversies.",
        showIds: ["kick-off"]
      },
      {
        id: "dorcas-uwiyera",
        name: "Dorcas Uwiyera",
        role: "Talk Show Host",
        image: "https://placehold.co/400",
        bio: "Dorcas Uwiyera hosts our popular lunchtime talk show, bringing insightful conversations and thought-provoking topics to our listeners daily. \
        With a background in journalism and psychology, Dorcas has a unique ability to connect with guests from all walks of life and draw out fascinating \
        stories. Their interview style is both compassionate and direct, creating moments of authentic revelation that listeners have come to cherish. Outside \
        the studio, Dorcas is an avid rock climber, sci-fi enthusiast, and mentor for aspiring broadcasters.",
        showIds: ["swahilipot-cafe"]
      },
      {
        id: "dj-kams",
        name: "DJ Kams",
        role: "Show DJ",
        image: "https://placehold.co/400",
        bio: "Dj Kams is the co-host and DJ for the Swahilipot Cafe show. With his infectious energy and engaging personality, \
        Dj Kams has become a beloved voice in the community. He brings a wealth of experience to the airwaves, having worked in radio for over \
        a decade. Dj Kams is passionate about social justice and community empowerment, and he uses his platform to raise awareness of important \
        issues. In his free time, he enjoys hiking, reading, and spending time with his family.",
        socialLinks: {
          youtube: "https://www.youtube.com/@vdjkams", 
        },
        showIds: ["swahilipot-cafe"]
      },
      {
        id: "munga-sauti-teule",
        name: "Munga Sauti Teule",
        role: "Drive Show Host",
        image: "https://placehold.co/400",
        bio: "Munga Sauti Teule hosts the Swahilipot Drive Show and Swahilipot Aroma show.",
        showIds: ["swahilipot-drive-show", "swahilipot-aroma"]
      },
      {
        id: "cj-bawazir",
        name: "CJ Bawazir",
        role: "Drive Show Host",
        image: "https://placehold.co/400",
        bio: "CJ Bawazir hosts the Swahilipot Drive show.",
        showIds: ["swahilipot-drive-show"]
      },
      {
        id: "dj-spinking",
        name: "DJ Spinking",
        role: "Show DJ",
        image: "https://placehold.co/400",
        bio: "DJ Spinking is the co-host and DJ for the Swahilipot Drive show.",
        socialLinks: {
          youtube: "https://www.youtube.com/@Djspinking",
        },
        showIds: ["swahilipot-drive-show"]
      }
      
  ];
  
  export const getPresenterById = (id: string): Presenter | undefined => {
    return presenters.find(presenter => presenter.id === id);
  };
  
  export const getPresentersByShowId = (showId: string): Presenter[] => {
    return presenters.filter(presenter => presenter.showIds?.includes(showId));
  };
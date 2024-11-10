/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmed",
  title: "مرحبًا بالجميع، انا احمد مهيوب",
  
  subTitle: emoji(`
    🌟 **مطور برامج Full Stack متميز** بخبرة غنية في تطوير تطبيقات الويب والمحمول باستخدام أحدث التقنيات مثل **Laravel framework, Vb.Net, C#, Flutter**.

    🧑‍💼 بالإضافة إلى ذلك، أتمتع بخبرة واسعة في **تصميم وتطوير الأنظمة المكتبية المحاسبية**، مما يساهم في تحسين كفاءة الأعمال وتلبية احتياجات المؤسسات بشكل فعال.

    📈 **أسعى لتطوير برامج قابلة للتوسع والتكيف**، وتمكين الشركات من تحقيق أهدافها التجارية وتحسين عملياتها بأفضل الطرق التقنية الممكنة.

    🚀 **أسعى دائمًا لتحقيق التميز** من خلال تقديم حلول مبتكرة ومخصصة تسهم في تحسين تجربة المستخدم وزيادة كفاءة الأعمال.

    🤝 **دعونا نعمل معًا لتحقيق النجاح!**
  `),
 
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "مالذي الذي أقوم" ,
  subTitle: '🌟 **مطور برامج Full Stack مبدع بخبرة واسعة يسعى لاستكشاف وتطبيق أحدث التقنيات!** 🚀' ,
  skills: [
    emoji(
      "⚡ تطوير واجهات مستخدم تفاعلية ومبتكرة لتطبيقات الويب والمحمول."
    ),
    emoji("🔍 تصميم وتطوير الأنظمة المكتبية المحاسبية لتحسين كفاءة الأعمال."),
    emoji(
      "💾 إدارة قواعد البيانات لضمان توافر البيانات وسهولة الوصول إليها."
    ),
    emoji("📱 تصميم وبرمجة تطبيقات الهاتف."),
    emoji(
      "🔧 إعداد التقارير وتحليل البيانات."
    ),
    emoji("🛠️ تقديم الدعم الفني وصيانة مواقع الشركة."),
    emoji("🚛 ربط المتاجر الإلكترونية بشركات الشحن."),
    emoji(
      "💳 تكامل حلول الدفع الإلكتروني."
    ),
    emoji("🛒 تطوير منصات التجارة الإلكترونية.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Vb.Net",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Oracle",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },

    {
      skillName: "Jasper",
      fontAwesomeClassname: "fas fa-chart-bar"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "جامعة تعز",
      logo: require("./assets/images/harvardLogo.jpeg"),
      subHeader: "بكالوريوس نظم المعلومات الإدارية",
      duration: "سبتمبر 2019 - يوليو 2022",
      desc: "تخصصت في نظم المعلومات الإدارية، مع التركيز على تطوير البرمجيات وإدارة قواعد البيانات.",
      descBullets: [
        "إنجاز مشاريع متعددة في تصميم وتطوير الأنظمة المكتبية المحاسبية.", 
        "اكتساب مهارات برمجة متقدمة من خلال الدورات عبر الإنترنت في Vb.Net و C# و PHP."
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      
     Stack: "Database Management",
      progressPercentage: "75%"
    }, 
    {
      Stack: "Mobile Development",
      progressPercentage: "70%"
    }
      
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "مبرمج",
      company: "MEPSYemen",
      companylogo: require("./assets/images/mepsyemenLogo.png"), 
      date: "أكتوبر 2023 – نوفمبر 2024",
      desc: "التعامل مع الصرافات الآلية (ATM) وربطها وتفعيل الخدمة، بالإضافة إلى إنشاء الموقع الإلكتروني للشركة.",
      descBullets: [
        "برمجة وصيانة الصرافات الآلية (ATM).",
        "ربط الصرافات الآلية بالشبكة وتفعيل الخدمة.",
        "التأكد من كفاءة عمل الصرافات الآلية وصيانتها الدورية.",
        "إنشاء الموقع الإلكتروني للشركة."
      ]
    },
    {
      role: "مطور برامج",
      company: "National Cash Transfer Co.",
      companylogo: require("./assets/images/nctLogo.png"), 
      date: "يناير 2022 – أكتوبر 2023",
      desc: "تطوير أنظمة الشركة، إعداد التقارير، والدعم الفني لمشاريع اليونيسف.",
      descBullets: [
        "تطوير أنظمة الشركة.",
        "إعداد التقارير باستخدام Jasper Report و Oracle Apex.",
        "تقديم الدعم الفني لموظفي الشركة في مشاريع اليونيسف.",
        "صيانة وتطوير مواقع الشركة."
      ]
    },
    {
      role: "مسؤول البيانات",
      company: "منظمة الأغذية والزراعة للأمم المتحدة (الفاو)",
      companylogo: require("./assets/images/nctLogo.png"), 
      date: "مايو 2022 – سبتمبر 2022",
      desc: "العمل في مشروع الفاو في الضالع صندوق الملك سلمان يستهدف الأسر الأكثر احتياجًا ل 11,250 مستفيدًا.",
      descBullets: [
        "تدريب الفريق على نظام كوبو وآلية عمله.",
        "مراجعة البيانات وتصفيتها لضمان دقتها ووضوحها وعدم تكرارها."
      ]
    },
    
    {
      role: "مطور أنظمة",
      company: "Ysys Co.", 
      companylogo: require("./assets/images/ysysLogo.jpeg"), 
      date: "أكتوبر 2021 – ديسمبر 2022",
      desc: "إنشاء وتطوير منصة لبناء وإدارة المتاجر الإلكترونية باستخدام إطار عمل Laravel.",
      descBullets: [
        "تطوير وصيانة تطبيقات الويب.",
        "إنشاء وتطوير منصة لبناء وإدارة المتاجر الإلكترونية."
      ]
    },
    {
      role: "مطور متاجر إلكترونية",
      company: "مؤسسة اللؤلؤ الأسود للعود والعطور - السعودية - الرياض",
      companylogo: require("./assets/images/blackPearlLogo.png"), 
      date: "فبراير 2021 – فبراير 2022",
      desc: "تطوير وإنشاء متجر إلكتروني بناءً على متطلبات العملاء، بالإضافة إلى ربط طرق الشحن والدفع الإلكتروني.",
      descBullets: [
        "تطوير وإنشاء متجر إلكتروني بناءً على متطلبات العملاء.",
        "ربط طرق الشحن بشركات مثل DHL و Aramex.",
        "ربط طرق الدفع الإلكتروني باستخدام Apple Pay، Mada، STC Pay، تمارا، وتابي.",
        "العمل مع فرق متعددة التخصصات لتنفيذ المشاريع المشتركة وتحقيق الأهداف في الوقت المحدد."
      ]
    }
  ]
};
    


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on


const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/rawaLadyLogo.png"),
      projectName: "Rawaa Lady E-commerce Store",
      projectDesc: "تصميم وبرمجة متجر إلكتروني وتطبيق لمؤسسة روائع ليدي، مقرها السعودية، متصل مع المتجر على الويب، ومتاح على جوجل بلاي وآبل ستور.",
      footerLink: [{
          name: "زيارة الموقع",
          url: "https://rawayalady.com"
        },
        {
          name: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.rawayalady.rawayalady"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/eg/app/%D8%B1%D9%88%D8%A7%D8%A6%D8%B9-%D9%84%D9%8A%D8%AF%D9%8A/id6560116587"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // اضبطه إلى false لإخفاء هذا القسم، الافتراضي هو true
};

// Resume Section
const resumeSection = {
  title: "السيرة الذاتية",
  subtitle: "مشاهدة سيرتي الذاتية. لا تتردد في تنزيل سيرتي الذاتية.",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("تواصل معي ☎️"),
  subtitle: "سواء كنت ترغب في مناقشة مشروع أو تحتاج إلى بعض المساعدة، صندوق الوارد الخاص بي مفتوح للجميع. أنا هنا للاستماع إلى أفكارك ومساعدتك في تحقيق رؤيتك.",
  number: "+967735882518",
  email_address: "ahmed20122012123@gmail.com",
  whatsappLink: "https://wa.me/967735882518" // رابط المحادثة عبر الواتساب
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

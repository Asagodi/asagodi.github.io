// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-ábel-ságodi",
    title: "Ábel Ságodi",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "publications and latest news",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My resume",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for lectures.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-on-september-30th-i-will-be-giving-a-talk-at-the-bernstein-conference-workshop-on-the-neuron-as-a-controller-of-stochastic-dynamics-in-frankfurt-germany",
          title: 'On September 30th, I will be giving a talk at the Bernstein Conference...',
          description: "",
          section: "News",},{id: "news-on-october-25th-i-will-be-visiting-aneta-koseska-s-lab-in-bonn-at-the-the-max-planck-institute-for-neurobiology-of-behavior-caesar-bonn-germany",
          title: 'On October 25th, I will be visiting Aneta Koseska’s lab in Bonn at...',
          description: "",
          section: "News",},{id: "news-our-paper-symmetry-regularized-learning-of-continuous-attractor-dynamics-has-been-accepted-to-the-neurips-2025-workshop-on-symmetry-and-geometry-in-neural-representations",
          title: 'Our paper Symmetry-Regularized Learning of Continuous Attractor Dynamics has been accepted to the...',
          description: "",
          section: "News",},{id: "news-our-abstract-dynamical-archetype-analysis-autonomous-computation-has-been-accepted-as-a-poster-at-cosyne-2026",
          title: 'Our abstract Dynamical archetype analysis: Autonomous computation has been accepted as a poster...',
          description: "",
          section: "News",},{id: "news-our-abstract-the-neuron-as-a-feedback-controller-of-stochastic-dynamics-has-been-accepted-as-a-poster-at-cosyne-2026",
          title: 'Our abstract The neuron as a feedback controller of stochastic dynamics has been...',
          description: "",
          section: "News",},{id: "news-arthur-liang-s-abstract-symmetry-regularized-learning-of-continuous-attractor-dynamics-has-been-accepted-as-a-poster-at-cosyne-2026-congrats-arthur",
          title: 'Arthur Liang’s abstract Symmetry-Regularized Learning of Continuous Attractor Dynamics has been accepted as...',
          description: "",
          section: "News",},{id: "news-new-preprint-out-on-universal-approximation-theorems-for-dynamical-systems",
          title: 'New preprint out on Universal Approximation Theorems for Dynamical Systems!',
          description: "",
          section: "News",},{id: "news-our-abstract-has-been-accepted-for-mbr026-conference-this-is-joint-work-with-gonzalo-polavieja-woosuk-park-richard-sung-and-memming-park",
          title: 'Our abstract has been accepted for MBR026 Conference! This is joint work with...',
          description: "",
          section: "News",},{id: "news-our-abstract-the-intractability-of-difference-making-without-dynamical-systems-theory-has-been-accepted-for-the-8th-sure-workshop-this-is-joint-work-with-leon-de-bruin-and-benjamin-drukarch",
          title: 'Our abstract The intractability of difference-making without dynamical systems theory has been accepted...',
          description: "",
          section: "News",},{id: "news-i-will-be-giving-a-talk-at-the-minisymposium-dynamics-computations-and-learning-in-living-systems-organized-by-kalel-rossi-and-aneta-koseska-at-dynamics-days-europe-on-07-23-2026",
          title: 'I will be giving a talk at the Minisymposium: Dynamics, Computations and Learning...',
          description: "",
          section: "News",},{id: "news-two-posters-were-accepted-for-dynamics-days-europe-the-first-one-is-universal-approximation-theorems-for-dynamical-systems-with-infinite-time-horizon-guarantees-in-collaboration-with-memming-park-while-the-second-is-piecewise-projective-maps-for-analytical-solutions-of-spiking-neural-network-dynamics-with-ildefonso-ferreira-pica-and-bill-podlaski",
          title: 'Two posters were accepted for Dynamics Days Europe! The first one is Universal...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=-nSEXC0AAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/asagodi", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/asagodi", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-1414-5062", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/neurabel.bsky.social", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/20260424CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%62%65%6C.%73%61%67%6F%64%69@%72%65%73%65%61%72%63%68.%66%63%68%61%6D%70%61%6C%69%6D%61%75%64.%6F%72%67", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

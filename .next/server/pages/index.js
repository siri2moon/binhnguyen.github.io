"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./portfolio.ts + 1 modules
var portfolio = __webpack_require__(805);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/SEO.tsx




function SEO() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: portfolio/* seoData.author */.hD.author
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: portfolio/* seoData.keywords.join */.hD.keywords.join(", ")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "Index"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "./favicon.png"
            })
        ]
    });
}
// SEO.prototype = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     keywords: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };
/* harmony default export */ const components_SEO = (SEO);

;// CONCATENATED MODULE: external "@emailjs/browser"
const browser_namespaceObject = require("@emailjs/browser");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_namespaceObject);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(981);
;// CONCATENATED MODULE: ./components/Alerts.tsx



const Alert = ({ message , color , icon  })=>{
    return(// this should reappear every time the user clicks on the button
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.UncontrolledAlert, {
        color: color,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "alert-inner--icon",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: icon
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "alert-inner--text",
                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: message
                })
            })
        ]
    }));
};
/* harmony default export */ const Alerts = (Alert);

;// CONCATENATED MODULE: ./components/ContactUs.tsx






const ContactUs = ()=>{
    const form = (0,external_react_.useRef)(null);
    const [alert, setAlert] = (0,external_react_.useState)(null);
    const successAlert = {
        color: "success",
        icon: "ni ni-like-2",
        message: " Your message has been sent successfully!"
    };
    const errorAlert = {
        color: "danger",
        icon: "ni ni-bell-55",
        message: " Oops! Something went wrong. Please try again later."
    };
    const sendEmail = (e)=>{
        e.preventDefault();
        console.log("submitting");
        console.log(form.current);
        const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey && form.current) {
            browser_default().sendForm(emailJsServiceId, emailJsTemplateId, form.current, emailJsPublicKey).then((result)=>{
                console.log(result.text);
                setAlert(successAlert);
            }, (error)=>{
                console.log(error.text);
                setAlert(errorAlert);
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "section section-lg section-shaped",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                ref: form,
                onSubmit: sendEmail,
                children: [
                    alert && /*#__PURE__*/ jsx_runtime_.jsx(Alerts, {
                        color: alert.color,
                        icon: alert.icon,
                        message: alert.message
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: "8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
                                    className: "bg-gradient-secondary shadow",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.CardBody, {
                                        className: "p-lg-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "mb-1",
                                                children: "Want to work with me?"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "mt-0",
                                                children: "Reach out to me using the form below."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                className: external_classnames_default()("mt-5", {}),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                    className: "input-group-alternative",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                            addonType: "prepend",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupText, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "ni ni-user-run"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                            placeholder: "Your name",
                                                            type: "text",
                                                            name: "user_name"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                className: external_classnames_default()({}),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                    className: "input-group-alternative",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                            addonType: "prepend",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupText, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "ni ni-email-83"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                            placeholder: "Email address",
                                                            name: "user_email",
                                                            type: "email"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                    className: "form-control-alternative",
                                                    cols: "80",
                                                    name: "user_message",
                                                    placeholder: "Type a message...",
                                                    rows: "4",
                                                    type: "textarea"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                                    block: true,
                                                    className: "btn-round",
                                                    color: "default",
                                                    size: "lg",
                                                    type: "submit",
                                                    children: "Send Message"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_ContactUs = (ContactUs);

;// CONCATENATED MODULE: ./pages/index.tsx


const Navigation = dynamic_default()(()=>__webpack_require__.e(/* import() */ 581).then(__webpack_require__.bind(__webpack_require__, 581)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/Navigation"
        ]
    }
});
const Greetings = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(471)]).then(__webpack_require__.bind(__webpack_require__, 471)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Greetings"
        ]
    }
});
const Skills = dynamic_default()(()=>__webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(__webpack_require__, 7)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Skills"
        ]
    }
});
const Proficiency = dynamic_default()(()=>__webpack_require__.e(/* import() */ 440).then(__webpack_require__.bind(__webpack_require__, 440)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Proficiency"
        ]
    }
});
const Education = dynamic_default()(()=>__webpack_require__.e(/* import() */ 380).then(__webpack_require__.bind(__webpack_require__, 380)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Education"
        ]
    }
});
const Experience = dynamic_default()(()=>__webpack_require__.e(/* import() */ 949).then(__webpack_require__.bind(__webpack_require__, 949)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Experience"
        ]
    }
});
const Projects = dynamic_default()(()=>__webpack_require__.e(/* import() */ 668).then(__webpack_require__.bind(__webpack_require__, 668)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Projects"
        ]
    }
});
const Feedbacks = dynamic_default()(()=>__webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(__webpack_require__, 85)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Feedbacks"
        ]
    }
});
const GithubProfileCard = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 77)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/GithubProfileCard"
        ]
    }
});



function Home({ githubProfileData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_SEO, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Greetings, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Proficiency, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Education, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Feedbacks, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Projects, {}),
            portfolio/* showContactUs */.Nd ? /*#__PURE__*/ jsx_runtime_.jsx(components_ContactUs, {}) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(GithubProfileCard, {
                ...githubProfileData
            })
        ]
    });
}
// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };
async function getStaticProps() {
    const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then((res)=>res.json());
    return {
        props: {
            githubProfileData
        }
    };
}


/***/ }),

/***/ 805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bv": () => (/* binding */ SkillBars),
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "KK": () => (/* binding */ feedbacks),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "q": () => (/* binding */ projects),
  "hD": () => (/* binding */ seoData),
  "Nd": () => (/* binding */ showContactUs),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: contact

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.ts

const greetings = {
    name: "Binh Nguyen",
    title: "Hi all, I'm Binh",
    description: "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
    resumeLink: "https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing"
};
const openSource = {
    githubUserName: "siri2moon"
};
const contact = {};
const socialLinks = {
    url: "https://binhnguyen.github.io/",
    linkedin: "https://www.linkedin.com/in/siri2moon/",
    github: "https://github.com/siri2moon",
    instagram: "https://www.instagram.com/siri2moon",
    facebook: "https://www.facebook.com/binhnguyenit",
    twitter: "https://twitter.com/siri2moon"
};
const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: "/lottie/skills/fullstack.json",
            skills: [
                external_react_easy_emoji_default()("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
                external_react_easy_emoji_default()("⚡ Building responsive static websites using Next.js"),
                external_react_easy_emoji_default()("⚡ Building RESTful APIs in Django & Django REST Framework")
            ],
            softwareSkills: [
                {
                    skillName: "HTML-5",
                    fontAwesomeClassName: "vscode-icons:file-type-html"
                },
                {
                    skillName: "CSS-3",
                    fontAwesomeClassName: "vscode-icons:file-type-css"
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassName: "logos:javascript"
                },
                {
                    skillName: "Reactjs",
                    fontAwesomeClassName: "vscode-icons:file-type-reactjs"
                },
                {
                    skillName: "Nextjs",
                    fontAwesomeClassName: "vscode-icons:file-type-light-next"
                },
                {
                    skillName: "Python",
                    fontAwesomeClassName: "logos:python"
                },
                {
                    skillName: "Django",
                    fontAwesomeClassName: "vscode-icons:file-type-django"
                },
                {
                    skillName: "Redux",
                    fontAwesomeClassName: "logos:redux"
                },
                {
                    skillName: "NPM",
                    fontAwesomeClassName: "logos:npm-icon"
                },
                {
                    skillName: "Yarn",
                    fontAwesomeClassName: "logos:yarn"
                }
            ]
        },
        {
            title: "Cloud Infra-Architecture",
            lottieAnimationFile: "/lottie/skills/cloudinfra.json",
            skills: [
                external_react_easy_emoji_default()("⚡ Experience of working on multiple cloud platforms"),
                external_react_easy_emoji_default()("⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"),
                external_react_easy_emoji_default()("⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions")
            ],
            softwareSkills: [
                // ? Check README To get icon details
                {
                    skillName: "AWS",
                    fontAwesomeClassName: "logos:aws"
                },
                {
                    skillName: "Azure",
                    fontAwesomeClassName: "logos:microsoft-azure"
                },
                {
                    skillName: "Heroku",
                    fontAwesomeClassName: "logos:heroku-icon"
                },
                {
                    skillName: "PostgreSQL",
                    fontAwesomeClassName: "logos:postgresql"
                },
                {
                    skillName: "Github",
                    fontAwesomeClassName: "akar-icons:github-fill"
                },
                {
                    skillName: "Docker",
                    fontAwesomeClassName: "logos:docker-icon"
                },
                {
                    skillName: "Github Actions",
                    fontAwesomeClassName: "logos:github-actions"
                },
                {
                    skillName: "Cloudinary",
                    fontAwesomeClassName: "logos:cloudinary"
                },
                {
                    skillName: "Nginx",
                    fontAwesomeClassName: "logos:nginx"
                },
                {
                    skillName: "Sentry",
                    fontAwesomeClassName: "logos:sentry-icon"
                }
            ]
        },
        {
            title: "Blockchain",
            lottieAnimationFile: "/lottie/skills/ethereum.json",
            skills: [
                external_react_easy_emoji_default()("⚡ Experience in developing Smart Contract using Solidity & Ethereum"),
                external_react_easy_emoji_default()("⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"),
                external_react_easy_emoji_default()("⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"),
                external_react_easy_emoji_default()("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
                external_react_easy_emoji_default()("⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS")
            ],
            softwareSkills: [
                {
                    skillName: "Ethereum",
                    fontAwesomeClassName: "logos:ethereum"
                },
                {
                    skillName: "Solidity",
                    fontAwesomeClassName: "logos:solidity"
                },
                {
                    skillName: "Web3js",
                    fontAwesomeClassName: "logos:web3js"
                },
                {
                    skillName: "Metamask",
                    fontAwesomeClassName: "logos:metamask-icon"
                },
                {
                    skillName: "Ganache",
                    fontAwesomeClassName: "logos:ganache-icon"
                }
            ]
        }
    ]
};
const SkillBars = [
    {
        Stack: "Frontend/Design",
        progressPercentage: "90"
    },
    {
        Stack: "Backend",
        progressPercentage: "70"
    },
    {
        Stack: "Programming",
        progressPercentage: "60"
    }
];
const educationInfo = [
    {
        schoolName: "Harvard University",
        subHeader: "Master of Science in Computer Science",
        duration: "September 2017 - April 2019",
        desc: "Participated in the research of XXX and published 3 papers.",
        grade: "Grade A",
        descBullets: [
            "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ]
    }
];
const experience = [
    {
        role: "Frontend Developer",
        company: "Duseca Software",
        companyLogo: "/img/icons/common/dusecaSoftware.jpg",
        date: "Apr 2022 – Jun 2022",
        desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries."
    },
    {
        role: "API Engineer",
        company: "Duseca Software",
        companyLogo: "/img/icons/common/dusecaSoftware.jpg",
        date: "Jan 2022 – Mar 2022",
        desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server."
    },
    {
        role: "Full Stack Developer",
        company: "Bleed-AI",
        companyLogo: "/img/icons/common/bleedAI.jpg",
        date: "Sept 2021 - Oct 2021",
        desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server."
    },
    {
        role: "Backend Developer",
        company: "Wapidu",
        companyLogo: "/img/icons/common/wapidu.jpg",
        date: "Sept 2021",
        desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry."
    }
];
const projects = [
    {
        name: "developer-portfolio",
        desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
        github: "https://github.com/1hanzla100/developer-portfolio",
        link: "https://developer-portfolio-1hanzla100.vercel.app/"
    },
    {
        name: "AtlasMart",
        desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
        github: "https://github.com/1hanzla100/Django-React-Marketplace"
    },
    {
        name: "Technota (Forum)",
        desc: "Get hands-on experience in technical skills with Technota",
        github: "https://github.com/1hanzla100/django-react-forum"
    },
    {
        name: "Shopaza (Ecommerce)",
        desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
        github: "https://github.com/1hanzla100/Django-ecommerce"
    }
];
const feedbacks = [
    {
        name: "John Smith",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur."
    },
    {
        name: "John Smith",
        feedback: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur."
    }
];
// option to hide or show the ContactUs component
const showContactUs = true;
// See object prototype on /types/section.ts page
const seoData = {
    title: "Binh Nguyen",
    description: "A passionate Full Stack Web Developer and Blockchain Developer.",
    author: "Binh Nguyen",
    image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
    url: "https://developer-portfolio-1hanzla100.vercel.app",
    keywords: [
        "Binh",
        "Binh Nguyen",
        "siri2moon",
        "binhnguyen.it",
        "Binh IT Da Nang",
        "Portfolio",
        "Binh Nguyen Portfolio ",
        "Binh Portfolio"
    ]
};


/***/ }),

/***/ 895:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 189:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(987)));
module.exports = __webpack_exports__;

})();
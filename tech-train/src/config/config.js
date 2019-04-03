const config = {
  appTitle: "Tech Train 💪💻",

  subjects: [
    {
      label: "ES6",
      info: "ES6 is a new version of JavaScript. We use it a lot in React"
    },
    {
      label: "ReactJS",
      info: "React is a front-end JavaScript framework developed by Facebook",
      useful: [
        {
          name: "React Lifecycle Methods Diagram",
          alt: "",
          url: "http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",
          about:
            "Cool visual Bojan showed me to get a better grasp of when everything is firing in React"
        },
        {
          name: "The Component Lifecycle",
          alt: "",
          url:
            "https://reactjs.org/docs/react-component.html#the-component-lifecycle",
          about:
            "When in doubt, go to the React website to read about lifecycle methods"
        },
        {
          name: "Get Derived State From Props",
          alt: "getDerivedStateFromProps()",
          url:
            "https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops"
        },
        {
          name: "Get Derived State From Props",
          alt: "getDerivedStateFromProps()",
          url:
            "https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops"
        }
      ]
    },
    {
      label: "Redux",
      info: "The state of things."
    },
    {
      label: "CSS",
      info: "The most stylish language",
      useful: [
        {
          name: "Buttons + CSS",
          alt: "florens verschelde",
          url: "https://fvsch.com/styling-buttons/",
          about:
            "CSS life hack to make buttons look like text to keep all the functionality of buttons."
        }
      ]
    },
    {
      label: "EsriJSAPI",
      info: "Our map API"
    },
    {
      label: "NodeJS",
      info: "JavaScript for the back-end",
      useful: [
        {
          name: "Node Version Manager",
          alt: "NVM",
          url: "https://github.com/creationix/nvm#usage"
        }
      ]
    },
    {
      label: "AWS",
      info: "S3, EC2, & more",
      useful: [
        {
          name: "CloudFront Distributions",
          alt: "",
          url: "https://console.aws.amazon.com/cloudfront/home"
        },
        {
          name: "Cyberduck",
          alt: "",
          url: "https://cyberduck.io/",
          about: "This is what lots of people in the office use to push test builds to AWS CloudFront instead of the AWS command line"
        }
      ]
    },
    {
      label: "Docker",
      info:
        "Docker is another way for us to share sites/environments with others (especially project managers) without having to clone, install, and run the app.",
      useful: [
        {
          name: "Docker",
          alt: "",
          url: "https://www.docker.com/",
          about: "The official Docker website."
        },
        {
          name: "docker-node",
          alt: "",
          url:
            "https://github.com/nodejs/docker-node/blob/master/README.md#how-to-use-this-image",
          about:
            "The repo for the official Node.js docker image- this is what we use for our applications that utilize Docker."
        }
      ]
    }
  ]
};

// export default config;
const appTitle = "Tech Train 💪💻";
const subjects = config.subjects;
export {
  subjects, //way to export things you can destructure off of
  appTitle
};

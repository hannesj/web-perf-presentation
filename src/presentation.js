// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image,
  Magic,
  CodePane,
} from 'spectacle';
import preload from 'spectacle/lib/utils/preloader'
import CodeSlide from 'spectacle-code-slide';


// Import theme
import createTheme from 'spectacle/lib/themes/default';

import waterfallHs from './waterfall_hs.png'
import waterfallYle from './waterfall_yle.png'
import videoHs from './video_hs.mp4'
import videoYle from './video_yle.mp4'

import webpack1 from './webpack-analyzer1.jpg'
import webpack2 from './webpack-analyzer2.jpg'
import webpack3 from './webpack-analyzer3.jpg'

preload([
  waterfallHs,
  waterfallYle,
  videoHs,
  videoYle,
  webpack1,
  webpack2,
  webpack3,
]);

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    white: '#FFFFFF',
    primary: '#7473BD',
    purple: '#7473BD',
    secondary: '#FFFFFF',
    navy: '#2C3F6B',
    palePurple: '#A6A2DC',
    tertiary: '#A6A2DC',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const gradient = "https://rebel.netlight.com/wp-content/uploads/2017/02/Netlight-Gradient.png"

const traditionalWebPage = `<!DOCTYPE html>
<html language="en">
<header>
  <title>My home page</title>
  <meta charset="UTF-8">
  <script src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>
  <link rel="stylesheet" type="text/css" href="base.css">
  <link rel="stylesheet" type="text/css" href="theme.css">
</header>
<body>

  <header>
    <nav>
      <ul>
        <li>Your menu</li>
      </ul>
    </nav>
  </header>

  <section>

    <article>
      <header>
        <h2>Article title</h2>
        <p>Posted two days ago by Writer</p>
        <a href="#comments">6 comments</a>
      </header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus ultrices sodales. Maecenas et orci est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nulla lacus. Phasellus iaculis magna quis velit vestibulum gravida id vel justo. Donec a massa quis lacus pharetra cursus. Proin nec cursus ante. Proin consequat aliquet scelerisque. Sed et lectus vitae dui finibus lacinia.</p>
    </article>

    <article>
      <header>
        <h2>Article title</h2>
        <p>Posted last week by Writer</p>
        <a href="#comments">6 comments</a>
      </header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed maximus augue. Sed dictum venenatis enim, a tristique odio faucibus nec. Maecenas et elit vitae libero euismod cursus id at est. Praesent neque arcu, placerat id molestie ut, iaculis nec ex. Nam egestas ante vel urna fringilla, eu posuere nisi tincidunt. Duis pellentesque, erat ut fringilla sollicitudin, eros lacus congue sapien, quis consequat sem felis et magna. Maecenas nec justo eros. Proin commodo nibh ut urna egestas tincidunt vehicula nec eros. Integer efficitur turpis eu massa iaculis, quis venenatis elit pulvinar. Nunc arcu magna, imperdiet in ante nec, tempor molestie sem. Duis porttitor rutrum massa, et tristique augue finibus in. Pellentesque sed enim condimentum, iaculis augue sit amet, varius mi. Phasellus tempor lobortis lacus, a ultricies quam aliquam feugiat.</p>
    </article>

  </section>

  <aside>
    <h2>About section</h2>
    <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </aside>

  <footer>
    <p>Copyright 20XX Your name</p>
  </footer>

  <script>
    /* Load comments */
    /* ... */
  </script>
  <script>
    /* Google analytics */
    /* ... */
  </script>
  <script>
    /* Ad networks */
    /* ... */
  </script>
</body>
</html>`

const spaWebPage = `<!DOCTYPE html>
<html language="en">
<header>
  <title>My home page</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="base.css">
  <link rel="stylesheet" type="text/css" href="theme.css">
</header>
<body>
  <div id="app"/>

  <script>
    /* Bundler manifest */
    /* ... */
  </script>
  <script src="/js/entry.abc123.js"/>

</body>
</html>`

const importSyntax = `import('./library')
  .then(library => library.render(data))`

const loadableComponent = `import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}`

const intersectionSyntax = `var options = {
  root: document.querySelector('#app'),
  rootMargin: '0px',
  threshold: 0
}

const observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#complexComponent'))
`

const intersectionComponent = `
import Observer from '@researchgate/react-intersection-observer';

class ExampleComponent extends React.Component {
    handleIntersection(event) {
        console.log(event.isIntersecting);
    }

    render() {
        const options = {
            onChange: this.handleIntersection,
            root: "#scrolling-container",
            rootMargin: "0% 0% -25%"
        };

        return (
            <div id="scrolling-container" style={{ overflow: 'scroll', height: 100 }}>
                <Observer {...options}>
                    <div>
                        I am the target element
                    </div>
                </Observer>
            </div>
        );
    }
}`

const combineComponents = `import LoadableVisibility from 'react-loadable-visibility/react-loadable'
import Loading from './my-loading-component'

const LoadableComponent = LoadableVisibility({
  loader: () => import('./my-component'),
  loading: Loading,
})

export default class App extends React.Component {
  render() {
    return <LoadableComponent />
  }
}`

const rafSyntax = `let start = null;
const element = document.getElementById('SomeElementYouWantToAnimate');
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
`

const ricSyntax = `const taskList = [ /* lots of small tasks */ ]

function runTaskQueue(deadline) {
  while (deadline.timeRemaining() > 0 && taskList.length) {
    processTask(taskList);
  }

  if (taskList.length) {
    taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000} );
}

window.requestIdleCallback(runTaskQueue, { timeout: 1000 })
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgImage={gradient}>
          <Heading size={1} fit caps lineHeight={3} textColor="white">
            Web performance
          </Heading>
          <Heading size={3} fit textColor="white">
            EDGE Academy Helsinki 15.2.2018
          </Heading>
        </Slide>
        <Slide bgColor="purple">
          <Heading size={5} caps textColor="white">
            What does web page performance consist of?
          </Heading>
          <List>
            <ListItem>Loading performance</ListItem>
            <ListItem>Runtime performance</ListItem>
          </List>
        </Slide>

        <Slide bgImage={gradient}>
          <Heading size={2} fit caps lineHeight={1}>
            Loading performance
          </Heading>
        </Slide>

        <Slide bgColor="navy">
          <BlockQuote>
            <Quote>Know what your pages consist of</Quote>
          </BlockQuote>
        </Slide>
        <CodeSlide
          bgColor="navy"
          color="white"
          lang="html"
          code={traditionalWebPage}
          ranges={[
            { loc: [0, 0], title: "Traditional web page" },
            { loc: [2, 9], note: "Header"},
            { loc: [11, 18], note: "Navigation"},
            { loc: [22, 43], note: "Content"},
            { loc: [50, 62], note: "Scripts, potentially quite many"},
            { loc: [62, 62], note: "This worked well when web pages were mostly static pages, with little to no interatction. However, today there are lots of dynamic content that you might want to include on the page."},
            { loc: [62, 62], note: "Also, this generates a lot of individual requiests, with quite little control of how things are loaded. Also the more scripts you have, the more difficult it is to coordinate what is happening on the page at the same time."},
          ]}/>
        <Magic>
          <Slide textColor="white" fit>
            <Image src={waterfallHs}/>
          </Slide>
          <Slide textColor="white" fit>
            <Image src={waterfallHs} margin="calc(-3850px + 75vh) 0 0 0"/>
          </Slide>
        </Magic>
        <Slide textColor="white" fit>
          <video controls>
            <source src={videoHs}/>
          </video>
        </Slide>
        <CodeSlide
          bgColor="navy"
          color="white"
          lang="html"
          code={spaWebPage}
          ranges={[
            { loc: [0, 0], title: "Single page app" },
            { loc: [2, 8], note: "Header"},
            { loc: [9, 10], note: "Placeholder"},
            { loc: [11, 16], note: "Script(s)"},
            { loc: [16, 16], note: "This version enables us to do much more fine-grained control over the loading experience. However, it is very easy to get a bloated bundle, that might make the application much larger than neccessary and thus harm the loading experience"},
          ]}/>
        <Slide textColor="white" fit>
          <video controls>
            <source src={videoYle}/>>
          </video>
        </Slide>
        <Slide textColor="white" fit>
          <Image src={waterfallYle}/>
        </Slide>
        <Slide textColor="white">
          <Heading size={3} caps fit textColor="white">
            Low-hanging fruits
          </Heading>
          <Appear>
            <List>
              <ListItem>Minification</ListItem>
              <ListItem>Compression</ListItem>
              <ListItem>Duplicated code</ListItem>
              <ListItem>Envification</ListItem>
            </List>
          </Appear>
          <Appear>
            <Text textColor="white">
              Example: total bundle size 4MB -> 300KB
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3} caps textColor="white">
            Tools
          </Heading>
          <List>
            <ListItem>https://www.webpagetest.org</ListItem>
            <ListItem>Chrome developer tools</ListItem>
            <ListItem>Webpack bundle analyzer</ListItem>
            <ListItem>source-map-explorer</ListItem>
          </List>
        </Slide>
        <Slide textColor="white" fit>
            <Image src={webpack1}/>
        </Slide>
        <Slide textColor="white" fit>
          <Image src={webpack2}/>
        </Slide>
        <Slide textColor="white" fit>
          <Image src={webpack3}/>
        </Slide>

        <Slide textColor="white">
          <Heading size={5} caps textColor="white">
            Easy to automate, why not include in your integration tests?
          </Heading>
          <List>
            <ListItem>Requires a baseline to be establised</ListItem>
            <ListItem>Requires constatnt priorization</ListItem>
          </List>
        </Slide>

        <Slide textColor="white">
          <Heading size={6} caps fit textColor="white">
            Advanced topics
          </Heading>
          <Appear>
            <List>
              <ListItem>Bundle splitting</ListItem>
              <ListItem>Lazy loading</ListItem>
              <ListItem>Vendor chunks</ListItem>
              <ListItem>Long-term caching</ListItem>
            </List>
          </Appear>
          <Appear>
            <Text textColor="white">
              Many of these techniques move the SPA towards a more traditional web page with more assets and small files
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3} fit textColor="white">
            Dynamic import syntax
            </Heading>
          <CodePane
            lang="js"
            source={importSyntax}
            margin="5em 0"
          />
          <Text textColor="white">
            Supported natively in Webpack 2+, Closure compiler, Chrome 63 and Safari TP
          </Text>
        </Slide>
        <Slide>
          <Heading size={3} textColor="white">
            react-loadable
          </Heading>
          <CodePane
            lang="jsx"
            source={loadableComponent}
            margin="5em 0"
          />
          <Text textColor="white">
            Makes react components lazy loadable. and make components not above the fold load after the page has loaded otherwise
          </Text>
        </Slide>
        <Slide>
          <Heading size={3} textColor="white">
            Intersection Observer
          </Heading>
          <CodePane
            lang="js"
            source={intersectionSyntax}
            margin="5em 0"
          />
          <Text textColor="white">
            Supported by modern browsers, polyfill abailable for IE
          </Text>
          <Text textColor="white">
            Usable eg. for lazy loading images, or libraries used only for parts of the page, such as a comment box.
          </Text>
        </Slide>
        <Slide>
          <Heading size={3} fit textColor="white">
            react-intersection-observer
          </Heading>
          <CodePane
            lang="jsx"
            source={intersectionComponent}
            margin="1em 0"
          />
          <Text textColor="white">
            Makes react components lazy loadable. Usable eg. for dynamic image or video loading.
          </Text>
        </Slide>
        <Slide>
          <Heading size={3} fit textColor="white">
            react-loadable-visibility
          </Heading>
          <CodePane
            lang="jsx"
            source={combineComponents}
            margin="5em 0"
          />
          <Text textColor="white">
            Combines react-loadable with intersection observers. Load components dynamically only when they are actually in view.
          </Text>
        </Slide>
        <Slide>
          <Heading size={3} textColor="white">
            Service Workers
          </Heading>
          <Text textColor="white" margin="0.5em 0">
            A service workers is a worker (~thread), which enables you to optimize caching.
          </Text>
          <Text textColor="white" margin="0.5em 0">
            A web worker can intercept network requests and inject responses from it's own cache. 
          </Text>
          <Text textColor="white" margin="0.5em 0">
            Other features are eg. push notifications and on-the-fly updates.
          </Text>
        </Slide>
        <Slide>
          <Heading size={3} textColor="white">
            PRPL
          </Heading>
          <List>
            <Appear><ListItem><b>Push</b> critical resources for the initial URL route.</ListItem></Appear>
            <Appear><ListItem><b>Render</b> initial route.</ListItem></Appear>
            <Appear><ListItem><b>Pre-cache</b> remaining routes.</ListItem></Appear>
            <Appear><ListItem><b>Lazy-load</b> and create remaining routes on demand.</ListItem></Appear>
          </List>
          <Appear>
            <Text textColor="white">
              A combination of the previous techinques.
            </Text>
          </Appear>
        </Slide>

        <Slide bgImage={gradient}>
          <Heading size={2} fit caps lineHeight={1}>
            Runtime performance
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} fit textColor="white">
            Know what you(r pages) are doing
          </Heading>
          <Appear>
            <Text textColor="white" margin="0.5em 0">
              Always profile before optimizing
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3} textColor="white">
            RequestAnimationFrame
          </Heading>
          <CodePane
            lang="js"
            source={rafSyntax}
            margin="5em 0"
          />
          <Text textColor="white">
            Supported by modern browsers, polyfill abailable for IE
          </Text>
          <Text textColor="white">
            Enables smooth animations, while preserving 60FPS frame rates
          </Text>
        </Slide>
        <Slide>
          <Heading size={3} textColor="white">
            RequestIdleCallback
          </Heading>
          <Text textColor="white">
            Enables user-defined co-operative scheduling. Makes sure page is interactive, even while doing long-running tasks.
          </Text>
          <CodePane
            lang="js"
            source={ricSyntax}
            margin="5em 0"
          />
          <Text textColor="white">
            Supported by Chrome and Firefox, polyfill abailable for other browsers
          </Text>
        </Slide>
        <Slide>
          <Heading size={3} textColor="white">
            Web assembly
          </Heading>
          <Text textColor="white" margin="0.5em 0">
            Write performance-critical parts of the application in low-level languages, such as C or Rust to achieve near-native performance.
          </Text>
          <Text textColor="white" margin="0.5em 0">
            support in all modern browsers, able to fallback to JS-implementation
          </Text>
        </Slide>
        <Slide bgColor="navy">
          <BlockQuote>
            <Quote>Questions?</Quote>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}

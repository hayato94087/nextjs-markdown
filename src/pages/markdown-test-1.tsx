import ReactMarkdown from 'react-markdown';

const markdownString = `
# Markdown

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
`;

const Home = () => {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>;
};

export default Home;

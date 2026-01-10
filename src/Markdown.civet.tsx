import BaseMarkdown from "react-markdown"
import remarkDirective from 'remark-directive'
import remarkMath from "remark-math"
import remarkDirectiveRehype from 'remark-directive-rehype'
import rehypeMathjax from "rehype-mathjax"
import {visit} from 'unist-util-visit'

// TODO:
//   - Transform code elements using shiki 
//   - Output a single page (?)
//   - Admonitions
//   - Metadata/YAML blocks

const myRemarkPlugin = () => {
  return (tree) => {
    return visit(
      tree, 
      (node) => console.log(node))
  }
}

const YouTubeVideo = ({id, children}) => {
  return <iframe
    src={`https://www.youtube.com/embed/${id}`}
    width="200"
    height="200"
  >
    {children}
  </iframe>
}

const Markdown = ({children}) => {
  return <BaseMarkdown 
    remarkPlugins ={[
        myRemarkPlugin,
        remarkDirective,
        remarkDirectiveRehype,
        remarkMath]}
    rehypePlugins ={[
        rehypeMathjax]} 
    components ={{
      "youtube-video": YouTubeVideo,
  }}
  >
    {children}
  </BaseMarkdown>
};export default Markdown

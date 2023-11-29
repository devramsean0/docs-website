import markdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';

export default async function markdownToHtml(markdown: string) {
  const md = await markdownIt().use(highlightjs);
  const result = md.render(markdown);
  return result;
}
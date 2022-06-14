import contentJson from "./content.json"

export type BlogPageInfo = {
  id: string,
  title: string,
  preview: string,
  content: string,
};
export type BlogContent = Array<BlogPageInfo>;
export type GetContentFn = () => Promise<BlogContent>

const GetBlogContent: GetContentFn = async () => {
  const blogPages = contentJson.pages;
  const fixedPages = [];
  for (const pageInfo of blogPages) {
    const file = new Request(`/markdown/${pageInfo.file}.md`)
    const fetchedFile = await fetch(file);
    const fileText = await fetchedFile.text();
    fixedPages.push({
      content: fileText,
      ...pageInfo,
    })
  }
  console.log(fixedPages)
  return fixedPages
}

export default GetBlogContent
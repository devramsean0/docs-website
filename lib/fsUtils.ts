import fs from 'fs/promises';
import markdownToHtml from './md';

export async function docsGetListOfProjects() {
    const data = await fs.readdir(`${process.cwd()}/docs/docs`)
    return data
}
export async function docsGetReadmeFromProject(projectName: string, jsonFile = 'branch-main') {
    const unparsedData = await fs.readFile(`${process.cwd()}/docs/docs/${projectName}/${jsonFile}.json`, 'utf-8');
    const data = JSON.parse(unparsedData)
    const parsedMD = await markdownToHtml(data.readme)
    return parsedMD
}
export async function docsGetListOfProjectVersions(projectName: string) {
    const data = await fs.readdir(`${process.cwd()}/docs/docs/${projectName}`)
    const parsedData: string[] = []
    data.forEach((element) => {
        const lowerCaseElement = element.toLowerCase();
        if (lowerCaseElement == 'readme.md') return
        if (element.endsWith('.json')) {
            parsedData.push(element.replace('.json', ''))
        }
    })
    return parsedData
}
export async function docsGetProjectVersion(projectName: string, version: string) {
    const unparsedData = await fs.readFile(`${process.cwd()}/docs/docs/${projectName}/${version}.json`, 'utf-8');
    const data = JSON.parse(unparsedData)
    return data
}
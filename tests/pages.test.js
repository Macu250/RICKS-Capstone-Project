import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import yaml from 'js-yaml'

// Check if the YAML files exist and can be read
const pages = ['help', 'education', 'meditation', 'flexibility', 'about', 'privacy', 'feedback']

for (const page of pages) {
  const fileName = 'public/' + page + '.yaml'
  const text = readFileSync(fileName, 'utf8')
  const data = yaml.load(text)

  if (!data) {
    throw new Error(page + '.yaml is empty')
  }

  // Check if the page has a title
  if (!data.page) {
    throw new Error(page + '.yaml is missing the page section')
  }

  if (!data.page.title) {
    throw new Error(page + '.yaml is missing a page title')
  }

  // Check if every video link is a YouTube embed link
  const resources = data.resources || []

  for (const resource of resources) {
    // Skip empty links, those are placeholders
    if (!resource.url) {
      continue
    }

    const isEmbedLink = resource.url.startsWith('https://www.youtube.com/embed/')

    if (!isEmbedLink) {
      throw new Error(page + '.yaml has a video link that is not an embed link: ' + resource.url)
    }
  }

  console.log(page + '.yaml passed')
}

// Check if the website builds without errors
execSync('npm run build', { stdio: 'inherit' })

console.log('All checks passed!')

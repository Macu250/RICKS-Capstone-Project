import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import yaml from 'js-yaml'

// Check that the YAML files exist and can be read.
const pages = ['help', 'education', 'meditation', 'flexibility']

for (const page of pages) {
  const text = readFileSync(`public/${page}.yaml`, 'utf8')
  const data = yaml.load(text)

  if (!data) {
    throw new Error(`${page}.yaml is empty`)
  }

  console.log(`${page}.yaml passed`)
}

// Check that the website builds without errors.
execSync('npm run build', { stdio: 'inherit' })

console.log('All checks passed!')

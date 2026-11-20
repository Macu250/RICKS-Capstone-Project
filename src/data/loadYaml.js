// Reads a YAML file from the public folder and turns it into a JS object.
// Used by any page that gets its list of resources from a YAML file.
// Example: const data = await loadYaml('help.yaml')

import yaml from 'js-yaml'

async function loadYaml(fileName) {
  // Read YAML from the public folder
  const response = await fetch(`${import.meta.env.BASE_URL}${fileName}`)

  if (!response.ok) {
    throw new Error('Failed to load ' + fileName)
  }

  // Convert YAML to JS
  const text = await response.text()
  const data = yaml.load(text)

  return data
}

export default loadYaml

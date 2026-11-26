import { readFileSync, existsSync } from 'node:fs'
import tabs from '../src/data/tabs.js'

// Read app.jsx as plain text so we can search for it
const appCode = readFileSync('src/App.jsx', 'utf8')

// Check if every tab has everything it needs
for (const tab of tabs) {
  if (!tab.id) {
    throw new Error('A tab is missing an id')
  }

  if (!tab.label) {
    throw new Error('The ' + tab.id + ' tab is missing a label')
  }

  if (!tab.icon) {
    throw new Error('The ' + tab.id + ' tab is missing an icon')
  }

  if (!tab.description) {
    throw new Error('The ' + tab.id + ' tab is missing a description')
  }

  // Check if App jsx has a page for this tab
  // Home is the default page so app jsx doesn't check for it
  if (tab.id !== 'home') {
    const pageCheck = "activeTab === '" + tab.id + "'"

    if (!appCode.includes(pageCheck)) {
      throw new Error('The ' + tab.id + ' tab has no page in App.jsx')
    }
  }

  console.log(tab.id + ' tab passed')
}

// Check if the timer music file is there
const musicFile = 'public/04-Meydan-Surreal-Forest(chosic.com).mp3'

if (!existsSync(musicFile)) {
  throw new Error('Timer music file is missing')
}

console.log('timer music passed')

console.log('All app checks passed!')

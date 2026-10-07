// The list of tabs shown in the navigation bar and on the home screen.
// To add a new tab: add an entry here, and make a page in src/pages,
// and then add it to the renderPage function in App.jsx.

const tabs = [
  {
    id: 'home',
    label: 'Home',
    icon: '🏡',
    description: 'Back to the start',
  },
  {
    id: 'help',
    label: 'Help',
    icon: '🤝',
    description: 'Support and quick relief when you need it most',
  },
  {
    id: 'education',
    label: 'Education',
    icon: '📖',
    description: 'Learn how chronic pain works and how to manage it',
  },
  {
    id: 'meditation',
    label: 'Meditation',
    icon: '🧘',
    description: 'Guided breathing to calm your body and mind',
  },
  {
    id: 'flexibility',
    label: 'Flexibility',
    icon: '🌿',
    description: 'Gentle stretches to ease tension',
  },
  {
    id: 'goals',
    label: 'Goals',
    icon: '🎯',
    description: 'Set small goals and track your progress',
  },
  {
    id: 'timer',
    label: 'Timer',
    icon: '⏳',
    description: 'Time your stretches, rest, or meditation',
  },
]

export default tabs
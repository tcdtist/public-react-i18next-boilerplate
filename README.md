# React i18n Implementation Demo

A comprehensive demonstration of different internationalization (i18n) implementation approaches in React, featuring Context API, Zustand, and react-i18next.

## 🚀 Features

- Three different i18n implementation approaches:
  - Context API implementation
  - Zustand state management implementation
  - Default react-i18next implementation
- TypeScript for type safety
- Modern UI with Tailwind CSS
- Responsive design
- Easy language switching
- Centralized translation management

## 🛠 Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- i18next
- Zustand
- React Router DOM
- Yarn Package Manager

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/i18n-demo.git
cd i18n-demo
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

## 🏗 Project Structure

```
src/
├── components/       # Shared components
├── config/          # i18n configuration
├── contexts/        # Context API implementation
├── locales/         # Translation files
│   ├── en/         # English translations
│   └── vi/         # Vietnamese translations
├── pages/          # Demo pages
└── stores/         # Zustand store
```

## 💡 Implementation Details

### Context API Implementation

- Uses React's Context API for state management
- Provides a custom hook `useLanguage` for easy access
- Ideal for smaller applications

### Zustand Implementation

- Utilizes Zustand for state management
- Offers a more flexible and scalable solution
- Great for medium to large applications

### React-i18next Implementation

- Uses the standard react-i18next approach
- Provides access to all i18next features
- Recommended for projects requiring advanced i18n features

## 🌐 Available Routes

- `/` - Home page
- `/context` - Context API implementation demo
- `/zustand` - Zustand implementation demo
- `/i18next` - React-i18next implementation demo

## 🔧 Configuration

The i18n configuration can be found in `src/config/i18n.ts`. You can modify:

- Supported languages
- Default language
- Translation namespaces
- Detection options

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [YourGithub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React Team
- i18next Team
- Zustand Team
- TailwindCSS Team

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/i18n-demo](https://github.com/yourusername/i18n-demo)

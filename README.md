# React i18next Boilerplate

This is a boilerplate for React applications with internationalization (i18n) support using i18next. It's built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- React 18 with TypeScript
- Vite for fast development and building
- i18next for internationalization
- Tailwind CSS for styling
- Custom i18n context and hooks for easy language switching

## Getting Started

1. Clone the repository:

```bash
   git clone https://github.com/tcdtist/public-react-i18next-boilerplate.git
   cd public-react-i18next-boilerplate
```

2. Install dependencies:

```bash
   yarn
```

3. Start the development server:

```bash
   yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

- `/src/components`: React components
- `/src/configs/i18n`: Configuration files, including i18n setup
- `/src/configs/i18n/locales`: Contains translation files for different languages
- `/src/contexts/I18nProvider`: React context for i18n
- `/src/App.tsx`: Main application component
- `/src/main.tsx`: Entry point of the application

## Adding New Languages

1. Add a new folder in `/src/configs/i18n/locales` with the language code (e.g., `de` for German)
2. Create a `translation.json` file in the new folder
3. Add the new language to the `lngs` object in `LanguageDropdown.tsx`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT](LICENSE) License.

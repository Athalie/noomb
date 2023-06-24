import { Global, MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import medium from '../src/assets/fonts/Gilroy-Medium.ttf';
import App from './App';
import { store } from './redux/store';
import { defaultTheme } from './themes/defaultTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Global
          styles={[
            {
              '@font-face': {
                fontFamily: 'Gilroy',
                src: `url('${medium}')`,
              },
            },
          ]}
        />
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...defaultTheme, fontFamily: 'Gilroy' }}>
          <App />
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

import { Global, ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { Root } from '@/components/root';
import { configureStore, rootEpic } from '@/store';
import { baseLine } from '../styles';
import { theme } from '../theme';
import { Router } from './components';
import { browserHistory } from './utils';
import { profileAuthAction } from './features/auth/auth.actions';

const rootDomNode = document.getElementById('root');
const store = configureStore({ epic: rootEpic, middlewares: [] });
store.dispatch(profileAuthAction.started());

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootDomNode!);

root.render(
  <ThemeProvider theme={theme}>
    <Global styles={baseLine} />
    <Provider store={store}>
      <Router history={browserHistory}>
        <Root />
      </Router>
    </Provider>
  </ThemeProvider>,
);

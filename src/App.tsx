import React, {FC} from 'react';
import {StackNavigation} from './navigation';
import {ThemeProvider} from './contexts';

const App: FC = () => {
  return (
    <ThemeProvider>
      <StackNavigation />
    </ThemeProvider>
  );
};

export default App;

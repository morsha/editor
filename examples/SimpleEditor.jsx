// @flow
/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { hot } from 'react-hot-loader';
import {
  ArtiboxProvider,
  Editor,
} from '../src/index';

const styles = {
  wrapper: {
    width: '100%',
    margin: '32px auto',
    padding: 0,
    maxWidth: 720,
    height: '80vh',
  },
};

function SimpleEditor() {
  return (
    <ArtiboxProvider>
      <div style={styles.wrapper}>
        <Editor />
      </div>
    </ArtiboxProvider>
  );
}

export default hot(module)(SimpleEditor);

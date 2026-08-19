import React from 'react';
import { Box, Text } from 'folds';
import * as css from './styles.css';

export function AuthFooter() {
  return (
    <Box className={css.AuthFooter} justifyContent="Center" gap="400" wrap="Wrap">
      <Text
        as="a"
        size="T300"
        href="https://github.com/ajbura/cinny/releases"
        target="_blank"
        rel="noreferrer"
      >
        v4.12.6
      </Text>
    </Box>
  );
}

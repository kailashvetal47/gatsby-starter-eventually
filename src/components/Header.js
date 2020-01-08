import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>    
      <p>{config.subHeading}</p>
      <p><a href="https://geek.kv47.in">Blog</a></p>
    </header>
  );
}

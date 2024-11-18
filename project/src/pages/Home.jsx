import React from 'react';
import Hero from '../components/Hero';
import OrganizationsList from '../components/Organizations';

export default function Home() {
  return (
    <main>
      <Hero />
      <OrganizationsList />
    </main>
  );
}
import React from 'react';
import { fireEvent } from '@testing-library/dom';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('`About` component', () => {
  it('Test if \'About\'\'s title is rendered', () => {
    const { getByText, getByRole } = renderWithRouter(<App />);
    const aboutLink = getByText(/About/i);
    fireEvent.click(aboutLink);
    const title = getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();
    expect(getByText(/About Pokédex/i)).toBeInTheDocument();
  });

  it('Test \'About\'\'s image is rendered', () => {
    const { getByText, getByRole } = renderWithRouter(<App />);
    const aboutLink = getByText(/About/i);
    fireEvent.click(aboutLink);
    const pokedexImg = getByRole('img');
    expect(pokedexImg).toBeInTheDocument();
    expect(pokedexImg.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});

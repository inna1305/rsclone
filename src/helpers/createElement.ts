import { Attribute } from '../types/types';

const createElement = (
  tagName: string,
  attributes: Attribute,
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  textContent?: string
): HTMLElement => {
  const el: HTMLElement = document.createElement(tagName);

  for (const key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  if (textContent) el.textContent = textContent;
  return el;
};

export default createElement;
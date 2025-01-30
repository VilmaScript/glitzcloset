import { defineType } from 'sanity'; // Or wherever Sanity exports the defineType function
import { product } from '../schemas/product-schema';

export const schema = {
  types: [product],
};

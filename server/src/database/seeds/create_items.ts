import Knex from 'knex';

export async function seed(knex: Knex){
  console.log(typeof(knex));
  knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg'},
    { title: 'Lâmpadas', image: 'lampadas.svg'},
    { title: 'Lâmpadas', image: 'lampadas.svg'},
    { title: 'Lâmpadas', image: 'lampadas.svg'},
    { title: 'Lâmpadas', image: 'lampadas.svg'},
    { title: 'Lâmpadas', image: 'lampadas.svg'},
  ])
}
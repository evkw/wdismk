import { FiltersOneComponent } from './filters-one.component';

export default { title: 'Filter One' }

export const Collapsed = () => ({
  component: FiltersOneComponent,
  props: { isOpen: false }
});

export const Expanded = () => ({
  component: FiltersOneComponent,
  props: { isOpen: true }
});
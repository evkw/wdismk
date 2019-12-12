import { HeaderOneComponent } from './header-one.component';

export default { title: 'Header One' }

export const Collapsed = () => ({
  component: HeaderOneComponent,
  props: { isOpen: false }
});

export const Expanded = () => ({
  component: HeaderOneComponent,
  props: { isOpen: true }
});
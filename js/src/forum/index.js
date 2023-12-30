import app from 'flarum/forum/app';
import addIgnoreControls from './addIgnoreControls';
import addMarkAsReadControls from './addMarkAsReadControls';

app.initializers.add('ekumanov/flarum-add-menu-actions', () => {
  addMarkAsReadControls();
  addIgnoreControls();
});

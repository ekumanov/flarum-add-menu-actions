import app from 'flarum/forum/app';
import addIgnoreControls from './addIgnoreControls';

app.initializers.add('ekumanov/flarum-add-menu-actions', () => {
  addIgnoreControls();
});

Package.describe({
  name: "aldeed:delete-button",
  version: "2.0.1",
  summary: "Provides a delete button UI component",
  git: "https://github.com/aldeed/meteor-delete-button.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@2.5');
  api.use(['templating', 'mongo']);

  api.addFiles(['delete-button.html', 'delete-button.js'], 'client');
});

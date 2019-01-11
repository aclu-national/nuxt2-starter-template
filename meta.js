module.exports = {
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'Nuxt.js project'
    },
    author: {
      'type': 'string',
      'message': 'Author'
    },
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  # Update personal access token for aclu-vue-plugin library - see package.json\n  # Import font files from github.com/aclu-national/style\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  # Update personal access token for aclu-vue-plugin library - see package.json\n  # Import font files from github.com/aclu-national/style\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};


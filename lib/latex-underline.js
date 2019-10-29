const {
	CompositeDisposable
} = require('atom')

module.exports = {
	subscriptions: null,

	activate() {
		this.subscriptions = new CompositeDisposable()
		this.subscriptions.add(atom.commands.add('atom-workspace', {
			'latex-underline:underlining': () => this.underlining()
		}))
	},

	deactivate() {
		this.subscriptions.dispose()
	},

	underlining() {
		const editor = atom.workspace.getActiveTextEditor()
		const selection = editor.getSelectedText()
		if (editor) {
			editor.insertText('\\underline{' + selection + '}')
		}
	}
}

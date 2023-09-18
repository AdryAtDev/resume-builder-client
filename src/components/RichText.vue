<template>
	<div class="tiptap-wrapper simpleBorder" :class="{ complexBorder: typeOfToolbar == 'complex' }" style="">
		<div v-if="editor" id="editor-controls">
			<div v-if="typeOfToolbar == 'complex'" class="menubar">
				<Icon icon="octicon:bold-16" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" />

				<Icon icon="icon-park-outline:paragraph-break-two" @click="() => { editor.commands.enter(); editor.commands.enter(); editor.chain().focus(); } " />

				<Icon icon="lucide:heading-1" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-activate': editor.isActive('heading', { level: 1 }) }" />

				<Icon icon="lucide:heading-2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }" />

				<Icon icon="lucide:heading-3" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }" />

				<Icon icon="lucide:heading-4" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }" />

				<Icon icon="lucide:heading-5" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }" />

				<Icon icon="lucide:heading-6" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }" />
			</div>

			<div v-else class="menubar">
				<Icon icon="octicon:bold-16" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" />

				<Icon icon="icon-park-outline:paragraph-break-two" @click="() => { editor.commands.enter(); editor.commands.enter(); editor.chain().focus(); } " />
			</div>
		</div>

		<editor-content :editor="editor" class="editorContent" style="" />
		<div class="character-count" v-if="editor" style="margin-top: 1rem; display: flex; flex-direction: column; align-items: end;  ">
			<span style="">{{ editor.storage.characterCount.characters() }}/{{
				characterLimit
			}}
			{{ i18n.i18n.characterCount[app.locale] }}</span>
			<!-- <span> {{ editor.storage.characterCount.words() }} words </span> -->
		</div>
	</div>
</template>

<script>
import StarterKit from '@tiptap/starter-kit';
import { Editor, EditorContent } from '@tiptap/vue-3';
import CharacterCount from '@tiptap/extension-character-count';
import { useAppStore } from '@/stores/app.js';
import { useLayout1Store } from '@/stores/layout1.js';
import {Icon} from '@iconify/vue';

export default {
	components: {
		EditorContent,
		Icon
	},

	props: {
		modelValue: {
			type: String,
			default: '',
		},
		typeOfToolbar: {
			type: String,
		},
		characterLimit: {
			required: true,
		},
	},

	emits: ['update:modelValue'],

	data() {
		return {
			editor: null,
			i18n: useLayout1Store(),
			app: useAppStore(),
		};
	},

	watch: {
		modelValue(value) {
			// HTML
			const isSame = this.editor.getHTML() === value;
			// console.log('Same = ', isSame);

			// JSON
			// const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

			if (isSame) {
				return;
			}

			this.editor.commands.setContent(value, false);
		},
	},

	mounted() {
		this.editor = new Editor({
			extensions: [
				StarterKit,
				CharacterCount.configure({
					limit: this.characterLimit,
				}),
			],
			content: this.modelValue,
			onUpdate: () => {
				// HTML
				this.$emit('update:modelValue', this.editor.getHTML());
				// console.log('From Emit = ', this.editor.getHTML());

				// JSON
				// this.$emit('update:modelValue', this.editor.getJSON())
			},
		});
	},

	beforeUnmount() {
		this.editor.destroy();
	},
};
</script>

<style lang="scss" scoped>
.tiptap-wrapper {
	padding: 1rem;
	font-family: 'GothamBook', var(--fall-back-font-family) !important;
}

.complexBorder {
	border: 0.1rem solid #bcd1eb !important;
}

.simpleBorder {
	// border: 0.1rem solid var(--pastel-grey);
	border: 0.1rem solid #bcd1eb;
}

#editor-controls {
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	margin-bottom: 0.4rem;
	margin-left: -0.3rem;
	font-family: 'GothamBook', var(--fall-back-font-family) !important;
}

.editorContent {
	cursor: text;
	font-family: 'GothamBook', var(--fall-back-font-family) !important;
}

.menubar {
	display: flex;
	gap: 1rem;
	font-family: 'GothamBook', var(--fall-back-font-family) !important;
}
</style>

/**
 * @author Piso
 * @file Copys.js
 * @description 텍스트나 DOM을 클립보드에 복사하는 클래스
 */
import ClipboardJS from 'clipboard';

/**
 * @class Copys
 * @description 텍스트나 DOM을 클립보드에 복사하는 클래스
 */
export default class Copy {
	/**
	 * Create a Copy instance.
	 * @constructor
	 * @param {string} str - 클립보드나 DOM에 복사할 텍스트
	 */
	constructor(str, className) {
		this.str = str;
		this.copyClsname = className;
	}

	/**
	 * @method copyText
	 * @description 버튼에 적혀있는 텍스트를 클립보드에 복사하는 메소드입니다.
	 */
	copyText() {
		this.clipboard = new ClipboardJS('.' + this.copyClsname, {
			text: (trigger) => {
				console.log(this.str, trigger);
				return this.str;
			},
		});
		this.clipboard.on('success', () => {
			this.clipboard.destroy();
		});
		this.clipboard.on('error', () => {
			this.clipboard.destroy();
		});
	}

	copyDOM() {
		navigator.clipboard
			.write([
				new ClipboardItem({
					'text/html': new Blob([this.str.innerHTML], { type: 'text/html' }),
				}),
			])
			.then(() => {});
	}

	copyInnerHTML() {
		this.clipboard = new ClipboardJS('.' + this.copyClsname, {
			text: (trigger) => '{"ctype":"kve-clip-block","html":"' + trigger.innerHTML.replaceAll('"', '\\"') + '"}',
		});
		this.clipboard.on('success', () => {
			this.clipboard.destroy();
		});
		this.clipboard.on('error', () => {
			this.clipboard.destroy();
		});
	}
}

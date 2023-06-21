import ClipboardJS from "clipboard";

export default class Copy {
  constructor(str) {
    this.str = str;
  }

  copyText() {
    this.clipboard = new ClipboardJS(".copy-text-button", {
      text: () => this.str,
    });
    this.clipboard.on("success", () => {
      this.clipboard.destroy();
    });
    this.clipboard.on("error", () => {
      this.clipboard.destroy();
    });
  }
}

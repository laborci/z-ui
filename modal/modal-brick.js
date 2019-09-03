import Modal from "./modal";
import Brick from "zengular/core/brick";

export default class ModalBrick extends Brick {

	static createModal(parent = null) {
		let modal = new Modal();
		if (parent !== null) modal.parent = parent;

		return this.create('div', false)
		.then(brick => brick.initializeModal(modal))
		.then(()=>modal);
	};

	onShowModal(args) { this.render(args);}

	onCloseModal() {}

	initializeModal(modal) {
		modal.onShow = (args) => { this.onShowModal(args); };
		modal.onClose = () => { return this.onCloseModal(); };
		modal.body = this.root;
	}

}
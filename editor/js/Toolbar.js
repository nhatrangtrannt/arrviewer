import { UIPanel, UIButton, UICheckbox } from './libs/ui.js';
import { UIRow, UIInput, UIText, UISpan } from './libs/ui.js';

import { AddObjectCommand } from './commands/AddObjectCommand.js';

import { FontLoader } from '../../examples/jsm/loaders/FontLoader.js';

import { TextGeometry } from '../../examples/jsm/geometries/TextGeometry.js';

function Toolbar( editor ) {

	var signals = editor.signals;
	var strings = editor.strings;

	var container = new UIPanel();
	container.setId( 'toolbar' );

	// translate / rotate / scale

	var translateIcon = document.createElement( 'img' );
	translateIcon.title = strings.getKey( 'toolbar/translate' );
	translateIcon.src = 'images/translate.svg';

	var translate = new UIButton();
	translate.dom.className = 'Button selected';
	translate.dom.appendChild( translateIcon );
	translate.onClick( function () {

		signals.transformModeChanged.dispatch( 'translate' );

	} );
	container.add( translate );
	// EDIT TEXT
	var edittextIcon = document.createElement( 'img' );
	edittextIcon.title = strings.getKey( 'toolbar/edit' );
	edittextIcon.src = 'images/edittext.svg';

	var edit = new UIButton();
	edit.dom.appendChild( edittextIcon );
	edit.onClick( function () {
		
		let text;
		let ask = prompt("Please enter your text:", "Hello World");
		if (ask == null || ask == "") {
			text = "";
		} else {
			text = "" + ask + "";
			
			var loader = new FontLoader();

			loader.load( '../examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

				var geometry = new TextGeometry( text, {
					font: font,
					size: 1,
					height: 1
					
				} );
				var mesh = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial() );
				
				mesh.name = 'Text';
				editor.execute( new AddObjectCommand( editor, mesh ) );	
				
			} );
		}
	} );
	container.add( edit );

	var rotateIcon = document.createElement( 'img' );
	rotateIcon.title = strings.getKey( 'toolbar/rotate' );
	rotateIcon.src = 'images/rotate.svg';

	var rotate = new UIButton();
	rotate.dom.appendChild( rotateIcon );
	rotate.onClick( function () {

		signals.transformModeChanged.dispatch( 'rotate' );

	} );
	container.add( rotate );

	var scaleIcon = document.createElement( 'img' );
	scaleIcon.title = strings.getKey( 'toolbar/scale' );
	scaleIcon.src = 'images/scale.svg';

	var scale = new UIButton();
	scale.dom.appendChild( scaleIcon );
	scale.onClick( function () {

		signals.transformModeChanged.dispatch( 'scale' );

	} );
	container.add( scale );

	var local = new UICheckbox( false );
	local.dom.title = strings.getKey( 'toolbar/local' );
	local.onChange( function () {

		signals.spaceChanged.dispatch( this.getValue() === true ? 'local' : 'world' );

	} );
	container.add( local );

	//

	signals.transformModeChanged.add( function ( mode ) {

		translate.dom.classList.remove( 'selected' );
		rotate.dom.classList.remove( 'selected' );
		scale.dom.classList.remove( 'selected' );

		switch ( mode ) {

			case 'translate': translate.dom.classList.add( 'selected' ); break;
			case 'rotate': rotate.dom.classList.add( 'selected' ); break;
			case 'scale': scale.dom.classList.add( 'selected' ); break;

		}

	} );

	return container;

}

export { Toolbar };

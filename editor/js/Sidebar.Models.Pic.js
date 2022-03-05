import { UIPanel, UIText, UIRow, UIInput, UIHorizontalRule } from './libs/ui.js';
import * as THREE from '../../build/three.module.js';
import { AddObjectCommand } from './commands/AddObjectCommand.js';
import { GLTFLoader } from '../../examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from '../../examples/jsm/loaders/DRACOLoader.js';
import { zipSync, strToU8 } from '../../examples/jsm/libs/fflate.module.js';
import { SetSceneCommand } from './commands/SetSceneCommand.js';

import { LoaderUtils } from './LoaderUtils.js';

function SidebarModelsPic( editor ) {

	var strings = editor.strings;

	var config = editor.config;
	var signals = editor.signals;

	var container = new UIPanel();

	var headerRow = new UIRow();
	headerRow.add( new UIText( strings.getKey( 'sidebar/models/pic' ).toUpperCase() ) );
	container.add( headerRow );

	

/*	
    var imageRow = new UIRow();

    //var shortcutInput = new UIInput().setWidth( '15px' ).setFontSize( '12px' );
    //shortcutInput.setTextAlign( 'center' );
    //shortcutInput.setTextTransform( 'lowercase' );
    
    var edittextIcon = document.createElement( 'img' );
    //edittextIcon.title = strings.getKey( 'toolbar/edit' );
    edittextIcon.src = 'models/pic1.jpeg';

    var edittextIcon1 = document.createElement( 'img' );
    edittextIcon1.src = 'models/pic1.jpeg';

    imageRow.dom.appendChild( edittextIcon1 );
    
    

    imageRow.dom.appendChild( edittextIcon );

    imageRow.dom.addEventListener( 'click', function (event) {

        console.log("Hello there");
        //editor.loader.loadFile(edittextIcon.src);
        const loader = new GLTFLoader().setPath( 'models/fish/' );
        //loader.load( 'bird.glb', function ( gltf ) {
        loader.load(
            // resource URL
            'scene.gltf',
        
            // onLoad callback
            function ( data ) {
                // output the text to the console
                //console.log( data )
                editor.execute( new AddObjectCommand( editor, data.scene) );
            },
        );
    } );
*/
    var option = ['shiba','fish','dinosaur','desk','house','statue','sculpture'];
    var items = [
		{ title: 'models/shiba.png', file: 'models/shiba/', cate: 'animal' },
		{ title: 'models/dinosaur.png', file: 'models/dinosaur/', cate: 'animal' },
		{ title: 'models/desk.png', file: 'models/desk/', cate: 'architecture' },
		{ title: 'models/house.png', file: 'models/house/', cate: 'architecture' },
        { title: 'models/helicopter.png', file: 'models/helicopter/', cate: 'vehicle' },
        { title: 'models/police.png', file: 'models/police/', cate: 'vehicle' },
        { title: 'models/squid.png', file: 'models/squid/', cate: 'character' },
        { title: 'models/minion.png', file: 'models/minion/', cate: 'character' }

	];

	//var loader = new THREE.FileLoader();

	for ( var i = 0; i < items.length; i ++ ) {

		( function ( i ) {
            
            

			var item = items[ i ];

			var option = new UIRow();
            option.add( new UIText( item.cate ));

            var edittextIcon1 = document.createElement( 'img' );
            edittextIcon1.src = item.title;
            option.dom.appendChild( edittextIcon1 );

			option.onClick( function () {
                
                const loader = new GLTFLoader().setPath( item.file );
                loader.load(
                    // resource URL
                    //'scene.gltf',
                    'scene.gltf',
                
                    // onLoad callback
                    function ( data ) {
                        // output the text to the console
                        //console.log( data )
                        editor.execute( new AddObjectCommand( editor, data.scene) );
                    },
                );
				

				

			} );
			container.add(option);

		} )( i );

	}

    //container.add(imageRow);

    


	

	return container;

}

export { SidebarModelsPic };

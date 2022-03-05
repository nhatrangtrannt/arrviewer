import { UIPanel, UIRow, UISelect, UISpan, UIText } from './libs/ui.js';

import { SidebarModelsPic } from './Sidebar.Models.Pic.js';

function SidebarModels( editor ) {

	var config = editor.config;
	var strings = editor.strings;

	var container = new UISpan();

	var settings = new UIPanel();
	settings.setBorderTop( '0' );
	settings.setPaddingTop( '20px' );
	container.add( settings );
	container.add( new SidebarModelsPic( editor ) );

	return container;

}

export { SidebarModels };
